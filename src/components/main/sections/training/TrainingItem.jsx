// src/App.jsx
import React from 'react';

function TrainingItem(props) {
    return (
        <li className="mb-10 ms-4">
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-main-color"
            ></div>
            <time
                dateTime={props.beginDate.toLocaleString('default', { year: "numeric" })}
                className="mb-1 text-sm font-normal leading-none"
            >
                {props.beginDate.toLocaleString('default', { year: "numeric" })}
            </time>
            <time
                dateTime={props.endDate.toLocaleString('default', { year: "numeric" })}
                className="mb-1 text-sm font-normal leading-none"
            >
                 - {props.endDate.toLocaleString('default', { year: "numeric" })}
            </time>
            <h3>{props.title}</h3>
            <p className="mb-4 text-base font-normal">
                {props.school} - {props.year}
            </p>
        </li>
    );
}

export default TrainingItem;
