<template>
  <div class="min-h-screen bg-white pt-24 pb-20 md:pt-32">
    
    <!-- Top Header Banner (Wireframe 3) -->
    <div class="w-full bg-gradient-to-r from-brand-subtle via-white to-brand-subtle py-12 sm:py-16 border-b border-brand-border/40 mb-14 shadow-xs">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
        <div class="space-y-3 text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
            <span>Direct Inquiries</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Contact Us
          </h1>
          <p class="text-text-secondary text-sm sm:text-base">
            We are here to assist with checkup schedules, delivery inquiries, and concierge services.
          </p>
        </div>
        <div>
          <div class="w-36 h-24 sm:w-48 sm:h-28 bg-white rounded-2xl border border-brand-border/70 flex items-center justify-center shadow-card overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop" 
              alt="Clinic" 
              class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-brand-primary/10 flex items-center justify-center">
              <span class="text-[10px] font-extrabold uppercase text-white bg-neutral-950/70 px-2.5 py-1 rounded-full backdrop-blur-xs">
                Baliwag Clinic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
      
      <!-- Clinic Title & 24/7 Notice -->
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          24 Hours a Day • 7 Days a Week Active Care
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-primary-dark tracking-tight">
          Althea-Lapuz Lying In Clinic
        </h2>
        <p class="text-sm sm:text-base text-text-secondary font-medium">
          Tilapayong, City of Baliwag, Bulacan
        </p>
      </div>

      <!-- Contact Cards (2 Columns: Email & Facebook) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 max-w-3xl mx-auto">
        <!-- Email Card -->
        <div 
          @click="openEmail"
          class="bg-gradient-to-br from-brand-subtle via-white to-white p-8 rounded-3xl border border-brand-border/60 hover:border-brand-primary flex flex-col items-center justify-center space-y-4 group shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer text-center relative"
          title="Click to compose an email in Gmail or copy address"
        >
          <!-- Authentic Official Gmail Logo -->
          <div class="w-14 h-14 rounded-2xl bg-white border border-neutral-200/80 group-hover:scale-110 transition-transform flex items-center justify-center shadow-md p-2.5">
            <svg class="w-full h-full" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M4 14.5V38.5C4 40.4 5.6 42 7.5 42H13V21L4 14.5Z"/>
              <path fill="#34A853" d="M44 14.5V38.5C44 40.4 42.4 42 40.5 42H35V21L44 14.5Z"/>
              <path fill="#EA4335" d="M35 10.5L24 18.5L13 10.5V6C13 4.3 14.3 3 16 3H32C33.7 3 35 4.3 35 6V10.5Z"/>
              <path fill="#FBBC05" d="M13 21V42H35V21L24 29.5L13 21Z"/>
              <path fill="#C5221F" d="M35 10.5L44 14.5V7C44 4.8 42.2 3 40 3H35V10.5Z"/>
              <path fill="#1A73E8" d="M13 10.5L4 14.5V7C4 4.8 5.8 3 8 3H13V10.5Z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
              Gmail / Email Support
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary font-medium mt-1 break-all select-all">
              lapuzaltheajasmine@gmail.com
            </p>
          </div>

          <!-- Dynamic Status Notification -->
          <div v-if="copied" class="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1.5 animate-pulse">
            <Check class="w-3.5 h-3.5" />
            <span>Email Copied & Opening Gmail!</span>
          </div>
          <span v-else class="text-xs font-bold text-brand-primary group-hover:underline flex items-center gap-1">
            <span>Send Email via Gmail →</span>
          </span>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-1" @click.stop>
            <a 
              :href="gmailUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 bg-[#EA4335] text-white text-[11px] font-bold rounded-full shadow-xs hover:bg-[#D93025] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Compose Gmail</span>
              <ExternalLink class="w-3 h-3" />
            </a>
            <button 
              @click="copyEmail" 
              type="button"
              class="px-3.5 py-1.5 bg-brand-soft text-brand-primary border border-brand-border/80 text-[11px] font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all flex items-center gap-1 cursor-pointer"
            >
              <Copy class="w-3 h-3" />
              <span>{{ copied ? 'Copied! ✓' : 'Copy Email' }}</span>
            </button>
            <a 
              :href="mailtoUrl"
              class="px-3 py-1.5 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-[11px] font-bold rounded-full transition-colors flex items-center gap-1"
              title="Open default system mail client"
            >
              <span>Mail App</span>
            </a>
          </div>
        </div>

        <!-- Facebook Card -->
        <a 
          href="https://www.facebook.com/share/1F9n16Qjzo/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="bg-gradient-to-br from-brand-subtle via-white to-white p-8 rounded-3xl border border-brand-border/60 hover:border-brand-primary flex flex-col items-center justify-center space-y-4 group shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer text-center"
          title="Visit Althea-Lapuz Lying-In Clinic on Facebook"
        >
          <!-- Authentic Official Facebook Logo -->
          <div class="w-14 h-14 rounded-2xl bg-white border border-neutral-200/80 group-hover:scale-110 transition-transform flex items-center justify-center shadow-md p-1.5">
            <svg class="w-full h-full" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.585 23.094 24 18.1 24 12.073z"/>
              <path fill="#FFFFFF" d="M16.671 15.563l.532-3.49h-3.328v-2.264c0-.956.465-1.886 1.956-1.886h1.491V4.952s-1.374-.236-2.686-.236c-2.741 0-4.533 1.672-4.533 4.697v2.66H7.078v3.49h3.047V24c.618.097 1.25.148 1.875.148s1.257-.051 1.875-.148v-8.437h2.796z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
              Facebook Page
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary font-medium mt-1 tracking-wide uppercase">
              ALTHEA-LAPUZ LYING-IN CLINIC
            </p>
          </div>
          <span class="text-xs font-bold text-[#1877F2] group-hover:underline flex items-center gap-1">
            <span>Visit Official Facebook Page</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </span>
        </a>
      </div>

      <!-- Medical Concierge In-Person Notice Banner -->
      <div class="w-full bg-brand-soft/80 rounded-2xl p-6 sm:p-7 border border-brand-border/70 text-sm text-brand-primary-dark font-medium leading-relaxed max-w-3xl mx-auto shadow-card flex items-start gap-4 text-left">
        <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
          <Sparkles class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-sm font-extrabold uppercase tracking-wider text-brand-primary mb-1">
            In-Person Medical Concierge
          </h4>
          <p class="text-xs sm:text-sm text-text-secondary">
            For direct in-person assistance, our Medical Concierge desk is located at Tilapayong, City of Baliwag, Bulacan, open to serve you 24hrs, Monday to Saturday.
          </p>
        </div>
      </div>

      <!-- MAP Section -->
      <div class="space-y-4 pt-4 max-w-3xl mx-auto text-left">
        <div class="flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-extrabold text-neutral-950 uppercase tracking-wide">
            MAP: Althea-Lapuz Lying In Clinic
          </h3>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Ramon+Magsaysay+Street+Tilapayong+Baliwag+Bulacan" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </a>
        </div>

        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Ramon+Magsaysay+Street+Tilapayong+Baliwag+Bulacan" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-80 sm:h-96 bg-brand-soft rounded-3xl border border-brand-border/60 relative overflow-hidden shadow-card group cursor-pointer"
          title="Click to open Google Maps for directions to Althea-Lapuz Lying-In Clinic"
        >
          <!-- Google Maps iframe with pointer-events-none so click passes through to the anchor tag -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15424.088812674488!2d120.893125!3d14.954215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339655f4699f8d55%3A0x28652caefea8ea27!2sTilapayong%2C%20Baliwag%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
            class="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Althea-Lapuz Lying In Clinic Location Map"
          ></iframe>

          <!-- Central Map Pin Overlay with interactive hover effect -->
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950/10 group-hover:bg-neutral-950/20 transition-colors">
            <div class="w-16 h-16 sm:w-18 sm:h-18 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-xl backdrop-blur-xs border-4 border-white group-hover:scale-110 transition-transform duration-300">
              <MapPin class="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current" />
            </div>
            <div class="mt-3 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full border border-brand-border/80 text-xs font-bold text-brand-primary-dark shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 flex items-center gap-1.5">
              <span>📍 Click map to get directions in Google Maps</span>
              <ExternalLink class="w-3 h-3" />
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, MapPin, Sparkles, ExternalLink, Check, Copy } from '@lucide/vue'

const email = 'lapuzaltheajasmine@gmail.com'
const subject = encodeURIComponent('Inquiry - Althea-Lapuz Lying-In Clinic')
const mailtoUrl = `mailto:${email}?subject=${subject}`
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`

const copied = ref(false)

const copyEmail = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
}

const openEmail = () => {
  copyEmail()
  // Opens Gmail web compose directly
  window.open(gmailUrl, '_blank')
}
</script>




