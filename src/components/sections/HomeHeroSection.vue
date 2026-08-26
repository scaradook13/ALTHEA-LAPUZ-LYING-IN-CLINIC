<template>
  <section id="home" class="min-h-screen pt-4 flex items-center bg-gradient-to-br from-brand-soft to-brand-surface">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            Providing Gentle Care for You and Your Baby
          </h1>
          <p class="text-lg md:text-xl text-text-secondary mb-8 max-w-lg">
            Welcome to Althea-Lapuz Lying-In Clinic. We offer comprehensive maternal and newborn care in a comfortable, safe, and nurturing environment.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton to="/contact" variant="primary">
              Book an Appointment
            </BaseButton>
            <BaseButton to="/services" variant="secondary">
              Explore Our Services
            </BaseButton>
          </div>
        </div>
        <div class="hidden md:block relative">
          <!-- Hero image -->
          <div class="aspect-square rounded-full bg-brand-soft flex items-center justify-center p-6 md:p-8">
            <div class="w-full h-full rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border-8 border-brand-light relative group">
               <img src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1000&auto=format&fit=crop" alt="Mother and Baby Care" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue'
</script>
