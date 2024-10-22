// src/App.jsx
import React from 'react';
import { trainings } from "./../../../../data/trainings"
import TrainingItem from "./TrainingItem";

function TrainingSection() {
    return (
        <section className="flex gap-px training">
            <div className="cell-empty"></div>
            <div className="cell cell-title padding-40px flex-col">
                <ol className="relative border-s border-main-grey">
                    {trainings.map((training) => {
                        return (
                            <TrainingItem {...training} />
                        );
                    })}
                </ol>
            </div>
            <div className="cell-empty"></div>
        </section>
    );
}

export default TrainingSection;
