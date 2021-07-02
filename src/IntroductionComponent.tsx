import React from 'react';
import './App.scss';


export interface IntroductionProps {
    divClassName: string,
    imgSrc: string,
    imgAlt: string,
    imgClassName: string,
    h1Contents: string,
    p1Contents: string,
    p2Contents: string
    href: string,
    hrefContents: string,
    hrefClassName: string
}

export function IntroductionComponent(props: IntroductionProps) {
    return (
        <div className={props.divClassName}>
            <img src={props.imgSrc} className={props.imgClassName} alt={props.imgAlt} />
            <h1>
                {props.h1Contents}
            </h1>
            <p>
                {props.p1Contents}
            </p>
            <p>
                {props.p2Contents}
            </p>
            <a href={props.href} className={props.hrefClassName}>
                {props.hrefContents}
            </a>
            <p></p>
        </div>);
}
