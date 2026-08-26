<template>
  <section id="services" class="py-20 bg-brand-soft">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionHeader 
        title="Our Medical Services" 
        subtitle="We provide a range of specialized healthcare services to support mothers and babies, ensuring a safe and healthy start to life."
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-12">
        <BaseCard v-for="service in services" :key="service.title" class="flex flex-col h-full border-brand-light hover:border-brand-accent transition-colors">
          <div class="w-14 h-14 bg-brand-soft rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
            <component :is="service.icon" class="w-7 h-7" />
          </div>
          <h3 class="text-xl font-bold text-text-primary mb-3">{{ service.title }}</h3>
          <p class="text-text-secondary line-clamp-3 mb-4 flex-grow">{{ service.desc }}</p>
        </BaseCard>
      </div>

      <ViewMoreButton to="/services" />
    </div>
  </section>
</template>

<script setup>
import { Stethoscope, Baby, Microscope, Syringe } from '@lucide/vue'
import SectionHeader from '../common/SectionHeader.vue'
import BaseCard from '../common/BaseCard.vue'
import ViewMoreButton from '../common/ViewMoreButton.vue'

const services = [
  { icon: Stethoscope, title: 'Prenatal Checkups', desc: 'Regular monitoring and care throughout your pregnancy to ensure the health of both mother and baby.' },
  { icon: Baby, title: 'Delivery (NSD)', desc: 'Safe, guided natural birthing services with our experienced midwives and healthcare professionals.' },
  { icon: Microscope, title: 'Newborn Screening', desc: 'Essential early detection tests to identify specific conditions that can affect a child\'s long-term health.' },
  { icon: Syringe, title: 'Vaccination', desc: 'Comprehensive immunization programs to protect your child from preventable diseases.' }
]
</script>
