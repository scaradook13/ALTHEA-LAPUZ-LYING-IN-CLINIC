<template>
  <section id="about" class="py-16 md:py-24 bg-brand-subtle border-b border-brand-border/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Image Box -->
        <div class="lg:col-span-5">
          <div class="bg-white p-2.5 sm:p-3 rounded-2xl border border-brand-border shadow-card">
            <div class="relative w-full h-80 sm:h-96 md:h-[430px] bg-brand-soft rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
                alt="Mother and newborn infant care at Althea-Lapuz Lying-In Clinic" 
                class="w-full h-full object-cover" 
              />
              
              <!-- Structured Clinical Focus Card -->
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-brand-border rounded-xl p-4 shadow-md text-left">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-brand-accent-soft border border-brand-accent-border text-brand-accent flex items-center justify-center shrink-0">
                    <Heart class="w-5 h-5" />
                  </div>
                  <div>
                    <h3 class="text-[11px] font-bold uppercase tracking-wider text-brand-primary">Dedicated Maternal Care</h3>
                    <p class="text-xs text-text-secondary font-medium">Pregnant Women, Postpartum Mothers, Newborns &amp; Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Clinic Information -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
              <Building2 class="w-3.5 h-3.5" />
              <span>About Our Facility</span>
            </div>
            <h2 class="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight">
              Safe, Compassionate Care Rooted in Community Trust
            </h2>
            <p class="text-text-secondary text-base leading-relaxed">
              Founded on the principles of clinical safety, transparency, and dedicated patient support, <strong class="text-text-primary font-semibold">{{ clinicStore.clinicInfo.name }}</strong> has served families in Baliwag, Bulacan since November 2024. We stay alongside expectant mothers at every stage—from first prenatal consultation through safe delivery and newborn care.
            </p>
          </div>

          <!-- 2 Columns: Established & Primary Patients Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white p-5 rounded-2xl border border-brand-border shadow-card">
              <div class="flex items-center gap-2 mb-1.5">
                <Calendar class="w-4 h-4 text-brand-primary" />
                <h3 class="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Established
                </h3>
              </div>
              <p class="font-heading text-2xl font-bold text-text-primary">
                November 2024
              </p>
              <p class="text-xs text-text-secondary mt-1">Serving families across Tilapayong, Baliwag, Bulacan</p>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-brand-border shadow-card">
              <div class="flex items-center gap-2 mb-1.5">
                <Heart class="w-4 h-4 text-brand-accent" />
                <h3 class="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Who We Serve
                </h3>
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                Pregnant Women, Postpartum Mothers, Newborns, and Families seeking safe lying-in care.
              </p>
            </div>
          </div>

          <!-- Operating Hours Card -->
          <div class="bg-white p-5 sm:p-6 rounded-2xl border border-brand-border shadow-card space-y-3.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-brand-primary" />
                <h3 class="font-heading text-sm font-bold text-text-primary uppercase tracking-wider">
                  Clinic Operating Schedule
                </h3>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-soft text-brand-primary-hover text-xs font-bold border border-brand-border">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>24/7 Delivery On-Call</span>
              </span>
            </div>
            
            <ul class="text-text-secondary text-xs sm:text-sm space-y-2.5 pt-1">
              <li class="flex flex-wrap justify-between items-center border-b border-brand-border/60 pb-2 gap-2">
                <span class="font-semibold text-text-primary">Prenatal Checkups &amp; Consultations:</span>
                <span class="font-bold text-brand-primary">{{ clinicStore.clinicInfo.checkupHours }}</span>
              </li>
              <li class="flex flex-wrap justify-between items-center font-semibold pt-0.5 gap-2">
                <span class="text-text-primary">Maternity Delivery &amp; Admissions:</span>
                <span class="px-2.5 py-0.5 bg-brand-soft text-brand-primary-hover rounded-md border border-brand-border text-xs font-bold">
                  {{ clinicStore.clinicInfo.deliveryHours }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Action Link to Full About Page -->
          <div class="pt-1">
            <router-link 
              to="/about"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-brand-soft text-brand-primary hover:text-brand-primary-hover text-sm font-heading font-bold rounded-xl border border-brand-border hover:border-brand-primary/50 shadow-card transition-colors duration-200"
            >
              <span>Meet Our Healthcare Team &amp; Mission</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Calendar, Heart, Clock, Building2 } from '@lucide/vue'
import { clinicStore } from '../../stores/clinicStore.js'
</script>
