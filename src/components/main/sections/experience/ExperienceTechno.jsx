import React from 'react';
import TechnoBadge from "../../../common/TechnoBadge";

function ExperienceTechno(props) {

    return (
        <div>
            <h3>Technos</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-6 mt-4">
                {props.technos.map((techno) => {
                    return (
                        <TechnoBadge {...techno} />
                    )
                })}
            </div>
        </div>
    );
}

export default ExperienceTechno;
