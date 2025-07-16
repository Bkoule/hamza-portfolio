<template>
  <div class="cursor-container">
    <div 
      class="cursor"
      :class="{ 'cursor--moving': isMouseMoving }"
      :style="{ 
        left: mousePosition.x + 'px', 
        top: mousePosition.y + 'px' 
      }"
    ></div>
    <div 
      class="cursor-trail"
      :style="{ 
        left: mousePosition.x + 'px', 
        top: mousePosition.y + 'px' 
      }"
    ></div>
  </div>
</template>

<script setup>
import { useMouseTracker } from '@/composables/useScrollAnimation'

const { mousePosition, isMouseMoving } = useMouseTracker()
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.cursor-container {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  
  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}

.cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: $primary;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  
  &--moving {
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.cursor-trail {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
  animation: pulse 2s infinite;
}
</style>