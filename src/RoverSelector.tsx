import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';
import { RoverImages, RoverImagesProps, RoverImagesDefaultProps } from './RoverImages';

import './App.scss';

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Camera[];
}

export interface RoverResponse {
    rovers: Rover[];
}

interface RoverOption {
    label: string;
    value: Rover;
}
// eslint-disable-next-line
interface CameraOption {
    label: string;
    value: Camera;
}

export function RoverSelector() {
    // eslint-disable-next-line
    const [rovers, SetRovers] = useState<Rover[]>([] as Rover[]);
    const [roverOptions, SetRoverOptions] = useState<RoverOption[]>([] as RoverOption[]);
    // eslint-disable-next-line
    const [cameraOptions, SetCameraOptions] = useState<CameraOption[]>([] as CameraOption[]);
    // eslint-disable-next-line
    const [sol, SetSol] = useState<number>(0);
    const [selectedRover, SetSelectedRover] = useState<string>("");
    const [selectedCamera, SetSelectedCamera] = useState<string>("");
    const [showFlag, SetShowFlag] = useState<boolean>(false);
    const [imgProps, SetImgProps] = useState<RoverImagesProps>(RoverImagesDefaultProps);

    useEffect(() => {
        const path = "http://localhost:8000/rovers";
        axios.get<RoverResponse>(path)
            .then(response => {
                console.log(response.data.rovers);

                let newRoverOptions: RoverOption[] = [];

                for (let rover of response.data.rovers) {
                    newRoverOptions.push({
                        label: rover.name,
                        value: rover
                    })
                }

                SetRovers(response.data.rovers);
                SetRoverOptions(newRoverOptions);
            }
            )
            .catch(err => console.log(err));
    }, []);

    function HandleRoverSelect(e: RoverOption | RoverOption[] | null) {
        const option = e as RoverOption;
        const rover = option.value;
        const cameras = rover.cameras;
        let newCameraOptions: CameraOption[] = [];

        for (let camera of cameras) {
            newCameraOptions.push({
                label: camera.full_name,
                value: camera
            });
        }

        SetCameraOptions(newCameraOptions);
        SetSelectedRover(rover.name);
    }

    function HandleSolChange(e : React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.currentTarget.value);
  
        SetSol(value);
    }

    function HandleCameraSelect(e: CameraOption | CameraOption[] | null) {
        const option = e as CameraOption;
        const camera = option.value;

        SetSelectedCamera(camera.name);
    }

    function Submit() {
        let newImgProps = {
            rover: selectedRover,
            camera: selectedCamera,
            sol : sol
        };

        SetShowFlag(true);
        SetImgProps(newImgProps);
    }

    return (
        <div className="DivSelectContainer">
            <p>
                Select the rover:
            </p>
            <div className="DivSelect">
                <Select options={roverOptions} onChange={HandleRoverSelect} />
            </div>
            <p>
                Select the camera type:
            </p>
            <div className="DivSelect">
                <Select options={cameraOptions} onChange={HandleCameraSelect}/>
            </div>
            <div className="DivSelect">
                <form>
                    <label>
                        <p>
                            Select the Sol:
                        </p>
                        <input type="number" name="Sol" onChange={HandleSolChange}>
                        </input>
                    </label>
                </form>
            </div>
            <p>

            </p>
            <div className="DivSelect">
                <button onClick={Submit}>
                    Search photos
                </button>
            </div>
            <div>
                {showFlag && <RoverImages rover={imgProps.rover} camera={imgProps?.camera} sol={imgProps.sol}/>}
            </div>
        </div>

    );
}