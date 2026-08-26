<template>
  <div class="border border-brand-light rounded-3xl mb-4 overflow-hidden bg-white transition-colors duration-300 hover:bg-brand-soft"
       :class="{ 'bg-brand-soft border-brand-primary': isOpen }">
    <button 
      @click="toggle"
      class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-4 focus:ring-brand-soft rounded-3xl"
      :aria-expanded="isOpen"
    >
      <span class="font-bold text-lg transition-colors duration-300" 
            :class="isOpen ? 'text-brand-primary' : 'text-text-primary'">
        {{ question }}
      </span>
      <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
           :class="isOpen ? 'bg-brand-primary text-white' : 'bg-brand-soft text-brand-primary'">
        <ChevronDown 
          class="w-6 h-6 transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': isOpen }" 
        />
      </div>
    </button>
    
    <div 
      class="grid transition-all duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <div class="p-6 pt-0 text-text-secondary leading-relaxed text-lg">
          <slot>{{ answer }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    default: ''
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
