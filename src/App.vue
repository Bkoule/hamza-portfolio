<template>
  <div class="app">
    <ScrollProgress />
    <MouseCursor />
    
    <Header />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <Footer />
    
    <BackToTop />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<style lang="scss">
@import './assets/styles/variables';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 70px; // Compenser le header fixe
}
</style>