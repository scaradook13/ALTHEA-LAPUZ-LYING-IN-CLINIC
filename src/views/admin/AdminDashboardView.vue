<template>
  <div class="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col antialiased selection:bg-brand-light selection:text-brand-primary-dark">
    
    <!-- Top Admin Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border/60 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          
          <!-- Brand & Role Indicator -->
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-white ring-2 ring-brand-primary flex-shrink-0 shadow-xs">
              <img 
                src="../../assets/images/althea-lapuz-logo.png" 
                alt="Clinic Logo" 
                class="w-full h-full object-contain rounded-full"
              />
            </div>
            <div class="text-left">
              <div class="flex items-center gap-2">
                <span class="text-xs sm:text-sm font-extrabold uppercase text-neutral-950 tracking-wider">
                  Althea-Lapuz Clinic
                </span>
                <span class="px-2 py-0.5 rounded-full bg-brand-soft border border-brand-border/70 text-[10px] font-extrabold text-brand-primary uppercase">
                  Admin Panel
                </span>
              </div>
              <p class="text-[11px] text-text-muted hidden sm:block">
                In-Memory Live Editor • Real-time synchronization
              </p>
            </div>
          </div>

          <!-- Header Actions -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Reset to Defaults Button -->
            <button
              @click="handleResetDefaults"
              type="button"
              class="px-3 sm:px-4 py-2 rounded-xl border border-neutral-300 hover:border-brand-primary text-neutral-700 hover:text-brand-primary hover:bg-brand-soft/50 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Reset all in-memory changes back to official default values"
            >
              <RotateCcw class="w-3.5 h-3.5" />
              <span class="hidden sm:inline">Reset Defaults</span>
            </button>

            <!-- View Live Website -->
            <router-link
              to="/"
              target="_blank"
              class="px-3 sm:px-4 py-2 rounded-xl bg-white border border-brand-border/80 text-brand-primary hover:bg-brand-soft text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <ExternalLink class="w-3.5 h-3.5" />
              <span class="hidden sm:inline">Preview Live Site</span>
            </router-link>

            <!-- Logout -->
            <button
              @click="handleLogout"
              type="button"
              class="px-3 sm:px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-brand-sm cursor-pointer"
            >
              <LogOut class="w-3.5 h-3.5" />
              <span class="hidden sm:inline">Sign Out</span>
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- In-Memory Mode Banner Reminder -->
    <div class="bg-gradient-to-r from-amber-500/10 via-brand-soft to-amber-500/10 border-b border-brand-border/50 py-2.5 px-4 text-center">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-neutral-800 font-medium">
        <Sparkles class="w-4 h-4 text-brand-primary flex-shrink-0 animate-pulse" />
        <span>
          <strong>In-Memory Demo Active</strong>: Changes saved here immediately update the website across all views in real time. Reloading (F5) will restore original defaults.
        </span>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Toast Alert -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="toastMessage" 
          class="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-brand-primary/40 flex items-center gap-3 text-xs font-bold"
        >
          <CheckCircle2 class="w-4 h-4 text-emerald-400" />
          <span>{{ toastMessage }}</span>
        </div>
      </transition>

      <!-- Navigation Tabs -->
      <div class="border-b border-neutral-200 bg-white rounded-2xl p-2 shadow-xs flex flex-wrap gap-1.5">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer',
            activeTab === tab.id
              ? 'bg-brand-primary text-white shadow-brand-sm'
              : 'text-neutral-700 hover:text-brand-primary hover:bg-brand-soft'
          ]"
        >
          <component :is="tab.icon" class="w-4 h-4" />
          <span>{{ tab.name }}</span>
          <span 
            v-if="tab.badge" 
            :class="[
              'px-2 py-0.5 rounded-full text-[10px] font-extrabold',
              activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-brand-soft text-brand-primary'
            ]"
          >
            {{ tab.badge }}
          </span>
        </button>
      </div>

      <!-- ================= TAB 1: CLINIC INFO ================= -->
      <div v-if="activeTab === 'info'" class="space-y-6 text-left">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          <div class="flex items-center justify-between border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">Clinic Identity & Contact Information</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Updates clinic name, address, contact numbers, email, and social links across the site.</p>
            </div>
            <button 
              @click="triggerToast('Clinic Information updated successfully!')"
              class="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all"
            >
              Save Changes
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Clinic Name</label>
              <input 
                v-model="clinicStore.clinicInfo.name" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Subtitle / Tagline</label>
              <input 
                v-model="clinicStore.clinicInfo.tagline" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Full Physical Address</label>
              <input 
                v-model="clinicStore.clinicInfo.address" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Primary Mobile Number</label>
              <input 
                v-model="clinicStore.clinicInfo.phonePrimary" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Landline / Secondary Phone</label>
              <input 
                v-model="clinicStore.clinicInfo.phoneSecondary" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Official Email Address</label>
              <input 
                v-model="clinicStore.clinicInfo.email" 
                type="email" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Facebook Page URL</label>
              <input 
                v-model="clinicStore.clinicInfo.facebookUrl" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Delivery & Birthing Operating Hours</label>
              <input 
                v-model="clinicStore.clinicInfo.operatingHoursDelivery" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Prenatal Consultations Schedule</label>
              <input 
                v-model="clinicStore.clinicInfo.operatingHoursPrenatal" 
                type="text" 
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-semibold focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <!-- Announcement Bar Config -->
          <div class="mt-8 pt-6 border-t border-brand-border/40 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-bold uppercase text-neutral-900 tracking-wider">Top Banner Announcement</h3>
                <p class="text-xs text-text-secondary">Shows a real-time banner notice at the very top of all public pages.</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="clinicStore.clinicInfo.announcement.enabled" 
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
              </label>
            </div>

            <div v-if="clinicStore.clinicInfo.announcement.enabled" class="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              <div class="sm:col-span-1">
                <label class="block text-xs font-bold uppercase text-neutral-700 mb-1">Badge Tag</label>
                <input 
                  v-model="clinicStore.clinicInfo.announcement.badge" 
                  type="text" 
                  class="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-extrabold focus:border-brand-primary focus:bg-white focus:outline-none"
                />
              </div>
              <div class="sm:col-span-3">
                <label class="block text-xs font-bold uppercase text-neutral-700 mb-1">Announcement Message</label>
                <input 
                  v-model="clinicStore.clinicInfo.announcement.text" 
                  type="text" 
                  class="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium focus:border-brand-primary focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ================= TAB 2: MISSION & VISION ================= -->
      <div v-else-if="activeTab === 'mission'" class="space-y-6 text-left">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          <div class="flex items-center justify-between border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">Mission, Vision & Core Values</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Directly controls the content shown on the About Us page and Home previews.</p>
            </div>
            <button 
              @click="triggerToast('Mission & Vision statements saved!')"
              class="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all"
            >
              Save Changes
            </button>
          </div>

          <div class="space-y-6">
            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Mission Statement</label>
              <textarea 
                v-model="clinicStore.missionVision.mission" 
                rows="3"
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-2xl text-sm font-medium focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Vision Statement</label>
              <textarea 
                v-model="clinicStore.missionVision.vision" 
                rows="3"
                class="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-2xl text-sm font-medium focus:border-brand-primary focus:bg-white focus:outline-none transition-colors"
              ></textarea>
            </div>

            <!-- Core Values -->
            <div>
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-3">Core Values (3 Pillars)</label>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  v-for="(val, idx) in clinicStore.missionVision.coreValues" 
                  :key="idx"
                  class="p-4 bg-brand-soft/40 border border-brand-border/60 rounded-2xl space-y-2"
                >
                  <label class="text-xs font-extrabold text-brand-primary uppercase">Value {{ idx + 1 }}</label>
                  <input 
                    v-model="val.name" 
                    type="text" 
                    class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold focus:border-brand-primary focus:outline-none"
                    placeholder="Value Name"
                  />
                  <input 
                    v-model="val.desc" 
                    type="text" 
                    class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-normal focus:border-brand-primary focus:outline-none"
                    placeholder="Value Description"
                  />
                </div>
              </div>
            </div>

            <!-- Healthcare Team Availability -->
            <div class="pt-4 border-t border-brand-border/40">
              <label class="block text-xs font-bold uppercase text-neutral-700 mb-1.5">Midwife Availability Note</label>
              <textarea 
                v-model="clinicStore.healthcareTeam.midwifeAvailability" 
                rows="2"
                class="w-full px-4 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium focus:border-brand-primary focus:bg-white focus:outline-none"
              ></textarea>
            </div>

          </div>
        </div>
      </div>

      <!-- ================= TAB 3: SERVICES & PRICING ================= -->
      <div v-else-if="activeTab === 'pricing'" class="space-y-6 text-left">
        
        <!-- General Services & Family Planning -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          <div class="flex items-center justify-between border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">General Consultation & Family Planning Fees</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Edit outpatient services, Pap smear, and contraceptive prices.</p>
            </div>
            <button 
              @click="triggerToast('General services and pricing updated!')"
              class="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all"
            >
              Save Changes
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Outpatient Services -->
            <div 
              v-for="svc in clinicStore.pricing.otherServices" 
              :key="svc.service"
              class="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3"
            >
              <span class="text-xs font-extrabold text-neutral-800 uppercase block">{{ svc.service }}</span>
              <div>
                <label class="text-[11px] font-bold text-neutral-500 uppercase">Price (PHP)</label>
                <div class="relative mt-1">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center font-bold text-neutral-400">₱</span>
                  <input 
                    type="number" 
                    step="0.01" 
                    v-model.number="svc.price" 
                    @input="svc.formattedPrice = `₱${Number(svc.price).toFixed(2)}`"
                    class="w-full pl-8 pr-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-neutral-900 focus:border-brand-primary focus:outline-none"
                  />
                </div>
              </div>
              <p class="text-[11px] text-text-muted">{{ svc.coverage }}</p>
            </div>
          </div>

          <!-- Family Planning Injectables -->
          <div class="pt-4 border-t border-brand-border/40 space-y-4">
            <h3 class="text-sm font-bold uppercase text-neutral-900 tracking-wider">Family Planning Contraceptives & Diagnostics</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                v-for="fp in clinicStore.pricing.familyPlanning.injectables" 
                :key="fp.service"
                class="p-5 rounded-2xl bg-brand-soft/30 border border-brand-border/60 space-y-3"
              >
                <span class="text-xs font-extrabold text-brand-primary uppercase block">{{ fp.service }}</span>
                <div>
                  <label class="text-[11px] font-bold text-neutral-500 uppercase">Price (PHP)</label>
                  <div class="relative mt-1">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center font-bold text-neutral-400">₱</span>
                    <input 
                      type="number" 
                      step="0.01" 
                      v-model.number="fp.price" 
                      @input="fp.formattedPrice = `₱${Number(fp.price).toFixed(2)}`"
                      class="w-full pl-8 pr-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-neutral-900 focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                </div>
                <p class="text-[11px] text-text-muted">{{ fp.duration }}</p>
              </div>

              <!-- Pap Smear -->
              <div 
                v-for="fp in clinicStore.pricing.familyPlanning.others" 
                :key="fp.service"
                class="p-5 rounded-2xl bg-brand-soft/30 border border-brand-border/60 space-y-3"
              >
                <span class="text-xs font-extrabold text-brand-primary uppercase block">{{ fp.service }}</span>
                <div>
                  <label class="text-[11px] font-bold text-neutral-500 uppercase">Price (PHP)</label>
                  <div class="relative mt-1">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center font-bold text-neutral-400">₱</span>
                    <input 
                      type="number" 
                      step="0.01" 
                      v-model.number="fp.price" 
                      @input="fp.formattedPrice = `₱${Number(fp.price).toFixed(2)}`"
                      class="w-full pl-8 pr-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-neutral-900 focus:border-brand-primary focus:outline-none"
                    />
                  </div>
                </div>
                <p class="text-[11px] text-text-muted">{{ fp.duration }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- PhilHealth Packages -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          <div class="flex items-center justify-between border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">PhilHealth Package Case Rates</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Configure official DOH/PhilHealth benefit case rates and non-member pricing.</p>
            </div>
            <button 
              @click="triggerToast('PhilHealth package rates updated!')"
              class="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all"
            >
              Save Changes
            </button>
          </div>

          <div class="space-y-6">
            <div 
              v-for="pkg in clinicStore.pricing.philHealthServicePackages" 
              :key="pkg.code"
              class="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full bg-brand-primary text-white text-xs font-extrabold">{{ pkg.code }}</span>
                  <span class="text-sm font-extrabold text-neutral-950">{{ pkg.title }}</span>
                </div>
                <span class="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  With PhilHealth: No Balance Billing (₱0 Out of Pocket)
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label class="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Official Case Rate</label>
                  <input 
                    v-model="pkg.caseRate" 
                    type="text" 
                    class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Non-PhilHealth Out-of-Pocket</label>
                  <input 
                    v-model="pkg.withoutPhilHealth.totalOutOfPocket" 
                    type="text" 
                    class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-brand-primary"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Brief Description</label>
                  <input 
                    v-model="pkg.description" 
                    type="text" 
                    class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ================= TAB 4: PHARMACY & SUPPLIES ================= -->
      <div v-else-if="activeTab === 'inventory'" class="space-y-6 text-left">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">Pharmacy & Medical Supplies Catalog</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Live price directory conforming to DOH A.O. No. 2021-0008.</p>
            </div>
            
            <div class="flex items-center gap-3">
              <input 
                v-model="searchInventory" 
                type="text" 
                placeholder="Search item name..." 
                class="px-4 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium focus:border-brand-primary focus:outline-none w-48 sm:w-64"
              />
              <button 
                @click="showAddInventoryModal = true"
                class="px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus class="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>
          </div>

          <!-- Inventory Sub-tab switcher -->
          <div class="flex gap-2">
            <button
              @click="inventoryType = 'medicines'"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-bold transition-all',
                inventoryType === 'medicines' ? 'bg-brand-soft text-brand-primary border border-brand-border' : 'bg-neutral-100 text-neutral-600'
              ]"
            >
              Essential Medicines ({{ clinicStore.pricing.medicinesList.length }})
            </button>
            <button
              @click="inventoryType = 'supplies'"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-bold transition-all',
                inventoryType === 'supplies' ? 'bg-brand-soft text-brand-primary border border-brand-border' : 'bg-neutral-100 text-neutral-600'
              ]"
            >
              Medical Supplies ({{ clinicStore.pricing.suppliesList.length }})
            </button>
          </div>

          <!-- Table -->
          <div class="overflow-x-auto rounded-2xl border border-neutral-200">
            <table class="w-full text-left text-xs">
              <thead class="bg-neutral-100 text-neutral-700 uppercase font-extrabold text-[11px] border-b border-neutral-200">
                <tr>
                  <th class="p-3.5">#</th>
                  <th class="p-3.5">Item Name</th>
                  <th class="p-3.5">Unit / Packaging</th>
                  <th class="p-3.5">Unit Price (PHP)</th>
                  <th class="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-100 font-medium">
                <tr 
                  v-for="(item, idx) in currentInventoryList" 
                  :key="idx" 
                  class="hover:bg-neutral-50/80 transition-colors"
                >
                  <td class="p-3.5 text-neutral-400 font-mono">{{ idx + 1 }}</td>
                  <td class="p-3.5">
                    <input 
                      v-model="item.name" 
                      type="text" 
                      class="w-full px-2 py-1 bg-transparent hover:bg-white focus:bg-white border border-transparent focus:border-brand-primary rounded-lg text-xs font-bold text-neutral-900"
                    />
                  </td>
                  <td class="p-3.5">
                    <input 
                      v-model="item.quantity" 
                      type="text" 
                      class="w-full px-2 py-1 bg-transparent hover:bg-white focus:bg-white border border-transparent focus:border-brand-primary rounded-lg text-xs text-neutral-600"
                    />
                  </td>
                  <td class="p-3.5">
                    <div class="relative w-28">
                      <span class="absolute inset-y-0 left-0 pl-2 flex items-center font-bold text-neutral-400">₱</span>
                      <input 
                        type="number" 
                        step="0.01" 
                        v-model.number="item.price" 
                        @input="item.formattedPrice = `₱${Number(item.price).toFixed(2)}`"
                        class="w-full pl-6 pr-2 py-1 bg-transparent hover:bg-white focus:bg-white border border-transparent focus:border-brand-primary rounded-lg text-xs font-bold text-neutral-900"
                      />
                    </div>
                  </td>
                  <td class="p-3.5 text-right">
                    <button 
                      @click="deleteInventoryItem(idx)" 
                      class="p-1.5 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete item"
                    >
                      <Trash2 class="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <!-- ================= TAB 5: CHATBOT FAQS ================= -->
      <div v-else-if="activeTab === 'chatbot'" class="space-y-6 text-left">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/60 shadow-card space-y-6">
          <div class="flex items-center justify-between border-b border-brand-border/40 pb-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-neutral-950">AI Assistant Knowledge Base</h2>
              <p class="text-xs sm:text-sm text-text-secondary mt-1">Edit the responses the chatbot uses to answer user questions on the live website.</p>
            </div>
            <button 
              @click="triggerToast('Chatbot FAQs updated successfully!')"
              class="px-5 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm transition-all"
            >
              Save Changes
            </button>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(faq, idx) in clinicStore.chatbot.faqResponses" 
              :key="faq.id"
              class="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-extrabold text-brand-primary uppercase">FAQ #{{ idx + 1 }} • ID: {{ faq.id }}</span>
                <span class="text-[11px] text-neutral-400 font-mono">Keywords: {{ faq.keywords.join(', ') }}</span>
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase text-neutral-600 mb-1">User Question</label>
                <input 
                  v-model="faq.question" 
                  type="text" 
                  class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-bold"
                />
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Chatbot Automated Answer</label>
                <textarea 
                  v-model="faq.answer" 
                  rows="2"
                  class="w-full px-3 py-1.5 bg-white border border-neutral-300 rounded-xl text-xs font-medium"
                ></textarea>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>

    <!-- Modal: Add New Inventory Item -->
    <div 
      v-if="showAddInventoryModal" 
      class="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 text-left border border-brand-border/60">
        <div class="flex items-center justify-between border-b border-neutral-100 pb-3">
          <h3 class="text-base font-extrabold text-neutral-950">
            Add New {{ inventoryType === 'medicines' ? 'Medicine' : 'Medical Supply' }}
          </h3>
          <button @click="showAddInventoryModal = false" class="text-neutral-400 hover:text-neutral-700">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-xs font-bold uppercase text-neutral-700 mb-1">Item Name</label>
            <input 
              v-model="newItem.name" 
              type="text" 
              placeholder="e.g. Paracetamol 500mg" 
              class="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-semibold focus:border-brand-primary focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-neutral-700 mb-1">Unit / Packaging</label>
            <input 
              v-model="newItem.quantity" 
              type="text" 
              placeholder="e.g. Per piece / Per bottle" 
              class="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-semibold focus:border-brand-primary focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-neutral-700 mb-1">Unit Price (PHP)</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center font-bold text-neutral-400">₱</span>
              <input 
                v-model.number="newItem.price" 
                type="number" 
                step="0.01" 
                placeholder="0.00" 
                class="w-full pl-8 pr-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold focus:border-brand-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-2">
          <button 
            @click="showAddInventoryModal = false" 
            class="px-4 py-2 rounded-xl border border-neutral-300 text-xs font-bold hover:bg-neutral-50 cursor-pointer"
          >
            Cancel
          </button>
          <button 
            @click="saveNewInventoryItem" 
            class="px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-brand-sm cursor-pointer"
          >
            Add to Catalog
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Building2, 
  Target, 
  Banknote, 
  Pill, 
  MessageSquare, 
  RotateCcw, 
  ExternalLink, 
  LogOut, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  X 
} from '@lucide/vue'
import { clinicStore, auth, resetStoreToDefaults } from '../../stores/clinicStore.js'

