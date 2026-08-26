<template>
  <div class="min-h-screen bg-white pt-24 pb-20 md:pt-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

      <!-- Top Header & Modern Tab Switcher -->
      <div class="space-y-6 text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
          <span>Clinical & Facility Services</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
          {{ tabTitle }}
        </h1>
        
        <p class="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
          {{ tabSubtitle }}
        </p>

        <!-- Segmented Tab Switcher -->
        <div class="inline-flex p-1.5 bg-brand-soft/80 border border-brand-border/70 rounded-full shadow-xs max-w-full overflow-x-auto">
          <button 
            @click="setTab('overview')"
            :class="[
              'px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap',
              activeTab === 'overview' 
                ? 'bg-brand-primary text-white shadow-brand-sm' 
                : 'text-neutral-700 hover:text-brand-primary hover:bg-white/60'
            ]"
          >
            Overview
          </button>
          
          <button 
            @click="setTab('pricing')"
            :class="[
              'px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap flex items-center gap-2',
              activeTab === 'pricing' 
                ? 'bg-brand-primary text-white shadow-brand-sm' 
                : 'text-neutral-700 hover:text-brand-primary hover:bg-white/60'
            ]"
          >
            <Banknote class="w-4 h-4" />
            <span>Service Pricing & Fees</span>
          </button>

          <button 
            @click="setTab('accessibility')"
            :class="[
              'px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap flex items-center gap-2',
              activeTab === 'accessibility' 
                ? 'bg-brand-primary text-white shadow-brand-sm' 
                : 'text-neutral-700 hover:text-brand-primary hover:bg-white/60'
            ]"
          >
            <ShieldCheck class="w-4 h-4" />
            <span>Accessibility Features</span>
          </button>
        </div>
      </div>

      <!-- ================= TAB 1: OVERVIEW ================= -->
      <div v-if="activeTab === 'overview'" class="space-y-10 pt-4">
        <!-- 2 Main Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          <!-- Card 1: Service Prices / Fees -->
          <div class="border border-brand-border/60 rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-300 flex flex-col group text-left">
            <!-- Image -->
            <div class="w-full h-60 sm:h-72 bg-brand-soft relative overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
                alt="Service Prices and Fees" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
              />
              <div class="absolute top-4 left-4">
                <span class="px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-brand-primary text-xs font-extrabold rounded-full border border-brand-border/80 shadow-xs">
                  Financial Transparency
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 sm:p-10 space-y-4 flex flex-col flex-1">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 group-hover:text-brand-primary transition-colors">
                Service Prices / Fees
              </h2>
              <p class="text-text-secondary text-base leading-relaxed flex-1">
                Transparent, clear, and competitive pricing structures for all maternity checkups, delivery procedures, and newborn screening packages.
              </p>
              <div class="pt-4">
                <button 
                  @click="setTab('pricing')" 
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white text-sm font-bold shadow-brand-sm hover:shadow-brand hover:bg-brand-primary-hover active:scale-[0.98] transition-all group/btn"
                >
                  <span>Open Pricing Tab</span>
                  <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <!-- Card 2: Accessibility Features -->
          <div class="border border-brand-border/60 rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-300 flex flex-col group text-left">
            <!-- Image -->
            <div class="w-full h-60 sm:h-72 bg-brand-soft relative overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
                alt="Accessibility Features" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
              />
              <div class="absolute top-4 left-4">
                <span class="px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-brand-primary text-xs font-extrabold rounded-full border border-brand-border/80 shadow-xs">
                  Clinic Infrastructure
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 sm:p-10 space-y-4 flex flex-col flex-1">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 group-hover:text-brand-primary transition-colors">
                Accessibility Features
              </h2>
              <p class="text-text-secondary text-base leading-relaxed flex-1">
                Comprehensive physical facilities and support designed to ensure comfort, safety, and ease of access for pregnant women and families.
              </p>
              <div class="pt-4">
                <button 
                  @click="setTab('accessibility')" 
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-white text-sm font-bold shadow-brand-sm hover:shadow-brand hover:bg-brand-primary-hover active:scale-[0.98] transition-all group/btn"
                >
                  <span>Open Accessibility Tab</span>
                  <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ================= TAB 2: SERVICE PRICING & FEES ================= -->
      <div v-else-if="activeTab === 'pricing'" class="space-y-8 text-left pt-2">
        <div class="border border-brand-border/60 rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-brand-subtle via-white to-white shadow-card space-y-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-border/40">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-widest text-brand-primary">CLINICAL SERVICES & PACKAGES</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-1">Service Pricing / Fees</h2>
            </div>
            <router-link 
              to="/contact" 
              class="px-5 py-2 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-bold shadow-brand-sm hover:bg-brand-primary-hover transition-colors"
            >
              Inquire or Schedule Visit
            </router-link>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <!-- 1: Prenatal Checkups -->
            <div class="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all space-y-4 group">
              <div class="flex items-center justify-between">
                <h3 class="text-base sm:text-lg font-extrabold text-neutral-950 group-hover:text-brand-primary transition-colors">
                  • Prenatal Checkups
                </h3>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border/60">
                  Standard & Specialized
                </span>
              </div>
              <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-xl border border-brand-border/50 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" 
                  alt="Prenatal Checkups" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Comprehensive maternal assessment, ultrasound coordination, fetal heart monitoring, and health tracking throughout every trimester.
              </p>
            </div>

            <!-- 2: Newborn Screening -->
            <div class="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all space-y-4 group">
              <div class="flex items-center justify-between">
                <h3 class="text-base sm:text-lg font-extrabold text-neutral-950 group-hover:text-brand-primary transition-colors">
                  • Newborn Screening
                </h3>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border/60">
                  Expanded (NBS)
                </span>
              </div>
              <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-xl border border-brand-border/50 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=600&auto=format&fit=crop" 
                  alt="Newborn Screening" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Early diagnostic blood test to detect rare metabolic and congenital disorders, ensuring early medical care and newborn protection.
              </p>
            </div>

            <!-- 3: Normal Spontaneous Delivery -->
            <div class="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all space-y-4 group">
              <div class="flex items-center justify-between">
                <h3 class="text-base sm:text-lg font-extrabold text-neutral-950 group-hover:text-brand-primary transition-colors">
                  • Normal Spontaneous Delivery
                </h3>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border/60">
                  NSD Package
                </span>
              </div>
              <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-xl border border-brand-border/50 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=600&auto=format&fit=crop" 
                  alt="Normal Spontaneous Delivery" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Safe birthing care assisted by licensed midwives and medical staff, including labor monitoring, sterile delivery setup, and recovery support.
              </p>
            </div>

            <!-- 4: Vaccination -->
            <div class="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all space-y-4 group">
              <div class="flex items-center justify-between">
                <h3 class="text-base sm:text-lg font-extrabold text-neutral-950 group-hover:text-brand-primary transition-colors">
                  • Vaccination
                </h3>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border/60">
                  Maternal & Infant
                </span>
              </div>
              <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-xl border border-brand-border/50 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=600&auto=format&fit=crop" 
                  alt="Vaccination" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Essential immunizations including newborn BCG, Hepatitis B, and recommended maternal vaccines to protect against infectious diseases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= TAB 3: ACCESSIBILITY FEATURES ================= -->
      <div v-else-if="activeTab === 'accessibility'" class="space-y-8 text-left pt-2">
        <div class="border border-brand-border/60 rounded-3xl p-6 sm:p-10 md:p-12 bg-white shadow-card space-y-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-border/40">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-widest text-brand-primary">INCLUSIVE & BARRIER-FREE</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-1">Accessibility Features</h2>
            </div>
            <span class="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              Facility Standard Compliant
            </span>
          </div>

          <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                01
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Wheelchair Ramp</h3>
                <p class="text-xs text-text-secondary mt-0.5">Easy entrance for wheelchair users and mobility aids.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                02
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Handrails</h3>
                <p class="text-xs text-text-secondary mt-0.5">Support along stairs and hallways for stability and patient balance.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                03
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Accessible Restroom</h3>
                <p class="text-xs text-text-secondary mt-0.5">Easy-to-use dedicated restroom designed for pregnant and recovering mothers.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                04
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Non-Slip Floors</h3>
                <p class="text-xs text-text-secondary mt-0.5">High-traction medical grade flooring helps prevent slips and falls.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                05
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Wide Doorways</h3>
                <p class="text-xs text-text-secondary mt-0.5">Allows unobstructed movement for patients, wheelchairs, and stretchers.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                06
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Comfortable Waiting Area</h3>
                <p class="text-xs text-text-secondary mt-0.5">Provides ergonomic seating tailored specifically for pregnant women and companions.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                07
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Clear Signage</h3>
                <p class="text-xs text-text-secondary mt-0.5">High-contrast, intuitive directional signs for all clinic departments.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                08
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Good Lighting</h3>
                <p class="text-xs text-text-secondary mt-0.5">Keeps clinical hallways, consultation rooms, and recovery areas well-lit.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                09
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Priority Assistance</h3>
                <p class="text-xs text-text-secondary mt-0.5">Dedicated staff on standby to assist pregnant women and patients needing extra mobility support.</p>
              </div>
            </div>

            <div class="p-5 bg-brand-subtle/70 rounded-2xl border border-brand-border/60 flex items-start gap-4 hover:border-brand-primary transition-colors">
              <div class="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-xs">
                10
              </div>
              <div>
                <h3 class="text-sm font-bold text-neutral-950">Accessible Entrance</h3>
                <p class="text-xs text-text-secondary mt-0.5">A barrier-free, street-level main clinic entrance for swift, comfortable arrival.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight, Banknote, ShieldCheck } from '@lucide/vue'

