<template>
  <div class="font-sans text-neutral-900 bg-white min-h-screen flex flex-col antialiased">
    <!-- Top Announcement Bar (Configured via Admin Portal) -->
    <div 
      v-if="!isAdminArea && clinicStore.clinicInfo.announcement.enabled" 
      class="bg-brand-primary text-white text-xs py-2 px-4 text-center font-bold tracking-wide relative z-50 flex items-center justify-center gap-2 shadow-xs"
    >
      <span class="px-2 py-0.5 rounded-full bg-white text-brand-primary text-[10px] font-extrabold uppercase">
        {{ clinicStore.clinicInfo.announcement.badge }}
      </span>
      <span class="truncate max-w-3xl">{{ clinicStore.clinicInfo.announcement.text }}</span>
    </div>

    <!-- Public Navigation Bar -->
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
