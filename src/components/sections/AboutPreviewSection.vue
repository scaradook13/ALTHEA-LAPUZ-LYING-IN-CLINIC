<template>
  <section id="about" class="py-20 bg-brand-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionHeader title="Learn More About Us" showDivider />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left mt-12">
        <div>
          <h3 class="text-2xl font-bold text-text-primary mb-4">Welcome to Althea-Lapuz Lying-In Clinic</h3>
          <p class="text-text-secondary mb-6 leading-relaxed text-lg">
            Our clinic was established with a singular focus: to provide accessible, high-quality, and compassionate maternal and newborn care to our community. 
            We understand that pregnancy and childbirth are some of the most important moments in a family's life.
          </p>
          <div class="space-y-4 text-text-secondary mb-8 text-lg">
            <div class="flex items-start gap-3">
              <CheckCircle2 class="w-6 h-6 text-brand-primary mt-0.5 flex-shrink-0" />
              <p><strong class="text-text-primary">What we provide:</strong> A safe haven for expectant mothers, offering comprehensive prenatal to postnatal care.</p>
            </div>
            <div class="flex items-start gap-3">
              <CheckCircle2 class="w-6 h-6 text-brand-primary mt-0.5 flex-shrink-0" />
              <p><strong class="text-text-primary">Who we serve:</strong> Families in our local and surrounding communities looking for personalized midwifery services.</p>
            </div>
          </div>
          
          <ViewMoreButton to="/about" class="!mt-0" />
        </div>
        
        <div class="grid grid-cols-2 gap-4 h-full">
          <div class="bg-brand-soft rounded-3xl p-6 flex flex-col justify-center text-center border border-brand-light">
            <span class="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">10+</span>
            <span class="text-text-primary font-medium">Years of Experience</span>
          </div>
          <div class="rounded-3xl overflow-hidden h-full w-full min-h-[250px] shadow-sm relative group">
            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop" alt="Clinic Interior" class="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from '@lucide/vue'
import SectionHeader from '../common/SectionHeader.vue'
import ViewMoreButton from '../common/ViewMoreButton.vue'
</script>
