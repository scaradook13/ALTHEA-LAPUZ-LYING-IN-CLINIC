<template>
  <div class="bg-brand-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
    <div class="relative z-10 max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
      <p class="text-lg md:text-xl text-brand-light">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
})
</script>
