<template>
  <div class="bg-brand-primary p-4 flex items-center justify-between border-b border-brand-primary-hover rounded-t-2xl">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1 border border-white/60 shadow-xs shrink-0">
        <img src="../../assets/images/althea-lapuz-logo.png" alt="Althea-Lapuz Clinic Logo" class="w-full h-full object-contain rounded-lg" />
      </div>
      <div class="text-left">
        <h3 class="font-heading font-bold text-white text-sm leading-tight">Clinic Information Assistant</h3>
        <p class="text-[11px] text-brand-soft">Althea-Lapuz Lying-In Clinic</p>
      </div>
    </div>
    <button 
      type="button"
      @click="$emit('close')" 
      class="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
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
