<template>
  <div class="flex flex-col gap-2 mt-2">
    <button
      v-for="reply in replies"
      :key="reply.id"
      type="button"
      @click="$emit('select', reply)"
      class="text-left px-3.5 py-2 bg-white border border-brand-border text-brand-primary font-heading font-semibold text-xs sm:text-sm rounded-xl hover:bg-brand-soft hover:text-brand-primary-hover hover:border-brand-primary/50 active:bg-brand-light transition-colors duration-200 w-max max-w-[92%] shadow-xs cursor-pointer"
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
