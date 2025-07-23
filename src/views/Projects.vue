<template>
  <div class="projects">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Mes Projets</h1>
          <p class="hero-subtitle">
            Découvrez une sélection de mes réalisations les plus récentes, 
            allant du développement frontend au backend en passant par les applications mobiles.
          </p>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="projects-filters">
      <div class="container">
        <div class="filters-container">
          <div class="category-filters">
            <button 
              v-for="category in categories" 
              :key="category.id"
              class="filter-btn"
              :class="{ active: activeCategory === category.id }"
              @click="filterProjects(category.id)"
            >
              {{ category.name }}
              <span class="count">{{ category.count }}</span>
            </button>
          </div>
          
          <div class="view-toggle">
            <button 
              class="view-btn"
              :class="{ active: viewMode === 'grid' }"
              @click="viewMode = 'grid'"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </button>
            <button 
              class="view-btn"
              :class="{ active: viewMode === 'list' }"
              @click="viewMode = 'list'"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid/List -->
    <section class="projects-content">
      <div class="container">
        <div class="projects-count">
          <span>{{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}</span>
        </div>
        
        <TransitionGroup 
          name="project"
          tag="div"
          :class="['projects-grid', { 'list-view': viewMode === 'list' }]"
        >
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
            @click="openProjectModal(project)"
          >
            <div class="project-image">
              <!-- Project with actual image -->
              <div v-if="project.image" class="project-img">
                <img :src="project.image" :alt="project.title" />
              </div>
              <!-- Placeholder for projects without image -->
              <div v-else class="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
              </div>
              <div class="project-overlay">
                <div class="overlay-content">
                  <button class="overlay-btn" @click.stop="openDemo(project)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                  <button class="overlay-btn" @click.stop="openGithub(project)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="project-status" v-if="project.status !== 'completed'">
                <span class="status-badge" :class="project.status">
                  {{ project.status === 'in-progress' ? 'En cours' : 'Terminé' }}
                </span>
              </div>
              <div class="project-featured" v-if="project.featured">
                <span class="featured-badge">Featured</span>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-year">{{ project.year }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span 
                  v-for="tech in project.technologies.slice(0, 4)" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 4" class="more-tech">
                  +{{ project.technologies.length - 4 }} plus
                </span>
              </div>
              
              <div class="project-actions" v-if="viewMode === 'list'">
                <a 
                  v-if="project.demoUrl" 
                  :href="project.demoUrl" 
                  target="_blank"
                  class="btn btn-primary btn-sm"
                  @click.stop
                >
                  Demo
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="btn btn-outline btn-sm"
                  @click.stop
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        
        <div class="modal-header">
          <h2>{{ selectedProject.title }}</h2>
          <span class="modal-year">{{ selectedProject.year }}</span>
        </div>
        
        <div class="modal-body">
          <p class="modal-description">{{ selectedProject.longDescription }}</p>
          
          <!-- Gallery for mobile projects -->
          <div v-if="selectedProject.category === 'mobile' && selectedProject.images" class="modal-section">
            <h3>{{ getGalleryTitle(selectedProject.id) }}</h3>
            <div class="modal-gallery">
              <!-- 3D Gallery for projects 1, 4, and 5 -->
              <PhoneGallery3D v-if="selectedProject.id === 1 || selectedProject.id === 4 || selectedProject.id === 5" :images="selectedProject.images" />
              <!-- Stacked Cards for second project -->
              <StackedCards v-else-if="selectedProject.id === 2" :images="selectedProject.images" :title="selectedProject.title" />
              <!-- Flat Gallery for third project -->
              <FlatGallery v-else-if="selectedProject.id === 3" :images="selectedProject.images" :title="selectedProject.title" />
            </div>
          </div>
          
          <!-- Gallery for web projects -->
          <div v-if="selectedProject.category === 'web' && selectedProject.image" class="modal-section">
            <h3>{{ getGalleryTitle(selectedProject.id) }}</h3>
            <div class="modal-gallery">
              <!-- Browser Mockup for web projects -->
              <BrowserMockup 
                :screenshot="selectedProject.image" 
                :title="selectedProject.title"
                :description="selectedProject.description"
                :url="selectedProject.demoUrl || 'https://example.com'"
                :demo-url="selectedProject.demoUrl"
                :github-url="selectedProject.githubUrl"
              />
            </div>
          </div>
          
          <div class="modal-section">
            <h3>Technologies utilisées</h3>
            <div class="modal-technologies">
              <span v-for="tech in selectedProject.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="modal-section">
            <h3>Fonctionnalités principales</h3>
            <ul class="features-list">
              <li v-for="feature in selectedProject.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="modal-section">
            <h3>Défis relevés</h3>
            <ul class="challenges-list">
              <li v-for="challenge in selectedProject.challenges" :key="challenge">
                {{ challenge }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="modal-footer">
          <a 
            v-if="selectedProject.demoUrl" 
            :href="selectedProject.demoUrl" 
            target="_blank"
            class="btn btn-primary"
          >
            Voir la démo
          </a>
          <a 
            v-if="selectedProject.githubUrl" 
            :href="selectedProject.githubUrl" 
            target="_blank"
            class="btn btn-outline"
          >
            Code source
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { projects, categories } from '@/data/projects.js'
import PhoneGallery3D from '@/components/PhoneGallery3D.vue'
import StackedCards from '@/components/StackedCards.vue'
import FlatGallery from '@/components/FlatGallery.vue'
import BrowserMockup from '@/components/BrowserMockup.vue'

const activeCategory = ref('all')
const viewMode = ref('grid')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const filterProjects = (categoryId) => {
  activeCategory.value = categoryId
}

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const getGalleryTitle = (projectId) => {
  const titles = {
    1: 'Screenshots',
    2: 'Aperçu',
    3: 'Fonctionnalités',
    4: 'Écrans',
    5: 'Contributions',
    6: 'Démo Web'
  }
  return titles[projectId] || 'Aperçu'
}

const openDemo = (project) => {
  if (project.demoUrl) {
    window.open(project.demoUrl, '_blank')
  }
}

const openGithub = (project) => {
  if (project.githubUrl) {
    window.open(project.githubUrl, '_blank')
  }
}

onMounted(() => {
  // Fermer le modal avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedProject.value) {
      closeModal()
    }
  })
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.projects {
  min-height: 100vh;
}

// Hero Section
.projects-hero {
  background: linear-gradient(135deg, $gray-50 0%, $white 100%);
  padding: $spacing-4xl 0;
  
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    
    .hero-title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-lg;
      background: linear-gradient(135deg, $primary, $accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: $font-size-xl;
      color: $gray-600;
      line-height: 1.6;
    }
  }
}

