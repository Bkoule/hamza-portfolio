<template>
  <div class="app">
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <router-link to="/" class="logo">
              Portfolio
            </router-link>
            
            <ul class="nav-menu">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">À propos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projets</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// App component - main entry point
</script>

<style lang="scss">
@import './assets/styles/variables';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: $white;
  box-shadow: $shadow-sm;
  position: sticky;
  top: 0;
  z-index: $z-sticky;
  
  .navbar {
    padding: $spacing-md 0;
    
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .logo {
        font-size: $font-size-xl;
        font-weight: $font-weight-bold;
        color: $primary;
        text-decoration: none;
        
        &:hover {
          color: $accent;
        }
      }
      
      .nav-menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: $spacing-xl;
        
        .nav-item {
          .nav-link {
            color: $gray-700;
            text-decoration: none;
            font-weight: $font-weight-medium;
            transition: color $transition-fast;
            position: relative;
            
            &:hover {
              color: $primary;
            }
            
            &.router-link-active {
              color: $primary;
              
              &::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                right: 0;
                height: 2px;
                background: $primary;
                border-radius: $border-radius-sm;
              }
            }
          }
        }
      }
    }
  }
}

.main-content {
  flex: 1;
}

.footer {
  background: $gray-900;
  color: $white;
  padding: $spacing-lg 0;
  text-align: center;
  
  p {
    margin: 0;
    color: $gray-400;
  }
}

// Responsive navigation
@media (max-width: $breakpoint-md) {
  .header {
    .nav-content {
      flex-direction: column;
      gap: $spacing-md;
      
      .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
        gap: $spacing-md;
      }
    }
  }
}
</style>