<template>
  <footer class="bg-brand-subtle/80 text-text-primary py-10 border-t border-brand-border/40 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
        <!-- Brand & Slogan -->
        <div class="flex items-center gap-3">
          <img 
            src="../../assets/images/althea-lapuz-logo.png" 
            alt="Althea-Lapuz Lying In Clinic" 
            class="w-9 h-9 rounded-full object-contain ring-2 ring-brand-border/60"
          />
          <div class="text-left">
            <h3 class="text-sm font-extrabold text-neutral-950 uppercase tracking-wider">
              Althea-Lapuz Lying In Clinic
            </h3>
            <p class="text-xs text-text-secondary">Compassionate Maternal & Newborn Care</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-text-secondary">
          <router-link to="/" class="hover:text-brand-primary transition-colors">Home</router-link>
          <router-link to="/services" class="hover:text-brand-primary transition-colors">Services</router-link>
          <router-link to="/about" class="hover:text-brand-primary transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-brand-primary transition-colors">Contact Us</router-link>
        </div>
      </div>

      <div class="pt-6 border-t border-brand-border/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-muted">
        <p>&copy; {{ new Date().getFullYear() }} Althea-Lapuz Lying In Clinic. All rights reserved.</p>
        <p>Tilapayong, City of Baliwag, Bulacan • Open 24/7</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>



