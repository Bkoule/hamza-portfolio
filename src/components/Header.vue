<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/" class="logo">
            <span class="logo__text">Portfolio</span>
          </router-link>
        </div>
        
        <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link to="/" class="nav__link" @click="closeMenu">Accueil</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/about" class="nav__link" @click="closeMenu">À propos</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/projects" class="nav__link" @click="closeMenu">Projets</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/contact" class="nav__link" @click="closeMenu">Contact</router-link>
            </li>
          </ul>
        </nav>
        
        <button 
          class="header__toggle"
          @click="toggleMenu"
          :class="{ 'header__toggle--open': isMenuOpen }"
          aria-label="Toggle menu"
        >
          <span class="toggle__line"></span>
          <span class="toggle__line"></span>
          <span class="toggle__line"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: $shadow-sm;
  transition: all $transition-normal;
  
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-md 0;
    min-height: 70px;
  }
  
  &__logo {
    z-index: 1001;
  }
  
  &__nav {
    @media (max-width: $breakpoint-md) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $white;
      transform: translateX(-100%);
      transition: transform $transition-normal;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &--open {
        transform: translateX(0);
      }
    }
  }
  
  &__toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: $spacing-sm;
    z-index: 1001;
    
    @media (max-width: $breakpoint-md) {
      display: flex;
    }
    
    &--open {
      .toggle__line {
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        &:nth-child(2) {
          opacity: 0;
        }
        
        &:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }
  }
}

.logo {
  text-decoration: none;
  color: $primary;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  transition: color $transition-fast;
  
  &:hover {
    color: $accent;
  }
  
  &__text {
    background: linear-gradient(135deg, $primary, $accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.nav {
  &__list {
    display: flex;
    gap: $spacing-xl;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      gap: $spacing-2xl;
      text-align: center;
    }
  }
  
  &__link {
    color: $gray-700;
    text-decoration: none;
    font-weight: $font-weight-medium;
    position: relative;
    transition: color $transition-fast;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-xl;
    }
    
    &:hover {
      color: $primary;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, $primary, $accent);
      transition: width $transition-fast;
    }
    
    &:hover::after,
    &.router-link-active::after {
      width: 100%;
    }
    
    &.router-link-active {
      color: $primary;
    }
  }
}

.toggle {
  &__line {
    width: 25px;
    height: 3px;
    background: $gray-700;
    transition: all $transition-fast;
    
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
}
</style>