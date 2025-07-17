<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Contactez-moi</h1>
          <p class="hero-subtitle">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
            Je serais ravi de discuter avec vous et de voir comment je peux vous aider.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>contact@portfolio.com</p>
            <a href="mailto:contact@portfolio.com" class="method-link">Envoyer un email</a>
          </div>

          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
            <a href="tel:+33123456789" class="method-link">Appeler</a>
          </div>

          <div class="method-card">
            <div class="method-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Localisation</h3>
            <p>Paris, France</p>
            <span class="method-link">Disponible à distance</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <h2>Envoyez-moi un message</h2>
            <p>Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  :class="['form-input', { 'error': errors.name, 'success': !errors.name && form.name }]"
                  @blur="validateField('name')"
                  @input="clearError('name')"
                  placeholder="Votre nom complet"
                >
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  :class="['form-input', { 'error': errors.email, 'success': !errors.email && form.email }]"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                  placeholder="votre@email.com"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="subject">Sujet *</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  :class="['form-input', { 'error': errors.subject, 'success': !errors.subject && form.subject }]"
                  @blur="validateField('subject')"
                  @change="clearError('subject')"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="projet">Nouveau projet</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="question">Question générale</option>
                  <option value="autre">Autre</option>
                </select>
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="budget">Budget estimé</label>
                <select 
                  id="budget" 
                  v-model="form.budget"
                  class="form-input"
                >
                  <option value="">Non précisé</option>
                  <option value="1000-5000">1 000€ - 5 000€</option>
                  <option value="5000-10000">5 000€ - 10 000€</option>
                  <option value="10000-20000">10 000€ - 20 000€</option>
                  <option value="20000+">20 000€+</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message"
                :class="['form-input', { 'error': errors.message, 'success': !errors.message && form.message }]"
                @blur="validateField('message')"
                @input="clearError('message')"
                rows="6"
                placeholder="Décrivez votre projet ou votre question..."
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              <span class="character-count">{{ form.message.length }}/1000</span>
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  v-model="form.newsletter"
                  class="checkbox-input"
                >
                <span class="checkbox-custom"></span>
                J'aimerais recevoir des nouvelles de vos projets et actualités
              </label>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-large"
              :class="{ 'loading': isSubmitting }"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="loading-spinner"></span>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="submitStatus" class="status-message" :class="submitStatus.type">
          <div class="status-icon">
            <svg v-if="submitStatus.type === 'success'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div class="status-content">
            <h3>{{ submitStatus.title }}</h3>
            <p>{{ submitStatus.message }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section class="social-section">
      <div class="container">
        <h2>Retrouvez-moi sur</h2>
        <div class="social-links">
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: '',
  newsletter: false
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const validateField = (field) => {
  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Le nom est requis'
      } else if (form.name.length < 2) {
        errors.name = 'Le nom doit contenir au moins 2 caractères'
      } else {
        errors.name = ''
      }
      break
    
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) {
        errors.email = 'L\'email est requis'
      } else if (!emailRegex.test(form.email)) {
        errors.email = 'Format d\'email invalide'
      } else {
        errors.email = ''
      }
      break
    
    case 'subject':
      if (!form.subject) {
        errors.subject = 'Veuillez sélectionner un sujet'
      } else {
        errors.subject = ''
      }
      break
    
    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Le message est requis'
      } else if (form.message.length < 10) {
        errors.message = 'Le message doit contenir au moins 10 caractères'
      } else if (form.message.length > 1000) {
        errors.message = 'Le message ne peut pas dépasser 1000 caractères'
      } else {
        errors.message = ''
      }
      break
  }
}

const clearError = (field) => {
  errors[field] = ''
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('message')
  
  return !errors.name && !errors.email && !errors.subject && !errors.message
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Succès
    submitStatus.value = {
      type: 'success',
      title: 'Message envoyé avec succès !',
      message: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.'
    }
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    
  } catch (error) {
    // Erreur
    submitStatus.value = {
      type: 'error',
      title: 'Erreur lors de l\'envoi',
      message: 'Une erreur est survenue. Veuillez réessayer plus tard.'
    }
  } finally {
    isSubmitting.value = false
    
    // Auto-hide status message after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.contact {
  min-height: 100vh;
}

// Hero Section
.contact-hero {
  background: linear-gradient(135deg, $gray-50 0%, $white 100%);
  padding: $spacing-4xl 0;
  
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    
    .hero-title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-lg;
      background: linear-gradient(135deg, $primary, $accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: $font-size-xl;
      color: $gray-600;
      line-height: 1.6;
    }
  }
}

