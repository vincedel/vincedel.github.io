// src/App.jsx
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LinkButton(props) {
    return (
        <a href={props.link} target="_blank" className="link-button">
            {props.label}
            <span className="link-button-icons">
                <FontAwesomeIcon className="text-2xl" icon={props.icon}/>
                <FontAwesomeIcon className="text-2xl text-main-color" icon={props.icon}/>
            </span>
        </a>
    );
}

export default LinkButton;
