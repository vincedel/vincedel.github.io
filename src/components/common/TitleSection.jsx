// src/App.jsx
import React from 'react';

function TitleSection(props) {
    return (
        <section className="flex gap-px" id={props.id}>
            <div className="cell-empty"></div>
            <div className="cell cell-title padding-40px flex-col main-svg">
                <h2 className="text-6xl uppercase">{props.title}</h2>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default TitleSection;
