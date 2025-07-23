<template>
  <div class="stacked-cards">
    <div class="cards-container">
      <div class="cards-stack">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="card"
          :class="{ 
            active: index === currentIndex,
            next: index === (currentIndex + 1) % images.length,
            prev: index === (currentIndex - 1 + images.length) % images.length
          }"
          :style="{ 
            zIndex: images.length - Math.abs(index - currentIndex),
            transform: getCardTransform(index)
          }"
          @click="selectCard(index)"
        >
          <div class="card-inner">
            <div class="card-front">
              <img :src="image" :alt="`Screenshot ${index + 1}`" />
              <div class="card-overlay">
                <div class="card-number">{{ index + 1 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stack-info">
        <div class="current-indicator">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
        <div class="stack-title">{{ title }}</div>
      </div>
    </div>
    
    <div class="navigation-controls">
      <button 
        @click="prevCard" 
        class="nav-btn prev"
        :disabled="currentIndex === 0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>
      
      <div class="card-indicators">
        <button 
          v-for="(_, index) in images" 
          :key="index"
          @click="selectCard(index)"
          class="indicator"
          :class="{ active: index === currentIndex }"
        />
      </div>
      
      <button 
        @click="nextCard" 
        class="nav-btn next"
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
  },
  title: {
    type: String,
    default: 'Screenshots'
  }
})

const currentIndex = ref(0)

const getCardTransform = (index) => {
  const diff = index - currentIndex.value
  const absDistance = Math.abs(diff)
  
  if (absDistance === 0) {
    // Active card
    return 'translateX(0px) translateY(0px) rotateY(0deg) scale(1)'
  } else if (absDistance === 1) {
    // Adjacent cards
    const direction = diff > 0 ? 1 : -1
    return `translateX(${direction * 20}px) translateY(${absDistance * 10}px) rotateY(${direction * 5}deg) scale(0.95)`
  } else {
    // Distant cards
    const direction = diff > 0 ? 1 : -1
    return `translateX(${direction * 40}px) translateY(${absDistance * 15}px) rotateY(${direction * 10}deg) scale(0.9)`
  }
}

const selectCard = (index) => {
  currentIndex.value = index
}

const nextCard = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.stacked-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xl;
  padding: $spacing-xl;
  
  .cards-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-lg;
    
    .cards-stack {
      position: relative;
      width: 280px;
      height: 500px;
      perspective: 1000px;
      
      .card {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
        
        &.active {
          .card-overlay {
            opacity: 0;
          }
        }
        
        &:hover {
          .card-overlay {
            opacity: 1;
          }
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          background: $white;
          
          .card-front {
            position: relative;
            width: 100%;
            height: 100%;
            
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 20px;
            }
            
            .card-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: opacity 0.3s ease;
              border-radius: 20px;
              
              .card-number {
                width: 60px;
                height: 60px;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: $font-size-xl;
                font-weight: $font-weight-bold;
                color: $gray-800;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
              }
            }
          }
        }
      }
    }
    
    .stack-info {
      text-align: center;
      color: $gray-600;
      
      .current-indicator {
        font-size: $font-size-lg;
        font-weight: $font-weight-semibold;
        color: $primary;
        margin-bottom: $spacing-xs;
      }
      
      .stack-title {
        font-size: $font-size-sm;
        color: $gray-500;
      }
    }
  }
  
  .navigation-controls {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    
    .nav-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: $white;
      border: 2px solid $gray-300;
      border-radius: 50%;
      color: $gray-600;
      cursor: pointer;
      transition: all $transition-fast;
      
      &:hover:not(:disabled) {
        background: $primary;
        color: $white;
        border-color: $primary;
        transform: scale(1.1);
      }
      
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
    
    .card-indicators {
      display: flex;
      gap: $spacing-xs;
      
      .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: $gray-300;
        border: none;
        cursor: pointer;
        transition: all $transition-fast;
        
        &.active {
          background: $primary;
          transform: scale(1.3);
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
  .stacked-cards {
    padding: $spacing-lg;
    
    .cards-container {
      .cards-stack {
        width: 220px;
        height: 400px;
        
        .card {
          .card-inner {
            border-radius: 16px;
            
            .card-front {
              img {
                border-radius: 16px;
              }
              
              .card-overlay {
                border-radius: 16px;
                
                .card-number {
                  width: 50px;
                  height: 50px;
                  font-size: $font-size-lg;
                }
              }
            }
          }
        }
      }
    }
    
    .navigation-controls {
      gap: $spacing-md;
      
      .nav-btn {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>