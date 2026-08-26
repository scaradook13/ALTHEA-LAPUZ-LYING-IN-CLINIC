<template>
  <section id="contact" class="py-20 bg-brand-soft">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionHeader 
        title="Contact Us" 
        subtitle="We're here to answer any questions you have about our services, schedule appointments, and provide support."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mt-12">
        <BaseCard class="flex flex-col justify-center items-center text-center p-10 border-brand-light hover:border-brand-accent transition-colors">
          <div class="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
             <Phone class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-text-primary mb-3">Get in Touch</h3>
          <p class="text-text-secondary mb-6">Reach out to us via phone or email for any inquiries or appointments.</p>
          <p class="font-bold text-brand-primary text-lg">(123) 456-7890</p>
        </BaseCard>

        <BaseCard class="flex flex-col justify-center items-center text-center p-10 border-brand-light hover:border-brand-accent transition-colors">
          <div class="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
             <MapPin class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-text-primary mb-3">Our Location</h3>
          <p class="text-text-secondary mb-6">Visit us at our clinic located in the heart of the medical district.</p>
          <p class="font-bold text-brand-primary text-lg">123 Healthway Avenue</p>
        </BaseCard>
      </div>

      <ViewMoreButton to="/contact" />
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin } from '@lucide/vue'
import SectionHeader from '../common/SectionHeader.vue'
import BaseCard from '../common/BaseCard.vue'
import ViewMoreButton from '../common/ViewMoreButton.vue'
</script>
