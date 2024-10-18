// src/App.jsx
import React from 'react';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SwitchThemeColor(props) {
    const theme = 'light';
    let icon = faSun

    if (theme == 'dark') {
        icon = faMoon
    }

    return (
        <button className="text-lg font-body">
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default SwitchThemeColor;
