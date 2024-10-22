// src/App.jsx
import React from 'react';
import StatusPill from "./StatusPill";

function Status() {
    return (
        <div className="flex flex-wrap flex-col	justify-between	padding-40px w-full">
            <h3>A l'écoute du marcher</h3>
            <StatusPill/>
        </div>
    );
}

export default Status;
