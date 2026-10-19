<template>
  <div class="flex w-full mb-3.5" :class="isUser ? 'justify-end' : 'justify-start'">
    <!-- Bot Avatar -->
    <div v-if="!isUser" class="w-8 h-8 rounded-xl bg-brand-primary flex items-center justify-center shrink-0 mr-2 mt-auto shadow-xs">
      <Bot class="w-4 h-4 text-white" />
    </div>
    
    <!-- Message Bubble -->
    <div 
      class="max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs text-left"
      :class="isUser 
        ? 'bg-brand-primary text-white rounded-br-none' 
        : 'bg-white text-text-primary rounded-bl-none border border-brand-border'"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { Bot } from '@lucide/vue'

defineProps({
  text: {
    type: String,
    required: true
  },
  isUser: {
    type: Boolean,
    default: false
  }
})
</script>
