// src/App.jsx
import React from 'react';
import {skills} from "../../../../data/skills";
import TechnoBadge from "../../../common/TechnoBadge";

function SkillSection() {
    return (
        <section className="flex gap-px skills">
            <div className="cell-empty"></div>
            <div className="cell cell-title padding-40px flex-col">
                <div className="flex flex-wrap gap-8">
                    {skills.map((skill) => {
                        return (
                            <div className="skills-badge-container">
                                <TechnoBadge {...skill} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default SkillSection;
