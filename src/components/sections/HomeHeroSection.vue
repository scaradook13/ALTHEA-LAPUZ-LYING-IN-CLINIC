<template>
  <section id="home" class="relative pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-28 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(236,19,102,0.12),rgba(255,255,255,0))] overflow-hidden">
    <!-- Decorative background blur glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-soft/80 blur-3xl rounded-full pointer-events-none -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-6 space-y-7 text-left">
          
          <!-- Welcome Pill Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-soft border border-brand-border/70 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
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
          <div class="pt-4 border-t border-brand-border/30 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-text-secondary">
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary font-bold text-[11px]">✓</div>
              <span>Pregnant Women & Newborns</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary font-bold text-[11px]">✓</div>
              <span>Postpartum & Family Care</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary font-bold text-[11px]">✓</div>
              <span>24/7 Delivery On-Call</span>
            </div>
          </div>
        </div>

        <!-- Right Visual / Image of Clinic -->
        <div class="lg:col-span-6">
          <div class="relative group">
            <!-- Ambient Glow behind image -->
            <div class="absolute -inset-2 bg-gradient-to-r from-brand-primary/20 to-brand-muted/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative w-full h-80 sm:h-96 md:h-[440px] bg-brand-soft rounded-3xl border border-brand-border/60 overflow-hidden shadow-card flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                alt="Althea-Lapuz Lying In Clinic" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div class="backdrop-blur-md bg-white/90 border border-brand-border/80 rounded-2xl p-4 sm:p-5 shadow-lg flex items-center justify-between">
                  <div class="text-left">
                    <span class="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary block">
                      MODERN HEALTHCARE FACILITY
                    </span>
                    <h3 class="text-sm sm:text-base font-bold text-neutral-950">
                      Althea-Lapuz Lying In Clinic
                    </h3>
                    <p class="text-xs text-text-secondary">332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan</p>
                  </div>
                  <span class="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full shadow-brand-sm">
                    Open 24/7
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
</script>



