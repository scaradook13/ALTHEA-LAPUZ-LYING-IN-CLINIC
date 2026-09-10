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
import FaqAccordion from '../common/FaqAccordion.vue'
import BaseButton from '../common/BaseButton.vue'

const faqs = [
  {
    question: 'What services does Althea-Lapuz Lying-In Clinic offer?',
    answer: 'We offer comprehensive maternal and newborn care, including prenatal checkups, normal spontaneous delivery (NSD), newborn screening, vaccination, and family planning services.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by contacting us via phone, email, or our Facebook page. We recommend scheduling in advance for regular checkups, though walk-ins are accepted for urgent maternity needs.'
  },
  {
    question: 'Do I need to schedule an appointment before visiting the clinic?',
    answer: 'While we encourage scheduling appointments for prenatal checkups and consultations to minimize wait times, our delivery and birthing services are available 24/7 for expecting mothers.'
  },
  {
    question: 'What should I bring for my appointment or delivery?',
    answer: 'For a prenatal checkup, please bring your previous medical records and ultrasound results. For delivery, please prepare your maternity records, baby clothes, receiving blankets, and your personal hygiene kit.'
  },
  {
    question: 'What maternity and prenatal care services are available?',
    answer: 'Our prenatal care includes routine fetal monitoring, maternal health assessments, nutritional guidance, and formal medical requests for required laboratory tests and ultrasound. Note: In-clinic lab tests and ultrasound are not performed directly; we provide official requests and interpret your results.'
  },
  {
    question: 'Do you provide postpartum care?',
    answer: 'Yes, we provide postpartum support to monitor the mother\'s recovery, assist with breastfeeding, and ensure the newborn is healthy and thriving.'
  },
  {
    question: 'How can I contact the clinic for more information?',
    answer: 'You can reach us by phone at 0931 069 3921 / (044)-462-0789, email us at lapuzaltheajasmine@gmail.com, or visit our clinic located at 332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan.'
  },
  {
    question: 'What are the clinic\'s operating hours?',
    answer: 'Our prenatal checkups run Monday to Sunday from 9:00 AM to 7:00 PM. Our clinic and delivery room are open 24 Hours (24/7) for maternity admissions and active deliveries.'
  }
]
</script>
