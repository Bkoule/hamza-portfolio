<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">À propos de moi</h1>
            <p class="hero-subtitle">
              Passionné par le développement web et les nouvelles technologies, 
              je crée des expériences numériques innovantes et performantes.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-number">{{ stats.experience }}+</span>
                <span class="stat-label">Années d'expérience</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ stats.projects }}+</span>
                <span class="stat-label">Projets terminés</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ stats.technologies }}+</span>
                <span class="stat-label">Technologies maîtrisées</span>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-container">
              <div class="image-placeholder">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <circle cx="75" cy="75" r="60" fill="url(#profileGradient)" stroke="url(#profileBorder)" stroke-width="2"/>
                  <defs>
                    <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--color-primary);stop-opacity:0.1" />
                      <stop offset="100%" style="stop-color:var(--color-accent);stop-opacity:0.1" />
                    </linearGradient>
                    <linearGradient id="profileBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--color-primary)" />
                      <stop offset="100%" style="stop-color:var(--color-accent)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Compétences & Technologies</h2>
        <div class="skills-categories">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="skills-list">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Parcours Professionnel</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-title">{{ item.title }}</h3>
                <span class="timeline-date">{{ item.date }}</span>
              </div>
              <p class="timeline-company">{{ item.company }}</p>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-skills">
                <span class="skill-tag" v-for="skill in item.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Section -->
    <section class="personal-section">
      <div class="container">
        <div class="personal-content">
          <div class="personal-text">
            <h2>Au-delà du code</h2>
            <p>
              Quand je ne code pas, j'aime explorer de nouvelles technologies, 
              contribuer à des projets open source et partager mes connaissances 
              avec la communauté de développeurs.
            </p>
            <div class="interests">
              <div class="interest" v-for="interest in interests" :key="interest.name">
                <div class="interest-icon">
                  <i :class="interest.icon"></i>
                </div>
                <span>{{ interest.name }}</span>
              </div>
            </div>
          </div>
          <div class="personal-image">
            <div class="quote-card">
              <blockquote>
                "Le code est de la poésie que les machines peuvent lire."
              </blockquote>
              <cite>— Développeur passionné</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref({
  experience: 3,
  projects: 25,
  technologies: 15
})

const skillCategories = ref([
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SCSS/CSS', level: 95 },
      { name: 'JavaScript', level: 90 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'REST APIs', level: 85 }
    ]
  },
  {
    name: 'Outils & Autres',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 80 },
      { name: 'Vite', level: 85 }
    ]
  }
])

const timeline = ref([
  {
    title: 'Développeur Full Stack Senior',
    company: 'TechCorp',
    date: '2022 - Présent',
    description: 'Développement d\'applications web modernes et responsables d\'une équipe de 5 développeurs.',
    skills: ['Vue.js', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'Développeur Frontend',
    company: 'WebAgency',
    date: '2020 - 2022',
    description: 'Création d\'interfaces utilisateur pour des clients variés avec un focus sur l\'expérience utilisateur.',
    skills: ['React', 'TypeScript', 'SCSS', 'Figma']
  },
  {
    title: 'Développeur Junior',
    company: 'StartupTech',
    date: '2019 - 2020',
    description: 'Premiers pas dans le développement web professionnel avec apprentissage des bonnes pratiques.',
    skills: ['JavaScript', 'HTML/CSS', 'Git', 'MySQL']
  },
  {
    title: 'Formation Développement Web',
    company: 'École du Web',
    date: '2018 - 2019',
    description: 'Formation intensive en développement web full-stack avec focus sur les technologies modernes.',
    skills: ['Bases du web', 'Algorithmique', 'Base de données']
  }
])

const interests = ref([
  { name: 'Open Source', icon: '🌟' },
  { name: 'Technologie', icon: '💻' },
  { name: 'Design', icon: '🎨' },
  { name: 'Voyage', icon: '✈️' },
  { name: 'Musique', icon: '🎵' },
  { name: 'Sport', icon: '⚽' }
])
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.about {
  min-height: 100vh;
}

// About Hero Section
.about-hero {
  padding: $spacing-4xl 0;
  background: linear-gradient(135deg, $white 0%, $gray-50 100%);
  
  .hero-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    align-items: center;
    
    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 2fr 1fr;
    }
  }
  
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
    margin-bottom: $spacing-2xl;
  }
  
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: $spacing-lg;
    
    .stat {
      text-align: center;
      
      .stat-number {
        display: block;
        font-size: $font-size-3xl;
        font-weight: $font-weight-bold;
        color: $primary;
        margin-bottom: $spacing-xs;
      }
      
      .stat-label {
        color: $gray-600;
        font-size: $font-size-sm;
      }
    }
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    
    .image-container {
      position: relative;
      
      .image-placeholder {
        animation: float 3s ease-in-out infinite;
      }
    }
  }
}

