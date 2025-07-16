<template>
  <div class="app">
    <div class="container">
      <div class="hero">
        <h1 class="animate-fade-in">Portfolio 2025</h1>
        <p class="animate-slide-in-left">Design system configuré avec succès ! 🎨</p>
        
        <div class="buttons animate-slide-in-right">
          <button class="btn btn-primary">Bouton Principal</button>
          <button class="btn btn-secondary">Bouton Secondaire</button>
          <button class="btn btn-outline">Bouton Outline</button>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3>Variables SCSS</h3>
          </div>
          <div class="card-body">
            <p>Système de design complet avec :</p>
            <ul>
              <li>✅ Couleurs cohérentes</li>
              <li>✅ Typographie responsive</li>
              <li>✅ Espacements standardisés</li>
              <li>✅ Composants réutilisables</li>
              <li>✅ Animations fluides</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// App component - main entry point
</script>

<style lang="scss">
@import './assets/styles/variables';

.app {
  min-height: 100vh;
  background: linear-gradient(135deg, $light 0%, $gray-100 100%);
  padding: $spacing-3xl 0;
}

.hero {
  text-align: center;
  
  h1 {
    font-size: $font-size-5xl;
    background: linear-gradient(135deg, $primary, $accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: $spacing-xl;
  }
  
  p {
    font-size: $font-size-xl;
    color: $gray-600;
    margin-bottom: $spacing-2xl;
  }
}

.buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  margin-bottom: $spacing-3xl;
  flex-wrap: wrap;
}

.card {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: $spacing-xs 0;
      color: $gray-700;
      
      &:not(:last-child) {
        border-bottom: 1px solid $gray-200;
      }
    }
  }
}
</style>