<template>
  <div class="bg-brand-primary p-4 flex items-center justify-between shadow-md rounded-t-2xl">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/60 shadow-xs">
        <img src="../../assets/images/althea-lapuz-logo.png" alt="Logo" class="w-full h-full object-contain rounded-full" />
      </div>
      <div>
        <h3 class="font-bold text-white text-sm leading-tight">AI Clinic Assistant</h3>
        <p class="text-xs text-brand-soft/90">Althea-Lapuz Lying In Clinic</p>
      </div>
    </div>
    <button 
      @click="$emit('close')" 
      class="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors focus:outline-none"
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


