<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__section">
          <h3 class="footer__title">Portfolio</h3>
          <p class="footer__description">
            Développeur passionné créant des expériences web modernes et performantes.
          </p>
        </div>
        
        <div class="footer__section">
          <h4 class="footer__subtitle">Navigation</h4>
          <ul class="footer__links">
            <li><router-link to="/" class="footer__link">Accueil</router-link></li>
            <li><router-link to="/about" class="footer__link">À propos</router-link></li>
            <li><router-link to="/projects" class="footer__link">Projets</router-link></li>
            <li><router-link to="/contact" class="footer__link">Contact</router-link></li>
          </ul>
        </div>
        
        <div class="footer__section">
          <h4 class="footer__subtitle">Réseaux sociaux</h4>
          <div class="footer__social">
            <a href="#" class="social__link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="social__link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social__link" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} Portfolio. Tous droits réservés.
        </p>
        <p class="footer__made-with">
          Fait avec ❤️ et Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.footer {
  background: $gray-900;
  color: $white;
  padding: $spacing-3xl 0 $spacing-lg;
  
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-2xl;
    margin-bottom: $spacing-2xl;
    
    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
      gap: $spacing-xl;
    }
  }
  
  &__section {
    &:first-child {
      grid-column: span 2;
      
      @media (max-width: $breakpoint-md) {
        grid-column: span 1;
      }
    }
  }
  
  &__title {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
    background: linear-gradient(135deg, $primary, $accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &__subtitle {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-md;
    color: $gray-300;
  }
  
  &__description {
    color: $gray-400;
    line-height: 1.6;
    margin-bottom: $spacing-md;
  }
  
  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: $spacing-sm;
    }
  }
  
  &__link {
    color: $gray-400;
    text-decoration: none;
    transition: color $transition-fast;
    
    &:hover {
      color: $primary;
    }
    
    &.router-link-active {
      color: $primary;
    }
  }
  
  &__social {
    display: flex;
    gap: $spacing-md;
  }
  
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: $spacing-xl;
    border-top: 1px solid $gray-800;
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-sm;
      text-align: center;
    }
  }
  
  &__copyright,
  &__made-with {
    color: $gray-500;
    font-size: $font-size-sm;
    margin: 0;
  }
}

.social {
  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: $gray-800;
    border-radius: $border-radius-full;
    color: $gray-400;
    text-decoration: none;
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
</style>