// Filters Section
.projects-filters {
  background: $white;
  padding: $spacing-2xl 0;
  border-bottom: 1px solid $gray-200;
  
  .filters-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-md;
    }
  }
  
  .category-filters {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;
    
    .filter-btn {
      display: flex;
      align-items: center;
      gap: $spacing-xs;
      padding: $spacing-sm $spacing-md;
      background: $gray-100;
      border: none;
      border-radius: $border-radius-full;
      color: $gray-700;
      font-weight: $font-weight-medium;
      transition: all $transition-fast;
      cursor: pointer;
      
      &:hover {
        background: $gray-200;
      }
      
      &.active {
        background: $primary;
        color: $white;
      }
      
      .count {
        background: rgba(255, 255, 255, 0.2);
        padding: 2px 6px;
        border-radius: $border-radius-full;
        font-size: $font-size-xs;
      }
    }
  }
  
  .view-toggle {
    display: flex;
    background: $gray-100;
    border-radius: $border-radius-md;
    padding: 4px;
    
    .view-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: none;
      border: none;
      border-radius: $border-radius-sm;
      color: $gray-600;
      cursor: pointer;
      transition: all $transition-fast;
      
      &:hover {
        color: $primary;
      }
      
      &.active {
        background: $white;
        color: $primary;
        box-shadow: $shadow-sm;
      }
    }
  }
}

