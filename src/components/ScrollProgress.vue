<template>
  <div class="scroll-progress">
    <div 
      class="progress-bar"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { useScrollProgress } from '@/composables/useScrollAnimation'

const { scrollProgress } = useScrollProgress()
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;
  
  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, $primary, $accent);
    transition: width 0.2s ease-out;
    border-radius: 0 2px 2px 0;
  }
}
</style>