<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-4',
      variantClasses,
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' }, // primary, secondary, text
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

defineEmits(['click'])

const variantClasses = computed(() => {
  if (props.variant === 'primary') {
    return 'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-active focus:ring-brand-light shadow-md hover:shadow-lg'
  }
  if (props.variant === 'secondary') {
    return 'bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary active:bg-brand-primary-active hover:text-white focus:ring-brand-light'
  }
  if (props.variant === 'text') {
    return 'text-brand-primary hover:text-brand-primary-dark active:text-brand-primary-active hover:bg-brand-soft focus:ring-brand-soft'
  }
  return ''
})
</script>
