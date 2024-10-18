// src/App.jsx
import React from 'react';
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {available} from "../../../../data/status"

function Status() {
    let status = "Disponible";
    let icon = (<FontAwesomeIcon icon={faCheck}/>);
    let iconClass = "available"

    if (!available) {
        icon = (<FontAwesomeIcon icon={faXmark}/>);
        iconClass = "unavailable"
        status = "Indisponible";
    }

    return (
        <div className="flex justify-between status-pill items-center">
            <span className="text-lg">{status}</span>
            <div className={"flex items-center justify-center text-lg status-pill-icon " + iconClass}>
                {icon}
            </div>
        </div>
    );
}

export default Status;
