<template>
  <div class="min-h-screen bg-brand-canvas pt-20 pb-20 md:pt-24">
    
    <!-- Top Architectural Page Header -->
    <div class="w-full bg-white py-10 sm:py-14 border-b border-brand-border/70 mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div class="space-y-3 text-left max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
            <Phone class="w-3.5 h-3.5" />
            <span>Direct Clinic Inquiries &amp; Visits</span>
          </div>
          <h1 class="font-heading text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
            Contact &amp; Visit Our Clinic
          </h1>
          <p class="text-text-secondary text-base leading-relaxed">
            Reach out to our front desk and midwives for prenatal checkup schedules, PhilHealth maternity package inquiries, and 24/7 delivery admissions.
          </p>
        </div>

        <div class="shrink-0 w-full sm:w-auto">
          <div class="w-full sm:w-56 h-32 bg-brand-soft rounded-2xl border border-brand-border flex items-center justify-center shadow-card overflow-hidden relative">
            <img 
              src="../assets/images/clinic-facade.jpg" 
              alt="Althea-Lapuz Lying-In Clinic Baliwag Facade" 
              class="w-full h-full object-cover object-center" 
            />
            <div class="absolute bottom-2 left-2 right-2 flex items-center justify-center pointer-events-none">
              <span class="text-[11px] font-bold uppercase text-white bg-text-primary/80 px-3 py-1 rounded-lg backdrop-blur-xs">
                Baliwag, Bulacan Facility
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Clinic Identity & Operating Hours Strip -->
      <div class="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
        <div class="space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand-primary-hover border border-brand-border text-xs font-bold">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{{ clinicStore.clinicInfo.operatingHoursDelivery || clinicStore.clinicInfo.deliveryHours }}</span>
          </div>
          <h2 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
            {{ clinicStore.clinicInfo.name }}
          </h2>
          <p class="text-sm text-text-secondary flex items-center gap-1.5">
            <MapPin class="w-4 h-4 text-brand-primary shrink-0" />
            <span>{{ clinicStore.clinicInfo.address }}</span>
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
          <div class="p-3.5 rounded-xl bg-brand-subtle border border-brand-border">
            <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary block">Prenatal Checkups</span>
            <span class="font-heading text-sm font-bold text-text-primary">{{ clinicStore.clinicInfo.checkupHours }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-brand-soft border border-brand-border">
            <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary-hover block">Maternity Admissions</span>
            <span class="font-heading text-sm font-bold text-text-primary">{{ clinicStore.clinicInfo.deliveryHours }}</span>
          </div>
        </div>
      </div>

      <!-- Contact Cards (3 Columns: Phone, Email & Facebook) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Phone Card -->
        <a 
          :href="`tel:${(clinicStore.clinicInfo.phonePrimary || clinicStore.clinicInfo.phone).replace(/[^0-9]/g, '')}`" 
          class="bg-white p-7 rounded-2xl border border-brand-border hover:border-brand-primary flex flex-col items-start justify-between space-y-5 group shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer text-left"
          :title="`Click to call ${clinicStore.clinicInfo.phonePrimary || clinicStore.clinicInfo.phone}`"
        >
          <div class="space-y-4 w-full">
            <div class="w-12 h-12 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-text-muted">Telephone / Mobile</span>
              <h3 class="font-heading text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors mt-1 select-all font-mono">
                {{ clinicStore.clinicInfo.phonePrimary || clinicStore.clinicInfo.phone }}
              </h3>
              <p class="text-xs text-text-secondary mt-1">
                Direct line for checkup inquiries and 24/7 emergency labor admissions.
              </p>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-border/60 w-full" @click.stop>
            <a 
              :href="`tel:${(clinicStore.clinicInfo.phonePrimary || clinicStore.clinicInfo.phone).replace(/[^0-9]/g, '')}`"
              class="px-3.5 py-2 bg-brand-primary text-white text-xs font-heading font-bold rounded-lg hover:bg-brand-primary-hover transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Phone class="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button 
              @click="copyPhone" 
              type="button"
              class="px-3.5 py-2 bg-white text-brand-primary border border-brand-border text-xs font-heading font-bold rounded-lg hover:bg-brand-soft hover:border-brand-primary/50 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Check v-if="phoneCopied" class="w-3.5 h-3.5 text-emerald-600" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ phoneCopied ? 'Number Copied' : 'Copy Number' }}</span>
            </button>
          </div>
        </a>

        <!-- Email Card -->
        <div 
          @click="openEmail"
          class="bg-white p-7 rounded-2xl border border-brand-border hover:border-brand-primary flex flex-col items-start justify-between space-y-5 group shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer text-left"
          title="Click to compose an email in Gmail or copy address"
        >
          <div class="space-y-4 w-full">
            <!-- Authentic Official Gmail Logo -->
            <div class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center shadow-xs p-2">
              <img src="../assets/images/gmail-logo.png" alt="Gmail" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-text-muted">Gmail Support</span>
              <h3 class="text-sm sm:text-base font-bold text-brand-primary mt-1 break-all select-all font-mono">
                {{ clinicStore.clinicInfo.email }}
              </h3>
              <p class="text-xs text-text-secondary mt-1">
                Send questions regarding PhilHealth requirements, packages, or medical records.
              </p>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-border/60 w-full" @click.stop>
            <a 
              :href="gmailUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3.5 py-2 bg-brand-primary text-white text-xs font-heading font-bold rounded-lg hover:bg-brand-primary-hover transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Compose in Gmail</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
            <button 
              @click="copyEmail" 
              type="button"
              class="px-3.5 py-2 bg-white text-brand-primary border border-brand-border text-xs font-heading font-bold rounded-lg hover:bg-brand-soft hover:border-brand-primary/50 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-600" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
            <a 
              :href="mailtoUrl"
              class="px-3 py-2 bg-white border border-brand-border text-text-secondary hover:text-brand-primary hover:bg-brand-soft text-xs font-heading font-semibold rounded-lg transition-colors"
              title="Open default system mail client"
            >
              <span>Mail App</span>
            </a>
          </div>
        </div>

        <!-- Facebook Card -->
        <a 
          :href="clinicStore.clinicInfo.facebookUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="bg-white p-7 rounded-2xl border border-brand-border hover:border-brand-primary flex flex-col items-start justify-between space-y-5 group shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer text-left"
          title="Visit Althea-Lapuz Lying-In Clinic on Facebook"
        >
          <div class="space-y-4 w-full">
            <!-- Authentic Official Facebook Logo -->
            <div class="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center shadow-xs p-2">
              <svg class="w-full h-full" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.585 23.094 24 18.1 24 12.073z"/>
                <path fill="#FFFFFF" d="M16.671 15.563l.532-3.49h-3.328v-2.264c0-.956.465-1.886 1.956-1.886h1.491V4.952s-1.374-.236-2.686-.236c-2.741 0-4.533 1.672-4.533 4.697v2.66H7.078v3.49h3.047V24c.618.097 1.25.148 1.875.148s1.257-.051 1.875-.148v-8.437h2.796z"/>
              </svg>
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-text-muted">Official Social Page</span>
              <h3 class="font-heading text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors mt-1">
                Facebook Page
              </h3>
              <p class="text-xs text-text-secondary mt-1">
                Follow announcements, health advisories, and message us on Facebook.
              </p>
            </div>
          </div>

          <div class="pt-2 border-t border-brand-border/60 w-full">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-brand-border text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary text-xs font-heading font-bold transition-colors">
              <span>Visit Official Facebook Page</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>

      <!-- Patient Visit Preparation & In-Person Concierge Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
        <!-- In-Person Medical Concierge Notice -->
        <div class="lg:col-span-5 bg-brand-subtle rounded-2xl p-6 sm:p-7 border border-brand-border shadow-card flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center">
              <Clock class="w-5 h-5" />
            </div>
            <h3 class="font-heading text-lg font-bold text-text-primary">
              Walk-In &amp; In-Person Medical Concierge
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              For direct in-person assistance, our front desk is located at <strong class="text-text-primary">{{ clinicStore.clinicInfo.address }}</strong>. Maternity delivery admissions operate <strong class="text-text-primary">{{ clinicStore.clinicInfo.deliveryHours }}</strong>, and outpatient prenatal checkups are open <strong class="text-text-primary">{{ clinicStore.clinicInfo.checkupHours }}</strong>.
            </p>
          </div>
          <div class="pt-3 border-t border-brand-border text-xs font-semibold text-brand-primary">
            No online pre-payment required • Direct clinic assessment
          </div>
        </div>

        <!-- What to Bring Checklist (Verified Clinic Guidelines) -->
        <div class="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-card space-y-4">
          <div class="flex items-center gap-2.5">
            <FileCheck class="w-5 h-5 text-brand-primary shrink-0" />
            <h3 class="font-heading text-lg font-bold text-text-primary">
              What to Bring for Your Clinic Visit
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div class="p-4 rounded-xl bg-brand-canvas border border-brand-border space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-primary block">For Prenatal Checkups</span>
              <ul class="text-xs text-text-secondary space-y-1.5">
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>Maternity / Prenatal Booklet (Mother &amp; Child Book)</span>
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>Valid Government ID</span>
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>Previous laboratory &amp; ultrasound results (if available)</span>
                </li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-brand-canvas border border-brand-border space-y-2">
              <span class="text-xs font-bold uppercase tracking-wider text-brand-accent block">For Delivery Admission (NSD)</span>
              <ul class="text-xs text-text-secondary space-y-1.5">
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>Complete prenatal records &amp; ultrasound results</span>
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>PhilHealth Member Data Record (MDR) &amp; ID (if availing NBB)</span>
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>Newborn clothes, receiving blankets &amp; maternal pads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- MAP Section -->
      <div class="space-y-4 pt-2 text-left">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-brand-primary">Location &amp; Directions</span>
            <h3 class="font-heading text-xl font-bold text-text-primary">
              Interactive Clinic Map — Tilapayong, Baliwag, Bulacan
            </h3>
          </div>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Daan+Ramon+Magsaysay+Tilapayong+Baliwag+Bulacan" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-xl bg-white border border-brand-border text-xs font-heading font-bold text-brand-primary hover:bg-brand-soft inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Open in Google Maps</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </a>
        </div>

        <a 
          href="https://www.google.com/maps/search/?api=1&query=Althea-Lapuz+Lying-In+Clinic+332+Daan+Ramon+Magsaysay+Tilapayong+Baliwag+Bulacan" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-80 sm:h-96 bg-brand-soft rounded-2xl border border-brand-border relative overflow-hidden shadow-card group cursor-pointer"
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

          <!-- Central Map Pin Overlay with vector icon -->
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-text-primary/10 group-hover:bg-text-primary/20 transition-colors p-4">
            <div class="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-200">
              <MapPin class="w-6 h-6 text-white" />
            </div>
            <div class="mt-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl border border-brand-border text-xs font-heading font-bold text-text-primary shadow-md group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-200 inline-flex items-center gap-2">
              <MapPin class="w-3.5 h-3.5 text-brand-primary group-hover:text-white shrink-0" />
              <span>Click map to get directions in Google Maps</span>
              <ExternalLink class="w-3.5 h-3.5 shrink-0" />
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Phone, MapPin, Clock, FileCheck, ExternalLink, Check, Copy } from '@lucide/vue'
import { clinicStore } from '../stores/clinicStore.js'

const subject = computed(() => encodeURIComponent(`Inquiry - ${clinicStore.clinicInfo.name}`))
const mailtoUrl = computed(() => `mailto:${clinicStore.clinicInfo.email}?subject=${subject.value}`)
const gmailUrl = computed(() => `https://mail.google.com/mail/?view=cm&fs=1&to=${clinicStore.clinicInfo.email}&su=${subject.value}`)

const copied = ref(false)
const phoneCopied = ref(false)

const copyPhone = () => {
  if (navigator.clipboard) {
    const rawPhone = (clinicStore.clinicInfo.phonePrimary || clinicStore.clinicInfo.phone).replace(/[^0-9]/g, '')
    navigator.clipboard.writeText(rawPhone)
    phoneCopied.value = true
    setTimeout(() => {
      phoneCopied.value = false
    }, 3000)
  }
}

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
