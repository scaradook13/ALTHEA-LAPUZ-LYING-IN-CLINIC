<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-brand-border/40 transition-all duration-300 shadow-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18">
        <!-- Logo & Title -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center gap-3.5 group">
            <div class="relative">
              <img 
                src="../../assets/images/althea-lapuz-logo.png" 
                alt="Althea-Lapuz Lying In Clinic Logo" 
                class="w-11 h-11 rounded-full object-contain shadow-brand-sm group-hover:scale-105 transition-all duration-300 ring-2 ring-brand-border/40 group-hover:ring-brand-primary/50"
              />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-sm md:text-base font-extrabold text-neutral-900 tracking-wider uppercase group-hover:text-brand-primary transition-colors">
                ALTHEA-LAPUZ LYING IN CLINIC
              </span>
              <span class="text-[10px] font-semibold tracking-widest text-text-muted uppercase">
                Maternal & Newborn Care
              </span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold">
          <router-link 
            to="/" 
            class="px-4 py-2 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft/70 transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft font-bold shadow-xs"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            class="px-4 py-2 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft/70 transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft font-bold shadow-xs"
          >
            Services
          </router-link>
          <router-link 
            to="/about" 
            class="px-4 py-2 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft/70 transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft font-bold shadow-xs"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            class="px-4 py-2 rounded-full text-neutral-700 hover:text-brand-primary hover:bg-brand-soft/70 transition-all duration-200" 
            active-class="text-brand-primary bg-brand-soft font-bold shadow-xs"
          >
            Contact Us
          </router-link>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isOpen = !isOpen" 
            class="text-neutral-800 hover:text-brand-primary focus:outline-none p-2 rounded-xl hover:bg-brand-soft transition-colors" 
            aria-label="Toggle Navigation Menu"
          >
            <Menu v-if="!isOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isOpen" class="md:hidden bg-white/95 backdrop-blur-lg border-t border-brand-border/40 shadow-xl absolute w-full left-0">
        <div class="px-5 pt-3 pb-5 space-y-1.5 text-left">
          <router-link 
            to="/" 
            @click="isOpen = false" 
            class="block px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft font-bold text-brand-primary"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            @click="isOpen = false" 
            class="block px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft font-bold text-brand-primary"
          >
            Services
          </router-link>
          <router-link 
            to="/about" 
            @click="isOpen = false" 
            class="block px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft font-bold text-brand-primary"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            @click="isOpen = false" 
            class="block px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-800 hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-soft font-bold text-brand-primary"
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



