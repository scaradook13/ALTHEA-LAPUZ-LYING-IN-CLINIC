<template>
  <section id="contact" class="py-16 md:py-24 bg-white border-b border-brand-border/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Contact Info Header -->
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
          <Phone class="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 class="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          Visit or Contact Our Clinic
        </h2>
        <p class="text-base text-text-secondary">
          Reach out directly to ask about prenatal checkups, maternity packages, or 24/7 delivery admissions.
        </p>
      </div>

      <!-- Direct Contact Cards Grid (Phone, Gmail, Address) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Phone / Hotline -->
        <a 
          :href="`tel:${clinicStore.clinicInfo.phone}`"
          class="bg-brand-canvas hover:bg-brand-soft/60 p-6 rounded-2xl border border-brand-border hover:border-brand-primary shadow-card transition-all duration-200 flex flex-col items-start text-left justify-between space-y-4 group"
        >
          <div class="w-11 h-11 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-xs">
            <Phone class="w-5 h-5" />
          </div>
          <div class="space-y-1">
            <h3 class="text-xs font-bold uppercase tracking-wider text-text-muted">Clinic Hotline &amp; Mobile</h3>
            <p class="font-heading text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
              {{ clinicStore.clinicInfo.phone }}
            </p>
            <p class="text-xs text-text-secondary">Available for prenatal inquiries &amp; 24/7 maternity admissions</p>
          </div>
          <span class="text-xs font-heading font-bold text-brand-primary inline-flex items-center gap-1.5">
            <span>Call Clinic Directly</span>
            <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>

        <!-- Email -->
        <div 
          @click="openEmail"
          class="bg-brand-canvas hover:bg-brand-soft/60 p-6 rounded-2xl border border-brand-border hover:border-brand-primary shadow-card transition-all duration-200 flex flex-col items-start text-left justify-between space-y-4 group cursor-pointer"
          title="Click to compose an email in Gmail or copy address"
        >
          <div class="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center shadow-xs p-2">
            <img src="../../assets/images/gmail-logo.png" alt="Gmail" class="w-full h-full object-contain" />
          </div>
          <div class="space-y-1 w-full">
            <h3 class="text-xs font-bold uppercase tracking-wider text-text-muted">Email Support</h3>
            <p class="text-sm font-bold text-brand-primary break-all select-all font-mono">
              {{ clinicStore.clinicInfo.email }}
            </p>
            <div v-if="copied" class="pt-1">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">
                <Check class="w-3 h-3" />
                <span>Copied &amp; Opening Gmail</span>
              </span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-1" @click.stop>
            <a 
              :href="gmailUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3 py-1.5 bg-brand-primary text-white text-xs font-heading font-bold rounded-lg hover:bg-brand-primary-hover transition-colors inline-flex items-center gap-1"
            >
              <span>Gmail</span>
              <ExternalLink class="w-3 h-3" />
            </a>
            <button 
              @click="copyEmail" 
              type="button"
              class="px-3 py-1.5 bg-white text-brand-primary border border-brand-border text-xs font-heading font-bold rounded-lg hover:bg-brand-soft transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <Copy class="w-3 h-3" />
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
            <a 
              :href="mailtoUrl"
              class="px-3 py-1.5 bg-white text-text-secondary border border-brand-border hover:text-text-primary text-xs font-heading font-semibold rounded-lg transition-colors"
              title="Open default mail client"
            >
              <span>Mail App</span>
            </a>
          </div>
        </div>

        <!-- Address -->
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Daan+Ramon+Magsaysay+Tilapayong+Baliwag+Bulacan" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-brand-canvas hover:bg-brand-soft/60 p-6 rounded-2xl border border-brand-border hover:border-brand-primary shadow-card transition-all duration-200 flex flex-col items-start text-left justify-between space-y-4 group"
        >
          <div class="w-11 h-11 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
            <MapPin class="w-5 h-5" />
          </div>
          <div class="space-y-1">
            <h3 class="text-xs font-bold uppercase tracking-wider text-text-muted">Clinic Location</h3>
            <p class="font-heading text-base font-bold text-text-primary group-hover:text-brand-primary transition-colors">
              {{ clinicStore.clinicInfo.address }}
            </p>
            <p class="text-xs text-text-secondary">Accessible by tricycle, private vehicle, and public transit</p>
          </div>
          <span class="text-xs font-heading font-bold text-brand-primary inline-flex items-center gap-1.5">
            <span>Open in Google Maps</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </span>
        </a>
      </div>

      <!-- Wide Location Map Box -->
      <div>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Daan+Ramon+Magsaysay+Tilapayong+Baliwag+Bulacan" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-80 sm:h-96 bg-brand-soft rounded-2xl border border-brand-border relative overflow-hidden shadow-card group cursor-pointer"
          title="Click to open Google Maps for directions to Althea-Lapuz Lying-In Clinic"
        >
          <!-- Interactive Google Maps iframe -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15424.088812674488!2d120.893125!3d14.954215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339655f4699f8d55%3A0x28652caefea8ea27!2sTilapayong%2C%20Baliwag%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
            class="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Althea-Lapuz Lying In Clinic Location Map"
          ></iframe>
          
          <!-- Central Map Pin Overlay with vector icon -->
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-text-primary/10 group-hover:bg-text-primary/20 transition-colors p-4">
            <div class="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-200">
              <MapPin class="w-6 h-6 text-white" />
            </div>
            <div class="mt-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl border border-brand-border text-xs font-heading font-bold text-text-primary shadow-md group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-200 inline-flex items-center gap-2">
              <MapPin class="w-3.5 h-3.5 text-brand-primary group-hover:text-white shrink-0" />
              <span>Get Directions in Google Maps</span>
              <ExternalLink class="w-3.5 h-3.5 shrink-0" />
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { MapPin, Phone, ArrowRight, ExternalLink, Check, Copy } from '@lucide/vue'
import { clinicStore } from '../../stores/clinicStore.js'

const copied = ref(false)

const gmailUrl = computed(() => {
  const email = clinicStore.clinicInfo.email
  const subject = encodeURIComponent(`Inquiry - ${clinicStore.clinicInfo.name}`)
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`
})

const mailtoUrl = computed(() => {
  const email = clinicStore.clinicInfo.email
  const subject = encodeURIComponent(`Inquiry - ${clinicStore.clinicInfo.name}`)
  return `mailto:${email}?subject=${subject}`
})

const copyEmail = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(clinicStore.clinicInfo.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
}

const openEmail = () => {
  copyEmail()
  window.open(gmailUrl.value, '_blank')
}
</script>