// Contact Methods
.contact-methods {
  background: $white;
  padding: $spacing-3xl 0;
  
  .methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-2xl;
    
    .method-card {
      text-align: center;
      padding: $spacing-2xl;
      border-radius: $border-radius-lg;
      background: $gray-50;
      transition: all $transition-normal;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: $shadow-lg;
      }
      
      .method-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, $primary, $accent);
        color: $white;
        border-radius: $border-radius-full;
        margin: 0 auto $spacing-lg;
      }
      
      h3 {
        font-size: $font-size-xl;
        font-weight: $font-weight-semibold;
        color: $gray-900;
        margin-bottom: $spacing-sm;
      }
      
      p {
        color: $gray-600;
        margin-bottom: $spacing-md;
      }
      
      .method-link {
        display: inline-block;
        color: $primary;
        text-decoration: none;
        font-weight: $font-weight-medium;
        transition: color $transition-fast;
        
        &:hover {
          color: $accent;
        }
      }
    }
  }
}

// Contact Form Section
.contact-form-section {
  background: $gray-50;
  padding: $spacing-4xl 0;
  
  .form-container {
    max-width: 800px;
    margin: 0 auto;
    
    .form-header {
      text-align: center;
      margin-bottom: $spacing-3xl;
      
      h2 {
        font-size: $font-size-3xl;
        font-weight: $font-weight-bold;
        color: $gray-900;
        margin-bottom: $spacing-md;
      }
      
      p {
        font-size: $font-size-lg;
        color: $gray-600;
        line-height: 1.6;
      }
    }
    
    .contact-form {
      background: $white;
      padding: $spacing-3xl;
      border-radius: $border-radius-lg;
      box-shadow: $shadow-md;
      
      .form-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: $spacing-lg;
        
        @media (min-width: $breakpoint-md) {
          grid-template-columns: 1fr 1fr;
        }
      }
      
      .form-group {
        margin-bottom: $spacing-lg;
        
        label {
          display: block;
          margin-bottom: $spacing-sm;
          font-weight: $font-weight-medium;
          color: $gray-900;
          font-size: $font-size-sm;
        }
        
        .form-input {
          width: 100%;
          padding: $spacing-md;
          border: 2px solid $gray-200;
          border-radius: $border-radius-md;
          font-size: $font-size-base;
          transition: all $transition-fast;
          background: $white;
          
          &:focus {
            outline: none;
            border-color: $primary;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          
          &.error {
            border-color: $error;
            
            &:focus {
              box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
            }
          }
          
          &.success {
            border-color: $success;
          }
          
          &::placeholder {
            color: $gray-500;
          }
        }
        
        select.form-input {
          cursor: pointer;
          
          option {
            padding: $spacing-sm;
          }
        }
        
        textarea.form-input {
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
        }
        
        .error-message {
          display: block;
          margin-top: $spacing-xs;
          color: $error;
          font-size: $font-size-sm;
          font-weight: $font-weight-medium;
        }
        
        .character-count {
          display: block;
          margin-top: $spacing-xs;
          color: $gray-500;
          font-size: $font-size-xs;
          text-align: right;
        }
        
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: $spacing-sm;
          cursor: pointer;
          font-size: $font-size-sm;
          line-height: 1.5;
          
          .checkbox-input {
            display: none;
          }
          
          .checkbox-custom {
            width: 20px;
            height: 20px;
            border: 2px solid $gray-300;
            border-radius: $border-radius-sm;
            background: $white;
            position: relative;
            transition: all $transition-fast;
            flex-shrink: 0;
            margin-top: 2px;
            
            &::after {
              content: '';
              position: absolute;
              left: 5px;
              top: 1px;
              width: 6px;
              height: 10px;
              border: solid $white;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
              opacity: 0;
              transition: opacity $transition-fast;
            }
          }
          
          .checkbox-input:checked + .checkbox-custom {
            background: $primary;
            border-color: $primary;
            
            &::after {
              opacity: 1;
            }
          }
        }
      }
      
      .btn-large {
        padding: $spacing-lg $spacing-2xl;
        font-size: $font-size-lg;
        font-weight: $font-weight-semibold;
        position: relative;
        overflow: hidden;
        
        &.loading {
          color: transparent;
          pointer-events: none;
        }
        
        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid $white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      }
    }
  }
}

// Status Messages
.status-message {
  margin-top: $spacing-2xl;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  display: flex;
  align-items: flex-start;
  gap: $spacing-md;
  
  &.success {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: $success;
  }
  
  &.error {
    background: rgba(220, 38, 38, 0.1);
    border: 1px solid rgba(220, 38, 38, 0.3);
    color: $error;
  }
  
  .status-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .status-content {
    flex: 1;
    
    h3 {
      font-size: $font-size-lg;
      font-weight: $font-weight-semibold;
      margin-bottom: $spacing-xs;
    }
    
    p {
      margin: 0;
      line-height: 1.5;
    }
  }
}

// Social Section
.social-section {
  background: $white;
  padding: $spacing-3xl 0;
  text-align: center;
  
  h2 {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $gray-900;
    margin-bottom: $spacing-2xl;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    flex-wrap: wrap;
    
    .social-link {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-md $spacing-lg;
      background: $gray-50;
      border-radius: $border-radius-full;
      text-decoration: none;
      color: $gray-700;
      font-weight: $font-weight-medium;
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
}

// Animations
@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>