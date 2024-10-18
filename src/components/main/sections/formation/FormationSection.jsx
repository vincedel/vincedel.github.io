// src/App.jsx
import React from 'react';
import { formations } from "./../../../../data/formations"
import FormationItem from "./FormationItem";

function FormationSection() {
    return (
        <section className="flex gap-px formations">
            <div className="cell-empty"></div>
            <div className="cell cell-title padding-40px flex-col">
                <ol className="relative border-s border-main-grey">
                    {formations.map((formation) => {
                        return (
                            <FormationItem {...formation} />
                        );
                    })}
                </ol>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default FormationSection;
