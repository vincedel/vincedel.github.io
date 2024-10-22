// src/App.jsx
import React from 'react';
import ExperienceDescription from "./ExperienceDescription";
import ExperienceTechno from "./ExperienceTechno";

function ExperienceSection(props) {
    const defaultClasses = ['cell', 'padding-40px', 'flex-col']
    let col1Classes = [...defaultClasses, 'double'];
    let col2Classes = [...defaultClasses];

    return (
        <section className="flex gap-px experience">
            <div className="cell-empty"></div>
            <div className={col1Classes.join(' ')}>
                <ExperienceDescription {...props} />
            </div>
            <div className={col2Classes.join(' ')}>
                <ExperienceTechno {...props} />
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default ExperienceSection;
