import React from 'react';
import {faBasketball, faFutbol, faGamepad} from "@fortawesome/free-solid-svg-icons";
import {ClimbIcon} from "../icons/ClimbIcon";

export const hobbies = [
    {
        name: 'Basket',
        description:
            "Cette passion m'est venue durant mon adolescence, d'abord à travers des moments de loisir avec la famille et les amis, puis ensuite en club pendant 8 ans au poste d'ailier ou de meneur. À côté de ça, je suis également la NBA depuis 2011, principalement les Golden State Warriors.",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faBasketball,
            colorClass: 'bg-exotic'
        }
    },
    {
        name: 'Escalade',
        description:
            "Depuis peu (en 2023), je me suis mis à l'escalade, principalement au bloc, que je pratique 2 à 3 fois par semaine. Ce que j'aime dans ce sport, c'est de me dépasser pour trouver la solution permettant de passer un bloc, mais aussi de me dépasser physiquement quand cela est nécessaire.",
        icon: {
            iconLibrary: 'custom',
            icon: (<ClimbIcon/>),
            colorClass: 'bg-kashmir'
        }
    },
    {
        name: 'Football',
        description:
            "Issue d'une famille qui baigne dans le football (mon père et mes frères le pratiquaient), je ne pouvais pas ne pas en faire. Je l'ai pratiqué durant toute mon enfance, mon adolescence, et une partie de ma vie d'adulte. J'ai repris en 2024 via le futsal, qui est bien plus confortable en hiver !",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faFutbol,
            colorClass: 'bg-quepal'
        }
    },
    {
        name: 'Jeux-vidéos',
        description:
            "Civilization, Crusader Kings 3, Heroes of Might and Magic (le 3, bien sûr) sont le genre de jeux auxquels je joue. Je joue principalement à des jeux de stratégie et de construction, plutôt au tour par tour. J'aime aussi des jeux comme Rainbow Six Siege et Rocket League.",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faGamepad,
            colorClass: 'bg-sanguine'
        }
    }
]