// src/App.jsx
import React from 'react';
import LinkButton from "../../../common/LinkButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function getAge() {
    const birthDate = new Date(1995, 10, 28);
    var ageDifMs = Date.now() - birthDate;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function AboutSection() {


    return (
        <section className="flex gap-px" id="about">
            <div className="cell-empty"></div>
            <div className="cell double flex-col padding-40px">
                <h3 className="mb-4">A propos</h3>
                <ul>
                    <li>Vincent Delevoye</li>
                    <li>Age: {getAge()}</li>
                    <li>Email: vincentdelevoye@gmail.com</li>
                    <li>Permis B + voiture</li>
                </ul>
            </div>
            <div className="cell flex-col padding-40px">
                <h3 className="mb-4">Social</h3>
                <LinkButton label="GitHub" link="https://github.com/vincedel" icon={faGithub} />
                <LinkButton label="Linkedin" link="https://fr.linkedin.com/in/vincent-delevoye-809a35127" icon={faLinkedin} />
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default AboutSection;
