<template>
  <div class="min-h-screen bg-brand-canvas pt-20 pb-20 md:pt-24">
    <!-- Top Header & Segmented Tab Switcher -->
    <div class="bg-white border-b border-brand-border/70 py-10 md:py-14 mb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div class="max-w-3xl mx-auto space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
            <FileCheck class="w-3.5 h-3.5" />
            <span>Clinical &amp; Facility Services</span>
          </div>
          
          <h1 class="font-heading text-3xl sm:text-5xl font-bold text-text-primary tracking-tight leading-[1.15]">
            {{ tabTitle }}
          </h1>
          
          <p class="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            {{ tabSubtitle }}
          </p>
        </div>

        <!-- Segmented Tab Switcher -->
        <div 
          role="tablist" 
          aria-label="Service Information Views"
          class="inline-flex p-1.5 bg-brand-soft border border-brand-border rounded-xl shadow-xs max-w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <button 
            role="tab"
            :aria-selected="activeTab === 'overview'"
            @click="setTab('overview')"
            :class="[
              'px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-colors duration-200 whitespace-nowrap cursor-pointer',
              activeTab === 'overview' 
                ? 'bg-brand-primary text-white shadow-xs' 
                : 'text-text-secondary hover:text-brand-primary hover:bg-white/70'
            ]"
          >
            Overview
          </button>
          
          <button 
            role="tab"
            :aria-selected="activeTab === 'pricing'"
            @click="setTab('pricing')"
            :class="[
              'px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-colors duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer',
              activeTab === 'pricing' 
                ? 'bg-brand-primary text-white shadow-xs' 
                : 'text-text-secondary hover:text-brand-primary hover:bg-white/70'
            ]"
          >
            <Banknote class="w-4 h-4" />
            <span>Service Pricing &amp; Fees</span>
          </button>

          <button 
            role="tab"
            :aria-selected="activeTab === 'directory'"
            @click="setTab('directory')"
            :class="[
              'px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-colors duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer',
              activeTab === 'directory' 
                ? 'bg-brand-primary text-white shadow-xs' 
                : 'text-text-secondary hover:text-brand-primary hover:bg-white/70'
            ]"
          >
            <FileText class="w-4 h-4" />
            <span>Official Price Directory</span>
          </button>

          <button 
            role="tab"
            :aria-selected="activeTab === 'accessibility'"
            @click="setTab('accessibility')"
            :class="[
              'px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold transition-colors duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer',
              activeTab === 'accessibility' 
                ? 'bg-brand-primary text-white shadow-xs' 
                : 'text-text-secondary hover:text-brand-primary hover:bg-white/70'
            ]"
          >
            <ShieldCheck class="w-4 h-4" />
            <span>Accessibility Features</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

      <!-- ================= TAB 1: OVERVIEW ================= -->
      <div v-if="activeTab === 'overview'" class="space-y-8">
        <!-- 3 Main Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- Card 1: Service Prices / Fees -->
          <div class="border border-brand-border rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-200 flex flex-col group text-left">
            <div class="w-full h-56 bg-brand-soft relative overflow-hidden border-b border-brand-border">
              <img 
                src="../assets/images/services-pricing-cover.jpg" 
                alt="Service Prices and Fees - Compassionate Maternal Care" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-bold rounded-full border border-brand-border shadow-xs">
                  Maternity Packages
                </span>
              </div>
            </div>

            <div class="p-6 sm:p-7 space-y-4 flex flex-col flex-1">
              <h2 class="font-heading text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                Service Pricing &amp; Fees
              </h2>
              <p class="text-text-secondary text-sm leading-relaxed flex-1">
                Explore detailed clinical inclusions and PhilHealth vs. Non-PhilHealth package comparisons for prenatal checkups, NSD, newborn screening, and vaccines.
              </p>
              <div class="pt-3">
                <button 
                  @click="setTab('pricing')" 
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-heading font-bold hover:bg-brand-primary-hover transition-colors cursor-pointer"
                >
                  <span>Open Service Packages</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Card 2: Official DOH Price Directory -->
          <div class="border border-brand-border rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-200 flex flex-col group text-left">
            <div class="w-full h-56 bg-brand-soft relative overflow-hidden border-b border-brand-border">
              <img 
                src="../assets/images/normal-delivery.jpg" 
                alt="Official DOH A.O. No. 2021-0008 Price Directory" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 bg-brand-accent-soft text-brand-accent text-xs font-bold rounded-full border border-brand-accent-border shadow-xs">
                  DOH A.O. No. 2021-0008
                </span>
              </div>
            </div>

            <div class="p-6 sm:p-7 space-y-4 flex flex-col flex-1">
              <h2 class="font-heading text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                Official Price Directory
              </h2>
              <p class="text-text-secondary text-sm leading-relaxed flex-1">
                Public access to itemized clinic fees, PhilHealth case rates, outpatient procedures, injectable contraceptives, medicines, and clinical supplies.
              </p>
              <div class="pt-3">
                <button 
                  @click="setTab('directory')" 
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-heading font-bold hover:bg-brand-primary-hover transition-colors cursor-pointer"
                >
                  <span>View Price Directory</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Card 3: Accessibility Features -->
          <div class="border border-brand-border rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-200 flex flex-col group text-left">
            <div class="w-full h-56 bg-brand-soft relative overflow-hidden border-b border-brand-border">
              <img 
                src="../assets/images/clinic-information-desk.jpg" 
                alt="Althea-Lapuz Lying In Clinic Information Desk & Accessibility" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-bold rounded-full border border-brand-border shadow-xs">
                  Clinic Infrastructure
                </span>
              </div>
            </div>

            <div class="p-6 sm:p-7 space-y-4 flex flex-col flex-1">
              <h2 class="font-heading text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                Accessibility Features
              </h2>
              <p class="text-text-secondary text-sm leading-relaxed flex-1">
                Barrier-free physical facilities, non-slip medical flooring, handrails, and priority staff assistance engineered for pregnant women and families.
              </p>
              <div class="pt-3">
                <button 
                  @click="setTab('accessibility')" 
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-heading font-bold hover:bg-brand-primary-hover transition-colors cursor-pointer"
                >
                  <span>Explore Facility Access</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ================= TAB 2: SERVICE PRICING & FEES ================= -->
      <div v-else-if="activeTab === 'pricing'" class="space-y-8 text-left">
        <div class="border border-brand-border rounded-2xl p-6 sm:p-8 md:p-10 bg-white shadow-card space-y-8">
          
          <!-- Section Header -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-brand-border">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-brand-primary">Clinical Services &amp; Packages</span>
              <h2 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-1">Service Pricing &amp; Inclusions</h2>
            </div>
            <router-link 
              to="/contact" 
              class="px-5 py-2.5 rounded-xl bg-brand-primary text-white text-xs sm:text-sm font-heading font-bold hover:bg-brand-primary-hover transition-colors"
            >
              Inquire with Us
            </router-link>
          </div>

          <!-- Service Selection & Full-Width Expanded State Area -->
          <div id="service-pricing-anchor" class="space-y-6">
            
            <transition name="fade-service" mode="out-in">
              <!-- STATE 1: Normal 2-Column Card Grid (When No Service Is Selected) -->
              <div v-if="!selectedService" key="services-grid" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                  <div 
                    v-for="service in servicesData" 
                    :key="service.id"
                    @click="selectService(service.id)"
                    @keydown.enter.prevent="selectService(service.id)"
                    @keydown.space.prevent="selectService(service.id)"
                    role="button"
                    tabindex="0"
                    class="bg-brand-canvas hover:bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-primary transition-all duration-200 text-left space-y-4 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary select-none flex flex-col justify-between"
                  >
                    <div class="space-y-4">
                      <!-- Card Header with Category Tag -->
                      <div class="flex items-center justify-between gap-3">
                        <h3 class="font-heading text-lg sm:text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                          {{ service.title }}
                        </h3>
                        <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-soft text-brand-primary border border-brand-border shrink-0">
                          {{ service.tag }}
                        </span>
                      </div>

                      <!-- High Resolution Image -->
                      <div class="w-full h-48 sm:h-56 bg-brand-soft rounded-xl border border-brand-border overflow-hidden relative">
                        <img 
                          :src="service.image" 
                          :alt="service.title" 
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                      </div>

                      <!-- Short Summary Description -->
                      <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {{ service.shortDescription }}
                      </p>
                    </div>

                    <!-- Interactive Click Indicator Bar -->
                    <div class="pt-3.5 flex items-center justify-between border-t border-brand-border/80 text-xs font-heading font-bold text-brand-primary">
                      <span>View clinical inclusions &amp; package rates</span>
                      <div class="w-7 h-7 rounded-lg bg-brand-soft text-brand-primary group-hover:bg-brand-primary group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                        <ArrowRight class="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- STATE 2: Dedicated Full-Width Expanded Service Panel -->
              <div v-else key="expanded-service-panel" class="space-y-6">
                
                <!-- Navigation & Controls Header Bar -->
                <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-brand-subtle rounded-2xl border border-brand-border">
                  <!-- Back Button -->
                  <button 
                    @click="closeServiceDetail" 
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-brand-primary border border-brand-border hover:bg-brand-soft hover:border-brand-primary/50 text-xs sm:text-sm font-heading font-bold shadow-card transition-colors cursor-pointer"
                  >
                    <ArrowLeft class="w-4 h-4" />
                    <span>Back to All Services</span>
                  </button>

                  <!-- Direct Service Switcher Tabs -->
                  <div class="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                    <button 
                      v-for="s in servicesData" 
                      :key="s.id"
                      @click="selectService(s.id)"
                      :class="[
                        'px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-colors whitespace-nowrap cursor-pointer border',
                        selectedServiceId === s.id 
                          ? 'bg-brand-light text-brand-primary-hover border-brand-primary/40 shadow-xs' 
                          : 'bg-white text-text-secondary border-brand-border hover:text-brand-primary hover:bg-brand-soft'
                      ]"
                    >
                      {{ s.title }}
                    </button>
                  </div>

                  <!-- Close 'X' Button -->
                  <button 
                    @click="closeServiceDetail"
                    class="w-9 h-9 rounded-lg bg-white border border-brand-border text-text-secondary hover:bg-brand-soft hover:text-brand-primary flex items-center justify-center transition-colors cursor-pointer"
                    title="Close and return to service list"
                    aria-label="Close service details"
                  >
                    <X class="w-4 h-4" />
                  </button>
                </div>

                <!-- Full Width Service Detail Panel -->
                <div class="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden p-6 sm:p-8 space-y-8">
                  
                  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    <!-- ================= LEFT COLUMN: Visuals & Overview Badges (5 cols) ================= -->
                    <div class="lg:col-span-5 space-y-5">
                      <!-- Large High-Res Image -->
                      <div class="w-full h-64 sm:h-80 rounded-xl bg-brand-soft border border-brand-border overflow-hidden relative">
                        <img 
                          :src="selectedService.image" 
                          :alt="selectedService.title" 
                          class="w-full h-full object-cover" 
                        />
                        <div class="absolute top-3 left-3">
                          <span class="px-3 py-1 bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-bold rounded-full border border-brand-border">
                            {{ selectedService.tag }}
                          </span>
                        </div>
                      </div>

                      <!-- Title & Tag Header -->
                      <div class="space-y-1">
                        <span class="text-xs font-bold uppercase tracking-wider text-brand-primary">
                          {{ selectedService.tag }}
                        </span>
                        <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                          {{ selectedService.title }}
                        </h3>
                      </div>

                      <!-- Short Summary Card -->
                      <div class="p-4 rounded-xl bg-brand-soft border border-brand-border">
                        <p class="text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                          {{ selectedService.shortDescription }}
                        </p>
                      </div>

                      <!-- Key Trust Badges -->
                      <div class="grid grid-cols-2 gap-3 text-xs font-bold text-text-primary">
                        <div class="p-3 bg-brand-subtle rounded-xl border border-brand-border flex items-center gap-2">
                          <ShieldCheck class="w-4 h-4 text-brand-primary shrink-0" />
                          <span>PhilHealth Accredited</span>
                        </div>
                        <div class="p-3 bg-brand-subtle rounded-xl border border-brand-border flex items-center gap-2">
                          <Clock class="w-4 h-4 text-brand-primary shrink-0" />
                          <span>24/7 Facility Support</span>
                        </div>
                        <div class="p-3 bg-brand-subtle rounded-xl border border-brand-border flex items-center gap-2">
                          <Users class="w-4 h-4 text-brand-primary shrink-0" />
                          <span>Licensed Midwives</span>
                        </div>
                        <div class="p-3 bg-brand-subtle rounded-xl border border-brand-border flex items-center gap-2">
                          <FileCheck class="w-4 h-4 text-brand-primary shrink-0" />
                          <span>DOH / WHO Standard</span>
                        </div>
                      </div>
                    </div>

                    <!-- ================= RIGHT COLUMN: Details, Inclusions, Pricing & CTA (7 cols) ================= -->
                    <div class="lg:col-span-7 space-y-6">
                      
                      <!-- Detailed Description -->
                      <div class="space-y-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-2">
                          <FileText class="w-3.5 h-3.5" />
                          <span>Comprehensive Clinical Overview</span>
                        </h4>
                        <p class="text-xs sm:text-sm text-text-secondary leading-relaxed bg-brand-canvas p-4 sm:p-5 rounded-xl border border-brand-border">
                          {{ selectedService.detailedDescription }}
                        </p>
                      </div>

                      <!-- What's Included -->
                      <div class="space-y-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                          <CheckCircle2 class="w-4 h-4 text-brand-primary" />
                          <span>What's Included in This Service</span>
                        </h4>
                        <ul class="space-y-2.5 text-xs sm:text-sm text-text-secondary bg-white p-4 sm:p-5 rounded-xl border border-brand-border">
                          <li v-for="(item, idx) in selectedService.includes" :key="idx" class="flex items-start gap-2.5">
                            <div class="w-4 h-4 rounded-full bg-brand-soft text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                              <Check class="w-2.5 h-2.5" />
                            </div>
                            <span class="leading-relaxed text-text-primary">{{ item }}</span>
                          </li>
                        </ul>
                      </div>

                      <!-- Pricing Breakdown / Relevant Package Cards -->
                      <div class="space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                          <Banknote class="w-4 h-4 text-brand-primary" />
                          <span>Pricing &amp; PhilHealth Package Rates (A.O. No. 2021-0008)</span>
                        </h4>

                        <!-- Specific Structured Packages -->
                        <div class="p-4 sm:p-5 rounded-xl bg-brand-subtle border border-brand-border space-y-3.5">
                          
                          <!-- Summary Pricing Notice -->
                          <div class="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-brand-border">
                            <div class="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center shrink-0">
                              <Banknote class="w-5 h-5" />
                            </div>
                            <div class="text-left">
                              <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary block">Official Package Pricing</span>
                              <p class="text-xs sm:text-sm font-bold text-text-primary">{{ selectedService.pricingSummary }}</p>
                            </div>
                          </div>

                          <!-- Specific Structured Packages for each service -->
                          <div v-if="selectedService.packageDetails && selectedService.packageDetails.length" class="space-y-3">
                            <div 
                              v-for="pkg in selectedService.packageDetails" 
                              :key="pkg.code"
                              class="p-4 bg-white rounded-xl border border-brand-border space-y-2.5"
                            >
                              <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                  <span class="px-2.5 py-0.5 bg-brand-primary text-white font-mono text-xs font-bold rounded-md">
                                    {{ pkg.code }}
                                  </span>
                                  <h5 class="font-heading text-xs sm:text-sm font-bold text-text-primary">{{ pkg.title }}</h5>
                                </div>
                                <span class="text-xs font-semibold text-text-secondary">Case Rate: <strong class="text-text-primary">{{ pkg.caseRate }}</strong></span>
                              </div>

                              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                                <!-- With PhilHealth -->
                                <div class="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex justify-between items-center">
                                  <div>
                                    <span class="font-bold text-emerald-800 flex items-center gap-1.5">
                                      <CheckCircle2 class="w-3.5 h-3.5 text-emerald-700" />
                                      <span>With PhilHealth (NBB)</span>
                                    </span>
                                    <span class="text-[11px] text-emerald-700">No Balance Billing</span>
                                  </div>
                                  <span class="text-sm font-bold text-emerald-800">{{ pkg.withPhilHealth }}</span>
                                </div>
                                <!-- Without PhilHealth -->
                                <div class="p-3 rounded-lg bg-brand-canvas border border-brand-border text-text-primary flex justify-between items-center">
                                  <div>
                                    <span class="font-bold block">Without PhilHealth</span>
                                    <span class="text-[11px] text-text-muted">Out-of-Pocket</span>
                                  </div>
                                  <span class="text-sm font-bold text-text-primary">{{ pkg.withoutPhilHealthPrice }}</span>
                                </div>
                              </div>

                              <p v-if="pkg.breakdownText" class="text-[11px] text-text-secondary pt-2 border-t border-brand-border/60 flex items-start gap-1.5">
                                <Info class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                                <span>{{ pkg.breakdownText }}</span>
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>

                      <!-- Target Patients & Preparation Notes -->
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <!-- Target Patients -->
                        <div class="p-4 rounded-xl bg-white border border-brand-border space-y-1.5">
                          <span class="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                            <Users class="w-3.5 h-3.5 text-brand-primary" />
                            <span>Target Patients</span>
                          </span>
                          <p class="text-xs text-text-secondary leading-relaxed">{{ selectedService.whoFor }}</p>
                        </div>

                        <!-- Requirements & Preparation -->
                        <div class="p-4 rounded-xl bg-white border border-brand-border space-y-1.5">
                          <span class="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                            <FileText class="w-3.5 h-3.5 text-brand-primary" />
                            <span>What to Bring / Preparation</span>
                          </span>
                          <p class="text-xs text-text-secondary leading-relaxed">{{ selectedService.notes }}</p>
                        </div>
                      </div>

                      <!-- Action CTAs -->
                      <div class="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center gap-3">
                        <router-link 
                          to="/contact"
                          class="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white text-sm font-heading font-bold hover:bg-brand-primary-hover shadow-brand-sm transition-colors cursor-pointer"
                        >
                          <span>Contact Us / Schedule Visit</span>
                          <ArrowRight class="w-4 h-4" />
                        </router-link>

                        <button 
                          @click="closeServiceDetail"
                          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-primary border border-brand-border hover:bg-brand-soft hover:border-brand-primary/50 text-sm font-heading font-bold shadow-card transition-colors cursor-pointer"
                        >
                          <ArrowLeft class="w-4 h-4" />
                          <span>Back to All Services</span>
                        </button>
                      </div>

                    </div> <!-- close lg:col-span-7 -->
                  </div> <!-- close grid -->
                </div> <!-- close detail panel -->

              </div> <!-- close v-else state 2 -->
            </transition>

          </div> <!-- close #service-pricing-anchor -->
        </div>
      </div>

      <!-- ================= TAB 3: OFFICIAL PRICE DIRECTORY ================= -->
      <div v-else-if="activeTab === 'directory'" class="space-y-8 text-left">
        <div class="space-y-10">
            
            <!-- Official Notice & Regulatory Header -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-card flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div class="space-y-1.5 text-left">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft border border-brand-border text-brand-primary text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <FileCheck class="w-3.5 h-3.5" />
                  <span>Public Access to Price List Information (A.O. No. 2021-0008)</span>
                </div>
                <h2 class="font-heading text-xl sm:text-2xl font-bold text-text-primary">
                  Official Price Directory &amp; Fee Schedule
                </h2>
                <p class="text-xs sm:text-sm text-text-secondary">
                  {{ clinicStore.clinicInfo.name }} • {{ clinicStore.clinicInfo.address }}
                </p>
              </div>

              <div class="flex items-center gap-2.5 bg-brand-subtle px-4 py-2.5 rounded-xl border border-brand-border shrink-0">
                <Calendar class="w-4 h-4 text-brand-primary" />
                <span class="text-xs font-bold text-brand-primary-dark uppercase tracking-wider">
                  As of {{ clinicStore.clinicInfo.effectiveDate }}
                </span>
              </div>
            </div>

            <!-- ================= SUBSECTION 1: OTHER SERVICES & FAMILY PLANNING ================= -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              <!-- 1. Other Services -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-card space-y-5 text-left">
                <div class="flex items-center justify-between pb-3 border-b border-brand-border">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary">Outpatient Clinical</span>
                    <h3 class="font-heading text-lg sm:text-xl font-bold text-text-primary">Other Services</h3>
                  </div>
                  <span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold rounded-full">
                    Not Covered by PhilHealth
                  </span>
                </div>

                <p class="text-xs text-text-secondary">
                  Standard outpatient clinical procedures and document registration services.
                </p>

                <!-- Clean Price Table -->
                <div class="overflow-x-auto rounded-xl border border-brand-border">
                  <table class="w-full text-left text-xs sm:text-sm">
                    <thead class="bg-brand-soft text-text-primary font-heading font-bold border-b border-brand-border">
                      <tr>
                        <th class="py-3 px-4">Service</th>
                        <th class="py-3 px-4">Coverage</th>
                        <th class="py-3 px-4 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-brand-border/50">
                      <tr v-for="item in otherServices" :key="item.service" class="hover:bg-brand-subtle transition-colors">
                        <td class="py-3 px-4 font-semibold text-text-primary">{{ item.service }}</td>
                        <td class="py-3 px-4 text-text-muted text-xs">{{ item.coverage }}</td>
                        <td class="py-3 px-4 text-right font-bold text-brand-primary">{{ item.formattedPrice }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 2. Family Planning Contraceptives -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-card space-y-5 text-left">
                <div class="flex items-center justify-between pb-3 border-b border-brand-border">
                  <div class="space-y-0.5">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary">Women's Wellness</span>
                    <h3 class="font-heading text-lg sm:text-xl font-bold text-text-primary">Family Planning Contraceptives</h3>
                  </div>
                  <span class="px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border text-[11px] font-bold rounded-full">
                    Clinical Administration
                  </span>
                </div>

                <p class="text-xs text-text-secondary">
                  Reproductive health planning, hormonal injectables, and cervical cancer screenings.
                </p>

                <div class="space-y-4">
                  <!-- Category: Injectables -->
                  <div class="space-y-2">
                    <h4 class="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Syringe class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Injectables</span>
                    </h4>
                    <div class="overflow-x-auto rounded-xl border border-brand-border">
                      <table class="w-full text-left text-xs sm:text-sm">
                        <tbody class="divide-y divide-brand-border/50">
                          <tr v-for="inj in familyPlanning.injectables" :key="inj.service" class="hover:bg-brand-subtle transition-colors">
                            <td class="py-3 px-4 font-semibold text-text-primary">
                              {{ inj.service }}
                              <span class="block text-[11px] font-normal text-text-secondary">{{ inj.duration }}</span>
                            </td>
                            <td class="py-3 px-4 text-right font-bold text-brand-primary">{{ inj.formattedPrice }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- Category: Other -->
                  <div class="space-y-2">
                    <h4 class="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <FileText class="w-3.5 h-3.5 text-brand-primary" />
                      <span>Other</span>
                    </h4>
                    <div class="overflow-x-auto rounded-xl border border-brand-border">
                      <table class="w-full text-left text-xs sm:text-sm">
                        <tbody class="divide-y divide-brand-border/50">
                          <tr v-for="oth in familyPlanning.others" :key="oth.service" class="hover:bg-brand-subtle transition-colors">
                            <td class="py-3 px-4 font-semibold text-text-primary">
                              {{ oth.service }}
                              <span class="block text-[11px] font-normal text-text-secondary">{{ oth.duration }}</span>
                            </td>
                            <td class="py-3 px-4 text-right font-bold text-brand-primary">{{ oth.formattedPrice }}</td>
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
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <Baby class="w-3.5 h-3.5" />
                  <span>Prenatal Clinical Packages</span>
                </div>
                <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
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
                  class="bg-white p-6 sm:p-8 rounded-2xl border border-brand-border shadow-card flex flex-col justify-between space-y-6"
                >
                  <div class="space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2.5">
                        <span class="px-3 py-1 rounded-md bg-brand-primary text-white text-xs font-mono font-bold">
                          {{ pkg.code }}
                        </span>
                        <h4 class="font-heading text-base sm:text-lg font-bold text-text-primary">
                          {{ pkg.title }}
                        </h4>
                      </div>
                      <span v-if="pkg.icdCode" class="text-[11px] font-semibold px-2.5 py-0.5 bg-brand-canvas border border-brand-border text-text-secondary rounded-md">
                        ICD: {{ pkg.icdCode }} | RVS: {{ pkg.rvsCode }}
                      </span>
                    </div>

                    <p class="text-xs sm:text-sm text-text-secondary leading-relaxed bg-brand-subtle p-3.5 rounded-xl border border-brand-border">
                      {{ pkg.description }}
                    </p>

                    <!-- Case Rate Breakdown Banner -->
                    <div class="p-3 bg-brand-canvas rounded-xl border border-brand-border flex flex-wrap justify-between items-center text-xs gap-2">
                      <span class="font-semibold text-text-secondary">PhilHealth Case Rate: <strong class="text-text-primary font-bold">{{ pkg.caseRate }}</strong></span>
                      <span class="text-text-muted">HCI: {{ pkg.includes.hci }} • PF: {{ pkg.includes.professionalFee }}</span>
                    </div>
                  </div>

                  <!-- Side-by-Side Comparison: With vs Without PhilHealth -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-brand-border">
                    
                    <!-- WITH PHILHEALTH -->
                    <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                          <CheckCircle2 class="w-3.5 h-3.5" />
                          <span>With PhilHealth</span>
                        </div>
                        <span class="inline-block mt-1 px-2.5 py-0.5 bg-emerald-600 text-white text-[10px] font-bold rounded-full">
                          NO BALANCE BILLING
                        </span>
                      </div>
                      <div class="pt-2">
                        <span class="text-[11px] text-emerald-700 block">Total Out-of-Pocket:</span>
                        <span class="font-heading text-2xl font-bold text-emerald-800">{{ pkg.withPhilHealth.totalOutOfPocket }}</span>
                        <span class="text-[11px] font-semibold text-emerald-700 block mt-0.5">{{ pkg.withPhilHealth.notes }}</span>
                      </div>
                    </div>

                    <!-- WITHOUT PHILHEALTH -->
                    <div class="p-4 bg-brand-canvas rounded-xl border border-brand-border space-y-2 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center gap-1.5 text-text-primary text-xs font-bold uppercase tracking-wider">
                          <AlertCircle class="w-3.5 h-3.5 text-text-muted" />
                          <span>Without PhilHealth</span>
                        </div>
                        <div class="text-[11px] text-text-secondary space-y-0.5 mt-1">
                          <div class="flex justify-between"><span>Professional Fee:</span> <strong class="font-bold text-text-primary">{{ pkg.withoutPhilHealth.professionalFee }}</strong></div>
                          <div class="flex justify-between"><span>Supplies:</span> <strong class="font-bold text-text-primary">{{ pkg.withoutPhilHealth.supplies }}</strong></div>
                        </div>
                      </div>
                      <div class="pt-2 border-t border-brand-border">
                        <span class="text-[11px] text-text-secondary block">Total Out-of-Pocket:</span>
                        <span class="font-heading text-xl font-bold text-text-primary">{{ pkg.withoutPhilHealth.totalOutOfPocket }}</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- ================= SUBSECTION 3: PHILHEALTH SERVICE PACKAGES ================= -->
            <div class="space-y-6 text-left">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border text-[11px] font-bold uppercase tracking-wider rounded-full">
                  <ShieldCheck class="w-3.5 h-3.5" />
                  <span>Inpatient Maternal &amp; Newborn Packages</span>
                </div>
                <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
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
                  class="bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-card flex flex-col justify-between space-y-6"
                >
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <span class="px-3 py-1 rounded-md bg-brand-primary text-white text-xs font-mono font-bold">
                        {{ pkg.code }}
                      </span>
                      <span class="text-xs font-bold text-brand-primary">Case Rate: {{ pkg.caseRate }}</span>
                    </div>

                    <div>
                      <h4 class="font-heading text-lg font-bold text-text-primary">{{ pkg.title }}</h4>
                      <p class="text-xs text-text-secondary mt-1 leading-relaxed">{{ pkg.description }}</p>
                    </div>

                    <!-- HCI & PF Split -->
                    <div class="p-2.5 bg-brand-soft rounded-xl border border-brand-border text-[11px] text-brand-primary-dark flex justify-between">
                      <span>HCI: <strong>{{ pkg.includes.hci }}</strong></span>
                      <span>PF: <strong>{{ pkg.includes.professionalFee }}</strong></span>
                    </div>
                  </div>

                  <div class="space-y-4 pt-2 border-t border-brand-border">
                    <!-- WITH PHILHEALTH -->
                    <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-left">
                      <div class="flex items-center justify-between">
                        <span class="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                          <CheckCircle2 class="w-3.5 h-3.5" />
                          <span>WITH PHILHEALTH</span>
                        </span>
                        <span class="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold rounded-full">NO BALANCE BILLING</span>
                      </div>
                      <div class="mt-2 flex items-baseline justify-between">
                        <span class="text-xs text-emerald-700">Out-of-Pocket:</span>
                        <span class="font-heading text-xl font-bold text-emerald-800">{{ pkg.withPhilHealth.totalOutOfPocket }}</span>
                      </div>
                      <span class="text-[10px] font-semibold text-emerald-700 block mt-0.5">{{ pkg.withPhilHealth.notes }}</span>
                    </div>

                    <!-- WITHOUT PHILHEALTH -->
                    <div class="p-3.5 bg-brand-canvas rounded-xl border border-brand-border text-left space-y-2">
                      <span class="text-xs font-bold text-text-primary block">WITHOUT PHILHEALTH</span>
                      
                      <div class="text-[11px] text-text-secondary space-y-1 divide-y divide-brand-border/60">
                        <div v-for="item in pkg.withoutPhilHealth.breakdown" :key="item.item" class="flex justify-between pt-0.5">
                          <span>{{ item.item }}</span>
                          <strong class="font-bold text-text-primary">{{ item.amount }}</strong>
                        </div>
                      </div>

                      <div class="pt-2 border-t border-brand-border flex items-baseline justify-between">
                        <span class="text-xs font-bold text-text-secondary">Total Out-of-Pocket:</span>
                        <span class="font-heading text-lg font-bold text-text-primary">{{ pkg.withoutPhilHealth.totalOutOfPocket }}</span>
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
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary border border-brand-border text-[11px] font-bold uppercase tracking-wider rounded-full">
                    <Pill class="w-3.5 h-3.5" />
                    <span>Itemized Clinical Inventory</span>
                  </div>
                  <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
                    Medicines &amp; Supplies
                  </h3>
                  <p class="text-xs sm:text-sm text-text-secondary">
                    Official clinic item pricing for administered medications, clinical consumables, and maternity supplies.
                  </p>
                </div>

                <!-- Search Input -->
                <div class="relative w-full md:w-72">
                  <Search class="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input 
                    v-model="searchQuery" 
                    type="search" 
                    aria-label="Search medicine or supply"
                    placeholder="Search medicine or supply..." 
                    class="w-full pl-9 pr-4 py-2.5 bg-white border border-brand-border rounded-xl text-xs font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-xs"
                  />
                </div>
              </div>

              <!-- Tables Grid: Medicines (Left) & Supplies (Right) -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                <!-- Medicines Table -->
                <div class="bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-card space-y-4">
                  <div class="flex items-center justify-between pb-2 border-b border-brand-border">
                    <h4 class="font-heading text-base font-bold text-text-primary flex items-center gap-2">
                      <Pill class="w-4 h-4 text-brand-primary" />
                      <span>Medicines ({{ filteredMedicines.length }})</span>
                    </h4>
                    <span class="text-[11px] font-semibold text-text-muted">Per Ampule / Bottle / Unit</span>
                  </div>

                  <div class="max-h-[500px] overflow-y-auto overflow-x-auto rounded-xl border border-brand-border">
                    <table class="w-full text-left text-xs sm:text-sm">
                      <thead class="bg-brand-soft text-text-primary font-heading font-bold border-b border-brand-border sticky top-0">
                        <tr>
                          <th class="py-2.5 px-4">Medicine</th>
                          <th class="py-2.5 px-4">Quantity / Unit</th>
                          <th class="py-2.5 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-brand-border/50">
                        <tr v-for="med in filteredMedicines" :key="med.name" class="hover:bg-brand-subtle transition-colors">
                          <td class="py-2.5 px-4 font-semibold text-text-primary">{{ med.name }}</td>
                          <td class="py-2.5 px-4 text-text-secondary text-xs">{{ med.quantity }}</td>
                          <td class="py-2.5 px-4 text-right font-bold text-brand-primary">{{ med.formattedPrice }}</td>
                        </tr>
                        <tr v-if="filteredMedicines.length === 0">
                          <td colspan="3" class="py-6 text-center text-text-muted text-xs">No matching medicines found.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Supplies Table -->
                <div class="bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-card space-y-4">
                  <div class="flex items-center justify-between pb-2 border-b border-brand-border">
                    <h4 class="font-heading text-base font-bold text-text-primary flex items-center gap-2">
                      <Syringe class="w-4 h-4 text-brand-primary" />
                      <span>Clinic Supplies ({{ filteredSupplies.length }})</span>
                    </h4>
                    <span class="text-[11px] font-semibold text-text-muted">Consumables &amp; Maternity</span>
                  </div>

                  <div class="max-h-[500px] overflow-y-auto overflow-x-auto rounded-xl border border-brand-border">
                    <table class="w-full text-left text-xs sm:text-sm">
                      <thead class="bg-brand-soft text-text-primary font-heading font-bold border-b border-brand-border sticky top-0">
                        <tr>
                          <th class="py-2.5 px-4">Supply Item</th>
                          <th class="py-2.5 px-4">Quantity</th>
                          <th class="py-2.5 px-4 text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-brand-border/50">
                        <tr v-for="sup in filteredSupplies" :key="sup.name" class="hover:bg-brand-subtle transition-colors">
                          <td class="py-2.5 px-4 font-semibold text-text-primary">{{ sup.name }}</td>
                          <td class="py-2.5 px-4 text-text-secondary text-xs">{{ sup.quantity }}</td>
                          <td class="py-2.5 px-4 text-right font-bold text-brand-primary">{{ sup.formattedPrice }}</td>
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
            <div class="p-6 sm:p-8 bg-brand-primary-dark rounded-2xl text-white shadow-card flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
              <div class="space-y-1.5 max-w-xl">
                <span class="text-xs font-bold uppercase tracking-wider text-brand-muted">Transparent Maternal Healthcare</span>
                <h4 class="font-heading text-xl sm:text-2xl font-bold">Have questions about specific packages or PhilHealth eligibility?</h4>
                <p class="text-xs sm:text-sm text-brand-light leading-relaxed">
                  Our front desk and midwives are ready to assist you with complete package inclusions, payment plans, and PhilHealth document verification.
                </p>
              </div>
              <router-link 
                to="/contact" 
                class="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-heading font-bold shadow-brand-sm transition-colors shrink-0"
              >
                Inquire with Us
              </router-link>
            </div>

          </div>
        </div>

      <!-- ================= TAB 4: ACCESSIBILITY FEATURES ================= -->
      <div v-else-if="activeTab === 'accessibility'" class="space-y-8 text-left">
        <div class="border border-brand-border rounded-2xl p-6 sm:p-8 md:p-10 bg-white shadow-card space-y-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-border">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-brand-primary">Inclusive &amp; Barrier-Free</span>
              <h2 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-1">Accessibility Features</h2>
            </div>
            <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-soft text-brand-primary-hover border border-brand-border text-xs font-bold">
              <CheckCircle2 class="w-3.5 h-3.5 text-brand-primary" />
              <span>Facility Standard Compliant</span>
            </span>
          </div>

          <!-- Featured Clinic Facility Photo Showcase -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-subtle p-6 sm:p-8 rounded-2xl border border-brand-border">
            <div class="lg:col-span-6 space-y-4 text-left">
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
                <span>Modern Clinic Facility</span>
              </span>
              <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Designed for Maternal Comfort &amp; Patient Safety
              </h3>
              <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
                Our clinic reception, waiting area, and consultation spaces are barrier-free and engineered to provide an accessible, calm, and comfortable medical environment for pregnant women, recovering mothers, and families.
              </p>
              <div class="flex flex-wrap gap-2.5 pt-2">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-xl border border-brand-border text-xs font-semibold text-text-primary">
                  <CheckCircle2 class="w-3.5 h-3.5 text-brand-primary" />
                  <span>Ergonomic Seating</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-xl border border-brand-border text-xs font-semibold text-text-primary">
                  <CheckCircle2 class="w-3.5 h-3.5 text-brand-primary" />
                  <span>Barrier-Free Entrance</span>
                </span>
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-xl border border-brand-border text-xs font-semibold text-text-primary">
                  <CheckCircle2 class="w-3.5 h-3.5 text-brand-primary" />
                  <span>High-Traction Flooring</span>
                </span>
              </div>
            </div>

            <div class="lg:col-span-6">
              <div class="w-full h-80 sm:h-96 rounded-xl bg-brand-soft border border-brand-border overflow-hidden relative">
                <img 
                  src="../assets/images/clinic-reception.jpg" 
                  alt="Althea-Lapuz Lying In Clinic Facility & Reception" 
                  class="w-full h-full object-cover object-center"
                />
                <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 border border-brand-border shadow-md flex items-center justify-between">
                  <div>
                    <h4 class="font-heading text-xs font-bold text-text-primary uppercase">Althea-Lapuz Clinic Reception</h4>
                    <p class="text-[11px] text-text-secondary">Comfortable, Accessible Maternal Facility</p>
                  </div>
                  <span class="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full shrink-0">
                    Open 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              v-for="(item, idx) in accessibilityFeatures" 
              :key="item.title"
              class="p-5 bg-white rounded-2xl border border-brand-border shadow-card hover:border-brand-primary/60 hover:shadow-card-hover transition-all duration-200 flex items-start gap-4 group"
            >
              <div class="w-11 h-11 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors duration-200 shrink-0 shadow-xs">
                <component :is="item.icon" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              </div>
              <div class="space-y-1 text-left flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-heading text-sm font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                    {{ item.title }}
                  </h3>
                  <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-brand-canvas border border-brand-border text-text-muted">
                    {{ String(idx + 1).padStart(2, '0') }}
                  </span>
                </div>
                <p class="text-xs text-text-secondary leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowRight, 
  ArrowLeft,
  Accessibility,
  Hand,
  Bath,
  DoorOpen,
  Armchair,
  Signpost,
  Lightbulb,
  HeartHandshake,
  Building2,
  Footprints,
  Banknote, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  Check,
  Users, 
  FileText, 
  Sparkles,
  Search,
  Pill,
  Syringe,
  Baby,
  Calendar,
  AlertCircle,
  FileCheck,
  Clock,
  Info,
  X
} from '@lucide/vue'
import { clinicStore } from '../stores/clinicStore.js'
import normalDeliveryImg from '../assets/images/normal-delivery.jpg'
import vaccinationWellnessImg from '../assets/images/vaccination-wellness.jpg'

const route = useRoute()
const router = useRouter()
const activeTab = ref('overview')
const selectedServiceId = ref(null)
const searchQuery = ref('')

const pricingNotice = computed(() => clinicStore.pricing.notice)
const otherServices = computed(() => clinicStore.pricing.otherServices)
const familyPlanning = computed(() => clinicStore.pricing.familyPlanning)
const antenatalCarePackages = computed(() => clinicStore.pricing.antenatalCarePackages)
const philHealthServicePackages = computed(() => clinicStore.pricing.philHealthServicePackages)
const medicinesList = computed(() => clinicStore.pricing.medicinesList)
const suppliesList = computed(() => clinicStore.pricing.suppliesList)

const selectedService = computed(() => {
  if (!selectedServiceId.value) return null
  return servicesData.find(s => s.id === selectedServiceId.value) || null
})

const selectService = async (id) => {
  selectedServiceId.value = id
  await nextTick()
  const el = document.getElementById('service-pricing-anchor')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const closeServiceDetail = async () => {
  selectedServiceId.value = null
  await nextTick()
  const el = document.getElementById('service-pricing-anchor')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const filteredMedicines = computed(() => {
  const list = clinicStore.pricing.medicinesList
  if (!searchQuery.value.trim()) return list
  const q = searchQuery.value.toLowerCase()
  return list.filter(m => m.name.toLowerCase().includes(q) || (m.quantity && m.quantity.toLowerCase().includes(q)))
})

const filteredSupplies = computed(() => {
  const list = clinicStore.pricing.suppliesList
  if (!searchQuery.value.trim()) return list
  const q = searchQuery.value.toLowerCase()
  return list.filter(s => s.name.toLowerCase().includes(q) || (s.quantity && s.quantity.toLowerCase().includes(q)))
})

const tabTitle = computed(() => {
  if (activeTab.value === 'pricing') return 'Service Pricing & Fees'
  if (activeTab.value === 'directory') return 'Official Price Directory'
  if (activeTab.value === 'accessibility') return 'Accessibility Features'
  return 'Detailed Services'
})

const tabSubtitle = computed(() => {
  if (activeTab.value === 'pricing') {
    return 'Explore our transparent maternal care packages, newborn screening, and clinical diagnostic fees.'
  }
  if (activeTab.value === 'directory') {
    return 'Official itemized fee schedules, PhilHealth package rates, medicines, and clinical supplies list (A.O. No. 2021-0008).'
  }
  if (activeTab.value === 'accessibility') {
    return 'Our clinic premises are thoughtfully engineered for patient mobility, safety, and comfortable maternal care.'
  }
  return 'We provide comprehensive maternity care primarily dedicated to pregnant women, postpartum mothers, newborns, and their families.'
})


const accessibilityFeatures = [
  {
    title: 'Wheelchair Ramp',
    description: 'Easy entrance for wheelchair users and mobility aids.',
    icon: Accessibility
  },
  {
    title: 'Handrails',
    description: 'Support along stairs and hallways for stability and patient balance.',
    icon: Hand
  },
  {
    title: 'Accessible Restroom',
    description: 'Easy-to-use dedicated restroom designed for pregnant and recovering mothers.',
    icon: Bath
  },
  {
    title: 'Non-Slip Floors',
    description: 'High-traction medical grade flooring helps prevent slips and falls.',
    icon: Footprints
  },
  {
    title: 'Wide Doorways',
    description: 'Allows unobstructed movement for patients, wheelchairs, and stretchers.',
    icon: DoorOpen
  },
  {
    title: 'Comfortable Waiting Area',
    description: 'Provides ergonomic seating tailored specifically for pregnant women and companions.',
    icon: Armchair
  },
  {
    title: 'Clear Signage',
    description: 'High-contrast, intuitive directional signs for all clinic departments.',
    icon: Signpost
  },
  {
    title: 'Good Lighting',
    description: 'Keeps clinical hallways, consultation rooms, and recovery areas well-lit.',
    icon: Lightbulb
  },
  {
    title: 'Priority Assistance',
    description: 'Dedicated staff on standby to assist pregnant women and patients needing extra mobility support.',
    icon: HeartHandshake
  },
  {
    title: 'Accessible Entrance',
    description: 'A barrier-free, street-level main clinic entrance for swift, comfortable arrival.',
    icon: Building2
  }
]

const servicesData = [
  {
    id: 'prenatal-checkups',
    title: 'Prenatal Checkups',
    tag: 'Standard & Specialized',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Comprehensive maternal assessment, fetal heart monitoring, health tracking, and medical requests/referrals for required laboratory tests and ultrasound.',
    detailedDescription: 'Our prenatal checkup program provides continuous, compassionate clinical monitoring for expecting mothers throughout every trimester. Please note that laboratory testing and ultrasound imaging are not performed in-clinic; our licensed practitioners issue official diagnostic requests/referrals and thoroughly interpret your external test results to guide your care.',
    whoFor: 'Expecting mothers in all stages of pregnancy (1st, 2nd, and 3rd trimester).',
    includes: [
      'Maternal vital signs, weight & blood pressure monitoring',
      'Fetal Doppler heartbeat check & fundic height measurement',
      'Nutritional guidance & prenatal vitamin prescription',
      'Medical requests & referrals for required laboratory tests & ultrasound',
      'Review and medical interpretation of laboratory & ultrasound results',
      'Birth plan counseling, danger signs orientation & delivery readiness'
    ],
    notes: 'Please note: We do not perform lab tests or ultrasound in-clinic; official medical requests are provided. Please bring your maternity booklet, valid ID, and previous test results to every visit.',
    pricingSummary: '₱0.00 Out-of-Pocket with PhilHealth (No Balance Billing) • ₱1,500 - ₱2,000 without PhilHealth',
    packageDetails: [
      {
        code: 'ANCO1',
        title: 'Antenatal Care Package (4 Visits Minimum)',
        caseRate: '₱2,925.00',
        withPhilHealth: '₱0.00 (Walang Bayad)',
        withoutPhilHealthPrice: '₱1,500.00',
        breakdownText: 'Includes HCI (₱1,755) and Professional Fee (₱1,170). Non-PhilHealth: PF ₱800 + Supplies ₱700.'
      },
      {
        code: 'ANCO2',
        title: 'Antenatal Care with Labor Watch / Intrapartum',
        caseRate: '₱4,192.50',
        withPhilHealth: '₱0.00 (Walang Bayad)',
        withoutPhilHealthPrice: '₱2,000.00',
        breakdownText: 'Includes HCI (₱2,515) and Professional Fee (₱1,677). Non-PhilHealth: PF ₱1,200 + Supplies ₱800.'
      },
      {
        code: 'CONSULT',
        title: 'Outpatient Clinical Consultation',
        caseRate: '₱100.00',
        withPhilHealth: '₱100.00 (Out-of-Pocket)',
        withoutPhilHealthPrice: '₱100.00',
        breakdownText: 'Direct prenatal assessment and general clinical consultation per visit.'
      }
    ]
  },
  {
    id: 'newborn-screening',
    title: 'Newborn Screening',
    tag: 'Expanded (NBS)',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Early diagnostic blood test to detect rare metabolic and congenital disorders, ensuring early medical care and newborn protection.',
    detailedDescription: 'Expanded Newborn Screening (ENBS) is a vital preventative health test conducted ideally within 24 to 72 hours after birth. A few drops of blood from the baby’s heel are screened for multiple life-threatening metabolic, endocrine, and genetic conditions before clinical symptoms appear.',
    whoFor: 'All newborn infants within 24 to 72 hours (up to 2 weeks) after birth.',
    includes: [
      'Heel-prick blood sample collection by certified medical staff',
      'Screening for congenital hypothyroidism, CAH, G6PD deficiency, PKU, MSUD, and galactosemia',
      'Official Philippine Newborn Screening Center laboratory processing',
      'Newborn Hearing Screening Test coordination',
      'Essential newborn care supplies, Vitamin K, eye prophylaxis & birth vaccines'
    ],
    notes: 'Must be conducted at least 24 hours after birth. Completely covered under the PhilHealth Newborn Care Package (NCP).',
    pricingSummary: '₱0.00 Out-of-Pocket with PhilHealth (NCP) • ₱5,000.00 without PhilHealth',
    packageDetails: [
      {
        code: 'NCP',
        title: 'PhilHealth Newborn Care Package',
        caseRate: '₱5,752.50',
        withPhilHealth: '₱0.00 (Walang Bayad)',
        withoutPhilHealthPrice: '₱5,000.00',
        breakdownText: 'Includes Expanded NBS, Hearing Screening, Vitamin K, Eye Ointment, BCG & Hep B vaccines. Non-PhilHealth: PF ₱500 + Room ₱1,000 + Meds/Supplies ₱3,500.'
      }
    ]
  },
  {
    id: 'normal-spontaneous-delivery',
    title: 'Normal Spontaneous Delivery',
    tag: 'NSD Package',
    image: normalDeliveryImg,
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
    pricingSummary: '₱0.00 Out-of-Pocket with PhilHealth (No Balance Billing) • ₱11,000 - ₱12,500 without PhilHealth',
    packageDetails: [
      {
        code: 'NSDO1',
        title: 'Normal Spontaneous Delivery Package',
        caseRate: '₱12,675.00',
        withPhilHealth: '₱0.00 (Walang Bayad)',
        withoutPhilHealthPrice: '₱11,000.00',
        breakdownText: 'Includes Birthing Room, Midwife Professional Fee, Postpartum Room, Drugs & Sterile Supplies.'
      },
      {
        code: 'MCP01',
        title: 'Maternal Care Package (Full Maternity & Delivery)',
        caseRate: '₱15,600.00',
        withPhilHealth: '₱0.00 (Walang Bayad)',
        withoutPhilHealthPrice: '₱12,500.00',
        breakdownText: 'Comprehensive maternity care package covering antepartum care, vaginal delivery, and postpartum room stay.'
      }
    ]
  },
  {
    id: 'vaccination',
    title: 'Vaccination & Wellness',
    tag: 'Maternal & Infant',
    image: vaccinationWellnessImg,
    shortDescription: 'Essential immunizations including newborn BCG, Hepatitis B, and recommended maternal vaccines to protect against infectious diseases.',
    detailedDescription: 'Our clinical immunization program strictly adheres to Department of Health (DOH) and World Health Organization (WHO) schedules, protecting both mother and child against life-threatening infectious diseases through safe, sterile vaccine administration.',
    whoFor: 'Newborns, infants, young children, and women requiring routine or catch-up immunization and family planning.',
    includes: [
      'Newborn first doses: BCG (Tuberculosis) and Hepatitis B birth dose',
      'Routine infant vaccines & child growth monitoring',
      'Maternal Tetanus Toxoid (Td/Tdap) immunization',
      'Family planning contraceptives (DMPA 3-Mos & Norifam 1-Mo)',
      'Official Baby Book / Immunization card issuance and schedule monitoring'
    ],
    notes: 'Please bring your child’s baby booklet / immunization card to every vaccination visit.',
    pricingSummary: 'Included in PhilHealth Packages • Itemized from ₱150.00 to ₱450.00',
    packageDetails: [
      {
        code: 'BCG',
        title: 'BCG Vaccine (Tuberculosis)',
        caseRate: '₱400.00',
        withPhilHealth: '₱0.00 (Covered under NCP)',
        withoutPhilHealthPrice: '₱400.00',
        breakdownText: 'Standard newborn tuberculosis immunization dose.'
      },
      {
        code: 'HEPB',
        title: 'Hepatitis B Vaccine Birth Dose',
        caseRate: '₱450.00',
        withPhilHealth: '₱0.00 (Covered under NCP)',
        withoutPhilHealthPrice: '₱450.00',
        breakdownText: 'Essential hepatitis B immunization given within 24 hours of birth.'
      },
      {
        code: 'TT',
        title: 'Tetanus Toxoid Vaccine',
        caseRate: '₱150.00',
        withPhilHealth: '₱0.00 (Covered under ANCO1)',
        withoutPhilHealthPrice: '₱150.00',
        breakdownText: 'Maternal tetanus immunization protection during pregnancy.'
      },
      {
        code: 'FP-DMPA',
        title: 'DMPA Injectable Contraceptive (3 Months)',
        caseRate: '₱160.00',
        withPhilHealth: '₱160.00 (Out-of-Pocket)',
        withoutPhilHealthPrice: '₱160.00',
        breakdownText: '3-month injectable contraceptive protection.'
      },
      {
        code: 'FP-NORI',
        title: 'Norifam Injectable Contraceptive (1 Month)',
        caseRate: '₱350.00',
        withPhilHealth: '₱350.00 (Out-of-Pocket)',
        withoutPhilHealthPrice: '₱350.00',
        breakdownText: '1-month injectable contraceptive protection.'
      }
    ]
  }
]

const setTab = (tab) => {
  activeTab.value = tab
  selectedServiceId.value = null
  const currentTab = route.query.tab || route.query.view || 'overview'
  if (currentTab !== tab) {
    router.replace({ query: tab === 'overview' ? {} : { tab } })
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const syncFromRoute = () => {
  const queryTab = route.query.tab || route.query.view
  if (queryTab === 'directory' || queryTab === 'official' || queryTab === 'pricelist') {
    activeTab.value = 'directory'
  } else if (queryTab === 'pricing' || queryTab === 'prices' || queryTab === 'fees' || queryTab === 'details') {
    activeTab.value = 'pricing'
  } else if (queryTab === 'accessibility' || queryTab === 'features') {
    activeTab.value = 'accessibility'
  } else {
    activeTab.value = 'overview'
  }

  if (route.query.service) {
    const found = servicesData.find(s => s.id === route.query.service)
    if (found) {
      selectedServiceId.value = found.id
    }
  }
}

onMounted(() => {
  syncFromRoute()
})

watch(
  () => [route.query.tab, route.query.view, route.query.service],
  () => {
    syncFromRoute()
  }
)
</script>

<style scoped>
.fade-service-enter-active,
.fade-service-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-service-enter-from {
  opacity: 0;
  transform: translateY(14px) scale(0.99);
}

.fade-service-leave-to {
  opacity: 0;
  transform: translateY(-14px) scale(0.99);
}
</style>





