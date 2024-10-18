// src/App.jsx
import React from 'react';
import DescriptionSection from "./sections/description/DescriptionSection";
import AvailableSection from "./sections/available/AvailableSection";
import AboutSection from "./sections/about/AboutSection";
import { experiences } from "./../../data/experiences"
import { hobbies } from "./../../data/hobbies"
import ExperienceSection from "./sections/experience/ExperienceSection";
import TitleSection from "../common/TitleSection";
import TrainingSection from "./sections/training/TrainingSection";
import SkillSection from "./sections/skill/SkillSection";
import HobbySection from "./sections/hobby/HobbySection";

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
            <TitleSection id="training" title="Mes formations" />
            <TrainingSection/>
            <TitleSection id="competences" title="Mes compétences" />
            <SkillSection/>
            <TitleSection id="hobbies" title="Mes loisirs" />
            {hobbies.map((hobby, index) => {
                return (
                    <HobbySection {...hobby} />
                )
            })}
        </main>
    );
}

export default Main;
