// src/App.jsx
import React from 'react';

function getDateDifference(beginDate, endDate) {
    let years = endDate.getFullYear() - beginDate.getFullYear();
    let months = endDate.getMonth() - beginDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    let result = [];

    if (years > 0) {
        result.push(`${years} an${years > 1 ? 's' : ''}`);
    }

    if (months > 0) {
        result.push(`${months} mois`);
    }

    return result.length > 1 ? result.join(' et ') : result.join('');
}

function ExperienceDescription(props) {
    const beginDateAsString = props.beginDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    const endDateAsString = props.endDate.toLocaleString('default', { month: 'short', year: 'numeric' });


    return (
        <div>
            <div className="flex flex-row items-center experience-title">
                <h3 className="inline">{props.company}</h3>
                <span className="text-lg ">{props.city} - {beginDateAsString} / {endDateAsString} ({getDateDifference(props.beginDate, props.endDate)})</span>
            </div>

            <div>
                <div className="flex justify-between mb-4 mt-4">
                    <p>Poste: {props.positionHeld}</p>
                    <p>Type de contrat: {props.contractType}</p>
                </div>
                <h3>Description</h3>
                {props.description}
            </div>
        </div>
    );
}

export default ExperienceDescription;
