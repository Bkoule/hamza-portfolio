<template>
  <div class="browser-mockup">
    <div class="browser-window">
      <!-- Browser Header -->
      <div class="browser-header">
        <div class="browser-controls">
          <div class="control-buttons">
            <div class="control-btn close"></div>
            <div class="control-btn minimize"></div>
            <div class="control-btn maximize"></div>
          </div>
          
          <div class="browser-tabs">
            <div class="tab active">
              <div class="tab-favicon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9,12 l2,2 4,-4"/>
                </svg>
              </div>
              <span class="tab-title">{{ title }}</span>
              <div class="tab-close">×</div>
            </div>
            <div class="new-tab">+</div>
          </div>
        </div>
        
        <div class="browser-toolbar">
          <div class="navigation-buttons">
            <button class="nav-btn" disabled>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            <button class="nav-btn" disabled>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
            <button class="nav-btn refresh">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23,4 23,10 17,10"/>
                <polyline points="1,20 1,14 7,14"/>
                <path d="M20.49,9A9,9,0,0,0,5.64,5.64L1,10M3.51,15a9,9,0,0,0,14.85,3.36L23,14"/>
              </svg>
            </button>
          </div>
          
          <div class="address-bar">
            <div class="security-indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7,11V7a5,5,0,0,1,10,0v4"/>
              </svg>
            </div>
            <input 
              type="text" 
              :value="url" 
              readonly 
              class="url-input"
            />
            <div class="bookmark-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            </div>
          </div>
          
          <div class="browser-actions">
            <button class="action-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Browser Content -->
      <div class="browser-content">
        <div class="website-container">
          <img :src="screenshot" :alt="title" class="website-screenshot" />
          <div class="website-overlay">
            <div class="overlay-content">
              <div class="project-info">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
              </div>
              <div class="project-actions">
                <button v-if="demoUrl" @click="openDemo" class="demo-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18,13v6a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8A2,2,0,0,1,5,6H11"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Voir le site
                </button>
                <button v-if="githubUrl" @click="openGithub" class="github-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  screenshot: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: 'https://example.com'
  },
  demoUrl: {
    type: String,
    default: null
  },
  githubUrl: {
    type: String,
    default: null
  }
})

const openDemo = () => {
  if (props.demoUrl) {
    window.open(props.demoUrl, '_blank')
  }
}

const openGithub = () => {
  if (props.githubUrl) {
    window.open(props.githubUrl, '_blank')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.browser-mockup {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: $spacing-xl;
  
  .browser-window {
    background: $white;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    
    .browser-header {
      background: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
      
      .browser-controls {
        display: flex;
        align-items: center;
        padding: 12px 16px 0;
        
        .control-buttons {
          display: flex;
          gap: 8px;
          margin-right: 16px;
          
          .control-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            
            &.close {
              background: #ff5f57;
            }
            
            &.minimize {
              background: #ffbd2e;
            }
            
            &.maximize {
              background: #28ca42;
            }
          }
        }
        
        .browser-tabs {
          display: flex;
          align-items: center;
          flex: 1;
          
          .tab {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: $white;
            border-radius: 8px 8px 0 0;
            border: 1px solid #e0e0e0;
            border-bottom: none;
            max-width: 240px;
            
            &.active {
              background: $white;
            }
            
            .tab-favicon {
              color: #4285f4;
              display: flex;
              align-items: center;
            }
            
            .tab-title {
              font-size: $font-size-sm;
              color: $gray-700;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              flex: 1;
            }
            
            .tab-close {
              color: $gray-500;
              cursor: pointer;
              font-size: 16px;
              
              &:hover {
                color: $gray-800;
              }
            }
          }
          
          .new-tab {
            padding: 8px 12px;
            color: $gray-600;
            cursor: pointer;
            
            &:hover {
              background: rgba(0, 0, 0, 0.05);
              border-radius: 4px;
            }
          }
        }
      }
      
      .browser-toolbar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 16px 12px;
        
        .navigation-buttons {
          display: flex;
          gap: 4px;
          
          .nav-btn {
            width: 32px;
            height: 32px;
            border: none;
            background: none;
            border-radius: 4px;
            color: $gray-600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &:hover:not(:disabled) {
              background: rgba(0, 0, 0, 0.05);
            }
            
            &:disabled {
              opacity: 0.4;
              cursor: not-allowed;
            }
          }
        }
        
        .address-bar {
          flex: 1;
          display: flex;
          align-items: center;
          background: $white;
          border: 1px solid #e0e0e0;
          border-radius: 24px;
          padding: 8px 16px;
          
          .security-indicator {
            color: #4285f4;
            margin-right: 8px;
            display: flex;
            align-items: center;
          }
          
          .url-input {
            flex: 1;
            border: none;
            outline: none;
            font-size: $font-size-sm;
            color: $gray-800;
            background: none;
          }
          
          .bookmark-btn {
            color: $gray-500;
            cursor: pointer;
            display: flex;
            align-items: center;
            
            &:hover {
              color: $gray-800;
            }
          }
        }
        
        .browser-actions {
          .action-btn {
            width: 32px;
            height: 32px;
            border: none;
            background: none;
            border-radius: 4px;
            color: $gray-600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &:hover {
              background: rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
    
    .browser-content {
      background: $white;
      min-height: 500px;
      
      .website-container {
        position: relative;
        width: 100%;
        height: 100%;
        
        .website-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .website-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          
          .overlay-content {
            text-align: center;
            color: $white;
            
            .project-info {
              margin-bottom: $spacing-lg;
              
              h4 {
                font-size: $font-size-xl;
                font-weight: $font-weight-bold;
                margin-bottom: $spacing-sm;
              }
              
              p {
                font-size: $font-size-sm;
                opacity: 0.9;
                max-width: 400px;
              }
            }
            
            .project-actions {
              display: flex;
              gap: $spacing-md;
              justify-content: center;
              
              .demo-btn,
              .github-btn {
                display: flex;
                align-items: center;
                gap: $spacing-xs;
                padding: $spacing-sm $spacing-md;
                border: 2px solid $white;
                border-radius: $border-radius-md;
                color: $white;
                background: none;
                cursor: pointer;
                font-size: $font-size-sm;
                font-weight: $font-weight-medium;
                transition: all 0.3s ease;
                
                &:hover {
                  background: $white;
                  color: $gray-800;
                }
              }
            }
          }
        }
        
        &:hover .website-overlay {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .browser-mockup {
    padding: $spacing-lg;
    
    .browser-window {
      .browser-header {
        .browser-controls {
          .browser-tabs {
            .tab {
              max-width: 160px;
            }
          }
        }
        
        .browser-toolbar {
          .navigation-buttons {
            .nav-btn {
              width: 28px;
              height: 28px;
            }
          }
        }
      }
      
      .browser-content {
        min-height: 350px;
      }
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .browser-mockup {
    .browser-window {
      .browser-header {
        .browser-controls {
          .browser-tabs {
            .tab {
              max-width: 120px;
              padding: 6px 12px;
            }
          }
        }
        
        .browser-toolbar {
          .address-bar {
            .url-input {
              font-size: $font-size-xs;
            }
          }
        }
      }
      
      .browser-content {
        min-height: 300px;
        
        .website-container {
          .website-overlay {
            .overlay-content {
              .project-actions {
                flex-direction: column;
                
                .demo-btn,
                .github-btn {
                  width: 100%;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>