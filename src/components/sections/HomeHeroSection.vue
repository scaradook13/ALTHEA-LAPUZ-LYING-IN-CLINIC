<template>
  <section id="home" class="relative pt-24 pb-16 sm:pt-28 md:pt-32 md:pb-24 bg-brand-canvas border-b border-brand-border/60 overflow-hidden">
    <!-- Subtle architectural top accent bar -->
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-muted to-brand-accent/60 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-6 space-y-6 text-left">
          <!-- Clinical Eyebrow Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand-border text-brand-primary">
            <ShieldCheck class="w-4 h-4 text-brand-primary shrink-0" />
            <span class="text-xs font-bold uppercase tracking-wider">
              Maternal &amp; Infant Healthcare • Baliwag, Bulacan
            </span>
          </div>

          <!-- Main Headline -->
          <h1 class="font-heading text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-text-primary tracking-tight leading-[1.12]">
            Compassionate, Transparent Care for <span class="text-brand-primary">Mothers &amp; Newborns.</span>
          </h1>

          <!-- Body Description -->
          <p class="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Providing safe, affordable, and dedicated maternal and infant healthcare for <strong class="text-text-primary font-semibold">pregnant women, postpartum mothers, newborns, and their families</strong>—with 24/7 maternity admissions and transparent fee guidelines.
          </p>

          <!-- Primary & Secondary CTAs -->
          <div class="flex flex-wrap items-center gap-3.5 pt-1">
            <BaseButton to="/services" variant="primary" size="lg">
              <span>Explore Services &amp; Pricing</span>
              <ArrowRight class="w-4 h-4" />
            </BaseButton>
            <BaseButton to="/contact" variant="secondary" size="lg">
              <Phone class="w-4 h-4 text-brand-primary" />
              <span>Contact &amp; Directions</span>
            </BaseButton>
          </div>

          <!-- Verified Clinical Highlights -->
          <div class="pt-5 border-t border-brand-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-semibold text-text-secondary">
            <div class="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-brand-border/70 shadow-xs">
              <HeartHandshake class="w-4 h-4 text-brand-accent shrink-0" />
              <span>Prenatal &amp; NSD Care</span>
            </div>
            <div class="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-brand-border/70 shadow-xs">
              <Clock class="w-4 h-4 text-brand-primary shrink-0" />
              <span>24/7 Delivery On-Call</span>
            </div>
            <div class="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-xl border border-brand-border/70 shadow-xs">
              <CheckCircle2 class="w-4 h-4 text-brand-primary shrink-0" />
              <span>DOH Pricing Standards</span>
            </div>
          </div>
        </div>

        <!-- Right Visual / Authentic Clinic Facility Image -->
        <div class="lg:col-span-6">
          <div class="relative bg-white p-2.5 sm:p-3 rounded-2xl border border-brand-border shadow-card">
            <div class="relative w-full h-80 sm:h-[420px] lg:h-[460px] bg-brand-soft rounded-xl overflow-hidden">
              <img 
                src="../../assets/images/clinic-reception.jpg" 
                alt="Althea-Lapuz Lying-In Clinic reception and patient waiting area in Baliwag, Bulacan" 
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <div class="bg-white/95 backdrop-blur-sm border border-brand-border rounded-xl p-4 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="text-left space-y-0.5">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span class="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                        Verified Lying-In Facility
                      </span>
                    </div>
                    <h2 class="font-heading text-sm sm:text-base font-bold text-text-primary">
                      {{ clinicStore.clinicInfo.name }}
                    </h2>
                    <p class="text-xs text-text-secondary flex items-center gap-1">
                      <MapPin class="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{{ clinicStore.clinicInfo.address }}</span>
                    </p>
                  </div>
                  <div class="flex sm:flex-col items-start sm:items-end justify-between gap-1 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-brand-border/60">
                    <span class="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full">
                      Open 24/7
                    </span>
                    <span class="text-[11px] text-text-muted font-medium">
                      Checkups: {{ clinicStore.clinicInfo.checkupHours }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, ShieldCheck, Phone, HeartHandshake, Clock, CheckCircle2, MapPin } from '@lucide/vue'
import BaseButton from '../common/BaseButton.vue'
import { clinicStore } from '../../stores/clinicStore.js'
</script>