// Projects Content
.projects-content {
  background: $gray-50;
  padding: $spacing-2xl 0;
  
  .projects-count {
    margin-bottom: $spacing-xl;
    color: $gray-600;
    font-size: $font-size-sm;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: $spacing-xl;
    
    &.list-view {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
      
      .project-card {
        display: flex;
        align-items: center;
        
        .project-image {
          width: 200px;
          height: 150px;
          flex-shrink: 0;
        }
        
        .project-content {
          flex: 1;
          padding: $spacing-lg;
        }
        
        .project-actions {
          display: flex;
          gap: $spacing-sm;
          margin-top: $spacing-md;
        }
      }
    }
  }
  
  .project-card {
    background: $white;
    border-radius: $border-radius-lg;
    overflow: hidden;
    box-shadow: $shadow-md;
    transition: all $transition-normal;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-lg;
    }
    
    .project-image {
      position: relative;
      width: 100%;
      height: 200px;
      background: $gray-100;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      
      .project-img {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      .image-placeholder {
        color: $gray-400;
        transition: all $transition-fast;
      }
      
      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity $transition-fast;
        
        .overlay-content {
          display: flex;
          gap: $spacing-md;
        }
        
        .overlay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: $white;
          border: none;
          border-radius: $border-radius-full;
          color: $gray-700;
          cursor: pointer;
          transition: all $transition-fast;
          
          &:hover {
            background: $primary;
            color: $white;
            transform: scale(1.1);
          }
        }
      }
      
      &:hover .project-overlay {
        opacity: 1;
      }
      
      .project-status {
        position: absolute;
        top: $spacing-md;
        left: $spacing-md;
        
        .status-badge {
          padding: $spacing-xs $spacing-sm;
          border-radius: $border-radius-full;
          font-size: $font-size-xs;
          font-weight: $font-weight-medium;
          
          &.in-progress {
            background: $warning;
            color: $white;
          }
          
          &.completed {
            background: $success;
            color: $white;
          }
        }
      }
      
      .project-featured {
        position: absolute;
        top: $spacing-md;
        right: $spacing-md;
        
        .featured-badge {
          background: $accent;
          color: $white;
          padding: $spacing-xs $spacing-sm;
          border-radius: $border-radius-full;
          font-size: $font-size-xs;
          font-weight: $font-weight-medium;
        }
      }
    }
    
    .project-content {
      padding: $spacing-xl;
      
      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: $spacing-md;
        
        .project-title {
          font-size: $font-size-xl;
          font-weight: $font-weight-semibold;
          color: $gray-900;
          margin: 0;
        }
        
        .project-year {
          color: $gray-500;
          font-size: $font-size-sm;
          font-weight: $font-weight-medium;
        }
      }
      
      .project-description {
        color: $gray-600;
        line-height: 1.5;
        margin-bottom: $spacing-lg;
      }
      
      .project-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: $spacing-xs;
        
        .tech-tag {
          background: $gray-100;
          color: $gray-700;
          padding: $spacing-xs $spacing-sm;
          border-radius: $border-radius-md;
          font-size: $font-size-sm;
          font-weight: $font-weight-medium;
        }
        
        .more-tech {
          color: $gray-500;
          font-size: $font-size-sm;
          font-style: italic;
        }
      }
    }
  }
}

// Modal Styles
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: $spacing-lg;
  
  .modal-content {
    background: $white;
    border-radius: $border-radius-lg;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    
    .modal-close {
      position: absolute;
      top: $spacing-lg;
      right: $spacing-lg;
      width: 32px;
      height: 32px;
      background: none;
      border: none;
      color: $gray-500;
      cursor: pointer;
      transition: color $transition-fast;
      z-index: 1;
      
      &:hover {
        color: $gray-800;
      }
    }
    
    .modal-header {
      padding: $spacing-2xl $spacing-2xl $spacing-lg;
      border-bottom: 1px solid $gray-200;
      
      h2 {
        font-size: $font-size-2xl;
        font-weight: $font-weight-bold;
        color: $gray-900;
        margin: 0 $spacing-2xl 0 0;
      }
      
      .modal-year {
        color: $gray-500;
        font-size: $font-size-sm;
        font-weight: $font-weight-medium;
      }
    }
    
    .modal-body {
      padding: $spacing-2xl;
      
      .modal-description {
        font-size: $font-size-lg;
        color: $gray-700;
        line-height: 1.6;
        margin-bottom: $spacing-2xl;
      }
      
      .modal-section {
        margin-bottom: $spacing-2xl;
        
        h3 {
          font-size: $font-size-lg;
          font-weight: $font-weight-semibold;
          color: $gray-900;
          margin-bottom: $spacing-md;
        }
        
        .modal-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: $spacing-xs;
          
          .tech-tag {
            background: $primary;
            color: $white;
            padding: $spacing-xs $spacing-sm;
            border-radius: $border-radius-md;
            font-size: $font-size-sm;
            font-weight: $font-weight-medium;
          }
        }
        
        .features-list,
        .challenges-list {
          margin: 0;
          padding-left: $spacing-lg;
          
          li {
            color: $gray-700;
            margin-bottom: $spacing-xs;
            line-height: 1.5;
          }
        }
      }
      
      .modal-gallery {
        display: flex;
        justify-content: center;
        margin: $spacing-xl 0;
        
        .phone-gallery-3d {
          transform: scale(0.7);
          
          @media (max-width: $breakpoint-md) {
            transform: scale(0.5);
          }
        }
      }
    }
    
    .modal-footer {
      padding: $spacing-lg $spacing-2xl $spacing-2xl;
      border-top: 1px solid $gray-200;
      display: flex;
      gap: $spacing-md;
      
      .btn {
        flex: 1;
        text-align: center;
      }
    }
  }
}

// Transitions
.project-enter-active,
.project-leave-active {
  transition: all 0.3s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.project-move {
  transition: transform 0.3s ease;
}
</style>