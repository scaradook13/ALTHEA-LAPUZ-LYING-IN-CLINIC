<template>
  <section id="home" class="relative pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-6 space-y-7 text-left">
          
          <!-- Welcome Pill Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-soft border-2 border-neutral-900 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-primary-dark">
              WELCOME TO ALTHEA-LAPUZ
            </span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.12] font-sans">
            Precise, <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-dark">Transparent</span> Medical Care.
          </h1>

          <!-- Body Description -->
          <p class="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Providing compassionate, affordable, and high-quality maternal and infant healthcare primarily dedicated to <strong class="text-neutral-950 font-bold">pregnant women, postpartum mothers, newborns, and their families</strong>.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <BaseButton to="/contact" variant="primary" size="lg">
              Contact Us
            </BaseButton>
            <BaseButton to="/about" variant="secondary" size="lg" class="inline-flex items-center gap-2 font-bold">
              Our Story <ArrowRight class="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </BaseButton>
          </div>

          <!-- Feature Trust Badges -->
          <div class="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-neutral-700">
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shadow-2xs">✓</div>
              <span>Pregnant Women & Newborns</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shadow-2xs">✓</div>
              <span>Postpartum & Family Care</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shadow-2xs">✓</div>
              <span>24/7 Delivery On-Call</span>
            </div>
          </div>
        </div>

        <!-- Right Visual / Image of Clinic -->
        <div class="lg:col-span-6">
          <div class="relative group">
            <div class="relative w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[540px] bg-slate-100 rounded-3xl border border-neutral-200/90 overflow-hidden shadow-card flex items-center justify-center">
              <img 
                src="../../assets/images/clinic-reception.jpg" 
                alt="Althea-Lapuz Lying In Clinic Reception & Facility" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent flex flex-col justify-end p-5 sm:p-7">
                <div class="backdrop-blur-md bg-white/95 border border-neutral-200/90 rounded-2xl p-4 sm:p-5 shadow-lg flex items-center justify-between">
                  <div class="text-left">
                    <span class="text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 block">
                      MODERN HEALTHCARE FACILITY
                    </span>
                    <h3 class="text-sm sm:text-base font-bold text-neutral-950">
                      {{ clinicStore.clinicInfo.name }}
                    </h3>
                    <p class="text-xs text-text-secondary">{{ clinicStore.clinicInfo.address }}</p>
                  </div>
                  <span class="px-3.5 py-1.5 bg-white border-2 border-neutral-900 text-neutral-950 text-xs font-bold rounded-full shadow-xs flex-shrink-0 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Open 24/7</span>
                  </span>
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
import { ArrowRight } from '@lucide/vue'
import BaseButton from '../common/BaseButton.vue'
import { clinicStore } from '../../stores/clinicStore.js'
</script>



