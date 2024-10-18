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
                className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >
                {props.beginDate.toLocaleString('default', { year: "numeric" })}
            </time>
            <time dateTime={props.endDate.toLocaleString('default', { year: "numeric" })} className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                 - {props.endDate.toLocaleString('default', { year: "numeric" })}
            </time>
            <h3>{props.title}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {props.school} - {props.year}
            </p>
        </li>
    );
}

export default TrainingItem;
