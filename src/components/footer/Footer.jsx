// src/App.jsx
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";


function Footer(props) {
    return (
        <footer className="flex flex-col gap-px">
            <section className="flex gap-px skills">
                <div className="cell-empty"></div>
                <div className="cell cell-title px-10 py-5 flex-col">
                    <p>
                        Copyright <FontAwesomeIcon icon={faCopyright}/> Vincent Delevoye
                    </p>
                </div>
                <div className="cell-empty"></div>
            </section>
        </footer>
    );
}

export default Footer;
