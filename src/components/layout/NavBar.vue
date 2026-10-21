<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-200">
    <!-- Top Clinical Announcement / Hours Bar (Configured via Admin Portal) -->
    <div 
      v-if="clinicStore.clinicInfo.announcement.enabled" 
      class="bg-brand-primary-dark text-white text-xs py-2 px-4 font-medium tracking-wide border-b border-white/10"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div class="flex items-center gap-2.5 min-w-0 mx-auto sm:mx-0">
          <span class="px-2 py-0.5 rounded-md bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider flex-shrink-0 border border-white/20">
            {{ clinicStore.clinicInfo.announcement.badge }}
          </span>
          <span class="truncate text-white/95">{{ clinicStore.clinicInfo.announcement.text }}</span>
        </div>
        <div class="hidden lg:flex items-center gap-5 text-[11px] text-white/85 flex-shrink-0">
          <span class="inline-flex items-center gap-1.5">
            <Clock class="w-3.5 h-3.5 text-brand-muted" aria-hidden="true" />
            <span>Delivery: 24/7 Open</span>
          </span>
          <a 
            :href="`tel:${clinicStore.clinicInfo.phonePrimary.replace(/[^0-9]/g, '')}`"
            class="inline-flex items-center gap-1.5 text-white font-semibold hover:text-brand-light transition-colors"
          >
            <Phone class="w-3.5 h-3.5 text-brand-muted" aria-hidden="true" />
            <span>{{ clinicStore.clinicInfo.phonePrimary }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar Container -->
    <div class="w-full bg-white/95 backdrop-blur-md border-b border-brand-border/80 shadow-card">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
        
          <!-- Logo & Clinic Title (Reactive from clinicStore) -->
          <div class="flex-shrink-0 flex items-center min-w-0">
            <router-link to="/" class="flex items-center gap-3 sm:gap-3.5 group min-w-0">
              <div class="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 relative rounded-full p-0.5 bg-brand-soft border border-brand-border group-hover:border-brand-primary transition-colors">
                <img 
                  src="../../assets/images/althea-lapuz-logo.png" 
                  alt="Althea-Lapuz Lying-In Clinic Official Logo" 
                  class="w-full h-full rounded-full object-contain bg-white"
                />
              </div>
              <div class="flex flex-col text-left min-w-0">
                <span class="font-heading text-sm sm:text-base lg:text-lg font-bold text-text-primary tracking-tight group-hover:text-brand-primary transition-colors truncate">
                  {{ clinicStore.clinicInfo.name }}
                </span>
                <span class="text-[10px] sm:text-xs font-medium text-text-muted truncate">
                  {{ clinicStore.clinicInfo.tagline }}
                </span>
              </div>
            </router-link>
          </div>

          <!-- Desktop Navigation Links -->
          <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-1 lg:gap-1.5 text-sm font-heading font-semibold">
            <router-link 
              to="/" 
              class="px-4 py-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-brand-soft transition-colors duration-150" 
              exact-active-class="!bg-brand-light !text-brand-primary-hover font-bold"
            >
              Home
            </router-link>
            <router-link 
              to="/services" 
              class="px-4 py-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-brand-soft transition-colors duration-150" 
              active-class="!bg-brand-light !text-brand-primary-hover font-bold"
            >
              Services &amp; Fees
            </router-link>
            <router-link 
              to="/about" 
              class="px-4 py-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-brand-soft transition-colors duration-150" 
              active-class="!bg-brand-light !text-brand-primary-hover font-bold"
            >
              About Us
            </router-link>
            <router-link 
              to="/contact" 
              class="px-4 py-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-brand-soft transition-colors duration-150" 
              active-class="!bg-brand-light !text-brand-primary-hover font-bold"
            >
              Contact &amp; Visit
            </router-link>

            <div class="h-5 w-px bg-brand-border mx-1.5" aria-hidden="true"></div>

            <!-- Admin Portal Access Button -->
            <router-link 
              to="/admin" 
              class="ml-1 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white border border-brand-border text-brand-primary hover:bg-brand-soft hover:border-brand-primary/50 hover:text-brand-primary-hover transition-colors duration-150"
              active-class="!bg-brand-primary !text-white !border-brand-primary"
              title="Clinic Staff & Administration Portal"
            >
              <ShieldCheck v-if="auth.isAuthenticated.value" class="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <Lock v-else class="w-3.5 h-3.5" aria-hidden="true" />
              <span>{{ auth.isAuthenticated.value ? 'Admin' : 'Staff Login' }}</span>
            </router-link>
          </nav>

          <!-- Mobile Menu Toggle Button -->
          <div class="md:hidden flex items-center gap-2">
            <a 
              :href="`tel:${clinicStore.clinicInfo.phonePrimary.replace(/[^0-9]/g, '')}`"
              class="p-2.5 rounded-lg bg-brand-soft text-brand-primary border border-brand-border hover:bg-brand-primary hover:text-white transition-colors"
              aria-label="Call Clinic Directly"
            >
              <Phone class="h-5 w-5" aria-hidden="true" />
            </a>
            <button 
              @click="isOpen = !isOpen" 
              class="text-text-primary hover:text-brand-primary p-2.5 rounded-lg border border-transparent hover:border-brand-border hover:bg-brand-soft transition-colors cursor-pointer" 
              :aria-expanded="isOpen"
              aria-controls="mobile-navigation-menu"
              aria-label="Toggle Navigation Menu"
            >
              <Menu v-if="!isOpen" class="h-6 w-6" aria-hidden="true" />
              <X v-else class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav 
        v-show="isOpen" 
        id="mobile-navigation-menu"
        aria-label="Mobile Navigation"
        class="md:hidden bg-white border-b border-brand-border shadow-xl absolute w-full left-0"
      >
        <div class="px-4 pt-3 pb-6 space-y-1.5 text-left">
          <router-link 
            to="/" 
            @click="isOpen = false" 
            class="block px-4 py-3 rounded-xl text-sm font-heading font-semibold text-text-primary hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            exact-active-class="bg-brand-light text-brand-primary-hover font-bold"
          >
            Home
          </router-link>
          <router-link 
            to="/services" 
            @click="isOpen = false" 
            class="block px-4 py-3 rounded-xl text-sm font-heading font-semibold text-text-primary hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-light text-brand-primary-hover font-bold"
          >
            Services &amp; Fee Schedule
          </router-link>
          <router-link 
            to="/about" 
            @click="isOpen = false" 
            class="block px-4 py-3 rounded-xl text-sm font-heading font-semibold text-text-primary hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-light text-brand-primary-hover font-bold"
          >
            About the Clinic
          </router-link>
          <router-link 
            to="/contact" 
            @click="isOpen = false" 
            class="block px-4 py-3 rounded-xl text-sm font-heading font-semibold text-text-primary hover:bg-brand-soft hover:text-brand-primary transition-colors" 
            active-class="bg-brand-light text-brand-primary-hover font-bold"
          >
            Contact &amp; Directions
          </router-link>

          <div class="pt-3 mt-2 border-t border-brand-border/60">
            <!-- Mobile Admin Portal Link -->
            <router-link 
              to="/admin" 
              @click="isOpen = false" 
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-heading font-bold text-brand-primary bg-white border border-brand-border hover:bg-brand-soft transition-colors"
            >
              <ShieldCheck v-if="auth.isAuthenticated.value" class="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <Lock v-else class="w-3.5 h-3.5" aria-hidden="true" />
              <span>{{ auth.isAuthenticated.value ? 'Admin Dashboard' : 'Staff Portal' }}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, ShieldCheck, Lock, Phone, Clock } from '@lucide/vue'
import { clinicStore, auth } from '../../stores/clinicStore.js'

const isOpen = ref(false)
</script>
