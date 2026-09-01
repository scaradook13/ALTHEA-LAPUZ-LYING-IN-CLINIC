<template>
  <footer class="bg-gradient-to-b from-[#FCE4EF] via-[#F9D3E6] to-[#F5C2DC] text-neutral-900 border-t-2 border-brand-border/90 mt-auto transition-colors duration-300 shadow-inner">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
      
      <!-- ================= MAIN FOOTER ROW ================= -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Brand & Slogan -->
        <div class="flex items-center gap-3.5">
          <div class="w-10 h-10 flex-shrink-0 relative">
            <img 
              src="../../assets/images/althea-lapuz-logo.png" 
              alt="Althea-Lapuz Lying In Clinic" 
              class="w-full h-full rounded-full object-contain ring-2 ring-brand-border/80 bg-white"
            />
          </div>
          <div class="text-left">
            <h3 class="text-sm font-extrabold text-neutral-950 uppercase tracking-wider">
              Althea-Lapuz Lying In Clinic
            </h3>
            <p class="text-xs text-neutral-700 font-semibold">Compassionate Maternal & Newborn Care</p>
          </div>
        </div>

        <!-- Navigation Links + Small FAQ Toggle Button -->
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-extrabold text-neutral-800">
          <router-link to="/" @click="isFaqVisible = false" class="hover:text-brand-primary transition-colors">Home</router-link>
          <router-link to="/services" @click="isFaqVisible = false" class="hover:text-brand-primary transition-colors">Services</router-link>
          <router-link to="/about" @click="isFaqVisible = false" class="hover:text-brand-primary transition-colors">About</router-link>
          <router-link to="/contact" @click="isFaqVisible = false" class="hover:text-brand-primary transition-colors">Contact Us</router-link>
          <a 
            href="https://www.facebook.com/share/1F9n16Qjzo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-brand-primary transition-colors inline-flex items-center gap-1.5"
            title="Official Facebook Page"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
          
          <!-- Small FAQ Toggle Button -->
          <button 
            @click="toggleFaqVisibility"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none cursor-pointer active:scale-95 shadow-xs"
            :class="isFaqVisible 
              ? 'bg-brand-primary text-white shadow-brand-sm ring-2 ring-brand-primary/20' 
              : 'bg-white text-brand-primary hover:bg-brand-soft border border-brand-border/80 hover:shadow-sm'"
            :aria-expanded="isFaqVisible"
            aria-label="Toggle Frequently Asked Questions"
          >
            <HelpCircle class="w-3.5 h-3.5" />
            <span>{{ isFaqVisible ? 'Close FAQs' : 'FAQs' }}</span>
          </button>
        </div>
      </div>

      <!-- ================= SMOOTH EXPANDABLE FAQ DRAWER ================= -->
      <div 
        class="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="isFaqVisible 
          ? 'grid-rows-[1fr] opacity-100 pt-6 border-t border-brand-border/40' 
          : 'grid-rows-[0fr] opacity-0 pointer-events-none pt-0 border-t-0'"
      >
        <div class="overflow-hidden">
          <section id="faq-section" class="space-y-8 text-left pb-2">
            
            <!-- Section Header with Close Button -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div class="max-w-2xl space-y-2">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
                  <HelpCircle class="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                  Got Questions? We’re Here to Help.
                </h2>
                <p class="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Find quick answers to common questions regarding maternal care, prenatal checkups, delivery schedules, and clinic facilities.
                </p>
              </div>
              
              <button 
                @click="isFaqVisible = false" 
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-neutral-600 hover:text-brand-primary hover:bg-brand-soft border border-neutral-200 hover:border-brand-border transition-all duration-200 cursor-pointer"
              >
                <X class="w-3.5 h-3.5" />
                <span>Hide FAQs</span>
              </button>
            </div>

            <!-- FAQ Accordion Layout (2 Independent Columns to prevent adjacent stretching) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start pt-1">
              
              <!-- Left Column (Even index FAQs) -->
              <div class="space-y-4">
                <div 
                  v-for="faq in leftFaqs" 
                  :key="faq.question"
                  class="bg-white rounded-2xl border border-brand-border/70 overflow-hidden shadow-card transition-all duration-300 hover:border-brand-primary/60"
                >
                  <button 
                    @click="toggleFaq(faq.originalIndex)"
                    class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 focus:outline-none group cursor-pointer"
                    :aria-expanded="openFaqIndex === faq.originalIndex"
                  >
                    <span class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
                      {{ faq.question }}
                    </span>
                    <div 
                      class="w-7 h-7 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out"
                      :class="openFaqIndex === faq.originalIndex ? 'rotate-180 bg-brand-primary text-white' : ''"
                    >
                      <ChevronDown class="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <!-- Butter-Smooth Grid Accordion Collapsible -->
                  <div 
                    class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    :class="openFaqIndex === faq.originalIndex ? 'grid-rows-[1fr] opacity-100 border-t border-neutral-100' : 'grid-rows-[0fr] opacity-0 border-t-0'"
                  >
                    <div class="overflow-hidden">
                      <div class="px-4 sm:px-5 pb-5 pt-3 text-xs sm:text-sm text-text-secondary leading-relaxed bg-brand-subtle/30">
                        <p>{{ faq.answer }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (Odd index FAQs) -->
              <div class="space-y-4">
                <div 
                  v-for="faq in rightFaqs" 
                  :key="faq.question"
                  class="bg-white rounded-2xl border border-brand-border/70 overflow-hidden shadow-card transition-all duration-300 hover:border-brand-primary/60"
                >
                  <button 
                    @click="toggleFaq(faq.originalIndex)"
                    class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 focus:outline-none group cursor-pointer"
                    :aria-expanded="openFaqIndex === faq.originalIndex"
                  >
                    <span class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-brand-primary transition-colors">
                      {{ faq.question }}
                    </span>
                    <div 
                      class="w-7 h-7 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out"
                      :class="openFaqIndex === faq.originalIndex ? 'rotate-180 bg-brand-primary text-white' : ''"
                    >
                      <ChevronDown class="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <!-- Butter-Smooth Grid Accordion Collapsible -->
                  <div 
                    class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    :class="openFaqIndex === faq.originalIndex ? 'grid-rows-[1fr] opacity-100 border-t border-neutral-100' : 'grid-rows-[0fr] opacity-0 border-t-0'"
                  >
                    <div class="overflow-hidden">
                      <div class="px-4 sm:px-5 pb-5 pt-3 text-xs sm:text-sm text-text-secondary leading-relaxed bg-brand-subtle/30">
                        <p>{{ faq.answer }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Quick Chatbot / Inquiry Callout -->
            <div class="p-4 sm:p-5 bg-white/90 rounded-2xl border border-brand-border/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MessageCircleQuestion class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-neutral-950">Have another question not listed here?</h4>
                  <p class="text-[11px] sm:text-xs text-text-secondary">Talk to our AI Clinic Assistant or contact our concierge directly.</p>
                </div>
              </div>
              <router-link 
                to="/contact" 
                @click="isFaqVisible = false"
                class="px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-bold shadow-brand-sm hover:bg-brand-primary-hover hover:shadow-brand transition-all"
              >
                Contact Clinic
              </router-link>
            </div>
          </section>
        </div>
      </div>

      <!-- ================= COPYRIGHT BAR ================= -->
      <div class="pt-4 border-t border-brand-border/70 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-700 font-semibold">
        <p>&copy; {{ new Date().getFullYear() }} Althea-Lapuz Lying In Clinic. All rights reserved.</p>
        <p>332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan • 24/7 Maternal Care</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { HelpCircle, ChevronDown, MessageCircleQuestion, X } from '@lucide/vue'

const route = useRoute()
const isFaqVisible = ref(false)
const openFaqIndex = ref(-1)

// Automatically collapse FAQ whenever user changes tab or navigates to a new page
watch(() => route.fullPath, () => {
  isFaqVisible.value = false
})

const toggleFaqVisibility = async () => {
  isFaqVisible.value = !isFaqVisible.value
  if (isFaqVisible.value) {
    await nextTick()
    setTimeout(() => {
      const faqElement = document.getElementById('faq-section')
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 120)
  }
}

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
    answer: 'You can contact us via phone at (044)-462-0789 / 0931-069-3921 / 0969-405-5108, email us at lapuzaltheajasmine@gmail.com, or visit our clinic located at 332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan.'
  }
]

const faqsWithIndex = computed(() => {
  return faqs.map((faq, index) => ({ ...faq, originalIndex: index }))
})

const leftFaqs = computed(() => {
  return faqsWithIndex.value.filter((_, idx) => idx % 2 === 0)
})

const rightFaqs = computed(() => {
  return faqsWithIndex.value.filter((_, idx) => idx % 2 !== 0)
})
</script>







