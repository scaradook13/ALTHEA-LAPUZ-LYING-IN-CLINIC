<template>
  <footer class="bg-gradient-to-b from-brand-subtle via-white to-brand-soft/60 text-text-primary border-t border-brand-border/40 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 space-y-14">
      
      <!-- ================= FAQ SECTION ================= -->
      <section id="faq" class="space-y-8 text-left">
        <!-- Section Header -->
        <div class="max-w-2xl space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
            <HelpCircle class="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Got Questions? We’re Here to Help.
          </h2>
          <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
            Find quick answers to common questions regarding maternal care, prenatal checkups, delivery schedules, and clinic facilities.
          </p>
        </div>

        <!-- FAQ Accordion Grid (2 Columns on Desktop) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
          <div 
            v-for="(faq, index) in faqs" 
            :key="faq.question"
            class="bg-white rounded-2xl border border-brand-border/60 overflow-hidden shadow-card transition-all duration-300 hover:border-brand-primary/60"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none group"
              :aria-expanded="openFaqIndex === index"
            >
              <span class="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
                {{ faq.question }}
              </span>
              <div 
                class="w-8 h-8 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                :class="openFaqIndex === index ? 'rotate-180 bg-brand-primary text-white' : ''"
              >
                <ChevronDown class="w-4 h-4" />
              </div>
            </button>

            <!-- Collapsible Answer -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="openFaqIndex === index" class="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-neutral-100">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>

        <!-- Quick Chatbot / Inquiry Callout -->
        <div class="p-5 sm:p-6 bg-brand-soft/70 rounded-2xl border border-brand-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <MessageCircleQuestion class="w-5 h-5" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-neutral-950">Have another question not listed here?</h4>
              <p class="text-xs text-text-secondary">Talk to our AI Clinic Assistant or contact our concierge directly.</p>
            </div>
          </div>
          <router-link 
            to="/contact" 
            class="px-5 py-2.5 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-bold shadow-brand-sm hover:bg-brand-primary-hover hover:shadow-brand transition-all"
          >
            Contact Clinic
          </router-link>
        </div>
      </section>

      <!-- ================= BRAND & LINKS ROW ================= -->
      <div class="pt-8 border-t border-brand-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Brand & Slogan -->
        <div class="flex items-center gap-3.5">
          <div class="w-10 h-10 flex-shrink-0 relative">
            <img 
              src="../../assets/images/althea-lapuz-logo.png" 
              alt="Althea-Lapuz Lying In Clinic" 
              class="w-full h-full rounded-full object-contain ring-2 ring-brand-border/60"
            />
          </div>
          <div class="text-left">
            <h3 class="text-sm font-extrabold text-neutral-950 uppercase tracking-wider">
              Althea-Lapuz Lying In Clinic
            </h3>
            <p class="text-xs text-text-secondary">Compassionate Maternal & Newborn Care</p>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-text-secondary">
          <router-link to="/" class="hover:text-brand-primary transition-colors">Home</router-link>
          <router-link to="/services" class="hover:text-brand-primary transition-colors">Services</router-link>
          <router-link to="/about" class="hover:text-brand-primary transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-brand-primary transition-colors">Contact Us</router-link>
          <a href="#faq" class="text-brand-primary hover:underline">FAQs</a>
        </div>
      </div>

      <!-- ================= COPYRIGHT BAR ================= -->
      <div class="pt-4 border-t border-brand-border/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-muted">
        <p>&copy; {{ new Date().getFullYear() }} Althea-Lapuz Lying In Clinic. All rights reserved.</p>
        <p>Tilapayong, City of Baliwag, Bulacan • 24/7 Maternal Care</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { HelpCircle, ChevronDown, MessageCircleQuestion } from '@lucide/vue'

const openFaqIndex = ref(0) // First item open by default

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'What maternal and newborn services do you offer?',
    answer: 'We offer comprehensive maternity care including Prenatal Checkups, Normal Spontaneous Delivery (NSD), Expanded Newborn Screening (NBS), Maternal & Infant Vaccinations, and Postpartum monitoring.'
  },
  {
    question: 'What are the clinic’s operating hours?',
    answer: 'Our scheduled checkup and consultation hours run Monday to Friday (8:00 AM - 5:00 PM) and Saturday (8:00 AM - 12:00 PM). Our delivery suite and licensed midwife team are on-call 24/7 for active labors and childbirth.'
  },
  {
    question: 'Do I need to schedule an appointment before visiting?',
    answer: 'Appointments are recommended for routine prenatal checkups to reduce wait times. However, walk-ins are warmly accepted for urgent maternal needs and active labor cases 24/7.'
  },
  {
    question: 'What should I prepare and bring for checkups or delivery?',
    answer: 'For prenatal visits, please bring your existing health records and recent ultrasound results. For delivery admission, bring your maternity booklet, baby clothes, receiving blankets, and a personal hygiene kit.'
  },
  {
    question: 'Are there accessibility accommodations for pregnant women and wheelchair users?',
    answer: 'Yes! Our facility is equipped with a street-level wheelchair ramp, non-slip flooring, wide doorways, support handrails, ergonomic waiting areas, and priority assistance for expecting mothers.'
  },
  {
    question: 'How can I reach or contact the clinic in Baliwag?',
    answer: 'You can contact us via phone at +63 917 123 4567, email us at althealapuzlyingin@gmail.com, or visit our clinic located at Tilapayong, City of Baliwag, Bulacan.'
  }
]
</script>




