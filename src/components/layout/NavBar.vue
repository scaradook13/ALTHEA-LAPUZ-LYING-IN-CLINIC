<template>
  <header class="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-brand-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center gap-3">
            <img src="../../assets/images/althea-lapuz-logo.png" alt="Althea-Lapuz Lying-In Clinic Logo" class="h-14 w-auto object-contain" />
            <span class="text-xl font-bold text-brand-primary-dark hidden sm:block tracking-wide">Althea-Lapuz Clinic</span>
          </router-link>
        </div>
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-text-primary hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-brand-primary font-bold">Home</router-link>
          <router-link to="/services" class="text-text-primary hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-brand-primary font-bold">Services</router-link>
          <router-link to="/about" class="text-text-primary hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-brand-primary font-bold">Learn About Us</router-link>
          <router-link to="/contact" class="text-text-primary hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-brand-primary font-bold">Contact</router-link>
        </nav>
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-text-primary hover:text-brand-primary focus:outline-none">
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-brand-light shadow-lg absolute w-full">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-primary hover:bg-brand-soft" active-class="text-brand-primary bg-brand-soft font-bold">Home</router-link>
        <router-link to="/services" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-primary hover:bg-brand-soft" active-class="text-brand-primary bg-brand-soft font-bold">Services</router-link>
        <router-link to="/about" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-primary hover:bg-brand-soft" active-class="text-brand-primary bg-brand-soft font-bold">Learn About Us</router-link>
        <router-link to="/contact" @click="isOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-brand-primary hover:bg-brand-soft" active-class="text-brand-primary bg-brand-soft font-bold">Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)
</script>
