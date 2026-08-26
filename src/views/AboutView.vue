<template>
  <div class="min-h-screen bg-white pt-28 pb-20 md:pt-36">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">

      <!-- Top Header / Hero -->
      <div class="max-w-4xl text-left space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
          <span>About Our Practice</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
          Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-dark">Althea-Lapuz</span> Lying In Clinic
        </h1>
        <p class="text-xl font-bold text-brand-primary-dark font-sans">
          Your trusted partner in maternal and general healthcare.
        </p>
        <p class="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
          We provide comprehensive, compassionate care tailored to your unique needs, ensuring a safe and comfortable environment for every patient. Our approach is direct, transparent, and focused entirely on your health outcomes.
        </p>
      </div>

      <!-- Why Choose Us Section -->
      <div class="space-y-12">
        <div class="text-left space-y-2">
          <div class="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-primary">
            CLINICAL DISTINCTION
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Why Choose Us
          </h2>
        </div>

        <!-- Feature Row 1: Experienced Staff (Text Left, Image Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-brand-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div class="md:col-span-6 space-y-4 text-left">
            <span class="text-xs font-extrabold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border/60">
              01 • Expertise
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Experienced Staff
            </h3>
            <p class="text-text-secondary text-base leading-relaxed max-w-lg">
              Our dedicated team brings years of clinical expertise to ensure the highest standard of specialized care, guiding mothers safely through every phase of childbirth.
            </p>
          </div>
          <div class="md:col-span-6">
            <div class="w-full h-64 sm:h-80 bg-brand-soft rounded-2xl border border-brand-border/60 relative overflow-hidden shadow-xs group">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
                alt="Experienced Staff" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-brand-primary/10"></div>
            </div>
          </div>
        </div>

        <!-- Feature Row 2: Quality Care (Image Left, Text Right) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-brand-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
          <div class="md:col-span-6 order-2 md:order-1">
            <div class="w-full h-64 sm:h-80 bg-brand-soft rounded-2xl border border-brand-border/60 relative overflow-hidden shadow-xs group">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
                alt="Quality Care" 
                class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-brand-primary/10"></div>
            </div>
          </div>
          <div class="md:col-span-6 order-1 md:order-2 space-y-4 text-left">
            <span class="text-xs font-extrabold text-brand-primary bg-brand-soft px-3 py-1 rounded-full border border-brand-border/60">
              02 • Patient Safety
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Quality Care
            </h3>
            <p class="text-text-secondary text-base leading-relaxed max-w-lg">
              We are committed to delivering safe, effective, and evidence-based medical services to all our patients, maintaining strict sterile standards and proactive monitoring.
            </p>
          </div>
        </div>
      </div>

      <!-- Healthcare Team Section -->
      <div class="space-y-8 pt-8 border-t border-brand-border/30 text-left">
        <div class="space-y-1">
          <div class="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-primary">
            OUR PRACTITIONERS
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Healthcare Team
          </h2>
          <p class="text-sm sm:text-base text-text-secondary mt-1 font-normal">
            Meet the clinical professionals dedicated to your health and peace of mind.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
          <!-- Experienced Staff Checkmarks -->
          <div class="bg-gradient-to-br from-brand-subtle via-white to-white p-8 rounded-3xl border border-brand-border/60 shadow-card space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary shadow-xs">
                <Users class="w-5 h-5" />
              </div>
              <h3 class="text-xl font-bold text-neutral-900">
                Experienced Staff
              </h3>
            </div>
            
            <ul class="space-y-4 text-sm sm:text-base text-neutral-900 font-semibold">
              <li class="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-border/40 shadow-xs">
                <div class="w-7 h-7 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                  <CheckCircle2 class="w-4 h-4" />
                </div>
                <span>Licensed Midwives</span>
              </li>
              <li class="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-border/40 shadow-xs">
                <div class="w-7 h-7 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                  <CheckCircle2 class="w-4 h-4" />
                </div>
                <span>Obstetricians & Gynecologists</span>
              </li>
              <li class="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-border/40 shadow-xs">
                <div class="w-7 h-7 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary flex-shrink-0">
                  <CheckCircle2 class="w-4 h-4" />
                </div>
                <span>Pediatric Care Specialists</span>
              </li>
            </ul>
          </div>

          <!-- Midwife Availability -->
          <div class="bg-gradient-to-br from-brand-subtle via-white to-white p-8 rounded-3xl border border-brand-border/60 shadow-card flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary shadow-xs">
                    <Clock class="w-5 h-5" />
                  </div>
                  <h3 class="text-xl font-bold text-neutral-900">
                    Midwife Availability
                  </h3>
                </div>
                <span class="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">
                  Active On-Call
                </span>
              </div>
              
              <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
                Our certified midwives are accessible for scheduled consultations, continuous monitoring, and emergency delivery support. We maintain a vigorous 24/7 rotation to ensure expert maternal care is always available when you need it most.
              </p>
            </div>

            <div class="p-4 bg-brand-soft/60 rounded-2xl border border-brand-border/60 text-xs text-brand-primary-dark font-medium">
              📍 Direct consultations available at Tilapayong, City of Baliwag, Bulacan.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { CheckCircle2, Users, Clock } from '@lucide/vue'
</script>



