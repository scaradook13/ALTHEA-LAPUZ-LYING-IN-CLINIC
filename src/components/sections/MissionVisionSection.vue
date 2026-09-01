<template>
  <section class="py-20 md:py-24 bg-white border-t border-brand-border/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left">
        
        <!-- Mission Card -->
        <div class="bg-gradient-to-br from-brand-soft/70 via-white to-white p-8 sm:p-10 rounded-3xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 space-y-5 group">
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-white text-xs font-extrabold uppercase tracking-wider rounded-full shadow-brand-sm">
              Our Purpose
            </span>
            <div class="w-10 h-10 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <Target class="w-5 h-5" />
            </div>
          </div>
          
          <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight group-hover:text-brand-primary transition-colors">
            Mission
          </h2>
          
          <p class="text-text-secondary text-base leading-relaxed">
            To deliver direct, trustworthy, and family-oriented maternity & maternal healthcare, providing transparent and accessible services that empower mothers and nurture child healthcare.
          </p>
        </div>

        <!-- Vision Card -->
        <div class="bg-gradient-to-br from-brand-soft/70 via-white to-white p-8 sm:p-10 rounded-3xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 space-y-5 group">
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-white text-xs font-extrabold uppercase tracking-wider rounded-full shadow-brand-sm">
              Our Future
            </span>
            <div class="w-10 h-10 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <Compass class="w-5 h-5" />
            </div>
          </div>
          
          <h2 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight group-hover:text-brand-primary transition-colors">
            Vision
          </h2>
          
          <p class="text-text-secondary text-base leading-relaxed">
            Championing healthcare future through immediate seamless determination and trauma-informed efficacy, becoming the benchmark for modern maternity care and healthcare excellence for every mom.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Target, Compass } from '@lucide/vue'
</script>


