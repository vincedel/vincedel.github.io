// src/App.jsx
import React from 'react';

function DescriptionSection() {
    return (
        <section className="flex gap-px min-h-[300px]" id="description">
            <div className="cell-empty"></div>
            <div className="cell double items-center padding-40px">
                <h1 className="text-8xl uppercase">Développeur <strong className="block">Web</strong></h1>
            </div>
            <div className="cell main-svg">
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default DescriptionSection;
