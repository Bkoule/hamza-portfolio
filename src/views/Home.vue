<template>
  <div class="home">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="animate-fade-in">Bienvenue sur mon Portfolio</h1>
          <p class="hero-subtitle animate-slide-in-left">
            Développeur passionné par la création d'expériences numériques exceptionnelles
          </p>
          <div class="hero-buttons animate-slide-in-right">
            <router-link to="/projects" class="btn btn-primary">
              Voir mes projets
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section section">
      <div class="container">
        <h2 class="section-title">Ce que je fais</h2>
        <div class="features-grid">
          <div class="feature-card card">
            <div class="card-body">
              <h3>Développement Web</h3>
              <p>Création d'applications web modernes avec Vue.js, React et Node.js</p>
            </div>
          </div>
          <div class="feature-card card">
            <div class="card-body">
              <h3>Design UI/UX</h3>
              <p>Conception d'interfaces utilisateur intuitives et attrayantes</p>
            </div>
          </div>
          <div class="feature-card card">
            <div class="card-body">
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
// Home page component
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.home {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, $light 0%, $gray-100 100%);
  padding: $spacing-4xl 0;
  text-align: center;
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    
    h1 {
      font-size: $font-size-5xl;
      background: linear-gradient(135deg, $primary, $accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: $spacing-lg;
    }
    
    .hero-subtitle {
      font-size: $font-size-xl;
      color: $gray-600;
      margin-bottom: $spacing-2xl;
      line-height: $line-height-relaxed;
    }
    
    .hero-buttons {
      display: flex;
      gap: $spacing-md;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}

.features-section {
  .section-title {
    text-align: center;
    margin-bottom: $spacing-3xl;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-lg;
    
    .feature-card {
      text-align: center;
      transition: transform $transition-normal;
      
      &:hover {
        transform: translateY(-5px);
      }
      
      h3 {
        color: $primary;
        margin-bottom: $spacing-sm;
      }
      
      p {
        color: $gray-600;
        margin-bottom: 0;
      }
    }
  }
}
</style>