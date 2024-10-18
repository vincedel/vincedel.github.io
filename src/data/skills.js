import {
    faCss3,
    faDocker, faGit, faGoogle,
    faHtml5,
    faJenkins,
    faJs,
    faLinux,
    faPhp,
    faSymfony,
    faVuejs
} from "@fortawesome/free-brands-svg-icons";
import {faArrowsSpin, faInfinity} from "@fortawesome/free-solid-svg-icons";

export const skills = [
    {
        title: 'Développement web et base de données',
        skills: [
            { label: "HTML", icon: faHtml5 },
            { label: "CSS", icon: faCss3 },
            { label: "JavaScript", icon: faJs },
            { label: "VueJS", icon: faVuejs },
            { label: "PHP", icon: faPhp },
            { label: "Symfony", icon: faSymfony },
            { label: "Prestashop" },
            { label: "MySql" },
            { label: "PostgreSQL" },
            { label: "Elasticsearch" }
        ]
    },
    {
        title: 'Administration de serveur',
        skills: [
            { label: "Linux", icon: faLinux },
            { label: "Docker", icon: faDocker },
            { label: "Jenkins", icon: faJenkins },
            { label: "SonarQube" },
            { label: "CI / CD", icon: faInfinity },
            { label: "GCloud", icon: faGoogle }
        ]
    },
    {
        title: 'Autre',
        skills: [
            { label: "Photoshop" },
            { label: "Méthodologie Agile", icon: faArrowsSpin },
            { label: "Git", icon: faGit }
        ]
    },
]