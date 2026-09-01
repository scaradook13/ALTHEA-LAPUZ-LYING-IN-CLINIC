<template>
  <div class="flex w-full mb-4" :class="isUser ? 'justify-end' : 'justify-start'">
    <!-- Bot Avatar -->
    <div v-if="!isUser" class="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mr-2 mt-auto shadow-xs">
      <Bot class="w-4 h-4 text-white" />
    </div>
    
    <!-- Message Bubble -->
    <div 
      class="max-w-[80%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs"
      :class="isUser 
        ? 'bg-brand-primary text-white rounded-br-none' 
        : 'bg-brand-soft text-text-primary rounded-bl-none border border-brand-border/50'"
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


