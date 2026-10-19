<template>
  <div class="min-h-screen bg-brand-canvas pt-20 pb-20 md:pt-24">
    <!-- Top Architectural Page Header -->
    <div class="bg-white border-b border-brand-border/70 py-12 md:py-16 mb-12 md:mb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
            <Building2 class="w-3.5 h-3.5" />
            <span>About Our Lying-In Facility</span>
          </div>
          <h1 class="font-heading text-3xl sm:text-5xl font-bold text-text-primary tracking-tight leading-[1.15]">
            Welcome to <span class="text-brand-primary">{{ clinicStore.clinicInfo.name }}</span>
          </h1>
          <p class="font-heading text-lg sm:text-xl font-semibold text-brand-primary-dark">
            Your trusted partner in compassionate maternal, newborn, and family healthcare in Baliwag, Bulacan.
          </p>
          <p class="text-text-secondary text-base leading-relaxed">
            Established in November 2024, we provide safe, accessible, and transparent lying-in care tailored to expectant mothers and growing families—combining licensed clinical expertise with a calm, supportive environment.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

      <!-- ================= MISSION & VISION SECTION ================= -->
      <section aria-labelledby="mission-vision-heading" class="text-left">
        <h2 id="mission-vision-heading" class="sr-only">Mission and Vision</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <!-- Mission Card -->
          <div class="bg-white p-7 sm:p-9 rounded-2xl border border-brand-border shadow-card space-y-4 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Our Purpose
                </span>
                <div class="w-10 h-10 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
                  <Target class="w-5 h-5" />
                </div>
              </div>
              
              <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Our Mission
              </h3>
              
              <p class="text-text-secondary text-base leading-relaxed">
                {{ clinicStore.missionVision.mission }}
              </p>
            </div>
            <div class="pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-primary">
              Safe, compassionate, and transparent maternal care
            </div>
          </div>

          <!-- Vision Card -->
          <div class="bg-white p-7 sm:p-9 rounded-2xl border border-brand-border shadow-card space-y-4 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary-dark text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Our Direction
                </span>
                <div class="w-10 h-10 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
                  <Compass class="w-5 h-5" />
                </div>
              </div>
              
              <h3 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Our Vision
              </h3>
              
              <p class="text-text-secondary text-base leading-relaxed">
                {{ clinicStore.missionVision.vision }}
              </p>
            </div>
            <div class="pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-primary">
              Trusted community healthcare in Baliwag, Bulacan
            </div>
          </div>
        </div>
      </section>

      <!-- ================= CORE VALUES SECTION ================= -->
      <section aria-labelledby="core-values-heading" class="bg-white p-7 sm:p-10 rounded-2xl border border-brand-border shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <!-- Title & Badge -->
        <div class="text-left space-y-1.5 lg:max-w-xs shrink-0">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Foundational Ethos
          </div>
          <h2 id="core-values-heading" class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
            Core Clinical Values
          </h2>
          <p class="text-xs sm:text-sm text-text-secondary">
            The principles guiding every checkup, admission, and patient interaction.
          </p>
        </div>

        <!-- Values with structured left accent bars -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 flex-1">
          <div 
            v-for="(val, idx) in clinicStore.missionVision.coreValues" 
            :key="idx" 
            class="bg-brand-subtle p-5 rounded-xl border border-brand-border/80 border-l-4 border-l-brand-primary text-left space-y-1"
          >
            <h3 class="font-heading text-lg font-bold text-text-primary">{{ val.name }}</h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ================= WHO WE SERVE / PRIMARY PATIENTS & FAMILIES ================= -->
      <section aria-labelledby="who-we-serve-heading" class="space-y-8 text-left">
        <div class="space-y-2 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent-soft border border-brand-accent-border text-brand-accent text-xs font-bold uppercase tracking-wider rounded-full">
            <Heart class="w-3.5 h-3.5" />
            <span>Patient-Centered Care</span>
          </div>
          <h2 id="who-we-serve-heading" class="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Who We Serve
          </h2>
          <p class="text-text-secondary text-base leading-relaxed">
            Our lying-in clinic is dedicated to providing accessible, respectful, and high-quality maternal and infant healthcare for:
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 1. Pregnant Women -->
          <div class="bg-white p-6 rounded-2xl border border-brand-border shadow-card space-y-3.5">
            <div class="w-11 h-11 rounded-xl bg-brand-accent-soft border border-brand-accent-border flex items-center justify-center text-brand-accent">
              <Heart class="w-5 h-5" />
            </div>
            <h3 class="font-heading text-lg font-bold text-text-primary">
              Pregnant Women
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Comprehensive prenatal monitoring, fetal heart checks, birthing readiness, and clinical guidance throughout every trimester.
            </p>
          </div>

          <!-- 2. Postpartum Mothers -->
          <div class="bg-white p-6 rounded-2xl border border-brand-border shadow-card space-y-3.5">
            <div class="w-11 h-11 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
              <ShieldCheck class="w-5 h-5" />
            </div>
            <h3 class="font-heading text-lg font-bold text-text-primary">
              Postpartum Mothers
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Attentive postpartum recovery care, maternal wellness monitoring, breastfeeding support, and family planning guidance.
            </p>
          </div>

          <!-- 3. Newborns -->
          <div class="bg-white p-6 rounded-2xl border border-brand-border shadow-card space-y-3.5">
            <div class="w-11 h-11 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
              <Baby class="w-5 h-5" />
            </div>
            <h3 class="font-heading text-lg font-bold text-text-primary">
              Newborns
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Essential Newborn Care (EINC), Expanded Newborn Screening (ENBS), hearing test coordination, and vital birth dose immunizations.
            </p>
          </div>

          <!-- 4. Families -->
          <div class="bg-white p-6 rounded-2xl border border-brand-border shadow-card space-y-3.5">
            <div class="w-11 h-11 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
              <Users class="w-5 h-5" />
            </div>
            <h3 class="font-heading text-lg font-bold text-text-primary">
              Families
            </h3>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Family planning counseling, newborn care education, parent orientation, and continuous healthcare support for households.
            </p>
          </div>
        </div>
      </section>

      <!-- ================= WHY CHOOSE US / FACILITY SHOWCASE ================= -->
      <section aria-labelledby="why-choose-us-heading" class="space-y-8">
        <div class="text-left space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Clinical Distinction
          </div>
          <h2 id="why-choose-us-heading" class="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Why Families Trust Our Clinic
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Feature Card 1: Experienced Staff -->
          <div class="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden flex flex-col">
            <div class="w-full h-64 sm:h-72 bg-brand-soft border-b border-brand-border overflow-hidden">
              <img 
                src="../assets/images/clinic-hallway.jpg" 
                alt="Clean clinical hallway at Althea-Lapuz Lying-In Clinic" 
                class="w-full h-full object-cover object-center" 
              />
            </div>
            <div class="p-6 sm:p-8 space-y-3 text-left flex-1">
              <span class="inline-block text-xs font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border">
                01 • Licensed Practitioners
              </span>
              <h3 class="font-heading text-2xl font-bold text-text-primary">
                Experienced Clinical Staff
              </h3>
              <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
                Our dedicated team brings clinical expertise and warm bedside care to ensure mothers are safely guided and monitored through every phase of pregnancy and childbirth.
              </p>
            </div>
          </div>

          <!-- Feature Card 2: Quality Care -->
          <div class="bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden flex flex-col">
            <div class="w-full h-64 sm:h-72 bg-brand-soft border-b border-brand-border overflow-hidden">
              <img 
                src="../assets/images/clinic-lobby-wide.jpg" 
                alt="Reception and waiting lobby at Althea-Lapuz Lying-In Clinic" 
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="p-6 sm:p-8 space-y-3 text-left flex-1">
              <span class="inline-block text-xs font-bold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border">
                02 • Patient Safety &amp; Hygiene
              </span>
              <h3 class="font-heading text-2xl font-bold text-text-primary">
                Quality, Evidence-Based Care
              </h3>
              <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
                We are committed to delivering safe, effective, and DOH-aligned medical services to all our patients, maintaining strict sterile standards and proactive maternal-fetal monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= HEALTHCARE TEAM SECTION ================= -->
      <section aria-labelledby="healthcare-team-heading" class="space-y-8 pt-8 border-t border-brand-border text-left">
        <div class="space-y-1.5">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Our Practitioners
          </div>
          <h2 id="healthcare-team-heading" class="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
            Healthcare Team &amp; Availability
          </h2>
          <p class="text-sm sm:text-base text-text-secondary">
            Meet the licensed medical roles dedicated to your health, safe delivery, and peace of mind.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <!-- Experienced Staff Checkmarks -->
          <div class="bg-white p-7 sm:p-8 rounded-2xl border border-brand-border shadow-card space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
                <Users class="w-5 h-5" />
              </div>
              <h3 class="font-heading text-xl font-bold text-text-primary">
                Clinical Composition
              </h3>
            </div>
            
            <ul class="space-y-3 text-sm sm:text-base text-text-primary font-semibold">
              <li class="flex items-center gap-3 p-3.5 bg-brand-subtle rounded-xl border border-brand-border">
                <CheckCircle2 class="w-5 h-5 text-brand-primary shrink-0" />
                <span>Licensed Midwives</span>
              </li>
              <li class="flex items-center gap-3 p-3.5 bg-brand-subtle rounded-xl border border-brand-border">
                <CheckCircle2 class="w-5 h-5 text-brand-primary shrink-0" />
                <span>Obstetricians &amp; Gynecologists</span>
              </li>
              <li class="flex items-center gap-3 p-3.5 bg-brand-subtle rounded-xl border border-brand-border">
                <CheckCircle2 class="w-5 h-5 text-brand-primary shrink-0" />
                <span>Pediatric Care Specialists</span>
              </li>
            </ul>
          </div>

          <!-- Midwife Availability -->
          <div class="bg-white p-7 sm:p-8 rounded-2xl border border-brand-border shadow-card flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-brand-soft border border-brand-border flex items-center justify-center text-brand-primary">
                    <Clock class="w-5 h-5" />
                  </div>
                  <h3 class="font-heading text-xl font-bold text-text-primary">
                    Midwife Availability
                  </h3>
                </div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft text-brand-primary-hover border border-brand-border text-xs font-bold rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{{ clinicStore.healthcareTeam.availabilityStatus }}</span>
                </span>
              </div>
              
              <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
                {{ clinicStore.healthcareTeam.midwifeAvailability }}
              </p>
            </div>

            <div class="p-4 bg-brand-soft rounded-xl border border-brand-border text-xs text-brand-primary-dark font-medium flex items-center gap-2.5">
              <MapPin class="w-4 h-4 text-brand-primary shrink-0" />
              <span>Direct consultations and admissions available at {{ clinicStore.clinicInfo.address }}.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { CheckCircle2, Users, Clock, Target, Compass, Heart, ShieldCheck, Baby, Building2, MapPin } from '@lucide/vue'
import { clinicStore } from '../stores/clinicStore.js'
</script>
