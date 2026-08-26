<template>
  <BaseButton :to="to" variant="secondary" class="mt-8">
    View More
    <template #suffix>
      <ArrowRight class="w-4 h-4 ml-1" />
    </template>
  </BaseButton>
</template>

<script setup>
import { ArrowRight } from '@lucide/vue'
import BaseButton from './BaseButton.vue'

defineProps({
  to: {
    type: [String, Object],
    required: true
  }
})
</script>
