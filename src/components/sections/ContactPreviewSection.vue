<template>
  <section id="contact" class="py-20 md:py-28 bg-white border-t border-brand-border/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Contact Info Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
          <span>Get In Touch</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
          Contact Us
        </h2>
        <p class="text-base sm:text-lg text-text-secondary">
          Reach out to schedule an appointment or speak directly with our clinical support team.
        </p>
      </div>

      <!-- Direct Contact Cards Grid (Clinic Address & Gmail Support) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <!-- Address -->
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Ramon+Magsaysay+Street+Tilapayong+Baliwag+Bulacan" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white hover:bg-brand-subtle/50 p-6 rounded-2xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center space-y-3 group cursor-pointer"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
            <MapPin class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-text-muted">Clinic Address</h3>
            <p class="text-sm font-bold text-neutral-950 mt-1">Tilapayong, Baliwag, Bulacan</p>
          </div>
        </a>

        <!-- Email -->
        <div 
          @click="openEmail"
          class="bg-white hover:bg-brand-subtle/50 p-6 rounded-2xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center space-y-3 group cursor-pointer relative"
          title="Click to compose an email in Gmail or copy address"
        >
          <!-- Authentic Official Gmail Logo -->
          <div class="w-12 h-12 rounded-2xl bg-white border border-neutral-200/80 group-hover:scale-110 transition-transform flex items-center justify-center shadow-xs p-2">
            <img src="../../assets/images/gmail-logo.png" alt="Gmail" class="w-full h-full object-contain" />
          </div>
          <div>
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-text-muted">Gmail Support</h3>
            <p class="text-sm font-bold text-brand-primary mt-1 break-all select-all">lapuzaltheajasmine@gmail.com</p>
          </div>

          <div v-if="copied" class="px-3 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full flex items-center gap-1 animate-pulse">
            <Check class="w-3 h-3" />
            <span>Copied & Opening Gmail!</span>
          </div>
          <span v-else class="text-[11px] font-bold text-brand-primary group-hover:underline flex items-center gap-1">
            <span>Send Email via Gmail →</span>
          </span>

          <div class="flex items-center gap-1.5 pt-1" @click.stop>
            <a 
              :href="gmailUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-2.5 py-1 bg-brand-primary text-white text-[10px] font-bold rounded-full shadow-xs hover:bg-brand-primary-hover transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Gmail</span>
              <ExternalLink class="w-2.5 h-2.5" />
            </a>
            <button 
              @click="copyEmail" 
              type="button"
              class="px-2.5 py-1 bg-brand-soft text-brand-primary border border-brand-border/80 text-[10px] font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all flex items-center gap-1 cursor-pointer"
            >
              <Copy class="w-2.5 h-2.5" />
              <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>
            <a 
              :href="mailtoUrl"
              class="px-2.5 py-1 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 text-[10px] font-bold rounded-full transition-colors"
              title="Open default mail client"
            >
              <span>Mail App</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Wide Location Map Box -->
      <div class="max-w-5xl mx-auto">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Ramon+Magsaysay+Street+Tilapayong+Baliwag+Bulacan" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-80 sm:h-[400px] bg-brand-soft rounded-3xl border border-brand-border/60 relative overflow-hidden shadow-card group cursor-pointer"
          title="Click to open Google Maps for directions to Althea-Lapuz Lying-In Clinic"
        >
          <!-- Interactive Google Maps iframe -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15424.088812674488!2d120.893125!3d14.954215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339655f4699f8d55%3A0x28652caefea8ea27!2sTilapayong%2C%20Baliwag%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
            class="w-full h-full border-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Mail, ExternalLink, Check, Copy } from '@lucide/vue'

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
  window.open(gmailUrl, '_blank')
}
</script>



