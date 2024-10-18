// src/App.jsx
import React from 'react';
import Status from "./Status";

function AvailableSection() {
    return (
        <section className="flex gap-px min-h-[300px]" id="description">
            <div className="cell-empty"></div>
            <div className="cell double main-svg">
            </div>
            <div className="cell">
                <Status/>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default AvailableSection;
