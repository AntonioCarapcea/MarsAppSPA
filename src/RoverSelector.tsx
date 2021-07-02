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

export function RoverSelector() {
    // eslint-disable-next-line
    const [rovers, SetRovers] = useState<Rover[]>([] as Rover[]);
    const [roverOptions, SetRoverOptions] = useState<RoverOption[]>([] as RoverOption[]);


    useEffect(() => {
        const path = "http://localhost:8000/rovers";
        axios.get<RoverResponse>(path)
            .then(response =>
                {
                    console.log(response.data.rovers);
                   
                    let newRoverOptions : RoverOption[] = [];

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

    function handleRoverSelect(e : any) {
        console.log(e);
    }

    return (
        <div className="DivSelect">
            <Select options={roverOptions} onChange={handleRoverSelect}/>
        </div>
    );
}