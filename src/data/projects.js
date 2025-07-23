export const projects = [
  {
    id: 1,
    title: 'LFL Companion',
    description: 'Application mobile de scoring pour la LFL (League of Legends Championship) avec gestion d\'équipes et statistiques.',
    longDescription: 'Application mobile native développée en Kotlin pour le scoring en temps réel des matchs de la LFL. Interface moderne avec thème sombre, architecture MVVM, et intégration d\'APIs pour les statistiques des équipes et joueurs.',
    image: '/images/projects/lfl/screen1.png',
    images: [
      '/images/projects/lfl/screen1.png',
      '/images/projects/lfl/screen2.png', 
      '/images/projects/lfl/screen3.png',
      '/images/projects/lfl/screen4.png'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'MockK', 'Retrofit', 'Material Design'],
    category: 'mobile',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: null,
    githubUrl: 'https://github.com/username/lfl-companion',
    challenges: [
      'Optimisation des performances pour le scoring temps réel',
      'Architecture Model-View-ViewModel (MVVM) pour une séparation claire',
      'Intégration d\'APIs externes pour les données des équipes',
      'Design system cohérent avec Material Design'
    ],
    features: [
      'Scoring en temps réel des matchs',
      'Gestion des équipes et joueurs',
      'Statistiques détaillées et graphiques',
      'Interface utilisateur moderne avec thème sombre',
      'Architecture MVVM robuste',
      'Tests unitaires avec MockK',
      'Intégration API avec Retrofit',
      'Navigation fluide entre les écrans'
    ]
  },
  {
    id: 2,
    title: 'VALORANK',
    description: 'Application mobile pour suivre les tournois et statistiques Valorant esports avec classements et équipes favorites.',
    longDescription: 'VALORANK est une application mobile développée en Kotlin pour streamliner l\'expérience de suivi des tournois Valorant esports. Elle offre la possibilité de suivre en temps réel les tournois, consulter les statistiques des joueurs, et explorer les classements globaux des équipes performantes.',
    image: '/images/projects/valorank/screen1.png',
    images: [
      '/images/projects/valorank/screen1.png',
      '/images/projects/valorank/screen2.png', 
      '/images/projects/valorank/screen3.png',
      '/images/projects/valorank/screen4.png'
    ],
    technologies: ['Kotlin', 'MVVM', 'Spring Boot', 'Material Components', 'ViewBinding', 'Retrofit', 'Glide'],
    category: 'mobile',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: null,
    githubUrl: 'https://github.com/username/valorank',
    challenges: [
      'Intégration des APIs Valorant pour les données en temps réel',
      'Architecture MVVM robuste pour la gestion des données',
      'Interface utilisateur avec Material Components',
      'Gestion des images et cache avec Glide'
    ],
    features: [
      'Suivi des tournois en temps réel',
      'Classements des équipes et joueurs',
      'Statistiques détaillées des performances',
      'Équipes favorites avec notifications',
      'Interface Material Design moderne',
      'Navigation fluide entre les sections',
      'Données synchronisées avec les APIs officielles',
      'Optimisation des performances réseau'
    ]
  },
  {
    id: 3,
    title: 'Harry Potter Trivia',
    description: 'Application Android de trivia Harry Potter avec système ELO, gestion des vies, achats in-app et notifications magiques.',
    longDescription: 'Application Android complète développée en Kotlin et Jetpack Compose. Système de trivia avec questions Harry Potter, classement ELO, gestion des vies avec régénération, achats in-app via RevenueCat, publicités AdMob, et notifications locales thématiques. Architecture modulaire avec Hilt, Firebase et backend API personnalisé.',
    image: '/images/projects/harry-potter/screen1.png',
    images: [
      '/images/projects/harry-potter/screen1.png',
      '/images/projects/harry-potter/screen2.png', 
      '/images/projects/harry-potter/screen3.png',
      '/images/projects/harry-potter/screen4.png',
      '/images/projects/harry-potter/screen5.png'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt', 'Retrofit', 'RevenueCat', 'AdMob', 'Lottie'],
    category: 'mobile',
    featured: true,
    status: 'completed',
    year: 2024,
    demoUrl: null,
    githubUrl: 'https://github.com/username/harry-potter-trivia',
    challenges: [
      'Architecture modulaire avec Hilt et dependency injection',
      'Système de monétisation avec RevenueCat et AdMob',
      'Notifications locales avec timing précis et permissions',
      'Système ELO pour le classement des joueurs',
      'Intégration Firebase complète (Auth, Analytics, Crashlytics)',
      'Gestion des vies avec régénération automatique'
    ],
    features: [
      'Questions trivia Harry Potter avec timer',
      'Système de classement ELO',
      'Gestion des vies avec régénération',
      'Achats in-app pour contenu premium',
      'Publicités récompensées pour vies supplémentaires',
      'Notifications locales thématiques',
      'Onboarding fluide avec permissions',
      'Animations Lottie et effets sonores',
      'Review in-app automatique',
      'Architecture MVVM avec StateFlow'
    ]
  },
  {
    id: 4,
    title: 'MY POKEDEX',
    description: 'Application mobile Pokédex permettant d\'explorer les 151 premiers Pokémon avec leurs détails et statistiques complètes.',
    longDescription: 'MY POKEDEX est une application mobile Android développée en Kotlin qui permet aux utilisateurs d\'explorer la collection classique des 151 premiers Pokémon. Premier projet Android, elle offre une expérience immersive avec des informations détaillées sur chaque Pokémon, incluant leurs statistiques, types, et caractéristiques. Architecture MVVM avec consommation de l\'API PokeAPI.',
    image: '/images/projects/pokedex/screen1.png',
    images: [
      '/images/projects/pokedex/screen1.png',
      '/images/projects/pokedex/screen2.png'
    ],
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'PokeAPI', 'Fragment Navigation', 'Custom Adapters'],
    category: 'mobile',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: null,
    githubUrl: 'https://github.com/username/my-pokedex',
    challenges: [
      'Premier projet Android - apprentissage des fondamentaux',
      'Architecture MVVM pour une structure maintenable et scalable',
      'Consommation de l\'API PokeAPI avec Retrofit',
      'Navigation par fragments pour un flux utilisateur fluide',
      'Création d\'adaptateurs personnalisés pour l\'affichage des données',
      'Gestion des interactions utilisateur et interfaces personnalisées'
    ],
    features: [
      'Exploration des 151 premiers Pokémon classiques',
      'Informations détaillées sur chaque Pokémon',
      'Statistiques complètes avec barres de progression',
      'Interface utilisateur intuitive et navigable',
      'Architecture MVVM robuste',
      'Intégration API avec Retrofit',
      'Navigation fluide par fragments',
      'Première expérience Android réussie'
    ]
  },
  {
    id: 5,
    title: 'Flipd Apps',
    description: 'Contribution au développement d\'une application mobile de productivité utilisée par des milliers d\'utilisateurs - Expérience professionnelle.',
    longDescription: 'En tant que Front-End / Mobile Developer chez Flipd Inc, j\'ai contribué au développement de fonctionnalités clés d\'une application mobile de productivité. J\'ai conçu et implémenté un timer Pomodoro, optimisé la gestion des permissions Android, et développé un système de paiement personnalisé pour contourner les limitations backend. Travail en équipe Agile/Scrum avec interfaces Material3 et intégrations API avancées.',
    image: '/images/projects/flipd/screen1.png',
    images: [
      '/images/projects/flipd/screen1.png',
      '/images/projects/flipd/screen2.png',
      '/images/projects/flipd/screen3.png',
      '/images/projects/flipd/screen4.png'
    ],
    technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Material3', 'Firebase', 'Dagger', 'Retrofit', 'RevenueCat', 'Vue.js', 'Coroutines', 'Flows'],
    category: 'mobile',
    featured: true,
    status: 'in-progress',
    year: 2024,
    demoUrl: 'https://flipdapp.co',
    githubUrl: null,
    challenges: [
      'Développement sur app avec milliers d\'utilisateurs en production',
      'Optimisation des permissions Android pour stabilité et confiance',
      'Contournement des limitations backend pour système de paiement',
      'Intégration d\'APIs RESTful avec Coroutines et Flows',
      'Interfaces accessibles et responsives avec Material3',
      'Travail en équipe Agile/Scrum avec sprints réguliers'
    ],
    features: [
      'Timer Pomodoro pour engagement utilisateur',
      'Gestion optimisée des permissions Android',
      'Système de paiement personnalisé',
      'UI Material3 responsive et accessible',
      'Intégrations API avancées avec Coroutines/Flows',
      'Gestion des achats in-app via RevenueCat',
      'Réduction des coûts d\'infrastructure',
      'Amélioration de la stabilité globale'
    ]
  },
  {
    id: 6,
    title: 'Bluesky Explorer',
    description: 'Application web pour interagir avec l\'API Bluesky, permettant de rechercher, filtrer et exporter des posts en temps réel.',
    longDescription: 'Bluesky Explorer est une application web développée en Vue.js pour interagir avec l\'API Bluesky. Elle permet aux utilisateurs de rechercher, filtrer et exporter des posts en temps réel avec des fonctionnalités avancées comme l\'export Excel, la recherche préconfigurée, et un système de favoris. Le projet met l\'accent sur une interface utilisateur dynamique et une gestion efficace des APIs.',
    image: '/images/projects/bluesky/screen1.png',
    technologies: ['JavaScript (ES6)', 'Vue.js', 'Axios', 'SheetJS', 'Day.js'],
    category: 'web',
    featured: true,
    status: 'completed',
    year: 2024,
    demoUrl: 'https://bluesky-explorer.com',
    githubUrl: 'https://github.com/username/bluesky-explorer',
    challenges: [
      'Intégration de l\'API publique Bluesky avec Axios',
      'Filtrage dynamique en temps réel avec recherche multilingue',
      'Export de données en format Excel avec SheetJS',
      'Organisation du code en composants Vue.js réutilisables',
      'Gestion de la pagination et du chargement progressif',
      'Optimisation des performances et gestion d\'erreurs visuelles'
    ],
    features: [
      'Recherche en temps réel avec support multilingue',
      'Filtrage dynamique des résultats',
      'Export des données vers Excel',
      'Système de recherches préconfigurées et sauvegardées',
      'Interface utilisateur intuitive et responsive',
      'Gestion de la pagination et chargement progressif',
      'Système de favoris pour posts sélectionnés',
      'Intégration de bibliothèques tierces (Day.js, SheetJS)',
      'Pratiques collaboratives avec Git et gestion de versions'
    ]
  }
]

export const categories = [
  { id: 'all', name: 'Tous', count: projects.length },
  { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length }
]

export const technologies = [
  'Kotlin', 'Java', 'Jetpack Compose', 'MVVM', 'MockK', 'Retrofit', 'Material Design',
  'Firebase', 'Hilt', 'Spring Boot', 'Material Components', 'ViewBinding',
  'Glide', 'RevenueCat', 'AdMob', 'Lottie', 'PokeAPI', 'Fragment Navigation', 'Custom Adapters',
  'Material3', 'Vue.js', 'Coroutines', 'Flows', 'Dagger', 'JavaScript (ES6)', 'Axios', 'SheetJS', 'Day.js'
]