// src/App.jsx
import React from 'react';
import DescriptionSection from "./sections/description/DescriptionSection";
import AvailableSection from "./sections/available/AvailableSection";
import AboutSection from "./sections/about/AboutSection";
import { experiences } from "./../../data/experiences"
import ExperienceSection from "./sections/experience/ExperienceSection";
import TitleSection from "../common/TitleSection";
import FormationSection from "./sections/formation/FormationSection";

function Main() {
    return (
        <main className="flex flex-col gap-px">
            <DescriptionSection/>
            <AvailableSection/>
            <AboutSection/>
            <TitleSection id="experiences" title="Mes expériences" />
            {experiences.map((experience, index) => {
                return (
                    <ExperienceSection {...experience} index={index}/>
                )
            })}
            <TitleSection id="formations" title="Mes formations" />
            <FormationSection/>
        </main>
    );
}

export default Main;
