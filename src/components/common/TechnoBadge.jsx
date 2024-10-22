import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TechnoBadge(props) {
    let icon;
    let badgeClasses = ["techno-badge"]
    badgeClasses.push(props.colorClass);

    if (props.iconLibrary == 'fontawesome') {
        icon = <FontAwesomeIcon icon={props.icon}/>
    } else if (props.iconLibrary == 'custom') {
        icon = props.icon
    }

    return (
        <div className={badgeClasses.join(' ')}>
            <div className="techno-badge-icon-container">
                {icon}
            </div>
            {
                props.name ?
                    (
                        <div className="techno-badge-label">
                            {props.name}
                        </div>
                    )
                    : ''
            }

        </div>
    )
        ;
}


export default TechnoBadge;
