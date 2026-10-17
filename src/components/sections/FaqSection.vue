<template>
  <section class="py-24 bg-brand-surface border-t border-brand-light">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          Find answers to common questions about our clinic, services, appointments, and maternity care.
        </p>
      </div>
      
      <div class="space-y-4">
        <FaqAccordion 
          v-for="(faq, index) in faqs" 
          :key="index"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>

      <div class="mt-16 text-center bg-brand-soft rounded-3xl p-8 border border-brand-light">
        <h3 class="text-2xl font-bold text-text-primary mb-3">Still have questions?</h3>
        <p class="text-text-secondary mb-6">We're here to help! Reach out to us for any other inquiries.</p>
        <BaseButton to="/contact" variant="primary">
          Need More Help? Contact Us
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import FaqAccordion from '../common/FaqAccordion.vue'
import BaseButton from '../common/BaseButton.vue'
import { clinicStore } from '../../stores/clinicStore.js'

const faqs = computed(() => clinicStore.chatbot.faqResponses)
</script>
