<template>
  <Transition name="fade">
    <button 
      v-if="showButton"
      @click="scrollToTop"
      class="back-to-top"
      :class="{ 'back-to-top--visible': showButton }"
      aria-label="Retour en haut"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 14L12 9L17 14"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: $primary;
  color: $white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $shadow-lg;
  transition: all $transition-normal;
  z-index: 1000;
  
  &:hover {
    background: $accent;
    transform: translateY(-2px);
    box-shadow: $shadow-xl;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    transition: transform $transition-fast;
  }
  
  &:hover svg {
    transform: translateY(-2px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-normal, transform $transition-normal;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>