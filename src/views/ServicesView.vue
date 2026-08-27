<template>
  <div class="min-h-screen bg-white pt-28 pb-20 md:pt-36">
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
          
          <!-- Section Header -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-border/40">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-widest text-brand-primary">CLINICAL SERVICES & PACKAGES</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-1">Service Pricing / Fees</h2>
            </div>
            <router-link 
              to="/contact" 
              class="px-5 py-2.5 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-bold shadow-brand-sm hover:bg-brand-primary-hover hover:shadow-brand transition-all"
            >
              Inquire with Us
            </router-link>
          </div>

          <!-- Helper Prompt -->
          <p class="text-xs sm:text-sm text-text-secondary">
            💡 Click on any service card below to view comprehensive service details, inclusions, requirements, and schedule a consultation.
          </p>

          <!-- Interactive Expandable 2-Column Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
            <div 
              v-for="service in servicesData" 
              :key="service.id"
              @click="toggleService(service.id)"
              @keydown.enter.prevent="toggleService(service.id)"
              @keydown.space.prevent="toggleService(service.id)"
              role="button"
              :aria-expanded="expandedServiceId === service.id"
              tabindex="0"
              class="bg-white p-6 sm:p-7 rounded-3xl border transition-all duration-300 text-left space-y-4 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary/40 select-none"
              :class="expandedServiceId === service.id 
                ? 'border-brand-primary shadow-brand ring-2 ring-brand-primary/10' 
                : 'border-brand-border/60 shadow-card hover:shadow-card-hover hover:border-brand-primary/80'"
            >
              <!-- Card Header with Category Tag -->
              <div class="flex items-center justify-between gap-3">
                <h3 class="text-base sm:text-lg font-extrabold text-neutral-950 group-hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span class="text-brand-primary">•</span>
                  <span>{{ service.title }}</span>
                </h3>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border/60 flex-shrink-0">
                  {{ service.tag }}
                </span>
              </div>

              <!-- High Resolution Image with Zoom -->
              <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-2xl border border-brand-border/50 overflow-hidden relative">
                <img 
                  :src="service.image" 
                  :alt="service.title" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent"></div>
              </div>

              <!-- Short Summary Description -->
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {{ service.shortDescription }}
              </p>

              <!-- Interactive Click / Expand Indicator Bar -->
              <div class="pt-3 flex items-center justify-between border-t border-brand-border/30 text-xs font-bold text-brand-primary">
                <span class="flex items-center gap-1.5">
                  <Sparkles class="w-3.5 h-3.5 text-brand-primary" />
                  <span>{{ expandedServiceId === service.id ? 'Click to collapse details' : 'Click to view full specifications' }}</span>
                </span>
                <div 
                  class="w-7 h-7 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center transition-transform duration-300 ease-out flex-shrink-0"
                  :class="expandedServiceId === service.id ? 'rotate-180 bg-brand-primary text-white shadow-brand-sm' : ''"
                >
                  <ChevronDown class="w-4 h-4" />
                </div>
              </div>

              <!-- Butter-Smooth Expandable Detail Area -->
              <div 
                class="grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                :class="expandedServiceId === service.id 
                  ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-brand-border/30' 
                  : 'grid-rows-[0fr] opacity-0 pointer-events-none mt-0 pt-0 border-t-0'"
              >
                <div class="overflow-hidden space-y-5">
                  
                  <!-- Detailed Overview -->
                  <div class="space-y-1.5 pt-1">
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-brand-primary">Detailed Overview</h4>
                    <p class="text-xs sm:text-sm text-neutral-800 leading-relaxed bg-brand-soft/60 p-3.5 rounded-2xl border border-brand-border/40 font-normal">
                      {{ service.detailedDescription }}
                    </p>
                  </div>

                  <!-- What's Included List -->
                  <div class="space-y-2">
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                      <CheckCircle2 class="w-3.5 h-3.5 text-brand-primary" />
                      <span>What's Included</span>
                    </h4>
                    <ul class="space-y-2 text-xs sm:text-sm text-text-secondary bg-white p-3.5 rounded-2xl border border-brand-border/40">
                      <li v-for="(item, idx) in service.includes" :key="idx" class="flex items-start gap-2.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0"></span>
                        <span class="leading-relaxed">{{ item }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Who It's For -->
                  <div class="bg-white p-3.5 rounded-2xl border border-brand-border/40 text-xs sm:text-sm space-y-1">
                    <span class="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <Users class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Who It's For</span>
                    </span>
                    <p class="text-text-secondary pl-5 leading-relaxed">{{ service.whoFor }}</p>
                  </div>

                  <!-- Important Notes / Preparation -->
                  <div class="bg-brand-soft/40 p-3.5 rounded-2xl border border-brand-border/40 text-xs sm:text-sm space-y-1">
                    <span class="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <FileText class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Important Notes & Preparation</span>
                    </span>
                    <p class="text-text-secondary pl-5 leading-relaxed">{{ service.notes }}</p>
                  </div>

                  <!-- Pricing / Coverage Info -->
                  <div class="p-3.5 bg-brand-subtle/90 rounded-2xl border border-brand-border/50 flex items-center gap-2.5 text-xs text-brand-primary-dark font-semibold">
                    <Banknote class="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>{{ service.pricing }}</span>
                  </div>

                  <!-- Prominent Contact CTA Button -->
                  <div class="pt-2">
                    <router-link 
                      to="/contact"
                      @click.stop
                      class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-extrabold shadow-brand-sm hover:shadow-brand hover:bg-brand-primary-hover active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <span>Inquire with Us</span>
                      <ArrowRight class="w-4 h-4" />
                    </router-link>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <!-- ================================================================= -->
          <!-- ============= EXTENDED OFFICIAL CLINIC PRICE DIRECTORY ============ -->
          <!-- ================================================================= -->
          <div class="pt-12 border-t border-brand-border/50 space-y-12">
            
            <!-- Official Notice & Regulatory Header -->
            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/70 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div class="space-y-1.5 text-left">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft border border-brand-border/80 text-brand-primary text-[11px] font-extrabold uppercase tracking-wider rounded-full">
                  <FileCheck class="w-3.5 h-3.5" />
                  <span>Public Access to Price List Information (A.O. No. 2021-0008)</span>
                </div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-neutral-950">
                  Official Price Directory & Fee Schedule
                </h3>
                <p class="text-xs sm:text-sm text-text-secondary">
                  Althea-Lapuz Lying-In Clinic • 332 Ramon Magsaysay Street, Tilapayong, Baliwag, Bulacan
                </p>
              </div>

              <div class="flex items-center gap-3 bg-brand-subtle px-4 py-2.5 rounded-2xl border border-brand-border/60 flex-shrink-0">
                <Calendar class="w-4 h-4 text-brand-primary" />
                <span class="text-xs font-extrabold text-brand-primary-dark uppercase tracking-wider">
                  Price Information — As of April 01, 2026
                </span>
              </div>
            </div>

            <!-- ================= SUBSECTION 1: OTHER SERVICES & FAMILY PLANNING ================= -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              <!-- 1. Other Services -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/60 shadow-card space-y-5 text-left">
                <div class="flex items-center justify-between pb-3 border-b border-brand-border/40">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary">OUTPATIENT CLINICAL</span>
                    <h3 class="text-lg sm:text-xl font-extrabold text-neutral-950">Other Services</h3>
                  </div>
                  <span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold rounded-full">
                    Not Covered by PhilHealth
                  </span>
                </div>

                <p class="text-xs text-text-secondary">
                  Standard outpatient clinical procedures and document registration services.
                </p>

                <!-- Clean Price Table -->
                <div class="overflow-x-auto rounded-2xl border border-brand-border/50">
                  <table class="w-full text-left text-xs sm:text-sm">
                    <thead class="bg-brand-soft/70 text-neutral-950 font-bold border-b border-brand-border/50">
                      <tr>
                        <th class="py-3 px-4">Service</th>
                        <th class="py-3 px-4">Coverage</th>
                        <th class="py-3 px-4 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-brand-border/30">
                      <tr v-for="item in otherServices" :key="item.service" class="hover:bg-brand-soft/30 transition-colors">
                        <td class="py-3 px-4 font-bold text-neutral-900">{{ item.service }}</td>
                        <td class="py-3 px-4 text-text-muted text-xs">{{ item.coverage }}</td>
                        <td class="py-3 px-4 text-right font-extrabold text-brand-primary">{{ item.formattedPrice }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 2. Family Planning Contraceptives -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/60 shadow-card space-y-5 text-left">
                <div class="flex items-center justify-between pb-3 border-b border-brand-border/40">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary">WOMEN'S WELLNESS</span>
                    <h3 class="text-lg sm:text-xl font-extrabold text-neutral-950">Family Planning Contraceptives</h3>
                  </div>
                  <span class="px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border/60 text-[11px] font-bold rounded-full">
                    Clinical Administration
                  </span>
                </div>

                <p class="text-xs text-text-secondary">
                  Reproductive health planning, hormonal injectables, and cervical cancer screenings.
                </p>

                <div class="space-y-4">
                  <!-- Category: Injectables -->
                  <div class="space-y-2">
                    <h4 class="text-xs font-extrabold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Syringe class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Injectables</span>
                    </h4>
                    <div class="overflow-x-auto rounded-2xl border border-brand-border/50">
                      <table class="w-full text-left text-xs sm:text-sm">
                        <tbody class="divide-y divide-brand-border/30">
                          <tr v-for="inj in familyPlanning.injectables" :key="inj.service" class="hover:bg-brand-soft/30 transition-colors">
                            <td class="py-3 px-4 font-bold text-neutral-900">
                              {{ inj.service }}
                              <span class="block text-[11px] font-normal text-text-secondary">{{ inj.duration }}</span>
                            </td>
                            <td class="py-3 px-4 text-right font-extrabold text-brand-primary">{{ inj.formattedPrice }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- Category: Other -->
                  <div class="space-y-2">
                    <h4 class="text-xs font-extrabold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Other</span>
                    </h4>
                    <div class="overflow-x-auto rounded-2xl border border-brand-border/50">
                      <table class="w-full text-left text-xs sm:text-sm">
                        <tbody class="divide-y divide-brand-border/30">
                          <tr v-for="oth in familyPlanning.others" :key="oth.service" class="hover:bg-brand-soft/30 transition-colors">
                            <td class="py-3 px-4 font-bold text-neutral-900">
                              {{ oth.service }}
                              <span class="block text-[11px] font-normal text-text-secondary">{{ oth.duration }}</span>
                            </td>
                            <td class="py-3 px-4 text-right font-extrabold text-brand-primary">{{ oth.formattedPrice }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- ================= SUBSECTION 2: ANTENATAL CARE PACKAGES ================= -->
            <div class="space-y-6 text-left">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border/60 text-[11px] font-extrabold uppercase tracking-wider rounded-full">
                  <Baby class="w-3.5 h-3.5" />
                  <span>PRENATAL CLINICAL PACKAGES</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Antenatal Care Packages
                </h3>
                <p class="text-xs sm:text-sm text-text-secondary">
                  Specialized antenatal and labor monitoring packages with full PhilHealth Case Rate coverage comparison.
                </p>
              </div>

              <!-- 2 Cards Grid for ANCO1 and ANCO2 -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                
                <div 
                  v-for="pkg in antenatalCarePackages" 
                  :key="pkg.code"
                  class="bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/60 shadow-card flex flex-col justify-between space-y-6"
                >
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2.5">
                        <span class="px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-extrabold shadow-brand-sm">
                          {{ pkg.code }}
                        </span>
                        <h4 class="text-base sm:text-lg font-extrabold text-neutral-950">
                          {{ pkg.title }}
                        </h4>
                      </div>
                      <span v-if="pkg.icdCode" class="text-[11px] font-semibold px-2.5 py-0.5 bg-neutral-100 text-neutral-700 rounded-lg">
                        ICD: {{ pkg.icdCode }} | RVS: {{ pkg.rvsCode }}
                      </span>
                    </div>

                    <p class="text-xs sm:text-sm text-text-secondary leading-relaxed bg-brand-subtle/60 p-3.5 rounded-2xl border border-brand-border/40">
                      {{ pkg.description }}
                    </p>

                    <!-- Case Rate Breakdown Banner -->
                    <div class="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-wrap justify-between items-center text-xs gap-2">
                      <span class="font-bold text-neutral-700">PhilHealth Case Rate: <strong class="text-neutral-900 font-extrabold">{{ pkg.caseRate }}</strong></span>
                      <span class="text-neutral-500">HCI: {{ pkg.includes.hci }} • PF: {{ pkg.includes.professionalFee }}</span>
                    </div>
                  </div>

                  <!-- Side-by-Side Comparison: With vs Without PhilHealth -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-brand-border/40">
                    
                    <!-- WITH PHILHEALTH -->
                    <div class="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center gap-1.5 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                          <CheckCircle2 class="w-3.5 h-3.5" />
                          <span>WITH PHILHEALTH</span>
                        </div>
                        <span class="inline-block mt-1 px-2.5 py-0.5 bg-emerald-600 text-white text-[10px] font-extrabold rounded-full">
                          NO BALANCE BILLING
                        </span>
                      </div>
                      <div class="pt-2">
                        <span class="text-[11px] text-emerald-700 block">Total Out-of-Pocket:</span>
                        <span class="text-2xl font-extrabold text-emerald-800">{{ pkg.withPhilHealth.totalOutOfPocket }}</span>
                        <span class="text-[11px] font-bold text-emerald-700 block mt-0.5">{{ pkg.withPhilHealth.notes }}</span>
                      </div>
                    </div>

                    <!-- WITHOUT PHILHEALTH -->
                    <div class="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-2 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center gap-1.5 text-neutral-800 text-xs font-extrabold uppercase tracking-wider">
                          <AlertCircle class="w-3.5 h-3.5 text-neutral-500" />
                          <span>WITHOUT PHILHEALTH</span>
                        </div>
                        <div class="text-[11px] text-neutral-600 space-y-0.5 mt-1">
                          <div class="flex justify-between"><span>Professional Fee:</span> <strong class="font-bold">{{ pkg.withoutPhilHealth.professionalFee }}</strong></div>
                          <div class="flex justify-between"><span>Supplies:</span> <strong class="font-bold">{{ pkg.withoutPhilHealth.supplies }}</strong></div>
                        </div>
                      </div>
                      <div class="pt-2 border-t border-neutral-200">
                        <span class="text-[11px] text-neutral-600 block">Total Out-of-Pocket:</span>
                        <span class="text-xl font-extrabold text-neutral-900">{{ pkg.withoutPhilHealth.totalOutOfPocket }}</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- ================= SUBSECTION 3: PHILHEALTH SERVICE PACKAGES ================= -->
            <div class="space-y-6 text-left">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border/60 text-[11px] font-extrabold uppercase tracking-wider rounded-full">
                  <ShieldCheck class="w-3.5 h-3.5" />
                  <span>INPATIENT MATERNAL & NEWBORN PACKAGES</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  PhilHealth Service Packages
                </h3>
                <p class="text-xs sm:text-sm text-text-secondary">
                  Complete birthing, spontaneous delivery, and newborn packages with transparent with/without PhilHealth price breakdowns.
                </p>
              </div>

              <!-- 3 Column / Stacked Cards for MCP01, NSDO1, NCP -->
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                
                <div 
                  v-for="pkg in philHealthServicePackages" 
                  :key="pkg.code"
                  class="bg-white p-6 sm:p-7 rounded-3xl border border-brand-border/60 shadow-card flex flex-col justify-between space-y-6"
                >
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <span class="px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-extrabold shadow-brand-sm">
                        {{ pkg.code }}
                      </span>
                      <span class="text-xs font-extrabold text-brand-primary">Case Rate: {{ pkg.caseRate }}</span>
                    </div>

                    <div>
                      <h4 class="text-lg font-extrabold text-neutral-950">{{ pkg.title }}</h4>
                      <p class="text-xs text-text-secondary mt-1 leading-relaxed">{{ pkg.description }}</p>
                    </div>

                    <!-- HCI & PF Split -->
                    <div class="p-2.5 bg-brand-soft/50 rounded-xl border border-brand-border/40 text-[11px] text-brand-primary-dark flex justify-between">
                      <span>HCI: <strong>{{ pkg.includes.hci }}</strong></span>
                      <span>PF: <strong>{{ pkg.includes.professionalFee }}</strong></span>
                    </div>
                  </div>

                  <div class="space-y-4 pt-2 border-t border-brand-border/40">
                    <!-- WITH PHILHEALTH -->
                    <div class="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-left">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-extrabold text-emerald-800">WITH PHILHEALTH</span>
                        <span class="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-extrabold rounded-full">NO BALANCE BILLING</span>
                      </div>
                      <div class="mt-2 flex items-baseline justify-between">
                        <span class="text-xs text-emerald-700">Out-of-Pocket:</span>
                        <span class="text-xl font-extrabold text-emerald-800">{{ pkg.withPhilHealth.totalOutOfPocket }}</span>
                      </div>
                      <span class="text-[10px] font-bold text-emerald-600 block mt-0.5">{{ pkg.withPhilHealth.notes }}</span>
                    </div>

                    <!-- WITHOUT PHILHEALTH -->
                    <div class="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 text-left space-y-2">
                      <span class="text-xs font-extrabold text-neutral-800 block">WITHOUT PHILHEALTH</span>
                      
                      <div class="text-[11px] text-neutral-600 space-y-1 divide-y divide-neutral-100">
                        <div v-for="item in pkg.withoutPhilHealth.breakdown" :key="item.item" class="flex justify-between pt-0.5">
                          <span>{{ item.item }}</span>
                          <strong class="font-bold text-neutral-800">{{ item.amount }}</strong>
                        </div>
                      </div>

                      <div class="pt-2 border-t border-neutral-200 flex items-baseline justify-between">
                        <span class="text-xs font-bold text-neutral-700">Total Out-of-Pocket:</span>
                        <span class="text-lg font-extrabold text-neutral-950">{{ pkg.withoutPhilHealth.totalOutOfPocket }}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- ================= SUBSECTION 4: MEDICINES & SUPPLIES ================= -->
            <div class="space-y-6 text-left">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
                <div class="space-y-1">
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border/60 text-[11px] font-extrabold uppercase tracking-wider rounded-full">
                    <Pill class="w-3.5 h-3.5" />
                    <span>ITEMIZED CLINICAL INVENTORY</span>
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    Medicines & Supplies
                  </h3>
                  <p class="text-xs sm:text-sm text-text-secondary">
                    Official clinic item pricing for administered medications, clinical consumables, and maternity supplies.
                  </p>
                </div>

                <!-- Search Input -->
                <div class="relative w-full md:w-72">
                  <Search class="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input 
                    v-model="searchQuery" 
                    type="text" 
                    placeholder="Search medicine or supply..." 
                    class="w-full pl-9 pr-4 py-2 bg-white border border-brand-border/70 rounded-full text-xs font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 shadow-xs"
                  />
                </div>
              </div>

              <!-- Tables Grid: Medicines (Left) & Supplies (Right) -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                <!-- Medicines Table -->
                <div class="bg-white p-6 sm:p-7 rounded-3xl border border-brand-border/60 shadow-card space-y-4">
                  <div class="flex items-center justify-between pb-2 border-b border-brand-border/40">
                    <h4 class="text-base font-extrabold text-neutral-950 flex items-center gap-2">
                      <Pill class="w-4 h-4 text-brand-primary" />
                      <span>Medicines ({{ filteredMedicines.length }})</span>
                    </h4>
                    <span class="text-[11px] font-bold text-text-muted">Per Ampule / Bottle / Unit</span>
                  </div>

                  <div class="max-h-[500px] overflow-y-auto overflow-x-auto rounded-2xl border border-brand-border/50">
                    <table class="w-full text-left text-xs sm:text-sm">
                      <thead class="bg-brand-soft/80 text-neutral-950 font-bold border-b border-brand-border/50 sticky top-0 backdrop-blur-md">
                        <tr>
                          <th class="py-2.5 px-4">Medicine</th>
                          <th class="py-2.5 px-4">Quantity / Unit</th>
                          <th class="py-2.5 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-brand-border/30">
                        <tr v-for="med in filteredMedicines" :key="med.name" class="hover:bg-brand-soft/30 transition-colors">
                          <td class="py-2.5 px-4 font-bold text-neutral-900">{{ med.name }}</td>
                          <td class="py-2.5 px-4 text-text-secondary text-xs">{{ med.quantity }}</td>
                          <td class="py-2.5 px-4 text-right font-extrabold text-brand-primary">{{ med.formattedPrice }}</td>
                        </tr>
                        <tr v-if="filteredMedicines.length === 0">
                          <td colspan="3" class="py-6 text-center text-text-muted text-xs">No matching medicines found.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Supplies Table -->
                <div class="bg-white p-6 sm:p-7 rounded-3xl border border-brand-border/60 shadow-card space-y-4">
                  <div class="flex items-center justify-between pb-2 border-b border-brand-border/40">
                    <h4 class="text-base font-extrabold text-neutral-950 flex items-center gap-2">
                      <Syringe class="w-4 h-4 text-brand-primary" />
                      <span>Clinic Supplies ({{ filteredSupplies.length }})</span>
                    </h4>
                    <span class="text-[11px] font-bold text-text-muted">Consumables & Maternity</span>
                  </div>

                  <div class="max-h-[500px] overflow-y-auto overflow-x-auto rounded-2xl border border-brand-border/50">
                    <table class="w-full text-left text-xs sm:text-sm">
                      <thead class="bg-brand-soft/80 text-neutral-950 font-bold border-b border-brand-border/50 sticky top-0 backdrop-blur-md">
                        <tr>
                          <th class="py-2.5 px-4">Supply Item</th>
                          <th class="py-2.5 px-4">Quantity</th>
                          <th class="py-2.5 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-brand-border/30">
                        <tr v-for="sup in filteredSupplies" :key="sup.name" class="hover:bg-brand-soft/30 transition-colors">
                          <td class="py-2.5 px-4 font-bold text-neutral-900">{{ sup.name }}</td>
                          <td class="py-2.5 px-4 text-text-secondary text-xs">{{ sup.quantity }}</td>
                          <td class="py-2.5 px-4 text-right font-extrabold text-brand-primary">{{ sup.formattedPrice }}</td>
                        </tr>
                        <tr v-if="filteredSupplies.length === 0">
                          <td colspan="3" class="py-6 text-center text-text-muted text-xs">No matching supplies found.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>

            <!-- ================= FINAL INQUIRY & BOOKING BANNER ================= -->
            <div class="p-6 sm:p-8 bg-gradient-to-r from-brand-primary via-brand-primary-hover to-brand-primary-dark rounded-3xl text-white shadow-brand-lg flex flex-col md:flex-row justify-between items-center gap-6 text-left">
              <div class="space-y-1.5 max-w-xl">
                <span class="text-xs font-extrabold uppercase tracking-widest text-brand-soft/90">TRANSPARENT MATERNAL HEALTHCARE</span>
                <h4 class="text-xl sm:text-2xl font-extrabold">Have questions about specific packages or PhilHealth eligibility?</h4>
                <p class="text-xs sm:text-sm text-brand-soft/90 leading-relaxed">
                  Our front desk and midwives are ready to assist you with complete package inclusions, payment plans, and PhilHealth document verification.
                </p>
              </div>
              <router-link 
                to="/contact" 
                class="px-8 py-3.5 rounded-full bg-white text-brand-primary hover:bg-brand-soft text-sm font-extrabold shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex-shrink-0"
              >
                Inquire with Us
              </router-link>
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
import { 
  ArrowRight, 
  Banknote, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  Users, 
  FileText, 
  Sparkles,
  Search,
  Pill,
  Syringe,
  Baby,
  Calendar,
  AlertCircle,
  FileCheck
} from '@lucide/vue'
import {
  pricingNotice,
  otherServices,
  familyPlanning,
  antenatalCarePackages,
  philHealthServicePackages,
  medicinesList,
  suppliesList
} from '../data/pricingData.js'

const route = useRoute()
const router = useRouter()
const activeTab = ref('overview')
const expandedServiceId = ref(null)
const searchQuery = ref('')

const toggleService = (id) => {
  expandedServiceId.value = expandedServiceId.value === id ? null : id
}

const filteredMedicines = computed(() => {
  if (!searchQuery.value.trim()) return medicinesList
  const q = searchQuery.value.toLowerCase()
  return medicinesList.filter(m => m.name.toLowerCase().includes(q) || m.quantity.toLowerCase().includes(q))
})

const filteredSupplies = computed(() => {
  if (!searchQuery.value.trim()) return suppliesList
  const q = searchQuery.value.toLowerCase()
  return suppliesList.filter(s => s.name.toLowerCase().includes(q) || s.quantity.toLowerCase().includes(q))
})

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

const servicesData = [
  {
    id: 'prenatal-checkups',
    title: 'Prenatal Checkups',
    tag: 'Standard & Specialized',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Comprehensive maternal assessment, ultrasound coordination, fetal heart monitoring, and health tracking throughout every trimester.',
    detailedDescription: 'Our prenatal checkup program provides continuous, compassionate clinical monitoring for expecting mothers. From the earliest weeks of pregnancy through final term preparation, our licensed midwives and medical practitioners ensure both maternal wellness and optimal fetal development.',
    whoFor: 'Expecting mothers in all stages of pregnancy (1st, 2nd, and 3rd trimester).',
    includes: [
      'Maternal vital signs & blood pressure monitoring',
      'Fetal Doppler heartbeat check & fundic height measurement',
      'Nutritional guidance & prenatal vitamin prescription',
      'Ultrasound coordination & laboratory test interpretation',
      'Birth plan counseling and delivery readiness preparation'
    ],
    notes: 'Please bring your maternity booklet, valid ID, and any recent lab or ultrasound results.',
    pricing: 'ANCO1 & ANCO2 Packages • ₱0.00 Out-of-Pocket with PhilHealth (No Balance Billing) • ₱1,500 - ₱2,000 without PhilHealth'
  },
  {
    id: 'newborn-screening',
    title: 'Newborn Screening',
    tag: 'Expanded (NBS)',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Early diagnostic blood test to detect rare metabolic and congenital disorders, ensuring early medical care and newborn protection.',
    detailedDescription: 'Expanded Newborn Screening (ENBS) is a vital preventative health test conducted ideally within 24 to 72 hours after birth. A few drops of blood from the baby’s heel are screened for multiple life-threatening metabolic, endocrine, and genetic conditions before clinical symptoms appear.',
    whoFor: 'All newborn infants within 24 to 72 hours (up to 2 weeks) after birth.',
    includes: [
      'Heel-prick blood sample collection by certified medical staff',
      'Screening for congenital hypothyroidism, CAH, G6PD deficiency, PKU, MSUD, and galactosemia',
      'Official Philippine Newborn Screening Center laboratory processing',
      'Results release, physician consultation, and medical records documentation'
    ],
    notes: 'Must be done at least 24 hours after birth. Covered under the PhilHealth Newborn Care Package (NCP).',
    pricing: 'NCP Package • ₱0.00 Out-of-Pocket with PhilHealth • ₱5,000 without PhilHealth (Screening + Vaccines + Care)'
  },
  {
    id: 'normal-spontaneous-delivery',
    title: 'Normal Spontaneous Delivery',
    tag: 'NSD Package',
    image: 'https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Safe birthing care assisted by licensed midwives and medical staff, including labor monitoring, sterile delivery setup, and recovery support.',
    detailedDescription: 'Our Normal Spontaneous Delivery (NSD) package provides round-the-clock maternal and newborn care in a clean, sterile, and family-centered birthing facility. Experienced licensed midwives closely guide you through labor progression, delivery, and immediate postnatal bonding.',
    whoFor: 'Low-risk pregnant mothers with full-term single pregnancies suitable for normal spontaneous vaginal delivery.',
    includes: [
      '24/7 delivery room admission and sterile birthing suite setup',
      'Continuous labor monitoring, partograph tracking, and maternal vital checks',
      'Professional delivery assistance by licensed midwives and medical staff',
      'Immediate Essential Newborn Care (EINC / Unang Yakap) and early skin-to-skin contact',
      'Postpartum recovery room stay, maternal observation, and lactation assistance'
    ],
    notes: 'Please bring your complete prenatal records, baby clothes, receiving blankets, maternity pads, and PhilHealth documents upon admission.',
    pricing: 'NSDO1 & MCP01 Packages • ₱0.00 Out-of-Pocket with PhilHealth (No Balance Billing) • ₱11,000 - ₱12,500 without PhilHealth'
  },
  {
    id: 'vaccination',
    title: 'Vaccination',
    tag: 'Maternal & Infant',
    image: 'https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=600&auto=format&fit=crop',
    shortDescription: 'Essential immunizations including newborn BCG, Hepatitis B, and recommended maternal vaccines to protect against infectious diseases.',
    detailedDescription: 'Our clinical immunization program strictly adheres to Department of Health (DOH) and World Health Organization (WHO) schedules, protecting both mother and child against life-threatening infectious diseases through safe, sterile vaccine administration.',
    whoFor: 'Newborns, infants, young children, and pregnant women requiring routine or catch-up immunization.',
    includes: [
      'Newborn first doses: BCG (Tuberculosis) and Hepatitis B birth dose',
      'Routine infant vaccines (Pentavalent, Oral/Inactivated Polio, PCV, MMR)',
      'Maternal Tetanus Toxoid (Td/Tdap) and Flu immunization',
      'Official Baby Book / Immunization card issuance and schedule monitoring'
    ],
    notes: 'Please bring your child’s baby booklet / immunization card to every visit.',
    pricing: 'BCG: ₱400 • Hep B: ₱450 • Tetanus Toxoid: ₱150 • Full list in Medicines & Supplies directory'
  }
]

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





