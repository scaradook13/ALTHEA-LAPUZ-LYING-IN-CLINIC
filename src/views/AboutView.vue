<template>
  <div class="min-h-screen bg-brand-soft pb-20">
    <PageHero 
      title="About Our Clinic" 
      subtitle="Learn about our history, our dedicated team, and the core values that drive us to provide exceptional maternal care."
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
      
      <!-- Clinic History / Background -->
      <BaseCard class="p-8 md:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-text-primary mb-6">Our Background & History</h2>
            <p class="text-text-secondary leading-relaxed mb-6 text-lg">
              Althea-Lapuz Lying-In Clinic started as a humble facility aimed at bridging the gap in maternal healthcare within our local community. Over the past decade, we have grown into a fully equipped, modern clinic.
            </p>
            <p class="text-text-secondary leading-relaxed text-lg">
              Our journey has been guided by a single, unwavering commitment: ensuring that every mother and child receives the utmost care, respect, and medical attention during the miracle of childbirth.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-[2rem] overflow-hidden shadow-sm hover:scale-105 transition-transform duration-500 relative group h-56">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Clinic History 1" />
                <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
            </div>
            <div class="rounded-[2rem] overflow-hidden shadow-sm mt-8 hover:scale-105 transition-transform duration-500 relative group h-56">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover" alt="Clinic History 2" />
                <div class="absolute inset-0 bg-brand-primary opacity-10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Why Choose Us & Healthcare Team -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Why Choose Us -->
        <BaseCard class="!p-10">
          <div class="flex items-center gap-4 mb-10">
            <div class="w-14 h-14 bg-brand-soft rounded-2xl flex items-center justify-center text-brand-primary border border-brand-light">
              <ShieldCheck class="w-7 h-7" />
            </div>
            <h3 class="text-3xl font-bold text-text-primary">Why Choose Us</h3>
          </div>
          <ul class="space-y-6">
            <li class="flex gap-6 p-4 rounded-3xl hover:bg-brand-light transition-colors border border-transparent hover:border-brand-light group">
              <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-light group-hover:border-brand-primary transition-colors">
                <Users class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-xl mb-1">Experienced Staff</h4>
                <p class="text-text-secondary text-lg">Our team consists of licensed and highly trained professionals dedicated to maternal health.</p>
              </div>
            </li>
            <li class="flex gap-6 p-4 rounded-3xl hover:bg-brand-light transition-colors border border-transparent hover:border-brand-light group">
              <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-light group-hover:border-brand-primary transition-colors">
                <HeartPulse class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-xl mb-1">Quality Care</h4>
                <p class="text-text-secondary text-lg">We prioritize safety, comfort, and follow the latest best medical practices.</p>
              </div>
            </li>
            <li class="flex gap-6 p-4 rounded-3xl hover:bg-brand-light transition-colors border border-transparent hover:border-brand-light group">
              <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-light group-hover:border-brand-primary transition-colors">
                <CalendarCheck class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-xl mb-1">Convenient Appointments</h4>
                <p class="text-text-secondary text-lg">Flexible scheduling to accommodate the busy lives of expecting mothers.</p>
              </div>
            </li>
          </ul>
        </BaseCard>

        <!-- Healthcare Team -->
        <div class="bg-brand-primary-dark rounded-3xl p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern-about" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern-about)"></rect>
            </svg>
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-inner border border-brand-accent">
                <Stethoscope class="w-7 h-7" />
              </div>
              <h3 class="text-3xl font-bold">Healthcare Team</h3>
            </div>
            <p class="text-brand-light mb-10 leading-relaxed text-lg">
              Our clinic is staffed by a dedicated team of licensed midwives and consulting obstetricians specializing in normal spontaneous delivery and newborn care.
            </p>
            
            <div class="space-y-6">
              <div class="bg-brand-primary/60 rounded-3xl p-6 flex items-center gap-6 border border-brand-accent backdrop-blur-sm">
                <div class="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-brand-accent">
                  <User class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1 text-white">Featured Midwife Team</h4>
                  <p class="text-brand-light">On-call 24/7 for delivery cases to ensure you are never alone during labor.</p>
                </div>
              </div>
              
              <div class="bg-brand-primary/60 rounded-3xl p-6 border border-brand-accent backdrop-blur-sm">
                <h4 class="font-bold text-xl mb-4 text-white">Core Specializations</h4>
                <div class="flex flex-wrap gap-3">
                  <span class="px-5 py-2 bg-brand-accent rounded-full text-sm font-medium shadow-sm border border-brand-primary text-white">Maternal Care</span>
                  <span class="px-5 py-2 bg-brand-accent rounded-full text-sm font-medium shadow-sm border border-brand-primary text-white">Newborn Screening</span>
                  <span class="px-5 py-2 bg-brand-accent rounded-full text-sm font-medium shadow-sm border border-brand-primary text-white">Family Planning</span>
                  <span class="px-5 py-2 bg-brand-accent rounded-full text-sm font-medium shadow-sm border border-brand-primary text-white">Postpartum Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission / Vision -->
      <BaseCard class="p-8 md:p-12 text-center">
        <h2 class="text-3xl font-bold text-text-primary mb-12">Mission, Vision & Values</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <div class="bg-brand-soft p-10 rounded-[2rem] border border-brand-light hover:border-brand-accent transition-colors">
            <div class="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-8 border border-brand-light">
              <Target class="w-8 h-8 text-brand-primary" />
            </div>
            <h3 class="text-3xl font-bold text-text-primary mb-4">Our Mission</h3>
            <p class="text-text-secondary leading-relaxed text-lg">
              To provide safe, affordable, and high-quality maternal and newborn care services, empowering mothers and ensuring a healthy start for every child in our community.
            </p>
          </div>
          <div class="bg-brand-soft p-10 rounded-[2rem] border border-brand-light hover:border-brand-accent transition-colors">
            <div class="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center mb-8 border border-brand-light">
              <Eye class="w-8 h-8 text-brand-primary" />
            </div>
            <h3 class="text-3xl font-bold text-text-primary mb-4">Our Vision</h3>
            <p class="text-text-secondary leading-relaxed text-lg">
              To be the leading and most trusted lying-in clinic in the region, recognized for our compassionate care, professional excellence, and commitment to maternal and child health.
            </p>
          </div>
        </div>
        
        <div class="border-t border-brand-light pt-16">
          <h3 class="text-3xl font-bold text-text-primary mb-10">Our Core Values</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="p-8 bg-brand-soft rounded-3xl flex flex-col items-center hover:bg-brand-light transition-colors cursor-default border border-brand-light">
              <span class="text-xl font-bold text-brand-primary-dark">Compassion</span>
            </div>
            <div class="p-8 bg-brand-soft rounded-3xl flex flex-col items-center hover:bg-brand-light transition-colors cursor-default border border-brand-light">
              <span class="text-xl font-bold text-brand-primary-dark">Excellence</span>
            </div>
            <div class="p-8 bg-brand-soft rounded-3xl flex flex-col items-center hover:bg-brand-light transition-colors cursor-default border border-brand-light">
              <span class="text-xl font-bold text-brand-primary-dark">Integrity</span>
            </div>
            <div class="p-8 bg-brand-soft rounded-3xl flex flex-col items-center hover:bg-brand-light transition-colors cursor-default border border-brand-light">
              <span class="text-xl font-bold text-brand-primary-dark">Respect</span>
            </div>
          </div>
        </div>
      </BaseCard>

    </div>
  </div>
</template>

<script setup>
import { ShieldCheck, Users, HeartPulse, CalendarCheck, Stethoscope, User, Target, Eye } from '@lucide/vue'
import PageHero from '../components/common/PageHero.vue'
import BaseCard from '../components/common/BaseCard.vue'
</script>
