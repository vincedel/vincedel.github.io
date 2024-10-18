import {faBasketball, faFutbol, faGamepad} from "@fortawesome/free-solid-svg-icons";

export const hobbies = [
    {
        name: 'Basket',
        description: "Cette passion m'est venu durant mon adolescence, dans un premier temps via du loisir avec la famille et les amis puis ensuite en club durant 8 ans au poste d'ailier ou meneur. A cote de ca, je suis aussi la NBA depuis 2011 et principalement les Golden State Warriors.",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faBasketball,
            colorClass: 'bg-exotic'
        }
    },
    {
        name: 'Escalade',
        description: "Depuis peu (en 2023), je me suis mis à l'escalade principalement le bloc pour lequel j'y vais 2 à 3 fois par semaine. Ce que j'aime dans ce sport, c'est de se dépasser pour soit trouver la solution pour passer le bloc mais aussi se dépasser physiquement quand celle-ci le demande.",
        icon: {
            iconLibrary: 'fontawesome',
            icon: '',
            colorClass: 'bg-kashmir'
        }
    },
    {
        name: 'Football',
        description: "Issue d'une famille qui baigne dans le foot (mon père et mes frères le pratiquaient), je ne pouvais pas ne pas en faire, je l'ai pratiqué durant toute mon enfance, adolescence et une partie de ma vie d'adulte. J'ai repris depuis 2024 via le futsal qui est beaucoup mieux l'hiver !",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faFutbol,
            colorClass: 'bg-quepal'
        }
    },
    {
        name: 'Jeux-vidéos',
        description: "Civilization, Cruisader King 3, Heroes Might and Magic (le 3 bien sur) sont le genre de jeu auxquelle je joue, je joue principalement à des jeux de stratégies, de construction plutot au tour par tour. J'aime aussi les jeux comme Rainbow Six Siege et Rocket League.",
        icon: {
            iconLibrary: 'fontawesome',
            icon: faGamepad,
            colorClass: 'bg-sanguine'
        }
    }
]