const route = useRoute()
const router = useRouter()
const activeTab = ref('overview')

const tabTitle = computed(() => {
  if (activeTab.value === 'pricing') return 'Service Pricing & Fees'
  if (activeTab.value === 'accessibility') return 'Accessibility Features'
  return 'Detailed Services'
})

const tabSubtitle = computed(() => {
  if (activeTab.value === 'pricing') {
    return 'Explore our transparent maternal care packages, newborn screening, and clinical diagnostic fees.'
  }
  if (activeTab.value === 'accessibility') {
    return 'Our clinic premises are thoughtfully engineered for patient mobility, safety, and comfortable maternal care.'
  }
  return 'We provide comprehensive maternity care, including prenatal checkups, delivery assistance, postnatal care, newborn care, and maternal health services.'
})

const setTab = (tab) => {
  activeTab.value = tab
  router.replace({ query: tab === 'overview' ? {} : { tab } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const syncFromRoute = () => {
  const queryTab = route.query.tab || route.query.view
  if (queryTab === 'pricing' || queryTab === 'prices' || queryTab === 'fees') {
    activeTab.value = 'pricing'
  } else if (queryTab === 'accessibility' || queryTab === 'features') {
    activeTab.value = 'accessibility'
  } else if (queryTab === 'details') {
    activeTab.value = 'pricing'
  } else {
    activeTab.value = 'overview'
  }
}

onMounted(() => {
  syncFromRoute()
})

watch(() => route.query, () => {
  syncFromRoute()
})
</script>