// Skills Section
.skills-section {
  padding: $spacing-4xl 0;
  background: $white;
  
  .section-title {
    text-align: center;
    margin-bottom: $spacing-3xl;
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $gray-900;
  }
  
  .skills-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: $spacing-2xl;
    
    .skill-category {
      background: $gray-50;
      padding: $spacing-2xl;
      border-radius: $border-radius-lg;
      
      .category-title {
        font-size: $font-size-xl;
        font-weight: $font-weight-semibold;
        color: $gray-900;
        margin-bottom: $spacing-lg;
        text-align: center;
      }
      
      .skills-list {
        display: flex;
        flex-direction: column;
        gap: $spacing-lg;
      }
      
      .skill-item {
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: $spacing-xs;
          
          .skill-name {
            font-weight: $font-weight-medium;
            color: $gray-800;
          }
          
          .skill-level {
            font-size: $font-size-sm;
            color: $primary;
            font-weight: $font-weight-semibold;
          }
        }
        
        .skill-bar {
          height: 6px;
          background: $gray-200;
          border-radius: $border-radius-full;
          overflow: hidden;
          
          .skill-progress {
            height: 100%;
            background: linear-gradient(135deg, $primary, $accent);
            border-radius: $border-radius-full;
            transition: width 1s ease-out;
            animation: slideIn 1s ease-out;
          }
        }
      }
    }
  }
}

// Timeline Section
.timeline-section {
  padding: $spacing-4xl 0;
  background: $gray-50;
  
  .section-title {
    text-align: center;
    margin-bottom: $spacing-3xl;
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $gray-900;
  }
  
  .timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(135deg, $primary, $accent);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: $spacing-3xl;
      padding-left: 80px;
      
      .timeline-marker {
        position: absolute;
        left: 0;
        top: 0;
        
        .timeline-dot {
          width: 60px;
          height: 60px;
          background: $white;
          border: 4px solid $primary;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          
          &::before {
            content: '';
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, $primary, $accent);
            border-radius: 50%;
          }
        }
      }
      
      .timeline-content {
        background: $white;
        padding: $spacing-xl;
        border-radius: $border-radius-lg;
        box-shadow: $shadow-md;
        
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: $spacing-sm;
          
          @media (max-width: $breakpoint-sm) {
            flex-direction: column;
            gap: $spacing-xs;
          }
          
          .timeline-title {
            font-size: $font-size-xl;
            font-weight: $font-weight-semibold;
            color: $gray-900;
            margin: 0;
          }
          
          .timeline-date {
            background: $primary;
            color: $white;
            padding: $spacing-xs $spacing-sm;
            border-radius: $border-radius-full;
            font-size: $font-size-sm;
            font-weight: $font-weight-medium;
          }
        }
        
        .timeline-company {
          color: $accent;
          font-weight: $font-weight-medium;
          margin-bottom: $spacing-sm;
        }
        
        .timeline-description {
          color: $gray-600;
          line-height: 1.6;
          margin-bottom: $spacing-md;
        }
        
        .timeline-skills {
          display: flex;
          flex-wrap: wrap;
          gap: $spacing-xs;
          
          .skill-tag {
            background: $gray-100;
            color: $gray-700;
            padding: $spacing-xs $spacing-sm;
            border-radius: $border-radius-md;
            font-size: $font-size-sm;
            font-weight: $font-weight-medium;
          }
        }
      }
    }
  }
}

// Personal Section
.personal-section {
  padding: $spacing-4xl 0;
  background: $white;
  
  .personal-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    align-items: center;
    
    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 2fr 1fr;
    }
  }
  
  .personal-text {
    h2 {
      font-size: $font-size-3xl;
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-lg;
      color: $gray-900;
    }
    
    p {
      font-size: $font-size-lg;
      color: $gray-600;
      line-height: 1.6;
      margin-bottom: $spacing-2xl;
    }
    
    .interests {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: $spacing-md;
      
      .interest {
        display: flex;
        align-items: center;
        gap: $spacing-sm;
        padding: $spacing-sm $spacing-md;
        background: $gray-50;
        border-radius: $border-radius-md;
        transition: all $transition-fast;
        
        &:hover {
          background: $gray-100;
          transform: translateY(-2px);
        }
        
        .interest-icon {
          font-size: $font-size-lg;
        }
        
        span {
          font-weight: $font-weight-medium;
          color: $gray-700;
        }
      }
    }
  }
  
  .personal-image {
    display: flex;
    justify-content: center;
    
    .quote-card {
      background: linear-gradient(135deg, $primary, $accent);
      color: $white;
      padding: $spacing-2xl;
      border-radius: $border-radius-lg;
      text-align: center;
      max-width: 300px;
      
      blockquote {
        font-size: $font-size-lg;
        font-style: italic;
        margin-bottom: $spacing-md;
        line-height: 1.4;
        
        &::before, &::after {
          content: '"';
          font-size: $font-size-2xl;
          opacity: 0.5;
        }
      }
      
      cite {
        font-size: $font-size-sm;
        opacity: 0.9;
      }
    }
  }
}

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes slideIn {
  from { width: 0; }
  to { width: 100%; }
}
</style>