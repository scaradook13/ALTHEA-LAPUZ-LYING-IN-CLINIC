<template>
  <div class="bg-brand-primary p-4 flex items-center justify-between shadow-md rounded-t-2xl">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border-2 border-brand-light">
        <img src="../../assets/images/althea-lapuz-logo.png" alt="Logo" class="w-full h-full object-contain rounded-full" />
      </div>
      <div>
        <h3 class="font-bold text-white leading-tight">Clinic Assistant</h3>
        <p class="text-xs text-brand-soft opacity-90">Althea-Lapuz Lying-In Clinic</p>
      </div>
    </div>
    <button 
      @click="$emit('close')" 
      class="text-white hover:text-brand-soft hover:bg-brand-primary-hover p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-soft"
      aria-label="Close Chat"
    >
      <X class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { X } from '@lucide/vue'

defineEmits(['close'])
</script>
