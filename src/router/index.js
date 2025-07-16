import { createRouter, createWebHistory } from 'vue-router'

// Import des vues (nous les créerons ensuite)
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

// Configuration des routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil - Portfolio'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'À propos - Portfolio'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projets - Portfolio'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - Portfolio'
    }
  },
  {
    // Route de fallback pour les 404
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
  // Comportement de scroll lors de la navigation
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guard pour mettre à jour le titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfolio'
  next()
})

export default router