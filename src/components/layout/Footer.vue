<template>
  <footer class="bg-brand-soft text-text-primary py-12 border-t border-brand-light mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex justify-center mb-6">
        <img src="../../assets/images/althea-lapuz-logo.png" alt="Althea-Lapuz Lying-In Clinic Logo" class="h-28 w-auto object-contain drop-shadow-sm" />
      </div>
      <h2 class="text-2xl font-bold text-brand-primary-dark mb-4 tracking-wide">ALTHEA-LAPUZ LYING-IN CLINIC</h2>
      <p class="mb-8 max-w-xl mx-auto text-text-secondary leading-relaxed">
        Providing safe, affordable, and high-quality maternal and newborn care services. Your family's health is our top priority.
      </p>
      <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
        <router-link to="/" class="text-text-primary hover:text-brand-primary transition-colors">Home</router-link>
        <router-link to="/services" class="text-text-primary hover:text-brand-primary transition-colors">Services</router-link>
        <router-link to="/about" class="text-text-primary hover:text-brand-primary transition-colors">About Us</router-link>
        <router-link to="/contact" class="text-text-primary hover:text-brand-primary transition-colors">Contact</router-link>
      </div>
      <div class="border-t border-brand-light pt-8 text-sm text-text-secondary">
        <p>&copy; 2026 Althea-Lapuz Lying-In Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
