import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface PODResponse {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

const defaultResponse : PODResponse = {
    copyright: "none",
    date: "none",
    explanation: "none",
    hdurl: "none",
    media_type: "none",
    service_version: "none",
    title: "none",
    url: "none"
}



export function PictureOfTheDay() {
    const [pic, SetPic] = useState<PODResponse>(defaultResponse);

    useEffect(() => {
        const path = "https://api.nasa.gov/planetary/apod?api_key=ItJ5c6aOpEVcaRRcO7KsXeBSRFaLzuDWWSxe5Ce9";
        axios.get<PODResponse>(path)
            .then(response => {
               const newPic = response.data;
               SetPic(newPic)
            }
            )
            .catch(err => console.log(err));
    }, []);


    return (
        <div className="DivImg"> 
            <p>
                {pic.title}
            </p>
            <img src={pic.url} className="RoverImg"></img>
            <p></p>
        </div>
    )

}