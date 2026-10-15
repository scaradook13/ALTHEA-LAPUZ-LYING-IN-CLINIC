<template>
  <div class="font-sans text-neutral-900 bg-white min-h-screen flex flex-col antialiased">
    <!-- Public Navigation Bar (Includes integrated Announcement Bar) -->
    <NavBar v-if="!isAdminArea" />
    
    <main class="flex-grow">
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
import { clinicStore } from '../stores/clinicStore.js'

const route = useRoute()
const isAdminArea = computed(() => route.path.startsWith('/admin') || route.path === '/login')
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
