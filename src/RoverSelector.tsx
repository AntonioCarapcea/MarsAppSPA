import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';

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

    function handleRoverSelect(e: RoverOption | RoverOption[] | null) {
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
    }

    return (
        <div className="DivSelectContainer">
            <p>
                Select the rover:
            </p>
            <div className="DivSelect">
                <Select options={roverOptions} onChange={handleRoverSelect} />
            </div>
            <p>
                Select the camera type:
            </p>
            <div className="DivSelect">
                <Select options={cameraOptions} />
            </div>
        </div>

    );
}