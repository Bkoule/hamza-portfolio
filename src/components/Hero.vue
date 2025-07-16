<template>
  <section class="hero">
    <div class="hero__background">
      <div class="hero__particles" ref="particles"></div>
      <div class="hero__gradient"></div>
    </div>
    
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title" :class="{ 'animate-fade-in': isVisible }">
            <span class="hero__greeting">Salut, je suis</span>
            <span class="hero__name">{{ name }}</span>
            <span class="hero__role">{{ role }}</span>
          </h1>
          
          <p class="hero__subtitle" :class="{ 'animate-slide-in-left': isVisible }">
            {{ subtitle }}
          </p>
          
          <div class="hero__buttons" :class="{ 'animate-slide-in-right': isVisible }">
            <router-link to="/projects" class="btn btn-primary">
              <span>Voir mes projets</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              <span>Me contacter</span>
            </router-link>
          </div>
          
          <div class="hero__social" :class="{ 'animate-fade-in': isVisible }">
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="hero__visual" :class="{ 'animate-slide-in-up': isVisible }">
          <div class="hero__image">
            <div class="image-placeholder">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" fill="url(#gradient)" stroke="url(#borderGradient)" stroke-width="2"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--color-primary);stop-opacity:0.1" />
                    <stop offset="100%" style="stop-color:var(--color-accent);stop-opacity:0.1" />
                  </linearGradient>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--color-primary)" />
                    <stop offset="100%" style="stop-color:var(--color-accent)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div class="hero__skills stagger-children">
            <div class="skill-badge stagger-item" v-for="skill in skills" :key="skill">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero__scroll" :class="{ 'animate-bounce': isVisible }">
        <span>Scroll pour découvrir</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 13L12 18L17 13"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      isVisible: false,
      name: 'Votre Nom',
      role: 'Développeur Full Stack',
      subtitle: 'Je crée des expériences numériques modernes et performantes avec passion et expertise technique.',
      skills: ['Vue.js', 'React', 'Node.js', 'TypeScript', 'UI/UX', 'MongoDB']
    }
  },
  mounted() {
    this.initAnimations();
    this.createParticles();
  },
  methods: {
    initAnimations() {
      setTimeout(() => {
        this.isVisible = true;
      }, 100);
    },
    
    createParticles() {
      const particles = this.$refs.particles;
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particles.appendChild(particle);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, $gray-50 0%, $white 50%, $gray-50 100%);
  }
  
  &__particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: $primary;
      border-radius: 50%;
      opacity: 0.3;
      animation: float infinite linear;
    }
  }
  
  &__gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 10%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  }
  
  &__content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-3xl;
    align-items: center;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-2xl;
      text-align: center;
    }
  }
  
  &__text {
    max-width: 600px;
    
    @media (max-width: $breakpoint-lg) {
      order: 2;
    }
  }
  
  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: $font-weight-bold;
    line-height: 1.1;
    margin-bottom: $spacing-lg;
    
    .hero__greeting {
      display: block;
      font-size: 0.6em;
      color: $gray-600;
      font-weight: $font-weight-medium;
      margin-bottom: $spacing-xs;
    }
    
    .hero__name {
      display: block;
      background: linear-gradient(135deg, $primary, $accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: $spacing-xs;
    }
    
    .hero__role {
      display: block;
      font-size: 0.7em;
      color: $gray-700;
      font-weight: $font-weight-semibold;
    }
  }
  
  &__subtitle {
    font-size: $font-size-lg;
    color: $gray-600;
    line-height: 1.6;
    margin-bottom: $spacing-2xl;
  }
  
  &__buttons {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-2xl;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
    }
    
    .btn {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      
      svg {
        transition: transform $transition-fast;
      }
      
      &:hover svg {
        transform: translateX(2px);
      }
    }
  }
  
  &__social {
    display: flex;
    gap: $spacing-md;
    
    @media (max-width: $breakpoint-lg) {
      justify-content: center;
    }
  }
  
  &__visual {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: $breakpoint-lg) {
      order: 1;
    }
  }
  
  &__image {
    position: relative;
    margin-bottom: $spacing-xl;
    
    .image-placeholder {
      position: relative;
      animation: float 3s ease-in-out infinite;
    }
  }
  
  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    justify-content: center;
    max-width: 300px;
  }
  
  &__scroll {
    position: absolute;
    bottom: $spacing-xl;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xs;
    color: $gray-500;
    font-size: $font-size-sm;
    
    svg {
      animation: bounce 2s infinite;
    }
  }
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: $border-radius-full;
  background: $gray-100;
  color: $gray-600;
  text-decoration: none;
  transition: all $transition-fast;
  
  &:hover {
    background: $primary;
    color: $white;
    transform: translateY(-2px);
  }
}

.skill-badge {
  background: rgba(59, 130, 246, 0.1);
  color: $primary;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-full;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  border: 1px solid rgba(59, 130, 246, 0.2);
  animation: skillFadeIn 0.5s ease-out both;
}

// Animations
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes skillFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out 0.2s both;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out 0.4s both;
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out 0.6s both;
}

.animate-bounce {
  animation: fadeIn 0.8s ease-out 1s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>