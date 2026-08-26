<template>
  <div :class="['mb-12', align === 'center' ? 'text-center' : 'text-left']">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-brand-primary-dark">{{ title }}</h2>
    <p v-if="subtitle" :class="['text-lg max-w-2xl text-text-secondary', align === 'center' ? 'mx-auto' : '']">
      {{ subtitle }}
    </p>
    <div v-if="showDivider" :class="['w-24 h-1 rounded-full mt-6 bg-brand-primary', align === 'center' ? 'mx-auto' : '']"></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center, left
  showDivider: { type: Boolean, default: false }
})
</script>
