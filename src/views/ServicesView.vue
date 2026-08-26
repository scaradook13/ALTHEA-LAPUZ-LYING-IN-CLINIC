<template>
  <div class="min-h-screen bg-brand-soft pb-20">
    <PageHero 
      title="Our Medical Services" 
      subtitle="Comprehensive care tailored for mothers and newborns, delivered by our expert team of healthcare professionals."
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="w-16 h-16 bg-brand-soft rounded-3xl flex items-center justify-center mb-6 text-brand-primary shadow-sm border border-brand-light">
            <Stethoscope class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-text-primary mb-6">Prenatal Checkups</h2>
          <p class="text-text-secondary leading-relaxed mb-6 text-lg">
            Our prenatal care program is designed to monitor the health and development of both mother and baby throughout pregnancy. We provide regular checkups, ultrasounds, nutritional counseling, and comprehensive lab tests.
          </p>
          <ul class="space-y-4 text-text-secondary">
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Routine fetal monitoring</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Maternal health assessment</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Nutritional guidance</span></li>
          </ul>
        </div>
        <div class="h-64 lg:h-[400px] bg-brand-soft rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-light relative group">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Prenatal Care" />
          <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 h-64 lg:h-[400px] bg-brand-soft rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-light relative group">
          <img src="https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Delivery Services" />
          <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="w-16 h-16 bg-brand-soft rounded-3xl flex items-center justify-center mb-6 text-brand-primary shadow-sm border border-brand-light">
            <Baby class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-text-primary mb-6">Normal Spontaneous Delivery (NSD)</h2>
          <p class="text-text-secondary leading-relaxed mb-6 text-lg">
            We offer safe and guided natural birthing services in a comfortable, home-like environment. Our experienced midwives and obstetrical team are present to support you through every stage of labor and delivery.
          </p>
          <ul class="space-y-4 text-text-secondary">
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">24/7 on-call birthing team</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Private and comfortable delivery rooms</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Immediate postnatal care</span></li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="w-16 h-16 bg-brand-soft rounded-3xl flex items-center justify-center mb-6 text-brand-primary shadow-sm border border-brand-light">
            <Microscope class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-text-primary mb-6">Newborn Screening (NBS)</h2>
          <p class="text-text-secondary leading-relaxed mb-6 text-lg">
            Early detection is crucial. Our newborn screening services check for rare but serious metabolic, hormonal, and genetic disorders that can affect a child's long-term health if left untreated.
          </p>
          <ul class="space-y-4 text-text-secondary">
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Quick and minimally invasive</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Accurate laboratory testing</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Detailed explanation of results</span></li>
          </ul>
        </div>
        <div class="h-64 lg:h-[400px] bg-brand-soft rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-light relative group">
          <img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Newborn Screening" />
          <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 h-64 lg:h-[400px] bg-brand-soft rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-light relative group">
          <img src="https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vaccination" />
          <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
        </div>
        <div class="order-1 lg:order-2">
          <div class="w-16 h-16 bg-brand-soft rounded-3xl flex items-center justify-center mb-6 text-brand-primary shadow-sm border border-brand-light">
            <Syringe class="w-8 h-8" />
          </div>
          <h2 class="text-3xl font-bold text-text-primary mb-6">Vaccination</h2>
          <p class="text-text-secondary leading-relaxed mb-6 text-lg">
            Protect your child's future with our comprehensive immunization programs. We follow the national guidelines for pediatric vaccines to ensure your child is safe from preventable diseases.
          </p>
          <ul class="space-y-4 text-text-secondary">
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Standard pediatric vaccines</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Immunization record tracking</span></li>
            <li class="flex items-center gap-3"><Check class="w-6 h-6 text-brand-primary flex-shrink-0" /> <span class="font-medium text-text-primary">Gentle and careful administration</span></li>
          </ul>
        </div>
      </div>

      <!-- Operating Hours -->
      <div class="mt-24 bg-brand-primary-dark rounded-[2.5rem] p-10 lg:p-16 text-center text-brand-light shadow-xl relative overflow-hidden border border-brand-primary">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern-hours" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern-hours)"></rect>
            </svg>
        </div>
        <div class="relative z-10">
          <h3 class="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-4 text-white">
            <Clock class="w-10 h-10 text-brand-accent" />
            Operating Hours
          </h3>
          <div class="max-w-2xl mx-auto bg-brand-primary/40 rounded-3xl p-8 backdrop-blur-md border border-brand-accent shadow-inner">
            <p class="text-2xl font-medium mb-6 pb-6 border-b border-brand-accent text-white">
              We are open <span class="text-brand-light font-bold tracking-wide">24/7</span> for delivery cases.
            </p>
            <div class="flex flex-col sm:flex-row justify-between items-center text-xl gap-4">
              <span class="text-brand-light">Regular Checkups:</span>
              <span class="font-bold bg-white text-brand-primary-dark px-6 py-2 rounded-full shadow-sm">Mon - Sat | 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { Stethoscope, Baby, Microscope, Syringe, Clock, Check } from '@lucide/vue'
import PageHero from '../components/common/PageHero.vue'
</script>
