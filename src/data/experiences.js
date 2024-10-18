import { faSymfony, faVuejs, faDocker, faBitbucket, faGoogle, faWordpress, faJenkins } from "@fortawesome/free-brands-svg-icons";

export const experiences = [
  {
    company: "World Sellers",
    beginDate: new Date(2018, 9, 1),
    endDate: new Date(2024, 8, 2),
    positionHeld: "Développeur Web",
    contractType: "Alternance / CDI",
    city: "Roubaix",
    description: "",
    technos: [
      {
        name: 'Symfony',
        iconLibrary: 'fontawesome',
        icon: faSymfony,
        colorClass: 'bg-green-beach'
      },
      {
        name: 'Prestashop',
        iconLibrary: '',
        icon: '',
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
    description: "",
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
    description: "",
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
    description: "",
    technos: [
      {
        name: 'Symfony',
        iconLibrary: 'fontawesome',
        icon: faSymfony,
        colorClass: 'bg-bloody-mary'
      },
      {
        name: 'Behat',
        iconLibrary: '',
        icon: '',
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
        iconLibrary: '',
        icon: '',
        colorClass: 'bg-luscious-lime'
      }
    ]
  }
]