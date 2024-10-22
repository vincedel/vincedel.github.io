import React from 'react';
import { faSymfony, faVuejs, faDocker, faBitbucket, faGoogle, faWordpress, faJenkins } from "@fortawesome/free-brands-svg-icons";
import {PrestashopIcon} from "../icons/PrestashopIcon";

export const skills = [
    {
        name: 'Symfony',
        iconLibrary: 'fontawesome',
        icon: faSymfony,
        colorClass: 'bg-green-beach'
    },
    {
        name: 'Prestashop',
        iconLibrary: 'custom',
        icon: (<PrestashopIcon/>),
        colorClass: 'bg-no-mans'
    },
    {
        name: 'VueJS',
        iconLibrary: 'fontawesome',
        icon: faVuejs,
        colorClass: 'bg-orbit'
    },
    {
        name: 'Docker',
        iconLibrary: 'fontawesome',
        icon: faDocker,
        colorClass: 'bg-toxic'
    },
    {
        name: 'Bitbucket Pipeline',
        iconLibrary: 'fontawesome',
        icon: faBitbucket,
        colorClass: 'bg-exotic'
    },
    {
        name: 'Google Cloud',
        iconLibrary: 'fontawesome',
        icon: faGoogle,
        colorClass: 'bg-antarctica'
    },
    {
        name: 'Wordpress',
        iconLibrary: 'fontawesome',
        icon: faWordpress,
        colorClass: 'bg-sweet-morning'
    }
]