<template>
  <div class="about">
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h1 class="animate-fade-in">À propos de moi</h1>
            <p class="animate-slide-in-left">
              Passionné par le développement web et les nouvelles technologies, 
              je crée des expériences numériques innovantes et performantes.
            </p>
            <p class="animate-slide-in-left">
              Avec une expertise en Vue.js, React, Node.js et bien d'autres technologies,
              je transforme les idées en applications web de qualité.
            </p>
            
            <div class="skills animate-slide-in-right">
              <h3>Compétences principales</h3>
              <div class="skills-grid">
                <div class="skill-item">Vue.js</div>
                <div class="skill-item">React</div>
                <div class="skill-item">Node.js</div>
                <div class="skill-item">TypeScript</div>
                <div class="skill-item">SCSS</div>
                <div class="skill-item">MongoDB</div>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="image-placeholder">
              <p>Photo de profil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page component
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.about {
  min-height: 100vh;
  background: linear-gradient(135deg, $white 0%, $gray-50 100%);
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    align-items: center;
    
    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 2fr 1fr;
    }
  }
  
  .about-text {
    h1 {
      margin-bottom: $spacing-xl;
      color: $primary;
    }
    
    p {
      font-size: $font-size-lg;
      line-height: $line-height-relaxed;
      margin-bottom: $spacing-lg;
      color: $gray-700;
    }
  }
  
  .skills {
    margin-top: $spacing-2xl;
    
    h3 {
      margin-bottom: $spacing-md;
      color: $gray-900;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: $spacing-sm;
      
      .skill-item {
        background: $primary;
        color: $white;
        padding: $spacing-sm $spacing-md;
        border-radius: $border-radius-md;
        text-align: center;
        font-weight: $font-weight-medium;
        transition: transform $transition-fast;
        
        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
  
  .about-image {
    display: flex;
    justify-content: center;
    
    .image-placeholder {
      width: 300px;
      height: 300px;
      border-radius: $border-radius-lg;
      background: linear-gradient(135deg, $gray-200, $gray-300);
      display: flex;
      align-items: center;
      justify-content: center;
      color: $gray-600;
      font-size: $font-size-lg;
      box-shadow: $shadow-lg;
    }
  }
}
</style>