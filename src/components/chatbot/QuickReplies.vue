<template>
  <div class="flex flex-col gap-2 mt-2">
    <button
      v-for="reply in replies"
      :key="reply.id"
      @click="$emit('select', reply)"
      class="text-left px-3.5 py-1.5 bg-white border border-brand-primary text-brand-primary text-xs sm:text-sm rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-200 w-max max-w-[90%] shadow-xs focus:outline-none"
    >
      {{ reply.question }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  replies: {
    type: Array,
    required: true
  }
})

defineEmits(['select'])
</script>


