<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <h1 class="page-title animate-fade-in">Contact</h1>
        <p class="page-subtitle animate-slide-in-left">
          N'hésitez pas à me contacter pour discuter de votre projet
        </p>
        
        <div class="contact-content">
          <div class="contact-info animate-slide-in-left">
            <h3>Informations de contact</h3>
            <div class="info-item">
              <strong>Email:</strong>
              <a href="mailto:contact@portfolio.com">contact@portfolio.com</a>
            </div>
            <div class="info-item">
              <strong>Téléphone:</strong>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </div>
            <div class="info-item">
              <strong>Localisation:</strong>
              <span>Paris, France</span>
            </div>
            
            <div class="social-links">
              <h4>Réseaux sociaux</h4>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
          
          <div class="contact-form animate-slide-in-right">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required 
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="5"
                  class="form-input"
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Formulaire de contact
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Formulaire soumis:', form.value)
  // Ici on ajouterait la logique d'envoi du formulaire
  alert('Message envoyé ! (simulation)')
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.contact {
  min-height: 100vh;
  background: linear-gradient(135deg, $white 0%, $gray-50 100%);
  
  .page-title {
    text-align: center;
    margin-bottom: $spacing-md;
    color: $primary;
  }
  
  .page-subtitle {
    text-align: center;
    font-size: $font-size-lg;
    color: $gray-600;
    margin-bottom: $spacing-3xl;
  }
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    max-width: 1000px;
    margin: 0 auto;
    
    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .contact-info {
    h3 {
      margin-bottom: $spacing-lg;
      color: $gray-900;
    }
    
    .info-item {
      margin-bottom: $spacing-md;
      
      strong {
        display: block;
        margin-bottom: $spacing-xs;
        color: $gray-900;
      }
      
      a {
        color: $primary;
        
        &:hover {
          color: $accent;
        }
      }
    }
    
    .social-links {
      margin-top: $spacing-2xl;
      
      h4 {
        margin-bottom: $spacing-md;
        color: $gray-900;
      }
      
      .social-link {
        display: inline-block;
        margin-right: $spacing-md;
        margin-bottom: $spacing-sm;
        color: $primary;
        text-decoration: none;
        
        &:hover {
          color: $accent;
        }
      }
    }
  }
  
  .contact-form {
    background: $white;
    padding: $spacing-xl;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-md;
    
    .form-group {
      margin-bottom: $spacing-lg;
      
      label {
        display: block;
        margin-bottom: $spacing-xs;
        font-weight: $font-weight-medium;
        color: $gray-900;
      }
      
      .form-input {
        width: 100%;
        padding: $spacing-md;
        border: $border-width solid $gray-300;
        border-radius: $border-radius-md;
        font-size: $font-size-base;
        transition: border-color $transition-fast;
        
        &:focus {
          outline: none;
          border-color: $primary;
        }
        
        &::placeholder {
          color: $gray-500;
        }
      }
      
      textarea.form-input {
        resize: vertical;
        min-height: 120px;
      }
    }
    
    .btn {
      width: 100%;
    }
  }
}
</style>