<template>
  <section id="services" class="py-20 md:py-28 bg-white border-t border-brand-border/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Heading -->
      <div class="text-left mb-14 md:mb-18 space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border-2 border-neutral-900 text-brand-primary-dark text-xs font-extrabold uppercase tracking-wider rounded-full shadow-2xs">
          <span class="w-2 h-2 rounded-full bg-brand-primary"></span>
          <span>Our Clinical Focus</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
          Highlighted Services
        </h2>
        <p class="text-base sm:text-lg text-text-secondary font-normal max-w-2xl">
          Explore our primary clinical focus areas dedicated to exceptional maternal care and child wellness.
        </p>
      </div>

      <!-- Services List (3 Rows as Polished Cards) -->
      <div class="space-y-6 md:space-y-8">
        <div 
          v-for="(service, idx) in highlightedServices" 
          :key="service.title"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white hover:bg-slate-50/50 p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200/90 hover:border-brand-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 group"
        >
          <!-- Left Content -->
          <div class="lg:col-span-7 space-y-4 text-left">
            <div class="inline-block text-xs font-bold text-neutral-900 bg-white px-3 py-1 rounded-full border-2 border-neutral-900 shadow-2xs">
              0{{ idx + 1 }} • Specialization
            </div>
            
            <h3 class="text-2xl sm:text-3xl font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
              {{ service.title }}
            </h3>
            
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {{ service.description }}
            </p>

            <div class="pt-2">
              <router-link 
                to="/services?tab=pricing" 
                class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-soft/90 hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-primary-hover text-brand-primary-dark hover:text-white border border-brand-border/70 hover:border-transparent text-xs sm:text-sm font-bold transition-all duration-300 shadow-2xs group/link"
              >
                <span>View service specifications & pricing</span>
                <div class="w-5 h-5 rounded-full bg-white/90 text-brand-primary group-hover/link:bg-white/20 group-hover/link:text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-xs">
                  <ArrowRight class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </div>
              </router-link>
            </div>
          </div>

          <!-- Right Image Card -->
          <div class="lg:col-span-5">
            <div class="w-full h-52 sm:h-64 bg-brand-soft rounded-2xl border border-brand-border/60 relative overflow-hidden shadow-xs group-hover:shadow-md transition-shadow">
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent flex items-end p-4">
                <span class="text-xs font-bold text-white bg-neutral-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {{ service.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from '@lucide/vue'
import prenatalCheckupImg from '../../assets/images/prenatal-checkup.jpg'
import normalDeliveryImg from '../../assets/images/normal-delivery.jpg'

const highlightedServices = [
  {
    title: 'Prenatal Checkups',
    description: 'Regular check-ups to monitor the health of both mother and baby throughout pregnancy. Get proper guidance and care for a safe and healthy pregnancy.',
    image: prenatalCheckupImg
  },
  {
    title: 'Normal Spontaneous Delivery (NSD)',
    description: 'Professional care and support for mothers during normal vaginal delivery. Our team ensures a safe and comfortable childbirth experience.',
    image: normalDeliveryImg
  },
  {
    title: 'Newborn Screening (NBS)',
    description: 'A simple test that checks newborns for certain health conditions shortly after birth. Early detection helps ensure timely care and treatment when needed.',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=800&auto=format&fit=crop'
  }
]
</script>



