// src/App.jsx
import React from 'react';
import TechnoBadge from "../../../common/TechnoBadge";

function HobbySection(props) {
    return (
        <section className="flex gap-px hobbies">
            <div className="cell-empty"></div>
            <div className="cell cell-title padding-40px flex-row">
                <div className="hobbies-badge-content">
                    <TechnoBadge {...props.icon} />
                </div>
                <div className="ml-8 flex flex-col">
                    <h3 className="mb-4">{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default HobbySection;
