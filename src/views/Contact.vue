<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Contactez-moi</h1>
          <p class="hero-subtitle">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités 
            professionnelles ou pour en savoir plus sur mon expérience.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>Hamza.Benkhadra@hotmail.com</p>
            <a href="mailto:Hamza.Benkhadra@hotmail.com" class="method-link">Envoyer un email</a>
          </div>

          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Téléphone</h3>
            <p>+32 484 506 544</p>
            <a href="tel:+32484506544" class="method-link">Appeler</a>
          </div>

          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Localisation</h3>
            <p>Bruxelles, Belgique</p>
            <span class="method-link">Disponible à distance</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Summary Section -->
    <section class="professional-summary">
      <div class="container">
        <div class="summary-content">
          <h2>Profil Professionnel</h2>
          <p>
            Développeur Front-End passionné avec une solide expérience dans le développement 
            d'applications mobiles et web. Spécialisé en développement mobile natif (Android) 
            et technologies web modernes, avec une forte aptitude à apprendre rapidement de 
            nouvelles technologies et à m'adapter aux besoins des projets.
          </p>
          <div class="cv-download">
            <a href="#" class="btn btn-primary" download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section class="social-section">
      <div class="container">
        <h2>Retrouvez-moi sur</h2>
        <div class="social-links">
          <a href="https://github.com/hamzabkd" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/hamza-benkhadra" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Simple contact page for employers
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.contact {
  min-height: 100vh;
}

// Hero Section
.contact-hero {
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

// Contact Methods
.contact-methods {
  background: $white;
  padding: $spacing-3xl 0;
  
  .methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-2xl;
    
    .method-card {
      text-align: center;
      padding: $spacing-2xl;
      border-radius: $border-radius-lg;
      background: $gray-50;
      transition: all $transition-normal;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: $shadow-lg;
      }
      
      .method-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, $primary, $accent);
        color: $white;
        border-radius: $border-radius-full;
        margin: 0 auto $spacing-lg;
      }
      
      h3 {
        font-size: $font-size-xl;
        font-weight: $font-weight-semibold;
        color: $gray-900;
        margin-bottom: $spacing-sm;
      }
      
      p {
        color: $gray-600;
        margin-bottom: $spacing-md;
      }
      
      .method-link {
        display: inline-block;
        color: $primary;
        text-decoration: none;
        font-weight: $font-weight-medium;
        transition: color $transition-fast;
        
        &:hover {
          color: $accent;
        }
      }
    }
  }
}

// Professional Summary Section
.professional-summary {
  background: $gray-50;
  padding: $spacing-4xl 0;
  
  .summary-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    h2 {
      font-size: $font-size-3xl;
      font-weight: $font-weight-bold;
      color: $gray-900;
      margin-bottom: $spacing-lg;
    }
    
    p {
      font-size: $font-size-lg;
      color: $gray-600;
      line-height: 1.6;
      margin-bottom: $spacing-2xl;
    }
    
    .cv-download {
      .btn {
        display: inline-flex;
        align-items: center;
        gap: $spacing-sm;
        padding: $spacing-md $spacing-xl;
        background: linear-gradient(135deg, $primary, $accent);
        color: $white;
        text-decoration: none;
        border-radius: $border-radius-md;
        font-weight: $font-weight-semibold;
        transition: all $transition-fast;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: $shadow-lg;
        }
        
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

// Social Section
.social-section {
  background: $white;
  padding: $spacing-3xl 0;
  text-align: center;
  
  h2 {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $gray-900;
    margin-bottom: $spacing-2xl;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    flex-wrap: wrap;
    
    .social-link {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-md $spacing-lg;
      background: $gray-50;
      border-radius: $border-radius-full;
      text-decoration: none;
      color: $gray-700;
      font-weight: $font-weight-medium;
      transition: all $transition-fast;
      
      &:hover {
        background: $primary;
        color: $white;
        transform: translateY(-2px);
      }
      
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}

</style>