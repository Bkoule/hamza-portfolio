<template>
  <div class="flat-gallery">
    <div class="gallery-container">
      <div class="gallery-header">
        <h4>{{ title }}</h4>
        <div class="image-counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
      
      <div class="gallery-viewport">
        <div 
          class="gallery-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="gallery-slide"
          >
            <div class="slide-container">
              <img :src="image" :alt="`Screenshot ${index + 1}`" />
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <button 
          v-if="currentIndex > 0"
          @click="prevSlide" 
          class="nav-arrow prev"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        
        <button 
          v-if="currentIndex < images.length - 1"
          @click="nextSlide" 
          class="nav-arrow next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
      </div>
      
      <!-- Dots indicator -->
      <div class="gallery-dots">
        <button 
          v-for="(_, index) in images" 
          :key="index"
          @click="goToSlide(index)"
          class="dot"
          :class="{ active: index === currentIndex }"
        />
      </div>
      
      <!-- Thumbnails -->
      <div class="gallery-thumbnails">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="thumbnail"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        >
          <img :src="image" :alt="`Thumbnail ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Gallery'
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide()
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.flat-gallery {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: $spacing-xl;
  
  .gallery-container {
    .gallery-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $spacing-xl;
      
      h4 {
        font-size: $font-size-lg;
        font-weight: $font-weight-semibold;
        color: $gray-800;
        margin: 0;
      }
      
      .image-counter {
        font-size: $font-size-sm;
        color: $gray-600;
        background: $gray-100;
        padding: $spacing-xs $spacing-sm;
        border-radius: $border-radius-md;
        font-weight: $font-weight-medium;
      }
    }
    
    .gallery-viewport {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: $border-radius-lg;
      background: $gray-50;
      box-shadow: $shadow-md;
      
      .gallery-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        
        .gallery-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          
          .slide-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: $spacing-md;
            
            img {
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
              object-fit: contain;
              border-radius: $border-radius-md;
              box-shadow: $shadow-sm;
            }
          }
        }
      }
      
      .nav-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.95);
        border: none;
        border-radius: 50%;
        color: $gray-700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all $transition-fast;
        box-shadow: $shadow-md;
        z-index: 2;
        
        &:hover {
          background: $white;
          color: $primary;
          transform: translateY(-50%) scale(1.1);
        }
        
        &.prev {
          left: $spacing-md;
        }
        
        &.next {
          right: $spacing-md;
        }
      }
    }
    
    .gallery-dots {
      display: flex;
      justify-content: center;
      gap: $spacing-sm;
      margin: $spacing-xl 0;
      
      .dot {
        width: 12px;
        height: 12px;
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
    
    .gallery-thumbnails {
      display: flex;
      gap: $spacing-sm;
      overflow-x: auto;
      padding: $spacing-sm 0;
      
      &::-webkit-scrollbar {
        height: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: $gray-100;
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: $gray-400;
        border-radius: 3px;
        
        &:hover {
          background: $gray-500;
        }
      }
      
      .thumbnail {
        flex: 0 0 80px;
        height: 60px;
        border-radius: $border-radius-md;
        overflow: hidden;
        cursor: pointer;
        opacity: 0.6;
        transition: all $transition-fast;
        border: 2px solid transparent;
        
        &.active {
          opacity: 1;
          border-color: $primary;
          transform: scale(1.05);
        }
        
        &:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .flat-gallery {
    padding: $spacing-lg;
    
    .gallery-container {
      .gallery-viewport {
        height: 300px;
        
        .nav-arrow {
          width: 36px;
          height: 36px;
          
          &.prev {
            left: $spacing-sm;
          }
          
          &.next {
            right: $spacing-sm;
          }
        }
      }
      
      .gallery-thumbnails {
        .thumbnail {
          flex: 0 0 60px;
          height: 45px;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .flat-gallery {
    .gallery-container {
      .gallery-header {
        flex-direction: column;
        gap: $spacing-sm;
        text-align: center;
      }
      
      .gallery-viewport {
        height: 250px;
      }
      
      .gallery-thumbnails {
        justify-content: center;
      }
    }
  }
}
</style>