const router = useRouter()
const activeTab = ref('info')
const toastMessage = ref('')
let toastTimer = null

const triggerToast = (msg) => {
  toastMessage.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3500)
}

const tabs = [
  { id: 'info', name: 'Clinic Info', icon: Building2 },
  { id: 'mission', name: 'Mission & Vision', icon: Target },
  { id: 'pricing', name: 'Services & Pricing', icon: Banknote },
  { id: 'inventory', name: 'Pharmacy & Supplies', icon: Pill },
  { id: 'chatbot', name: 'AI Chatbot FAQs', icon: MessageSquare }
]

// Inventory sub-tab & search
const inventoryType = ref('medicines')
const searchInventory = ref('')
const showAddInventoryModal = ref(false)
const newItem = ref({ name: '', quantity: '', price: 0 })

const currentInventoryList = computed(() => {
  const list = inventoryType.value === 'medicines' 
    ? clinicStore.pricing.medicinesList 
    : clinicStore.pricing.suppliesList

  if (!searchInventory.value.trim()) return list
  const q = searchInventory.value.toLowerCase()
  return list.filter(item => 
    item.name.toLowerCase().includes(q) || 
    (item.quantity && item.quantity.toLowerCase().includes(q))
  )
})

const deleteInventoryItem = (index) => {
  if (inventoryType.value === 'medicines') {
    clinicStore.pricing.medicinesList.splice(index, 1)
  } else {
    clinicStore.pricing.suppliesList.splice(index, 1)
  }
  triggerToast('Item removed from inventory catalog!')
}

const saveNewInventoryItem = () => {
  if (!newItem.value.name.trim()) return
  const itemToAdd = {
    name: newItem.value.name.trim(),
    quantity: newItem.value.quantity.trim() || 'Per piece',
    price: Number(newItem.value.price) || 0,
    formattedPrice: `₱${(Number(newItem.value.price) || 0).toFixed(2)}`
  }
  if (inventoryType.value === 'medicines') {
    clinicStore.pricing.medicinesList.unshift(itemToAdd)
  } else {
    clinicStore.pricing.suppliesList.unshift(itemToAdd)
  }
  showAddInventoryModal.value = false
  newItem.value = { name: '', quantity: '', price: 0 }
  triggerToast('New item added to inventory catalog!')
}

// Reset and logout
const handleResetDefaults = () => {
  if (confirm('Are you sure you want to reset all data back to initial official defaults?')) {
    resetStoreToDefaults()
    triggerToast('All data successfully restored to default values!')
  }
}

const handleLogout = () => {
  auth.logout()
  router.push('/')
}
</script>
