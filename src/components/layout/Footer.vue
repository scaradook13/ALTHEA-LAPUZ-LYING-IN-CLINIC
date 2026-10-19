<template>
  <footer class="bg-brand-primary-dark text-white border-t border-brand-border mt-auto transition-colors duration-300">
    <!-- ================= SMOOTH EXPANDABLE FAQ DRAWER (Light Clinical Surface) ================= -->
    <div 
      class="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-brand-subtle text-text-primary"
      :class="isFaqVisible 
        ? 'grid-rows-[1fr] opacity-100 border-b border-brand-border' 
        : 'grid-rows-[0fr] opacity-0 pointer-events-none border-b-0'"
    >
      <div class="overflow-hidden">
        <section id="faq-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 text-left">
          
          <!-- Section Header with Close Button -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-border">
            <div class="max-w-2xl space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
                <HelpCircle class="w-3.5 h-3.5" aria-hidden="true" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
                Common Questions About Our Maternity &amp; Newborn Care
              </h2>
              <p class="text-text-secondary text-sm leading-relaxed">
                Find clear answers regarding prenatal checkups, PhilHealth maternity packages, delivery admission requirements, and clinic hours.
              </p>
            </div>
            
            <button 
              @click="isFaqVisible = false" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-heading font-semibold text-text-secondary hover:text-brand-primary bg-white hover:bg-brand-soft border border-brand-border transition-colors duration-200 cursor-pointer"
            >
              <X class="w-4 h-4" aria-hidden="true" />
              <span>Close FAQs</span>
            </button>
          </div>

          <!-- FAQ Accordion Layout (2 Independent Columns) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            
            <!-- Left Column (Even index FAQs) -->
            <div class="space-y-3.5">
              <div 
                v-for="faq in leftFaqs" 
                :key="faq.id || faq.originalIndex"
                class="bg-white rounded-xl border border-brand-border overflow-hidden shadow-card transition-colors duration-200 hover:border-brand-primary/60"
              >
                <button 
                  @click="toggleFaq(faq.originalIndex)"
                  class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 group cursor-pointer"
                  :aria-expanded="openFaqIndex === faq.originalIndex"
                >
                  <span class="text-sm font-heading font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    {{ faq.question }}
                  </span>
                  <div 
                    class="w-7 h-7 rounded-lg bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                    :class="openFaqIndex === faq.originalIndex ? 'rotate-180 bg-brand-primary text-white' : ''"
                  >
                    <ChevronDown class="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                <div 
                  class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  :class="openFaqIndex === faq.originalIndex ? 'grid-rows-[1fr] opacity-100 border-t border-brand-border/60' : 'grid-rows-[0fr] opacity-0 border-t-0'"
                >
                  <div class="overflow-hidden">
                    <div class="px-4 sm:px-5 pb-5 pt-3.5 text-sm text-text-secondary leading-relaxed bg-brand-subtle/60">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column (Odd index FAQs) -->
            <div class="space-y-3.5">
              <div 
                v-for="faq in rightFaqs" 
                :key="faq.id || faq.originalIndex"
                class="bg-white rounded-xl border border-brand-border overflow-hidden shadow-card transition-colors duration-200 hover:border-brand-primary/60"
              >
                <button 
                  @click="toggleFaq(faq.originalIndex)"
                  class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 group cursor-pointer"
                  :aria-expanded="openFaqIndex === faq.originalIndex"
                >
                  <span class="text-sm font-heading font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                    {{ faq.question }}
                  </span>
                  <div 
                    class="w-7 h-7 rounded-lg bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                    :class="openFaqIndex === faq.originalIndex ? 'rotate-180 bg-brand-primary text-white' : ''"
                  >
                    <ChevronDown class="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                <div 
                  class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  :class="openFaqIndex === faq.originalIndex ? 'grid-rows-[1fr] opacity-100 border-t border-brand-border/60' : 'grid-rows-[0fr] opacity-0 border-t-0'"
                >
                  <div class="overflow-hidden">
                    <div class="px-4 sm:px-5 pb-5 pt-3.5 text-sm text-text-secondary leading-relaxed bg-brand-subtle/60">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Quick Inquiry Callout -->
          <div class="p-5 bg-white rounded-xl border border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-card">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-lg bg-brand-soft text-brand-primary flex items-center justify-center flex-shrink-0 border border-brand-border">
                <MessageCircleQuestion class="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 class="text-sm font-heading font-bold text-text-primary">Need direct guidance from our clinical staff?</h3>
                <p class="text-xs text-text-secondary">Use our AI Clinic Assistant in the bottom-right corner or contact our Baliwag desk directly.</p>
              </div>
            </div>
            <router-link 
              to="/contact" 
              @click="isFaqVisible = false"
              class="px-4 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-heading font-semibold rounded-lg transition-colors shadow-brand-sm flex-shrink-0"
            >
              Contact Clinic
            </router-link>
          </div>

        </section>
      </div>
    </div>

    <!-- ================= MAIN FOOTER CONTENT ================= -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/15 text-left">
        
        <!-- Column 1: Clinic Identity (4 cols) -->
        <div class="lg:col-span-4 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 flex-shrink-0 rounded-full bg-white p-0.5 shadow-sm">
              <img 
                src="../../assets/images/althea-lapuz-logo.png" 
                alt="Althea-Lapuz Lying-In Clinic" 
                class="w-full h-full rounded-full object-contain"
              />
            </div>
            <div>
              <h3 class="text-base font-heading font-bold text-white tracking-tight">
                {{ clinicStore.clinicInfo.name }}
              </h3>
              <p class="text-xs text-brand-muted font-medium">
                {{ clinicStore.clinicInfo.tagline }}
              </p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
            Providing safe, transparent, and compassionate maternal and newborn healthcare in Baliwag, Bulacan. Accredited by PhilHealth and compliant with DOH standards.
          </p>
          <div class="pt-1 flex items-center gap-2 text-xs text-brand-light font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{{ clinicStore.clinicInfo.operatingHoursDelivery }}</span>
          </div>
        </div>

        <!-- Column 2: Quick Navigation & FAQs (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-heading font-bold uppercase tracking-wider text-brand-muted">
            Clinic Navigation
          </h4>
          <ul class="space-y-2.5 text-sm text-white/85">
            <li>
              <router-link to="/" @click="isFaqVisible = false" class="hover:text-brand-light transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/services" @click="isFaqVisible = false" class="hover:text-brand-light transition-colors">Services &amp; Fee Schedule</router-link>
            </li>
            <li>
              <router-link to="/services?tab=directory" @click="isFaqVisible = false" class="hover:text-brand-light transition-colors">Official DOH Price Directory</router-link>
            </li>
            <li>
              <router-link to="/about" @click="isFaqVisible = false" class="hover:text-brand-light transition-colors">About the Clinic</router-link>
            </li>
            <li>
              <router-link to="/contact" @click="isFaqVisible = false" class="hover:text-brand-light transition-colors">Contact &amp; Location Map</router-link>
            </li>
          </ul>
          <div class="pt-2">
            <button 
              @click="toggleFaqVisibility"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-heading font-semibold transition-all duration-200 cursor-pointer border"
              :class="isFaqVisible 
                ? 'bg-brand-soft text-brand-primary border-brand-border' 
                : 'bg-white/10 text-white border-white/20 hover:bg-brand-primary hover:border-brand-primary'"
              :aria-expanded="isFaqVisible"
              aria-label="Toggle Frequently Asked Questions"
            >
              <HelpCircle class="w-3.5 h-3.5" aria-hidden="true" />
              <span>{{ isFaqVisible ? 'Hide FAQs' : 'View Frequently Asked Questions' }}</span>
            </button>
          </div>
        </div>

        <!-- Column 3: Clinical Services Summary (2 cols) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-xs font-heading font-bold uppercase tracking-wider text-brand-muted">
            Core Services
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-white/80">
            <li>
              <router-link to="/services?tab=pricing" class="hover:text-brand-light transition-colors">Prenatal Checkups</router-link>
            </li>
            <li>
              <router-link to="/services?tab=pricing" class="hover:text-brand-light transition-colors">Normal Spontaneous Delivery</router-link>
            </li>
            <li>
              <router-link to="/services?tab=pricing" class="hover:text-brand-light transition-colors">Expanded Newborn Screening</router-link>
            </li>
            <li>
              <router-link to="/services?tab=pricing" class="hover:text-brand-light transition-colors">Maternal &amp; Infant Vaccines</router-link>
            </li>
            <li>
              <router-link to="/services?tab=directory" class="hover:text-brand-light transition-colors">Family Planning Care</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Direct Contact & Hours (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-heading font-bold uppercase tracking-wider text-brand-muted">
            Contact &amp; Location
          </h4>
          <ul class="space-y-3 text-xs sm:text-sm text-white/85">
            <li class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-brand-muted flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{{ clinicStore.clinicInfo.address }}</span>
            </li>
            <li class="flex items-center gap-2.5">
              <Phone class="w-4 h-4 text-brand-muted flex-shrink-0" aria-hidden="true" />
              <a :href="`tel:${clinicStore.clinicInfo.phonePrimary.replace(/[^0-9]/g, '')}`" class="hover:text-brand-light transition-colors font-mono">
                {{ clinicStore.clinicInfo.phonePrimary }}
              </a>
            </li>
            <li class="flex items-center gap-2.5">
              <Mail class="w-4 h-4 text-brand-muted flex-shrink-0" aria-hidden="true" />
              <a :href="`mailto:${clinicStore.clinicInfo.email}`" class="hover:text-brand-light transition-colors break-all">
                {{ clinicStore.clinicInfo.email }}
              </a>
            </li>
            <li class="pt-1">
              <a 
                :href="clinicStore.clinicInfo.facebookUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand-light hover:text-white transition-colors"
                title="Official Facebook Page"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow Official Facebook Page</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- ================= COPYRIGHT & REGULATORY ROW ================= -->
      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/75">
        <p>© {{ new Date().getFullYear() }} {{ clinicStore.clinicInfo.name }}. All rights reserved.</p>
        <p class="text-white/60">
          Public Price Directory Compliant with DOH Administrative Order No. 2021-0008
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { HelpCircle, ChevronDown, MessageCircleQuestion, X, MapPin, Phone, Mail } from '@lucide/vue'
import { clinicStore } from '../../stores/clinicStore.js'

const route = useRoute()
const isFaqVisible = ref(false)
const openFaqIndex = ref(-1)

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

const faqsWithIndex = computed(() => {
  const items = clinicStore.chatbot?.faqResponses || []
  return items.map((faq, index) => ({ ...faq, originalIndex: index }))
})

const leftFaqs = computed(() => {
  return faqsWithIndex.value.filter((_, idx) => idx % 2 === 0)
})

const rightFaqs = computed(() => {
  return faqsWithIndex.value.filter((_, idx) => idx % 2 !== 0)
})
</script>
