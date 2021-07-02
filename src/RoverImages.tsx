import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface RoverImagesProps {
    rover: string,
    camera: string,
    sol: number

};
export const RoverImagesDefaultProps = {
    rover: "",
    camera: "",
    sol: 0
}

export interface Photo {
    id: number,
    img_src: string,
    earth_date: string
}

export interface PhotosResponse {
    photos: Photo[]
}

export function RoverImages(props : RoverImagesProps) {
    const [photos, SetPhotos] = useState<Photo[]>([] as Photo[]);

    useEffect(() => {
        const path = "http://localhost:8000/rovers/" + props.rover + "/photos/" + props.camera + "/" + props.sol;
        axios.get<PhotosResponse>(path)
            .then(response => {
            SetPhotos(response.data.photos.slice(0, 5));
        })
    }, [props]);

    function MakePhoto(photo : Photo) {
        return (
            <div>
            <img src={photo.img_src}/>
            </div>
        )
    }

    return (
       <div>
           {photos.map(MakePhoto)}
       </div>
    )   
}