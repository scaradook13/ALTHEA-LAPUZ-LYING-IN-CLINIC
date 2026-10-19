<template>
  <div class="font-body text-text-primary bg-brand-canvas min-h-screen flex flex-col antialiased">
    <!-- Accessible Skip Link -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-brand-primary focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-brand"
    >
      Skip to main content
    </a>

    <!-- Public Navigation Bar (Includes integrated Announcement Bar) -->
    <NavBar v-if="!isAdminArea" />
    
    <main id="main-content" class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Public Footer -->
    <Footer v-if="!isAdminArea" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'

const route = useRoute()
const isAdminArea = computed(() => route.path.startsWith('/admin') || route.path === '/login')
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
