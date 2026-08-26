<template>
  <section id="contact" class="py-20 md:py-28 bg-white border-t border-brand-border/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Contact Info Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-soft border border-brand-border/70 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full">
          <span>Get In Touch</span>
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
          Contact Us
        </h2>
        <p class="text-base sm:text-lg text-text-secondary">
          Reach out to schedule an appointment or speak directly with our clinical support team.
        </p>
      </div>

      <!-- 3 Direct Contact Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Phone -->
        <a 
          href="tel:+639171234567" 
          class="bg-white hover:bg-brand-subtle/50 p-6 rounded-2xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
            <Phone class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-text-muted">Direct Phone</h3>
            <p class="text-sm font-bold text-neutral-950 mt-1">+63 917 123 4567</p>
          </div>
        </a>

        <!-- Address -->
        <a 
          href="https://maps.google.com/?q=Tilapayong,+Baliwag,+Bulacan" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white hover:bg-brand-subtle/50 p-6 rounded-2xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
            <MapPin class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-text-muted">Clinic Address</h3>
            <p class="text-sm font-bold text-neutral-950 mt-1">Tilapayong, Baliwag, Bulacan</p>
          </div>
        </a>

        <!-- Email -->
        <a 
          href="mailto:althealapuzlyingin@gmail.com" 
          class="bg-white hover:bg-brand-subtle/50 p-6 rounded-2xl border border-brand-border/60 hover:border-brand-primary shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
        >
          <div class="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
            <Mail class="w-6 h-6" />
          </div>
          <div>
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-text-muted">Email Inquiries</h3>
            <p class="text-sm font-bold text-brand-primary mt-1 break-all">althealapuzlyingin@gmail.com</p>
          </div>
        </a>
      </div>

      <!-- Wide Location Map Box -->
      <div class="max-w-5xl mx-auto">
        <div class="w-full h-80 sm:h-[400px] bg-brand-soft rounded-3xl border border-brand-border/60 relative overflow-hidden shadow-card group">
          <!-- Interactive Google Maps iframe / map view for Baliwag Bulacan -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15424.088812674488!2d120.893125!3d14.954215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339655f4699f8d55%3A0x28652caefea8ea27!2sTilapayong%2C%20Baliwag%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
            class="w-full h-full border-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Althea-Lapuz Lying In Clinic Location Map"
          ></iframe>
          
          <!-- Wireframe Location Badge Overlay -->
          <div class="absolute pointer-events-none inset-0 flex items-center justify-center bg-brand-primary/10">
            <span class="text-2xl sm:text-4xl font-extrabold tracking-wider lowercase text-brand-primary-dark px-8 py-3.5 bg-white/95 rounded-2xl border border-brand-border/80 backdrop-blur-md shadow-xl">
              location
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin, Mail } from '@lucide/vue'
</script>



