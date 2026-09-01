<template>
  <section id="about" class="py-20 md:py-28 bg-gradient-to-b from-brand-subtle/50 via-white to-white border-t border-brand-border/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Tag / Pill Button -->
      <div class="text-center mb-14">
        <router-link 
          to="/about"
          class="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-soft hover:bg-brand-primary text-brand-primary-dark hover:text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full border border-brand-border/70 shadow-brand-sm hover:shadow-brand transition-all duration-300 group"
        >
          <span>LEARN MORE ABOUT US</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Left Image Box -->
        <div class="lg:col-span-5">
          <div class="relative group">
            <div class="absolute -inset-2 bg-gradient-to-tr from-brand-primary/20 to-brand-soft rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="relative w-full h-80 sm:h-96 md:h-[460px] bg-brand-soft rounded-3xl border border-brand-border/60 overflow-hidden shadow-card">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
                alt="About Althea-Lapuz Clinic" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              <!-- Floating Badge -->
              <div class="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/95 border border-brand-border/70 rounded-2xl p-4 shadow-lg text-left">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold text-sm shadow-brand-sm">
                    <Heart class="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 class="text-xs font-extrabold uppercase tracking-wider text-brand-primary">Our Primary Care</h4>
                    <p class="text-xs text-text-secondary font-medium">Pregnant Women, Postpartum Mothers, Newborns & Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Clinic Information -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <div class="space-y-3">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              About the Clinic
            </h2>
            <p class="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              Founded on the principles of transparency and dedicated patient care, our clinic provides compassionate, affordable, and specialized maternal healthcare since November of 2024. We stay alongside our patients at each step, ensuring a focus on safe, secure, dedicated care.
            </p>
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed font-medium">
              Our primary care is dedicated to <strong class="text-neutral-950">pregnant women, postpartum mothers, newborns, and their families</strong>.
            </p>
          </div>

          <!-- 2 Columns: Established & Patient Focus Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="bg-white p-5 rounded-2xl border border-brand-border/60 shadow-card hover:border-brand-primary/50 transition-colors">
              <div class="flex items-center gap-2 mb-1.5">
                <Calendar class="w-4 h-4 text-brand-primary" />
                <h3 class="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                  Established
                </h3>
              </div>
              <p class="text-2xl font-serif font-bold text-neutral-950">
                2024
              </p>
              <p class="text-xs text-text-secondary mt-1">Providing trustworthy maternal care in Bulacan</p>
            </div>

            <div class="bg-white p-5 rounded-2xl border border-brand-border/60 shadow-card hover:border-brand-primary/50 transition-colors">
              <div class="flex items-center gap-2 mb-1.5">
                <Heart class="w-4 h-4 text-brand-primary" />
                <h3 class="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                  Primary Patients
                </h3>
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                Pregnant Women, Postpartum Mothers, Newborns, and Families.
              </p>
            </div>
          </div>

          <!-- Operating Hours Card -->
          <div class="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-card space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-brand-primary" />
                <h3 class="text-sm font-bold text-neutral-950 uppercase tracking-wider">
                  Operating Hours
                </h3>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Clinic Open 24 Hours
              </span>
            </div>
            
            <ul class="text-text-secondary text-xs sm:text-sm space-y-2">
              <li class="flex justify-between items-center border-b border-neutral-100 pb-1.5">
                <span class="font-bold text-neutral-900">Prenatal Checkups:</span>
                <span class="font-extrabold text-brand-primary">Mon - Sun (9:00 AM - 7:00 PM)</span>
              </li>
              <li class="flex justify-between items-center text-emerald-700 font-bold pt-0.5">
                <span>Maternity Delivery & Admissions:</span>
                <span class="px-2 py-0.5 bg-emerald-50 rounded-full border border-emerald-200 text-xs">Open 24/7 (24 Hours)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Calendar, Heart, Clock } from '@lucide/vue'
</script>



