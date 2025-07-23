<template>
  <div class="phone-gallery-3d">
    <div class="gallery-container">
      <div class="phones-wrapper" :style="{ transform: `rotateY(${rotation}deg)` }">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="phone-frame"
          :class="{ active: index === currentIndex }"
          :style="{ transform: `rotateY(${index * 90}deg) translateZ(280px)` }"
        >
          <div class="phone-screen">
            <img :src="image" :alt="`Screenshot ${index + 1}`" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="gallery-controls">
      <button 
        @click="prev" 
        class="control-btn"
        :disabled="currentIndex === 0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>
      
      <div class="dots-indicator">
        <button 
          v-for="(_, index) in images" 
          :key="index"
          @click="goTo(index)"
          class="dot"
          :class="{ active: index === currentIndex }"
        />
      </div>
      
      <button 
        @click="next" 
        class="control-btn"
        :disabled="currentIndex === images.length - 1"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const rotation = computed(() => {
  return -currentIndex.value * 90
})

const next = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goTo = (index) => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.phone-gallery-3d {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xl;
  padding: $spacing-2xl;
  
  .gallery-container {
    perspective: 1200px;
    width: 400px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .phones-wrapper {
      position: relative;
      width: 280px;
      height: 560px;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      
      .phone-frame {
        position: absolute;
        width: 280px;
        height: 560px;
        background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
        border-radius: 35px;
        padding: 20px;
        box-shadow: 
          0 25px 50px rgba(0, 0, 0, 0.3),
          inset 0 2px 4px rgba(255, 255, 255, 0.1);
        transition: all 0.6s ease;
        
        &.active {
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(59, 130, 246, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.15);
        }
        
        &::before {
          content: '';
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: #666;
          border-radius: 2px;
        }
        
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
        }
      }
    }
  }
  
  .gallery-controls {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    
    .control-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: $white;
      border: 1px solid $gray-300;
      border-radius: $border-radius-full;
      color: $gray-600;
      cursor: pointer;
      transition: all $transition-fast;
      
      &:hover:not(:disabled) {
        background: $primary;
        color: $white;
        border-color: $primary;
        transform: scale(1.05);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    
    .dots-indicator {
      display: flex;
      gap: $spacing-xs;
      
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $gray-300;
        border: none;
        cursor: pointer;
        transition: all $transition-fast;
        
        &.active {
          background: $primary;
          transform: scale(1.2);
        }
        
        &:hover {
          background: $primary;
          opacity: 0.8;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .phone-gallery-3d {
    padding: $spacing-lg;
    
    .gallery-container {
      width: 320px;
      height: 600px;
      
      .phones-wrapper {
        width: 220px;
        height: 440px;
        
        .phone-frame {
          width: 220px;
          height: 440px;
          padding: 15px;
          border-radius: 28px;
          
          .phone-screen {
            border-radius: 20px;
            
            img {
              border-radius: 20px;
            }
          }
        }
      }
    }
  }
}
</style>