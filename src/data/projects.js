export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce compl�te avec panier, paiement et gestion des commandes.',
    longDescription: 'D�veloppement d\'une plateforme e-commerce moderne avec Vue.js et Node.js. Int�gration de Stripe pour les paiements, syst�me de gestion des stocks, tableau de bord administrateur complet.',
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
      'S�curisation des transactions de paiement',
      'Gestion d\'�tat complexe pour le panier'
    ],
    features: [
      'Authentification utilisateur',
      'Panier et wishlist',
      'Paiement s�curis�',
      'Gestion des commandes',
      'Interface admin',
      'Responsive design'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Application de gestion de t�ches collaborative avec �quipes et projets.',
    longDescription: 'Application de productivit� permettant la gestion de t�ches en �quipe. Fonctionnalit�s de collaboration en temps r�el, notifications, et tableaux de bord personnalis�s.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    category: 'frontend',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-taskapp.com',
    githubUrl: 'https://github.com/username/task-management',
    challenges: [
      'Synchronisation en temps r�el des donn�es',
      'Gestion des permissions d\'�quipe',
      'Interface utilisateur intuitive'
    ],
    features: [
      'Gestion de projets',
      'Collaboration temps r�el',
      'Notifications push',
      'Calendrier int�gr�',
      'Rapports et analytics',
      'Mode sombre'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Tableau de bord m�t�o interactif avec donn�es en temps r�el.',
    longDescription: 'Application m�t�o moderne avec pr�visions d�taill�es, cartes interactives et historique des donn�es. Interface responsive avec animations fluides.',
    image: '/images/projects/weather.jpg',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    category: 'frontend',
    featured: false,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-weather.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    challenges: [
      'Int�gration de multiple APIs m�t�o',
      'Visualisation de donn�es complexes',
      'Optimisation des performances'
    ],
    features: [
      'Pr�visions 7 jours',
      'Cartes m�t�o interactives',
      'Graphiques de donn�es',
      'G�olocalisation',
      'Favoris de villes',
      'Th�mes personnalis�s'
    ]
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Site portfolio personnel avec animations et design moderne.',
    longDescription: 'Portfolio personnel d�velopp� avec Vue.js et animations CSS avanc�es. Design responsive et optimis� pour les performances.',
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
      'Design syst�me coh�rent',
      'Optimisation SEO'
    ],
    features: [
      'Animations CSS avanc�es',
      'Design responsive',
      'Optimisation SEO',
      'Performance �lev�e',
      'Mode sombre',
      'Contact int�gr�'
    ]
  },
  {
    id: 5,
    title: 'Blog CMS',
    description: 'Syst�me de gestion de contenu pour blog avec �diteur WYSIWYG.',
    longDescription: 'CMS personnalis� pour la cr�ation et gestion de blogs. Interface d\'administration compl�te avec �diteur riche et gestion des m�dias.',
    image: '/images/projects/blog.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Quill.js', 'Cloudinary'],
    category: 'backend',
    featured: true,
    status: 'completed',
    year: 2023,
    demoUrl: 'https://demo-blog.com',
    githubUrl: 'https://github.com/username/blog-cms',
    challenges: [
      '�diteur de contenu riche',
      'Gestion des m�dias',
      'SEO automatique'
    ],
    features: [
      '�diteur WYSIWYG',
      'Gestion des m�dias',
      'SEO optimis�',
      'Commentaires',
      'Cat�gories et tags',
      'Analytics int�gr�'
    ]
  },
  {
    id: 6,
    title: 'API REST Authentication',
    description: 'API d\'authentification s�curis�e avec JWT et OAuth.',
    longDescription: 'API REST compl�te pour l\'authentification avec support JWT, OAuth et gestion des r�les. Documentation OpenAPI incluse.',
    image: '/images/projects/api.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'OAuth', 'Swagger'],
    category: 'backend',
    featured: false,
    status: 'completed',
    year: 2024,
    demoUrl: null,
    githubUrl: 'https://github.com/username/auth-api',
    challenges: [
      'S�curit� des tokens',
      'Gestion des sessions',
      'Documentation compl�te'
    ],
    features: [
      'JWT Authentication',
      'OAuth integration',
      'Gestion des r�les',
      'Rate limiting',
      'Documentation Swagger',
      'Tests automatis�s'
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
      'Gestion d\'�tat complexe',
      'Animations fluides'
    ],
    features: [
      'Tracking d\'activit�',
      'Programmes d\'entra�nement',
      'Statistiques d�taill�es',
      'Notifications push',
      'Synchronisation cloud',
      'Interface native'
    ]
  },
  {
    id: 8,
    title: 'Data Visualization Tool',
    description: 'Outil de visualisation de donn�es avec graphiques interactifs.',
    longDescription: 'Application web pour la visualisation de donn�es complexes avec graphiques interactifs et tableaux de bord personnalisables.',
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
      'Filtres avanc�s',
      'Export de donn�es',
      'Tableaux de bord',
      'Temps r�el',
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