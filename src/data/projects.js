export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    longDescription: 'Développement d\'une plateforme e-commerce moderne avec Vue.js et Node.js. Intégration de Stripe pour les paiements, système de gestion des stocks, tableau de bord administrateur complet.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    category: 'fullstack',
    featured: true,
    status: 'completed',
    year: 2024,
    demoUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    challenges: [
      'Optimisation des performances pour le catalogue produits',
      'Sécurisation des transactions de paiement',
      'Gestion d\'état complexe pour le panier'
    ],
    features: [
      'Authentification utilisateur',
      'Panier et wishlist',
      'Paiement sécurisé',
      'Gestion des commandes',
      'Interface admin',
      'Responsive design'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative avec équipes et projets.',
    longDescription: 'Application de productivité permettant la gestion de tâches en équipe. Fonctionnalités de collaboration en temps réel, notifications, et tableaux de bord personnalisés.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    category: 'frontend',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-taskapp.com',
    githubUrl: 'https://github.com/username/task-management',
    challenges: [
      'Synchronisation en temps réel des données',
      'Gestion des permissions d\'équipe',
      'Interface utilisateur intuitive'
    ],
    features: [
      'Gestion de projets',
      'Collaboration temps réel',
      'Notifications push',
      'Calendrier intégré',
      'Rapports et analytics',
      'Mode sombre'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Tableau de bord météo interactif avec données en temps réel.',
    longDescription: 'Application météo moderne avec prévisions détaillées, cartes interactives et historique des données. Interface responsive avec animations fluides.',
    image: '/images/projects/weather.jpg',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    category: 'frontend',
    featured: false,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    challenges: [
      'Intégration de multiple APIs météo',
      'Visualisation de données complexes',
      'Optimisation des performances'
    ],
    features: [
      'Prévisions 7 jours',
      'Cartes météo interactives',
      'Graphiques de données',
      'Géolocalisation',
      'Favoris de villes',
      'Thèmes personnalisés'
    ]
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Site portfolio personnel avec animations et design moderne.',
    longDescription: 'Portfolio personnel développé avec Vue.js et animations CSS avancées. Design responsive et optimisé pour les performances.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Vue.js', 'SCSS', 'Vite', 'Netlify'],
    category: 'frontend',
    featured: false,
    status: 'completed',
    year: 2024,
    demoUrl: 'https://mon-portfolio.com',
    githubUrl: 'https://github.com/username/portfolio',
    challenges: [
      'Animations performantes',
      'Design système cohérent',
      'Optimisation SEO'
    ],
    features: [
      'Animations CSS avancées',
      'Design responsive',
      'Optimisation SEO',
      'Performance élevée',
      'Mode sombre',
      'Contact intégré'
    ]
  },
  {
    id: 5,
    title: 'Blog CMS',
    description: 'Système de gestion de contenu pour blog avec éditeur WYSIWYG.',
    longDescription: 'CMS personnalisé pour la création et gestion de blogs. Interface d\'administration complète avec éditeur riche et gestion des médias.',
    image: '/images/projects/blog.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Quill.js', 'Cloudinary'],
    category: 'backend',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-blog.com',
    githubUrl: 'https://github.com/username/blog-cms',
    challenges: [
      'Éditeur de contenu riche',
      'Gestion des médias',
      'SEO automatique'
    ],
    features: [
      'Éditeur WYSIWYG',
      'Gestion des médias',
      'SEO optimisé',
      'Commentaires',
      'Catégories et tags',
      'Analytics intégré'
    ]
  },
  {
    id: 6,
    title: 'API REST Authentication',
    description: 'API d\'authentification sécurisée avec JWT et OAuth.',
    longDescription: 'API REST complète pour l\'authentification avec support JWT, OAuth et gestion des rôles. Documentation OpenAPI incluse.',
    image: '/images/projects/api.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'OAuth', 'Swagger'],
    category: 'backend',
    featured: false,
    status: 'completed',
    year: 2024,
    demoUrl: null,
    githubUrl: 'https://github.com/username/auth-api',
    challenges: [
      'Sécurité des tokens',
      'Gestion des sessions',
      'Documentation complète'
    ],
    features: [
      'JWT Authentication',
      'OAuth integration',
      'Gestion des rôles',
      'Rate limiting',
      'Documentation Swagger',
      'Tests automatisés'
    ]
  },
  {
    id: 7,
    title: 'Mobile App Prototype',
    description: 'Prototype d\'application mobile avec React Native.',
    longDescription: 'Prototype d\'application mobile cross-platform pour la gestion de fitness. Interface native avec animations fluides.',
    image: '/images/projects/mobile.jpg',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    category: 'mobile',
    featured: false,
    status: 'in-progress',
    year: 2024,
    demoUrl: null,
    githubUrl: 'https://github.com/username/fitness-app',
    challenges: [
      'Performance native',
      'Gestion d\'état complexe',
      'Animations fluides'
    ],
    features: [
      'Tracking d\'activité',
      'Programmes d\'entraînement',
      'Statistiques détaillées',
      'Notifications push',
      'Synchronisation cloud',
      'Interface native'
    ]
  },
  {
    id: 8,
    title: 'Data Visualization Tool',
    description: 'Outil de visualisation de données avec graphiques interactifs.',
    longDescription: 'Application web pour la visualisation de données complexes avec graphiques interactifs et tableaux de bord personnalisables.',
    image: '/images/projects/dataviz.jpg',
    technologies: ['D3.js', 'Vue.js', 'Node.js', 'Chart.js'],
    category: 'fullstack',
    featured: false,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-dataviz.com',
    githubUrl: 'https://github.com/username/data-viz',
    challenges: [
      'Traitement de gros volumes',
      'Interactions complexes',
      'Performance de rendu'
    ],
    features: [
      'Graphiques interactifs',
      'Filtres avancés',
      'Export de données',
      'Tableaux de bord',
      'Temps réel',
      'Responsive design'
    ]
  }
]

export const categories = [
  { id: 'all', name: 'Tous', count: projects.length },
  { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
]

export const technologies = [
  'Vue.js', 'React', 'Node.js', 'JavaScript', 'TypeScript',
  'MongoDB', 'PostgreSQL', 'Express', 'Socket.io', 'JWT',
  'SCSS', 'Tailwind CSS', 'Chart.js', 'D3.js', 'React Native'
]