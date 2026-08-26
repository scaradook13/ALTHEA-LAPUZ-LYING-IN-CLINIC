<template>
  <header class="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-brand-border/50 transition-all duration-300 shadow-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20 md:h-24">
        
        <!-- Logo & Clinic Title -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center gap-4 group">
            <div class="relative">
              <img 
                src="../../assets/images/althea-lapuz-logo.png" 
                alt="Althea-Lapuz Lying In Clinic Logo" 
                class="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-contain shadow-brand-sm group-hover:scale-105 transition-all duration-300 ring-2 sm:ring-[3px] ring-brand-border/60 group-hover:ring-brand-primary"
              />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-base sm:text-lg md:text-xl font-extrabold text-neutral-950 tracking-wide uppercase group-hover:text-brand-primary transition-colors">
                ALTHEA-LAPUZ LYING IN CLINIC
              </span>
              <span class="text-[11px] sm:text-xs font-bold tracking-widest text-text-muted uppercase">
                Maternal & Newborn Care
              </span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1.5 lg:space-x-3 text-sm lg:text-base font-bold">
          <router-link 
            to="/" 
            class="px-5 py-2.5 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft shadow-xs"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            class="px-5 py-2.5 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft shadow-xs"
          >
            Services
          </router-link>
          <router-link 
            to="/about" 
            class="px-5 py-2.5 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft shadow-xs"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            class="px-5 py-2.5 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft shadow-xs"
          >
            Contact Us
          </router-link>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isOpen = !isOpen" 
            class="text-neutral-800 hover:text-brand-primary focus:outline-none p-2.5 rounded-2xl hover:bg-brand-soft transition-colors" 
            aria-label="Toggle Navigation Menu"
          >
            <Menu v-if="!isOpen" class="h-7 w-7" />
            <X v-else class="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile dropdown menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t border-brand-border/50 shadow-2xl absolute w-full left-0">
        <div class="px-6 pt-4 pb-6 space-y-2 text-left">
          <router-link 
            to="/" 
            @click="isOpen = false" 
            class="block px-5 py-3 rounded-2xl text-base font-bold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft text-brand-primary"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            @click="isOpen = false" 
            class="block px-5 py-3 rounded-2xl text-base font-bold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft text-brand-primary"
          >
            Services
          </router-link>
          <router-link 
            to="/about" 
            @click="isOpen = false" 
            class="block px-5 py-3 rounded-2xl text-base font-bold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft text-brand-primary"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            @click="isOpen = false" 
            class="block px-5 py-3 rounded-2xl text-base font-bold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft text-brand-primary"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)
</script>




