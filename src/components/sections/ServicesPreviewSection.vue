<template>
  <section id="services" class="py-16 md:py-24 bg-white border-b border-brand-border/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Heading + Top Action -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-3 max-w-2xl text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
            <Stethoscope class="w-3.5 h-3.5" />
            <span>Clinical Specialties</span>
          </div>
          <h2 class="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Core Maternal &amp; Infant Services
          </h2>
          <p class="text-base text-text-secondary leading-relaxed">
            Focused, evidence-based maternity care and newborn wellness services delivered by licensed healthcare professionals.
          </p>
        </div>

        <div class="shrink-0">
          <router-link 
            to="/services" 
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-brand-soft text-brand-primary hover:text-brand-primary-hover border border-brand-border hover:border-brand-primary/50 text-sm font-heading font-bold shadow-card transition-colors duration-200"
          >
            <span>View All Services &amp; Packages</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>

      <!-- 3-Column Clinical Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <article 
          v-for="(service, idx) in highlightedServices" 
          :key="service.title"
          class="bg-white rounded-2xl border border-brand-border hover:border-brand-primary/60 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col overflow-hidden group"
        >
          <!-- Top Image Header -->
          <div class="relative h-52 bg-brand-soft overflow-hidden border-b border-brand-border/60">
            <img 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-brand-border text-xs font-bold text-brand-primary shadow-xs">
                <span>0{{ idx + 1 }}</span>
                <span>•</span>
                <span>{{ service.category }}</span>
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
            <div class="space-y-2.5">
              <h3 class="font-heading text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <div class="pt-4 border-t border-brand-border/60 flex items-center justify-between">
              <span class="text-xs font-semibold text-text-muted">{{ service.scheduleNote }}</span>
              <router-link 
                :to="service.link" 
                class="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-primary hover:text-brand-primary-hover transition-colors"
              >
                <span>Details &amp; Fees</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <!-- Transparent DOH Pricing Callout Strip -->
      <div class="bg-brand-subtle rounded-2xl border border-brand-border p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="flex items-start gap-4 text-left">
          <div class="w-11 h-11 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-xs">
            <FileSpreadsheet class="w-5 h-5" />
          </div>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="font-heading text-lg font-bold text-text-primary">
                Transparent Fee Schedule &amp; PhilHealth Maternity Packages
              </h3>
              <span class="px-2.5 py-0.5 rounded-full bg-brand-light border border-brand-border text-brand-primary-hover text-[11px] font-bold">
                DOH A.O. No. 2021-0008
              </span>
            </div>
            <p class="text-sm text-text-secondary max-w-2xl">
              Review our complete itemized rates for delivery packages, laboratory screenings, injectable medications, and medical supplies before your visit.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
          <router-link 
            to="/services?tab=pricing" 
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-heading font-bold shadow-brand-sm transition-colors"
          >
            <span>View Packages &amp; Rates</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
          <router-link 
            to="/services?tab=directory" 
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-brand-soft text-brand-primary hover:text-brand-primary-hover border border-brand-border hover:border-brand-primary/50 text-xs sm:text-sm font-heading font-semibold shadow-card transition-colors"
          >
            <span>DOH Price Directory</span>
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Stethoscope, FileSpreadsheet } from '@lucide/vue'
import prenatalCheckupImg from '../../assets/images/prenatal-checkup.jpg'
import normalDeliveryImg from '../../assets/images/normal-delivery.jpg'

const highlightedServices = [
  {
    title: 'Prenatal Checkups',
    category: 'Maternal Care',
    description: 'Regular consultations and vital monitoring to track the health of both mother and baby throughout every trimester of pregnancy.',
    scheduleNote: 'Mon – Sun (9AM – 7PM)',
    link: '/services?tab=pricing',
    image: prenatalCheckupImg
  },
  {
    title: 'Normal Spontaneous Delivery (NSD)',
    category: 'Maternity Delivery',
    description: 'Safe, compassionate care and monitoring during normal vaginal delivery—available with PhilHealth accreditation or non-PhilHealth packages.',
    scheduleNote: '24/7 Delivery Admissions',
    link: '/services?tab=pricing',
    image: normalDeliveryImg
  },
  {
    title: 'Newborn Screening (NBS)',
    category: 'Infant Wellness',
    description: 'Essential newborn screening, Vitamin K, Hepatitis B & BCG immunization, and ear/hearing checks shortly after birth for early health protection.',
    scheduleNote: 'Included in NSD & Outpatient',
    link: '/services?tab=pricing',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=800&auto=format&fit=crop'
  }
]
</script>
