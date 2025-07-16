<template>
  <div class="projects">
    <section class="section">
      <div class="container">
        <h1 class="page-title animate-fade-in">Mes Projets</h1>
        <p class="page-subtitle animate-slide-in-left">
          Découvrez quelques-uns de mes projets les plus récents
        </p>
        
        <div class="projects-grid animate-slide-in-right">
          <div class="project-card card" v-for="project in projects" :key="project.id">
            <div class="card-header">
              <h3>{{ project.title }}</h3>
            </div>
            <div class="card-body">
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary btn-sm">Voir le projet</a>
              <a href="#" class="btn btn-outline btn-sm">Code source</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Projects page component
import { ref } from 'vue'

// Données temporaires des projets (on les déplacera plus tard)
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec Vue.js et Node.js',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Application de gestion de tâches avec interface drag & drop',
    technologies: ['React', 'TypeScript', 'Firebase']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Site portfolio responsive avec animations fluides',
    technologies: ['Vue.js', 'SCSS', 'Vite']
  }
])
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.projects {
  min-height: 100vh;
  background: linear-gradient(135deg, $gray-50 0%, $white 100%);
  
  .page-title {
    text-align: center;
    margin-bottom: $spacing-md;
    color: $primary;
  }
  
  .page-subtitle {
    text-align: center;
    font-size: $font-size-lg;
    color: $gray-600;
    margin-bottom: $spacing-3xl;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: $spacing-lg;
    
    .project-card {
      transition: transform $transition-normal;
      
      &:hover {
        transform: translateY(-5px);
      }
      
      .card-header {
        h3 {
          color: $primary;
          margin-bottom: 0;
        }
      }
      
      .card-body {
        p {
          color: $gray-700;
          margin-bottom: $spacing-md;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: $spacing-xs;
          
          .tech-tag {
            background: $secondary;
            color: $white;
            padding: $spacing-xs $spacing-sm;
            border-radius: $border-radius-sm;
            font-size: $font-size-sm;
            font-weight: $font-weight-medium;
          }
        }
      }
      
      .card-footer {
        display: flex;
        gap: $spacing-sm;
        
        .btn-sm {
          padding: $spacing-sm $spacing-md;
          font-size: $font-size-sm;
        }
      }
    }
  }
}
</style>