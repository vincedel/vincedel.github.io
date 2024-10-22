import { faSymfony, faVuejs, faDocker, faBitbucket, faGoogle, faWordpress, faJenkins } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import {BehatIcon} from "../icons/BehatIcon";
import {SonarqubeIcon} from "../icons/SonarqubeIcon";
import {PrestashopIcon} from "../icons/PrestashopIcon";

export const experiences = [
  {
    company: "World Sellers",
    beginDate: new Date(2018, 9, 1),
    endDate: new Date(2024, 8, 2),
    positionHeld: "Développeur Web",
    contractType: "Alternance / CDI",
    city: "Roubaix",
    description: (
        <React.Fragment>
          <p>J’ai effectué mon alternance, suivie de cinq ans en tant que développeur web, avant de devenir Lead Tech
            sur deux projets :</p>
          <ol>
            <li>
              Le premier est un projet de factory pour une marque de e-retail utilisant Prestashop. Ce projet
              comprenait la gestion de 13 sites dans différents pays et différentes langues. Mon rôle consistait à :
              <ul>
                <li>développer des modules Prestashop,</li>
                <li>proposer des solutions techniques répondant aux besoins du client,</li>
                <li>interagir avec ce dernier ainsi qu'avec des entreprises tierces (développeurs de modules,
                  entreprises de livraison, etc.).
                </li>
              </ul>
              Parmi les développements les plus importants réalisés, on compte :
              <ul>
                <li>un système de fidélité,</li>
                <li>un système de gestion de formation,</li>
                <li>l'intégration d'Apple Pay,</li>
                <li>un système de multishipping.</li>
              </ul>
            </li>
            <li>
              Le deuxième est un projet interne. L'objectif de cette application était de simplifier la gestion de nos
              factories à travers une interface web. Par exemple, elle permettait de mieux gérer les catalogues
              produits de nos clients, évitant ainsi le recours aux fichiers CSV et à l'utilisation de Talend.<br/>
              Pour ce projet, nous avons opté pour Symfony et API Platform pour l'API, et VueJS pour le front-end.
              J'ai été chargé de répondre aux besoins métier par des solutions techniques adaptées et de mettre en
              place l'intégration et le déploiement continus (CI/CD) via Docker, Bitbucket Pipelines et GCP (Cloud
              Run, Artifact Registry, Secret Manager, etc.).
            </li>
          </ol>
          <p>J'ai également eu à travailler pour le site Tipik, qui est une entreprise interne au groupe AFM
            (Association Familiale Mulliez). Le site sur lequel je travaillais permet de créer des passerelles entre
            les différentes enseignes et talents afin de se former, compléter son temps de travail, changer de
            travail, etc. Je travaillais sur la partie backend, qui repose sur Symfony et API Platform.</p>
        </React.Fragment>
    ),
    technos: [
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
      }
    ]
  },
  {
    company: "Netvigie",
    beginDate: new Date(2017, 9, 1),
    endDate: new Date(2018, 7, 2),
    positionHeld: "Développeur Web",
    contractType: "Stage",
    city: "Villeneuve d'Ascq",
    description: (
        <p>
          Développement sur le projet Seenaptic, dont l'objectif était de
          contrôler le tag management et d'assurer la fiabilité des
          données Analytics. Le projet, développé sous Symfony 3, j’avais
          pour mission principale le développement de nouvelles
          fonctionnalités.
        </p>
    ),
    technos: [
      {
        name: 'Symfony',
        iconLibrary: 'fontawesome',
        icon: faSymfony,
        colorClass: 'bg-quepal'
      }
    ]
  },
  {
    company: "A Life Worldwide",
    beginDate: new Date(2017, 6, 1),
    endDate: new Date(2017, 8, 2),
    positionHeld: "Développeur Web",
    contractType: "Stage",
    city: "Villeneuve d'Ascq",
    description: (
        <p>
          Reprise et modifications des sites <a target="_blank"
                                                href="https://ma-boutique-club.com">ma-boutique-club.com</a> et <a
            target="_blank" href="https://alw-shop.fr">alw-shop.fr</a>
        </p>
    ),
    technos: [
      {
        name: 'Wordpress',
        iconLibrary: 'fontawesome',
        icon: faWordpress,
        colorClass: 'bg-sweet-morning'
      }
    ]
  },
  {
    company: "Décathlon Services",
    beginDate: new Date(2015, 7, 1),
    endDate: new Date(2015, 9, 2),
    positionHeld: "Développeur Web",
    contractType: "Stage",
    city: "Lille",
    description: (
        <p>
          Plateforme en ligne permettant aux utilisateurs de revendre ou
          d'échanger leurs équipements sportifs d'occasion. Ma mission
          principale sur le projet Trocathlon a été la création de tests
          Behat, la configuration de jobs Jenkins et le refactoring via
          SonarQube.
        </p>
    ),
    technos: [
      {
        name: 'Symfony',
        iconLibrary: 'fontawesome',
        icon: faSymfony,
        colorClass: 'bg-bloody-mary'
      },
      {
        name: 'Behat',
        iconLibrary: 'custom',
        icon: (<BehatIcon/>),
        colorClass: 'bg-green-beach'
      },
      {
        name: 'Jenkins',
        iconLibrary: 'fontawesome',
        icon: faJenkins,
        colorClass: 'bg-piglet'
      },
      {
        name: 'SonarQube',
        iconLibrary: 'custom',
        icon: (<SonarqubeIcon/>),
        colorClass: 'bg-luscious-lime'
      }
    ]
  }
]