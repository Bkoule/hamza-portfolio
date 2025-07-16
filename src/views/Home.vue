<template>
  <div class="home">
    <Hero />
    
    <section class="features-section section">
      <div class="container">
        <h2 class="section-title">Ce que je fais</h2>
        <div class="features-grid">
          <div class="feature-card card">
            <div class="card-body">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  <path d="M12 11h4"/>
                  <path d="M12 16h4"/>
                  <path d="M8 11h.01"/>
                  <path d="M8 16h.01"/>
                </svg>
              </div>
              <h3>Développement Web</h3>
              <p>Création d'applications web modernes avec Vue.js, React et Node.js</p>
            </div>
          </div>
          <div class="feature-card card">
            <div class="card-body">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h20v18H2zM8 21l4-4 4 4"/>
                  <path d="M12 17V3"/>
                </svg>
              </div>
              <h3>Design UI/UX</h3>
              <p>Conception d'interfaces utilisateur intuitives et attrayantes</p>
            </div>
          </div>
          <div class="feature-card card">
            <div class="card-body">
              <div class="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Optimisation</h3>
              <p>Amélioration des performances et de l'expérience utilisateur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.home {
  min-height: 100vh;
}

.features-section {
  padding: $spacing-4xl 0;
  background: $gray-50;
  
  .section-title {
    text-align: center;
    margin-bottom: $spacing-3xl;
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $gray-900;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-2xl;
    
    .feature-card {
      text-align: center;
      transition: all $transition-normal;
      border: none;
      background: $white;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: $shadow-lg;
      }
      
      .card-body {
        padding: $spacing-2xl;
      }
      
      .feature-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, $primary, $accent);
        border-radius: $border-radius-full;
        margin: 0 auto $spacing-lg;
        color: $white;
        
        svg {
          width: 32px;
          height: 32px;
        }
      }
      
      h3 {
        color: $gray-900;
        margin-bottom: $spacing-md;
        font-size: $font-size-xl;
        font-weight: $font-weight-semibold;
      }
      
      p {
        color: $gray-600;
        margin-bottom: 0;
        line-height: 1.6;
      }
    }
  }
}
</style>