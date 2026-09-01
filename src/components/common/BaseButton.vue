<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none',
      sizeClasses,
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
  variant: { type: String, default: 'dark' }, // dark, primary, secondary, outline, text, link
  size: { type: String, default: 'md' }, // sm, md, lg
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

defineEmits(['click'])

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-xs rounded-full'
    case 'lg':
      return 'px-8 py-3.5 text-base rounded-full'
    case 'md':
    default:
      return 'px-6 py-2.5 text-sm rounded-full'
  }
})

const variantClasses = computed(() => {
  if (props.variant === 'primary' || props.variant === 'dark') {
    return 'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-active shadow-brand-sm hover:shadow-brand active:scale-[0.98] font-bold tracking-wide'
  }
  if (props.variant === 'secondary') {
    return 'bg-brand-soft border border-brand-border/80 text-brand-primary-dark hover:bg-brand-light hover:border-brand-primary active:bg-brand-soft active:scale-[0.98] font-bold tracking-wide'
  }
  if (props.variant === 'outline') {
    return 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white active:scale-[0.98] font-bold tracking-wide'
  }
  if (props.variant === 'text' || props.variant === 'link') {
    return 'text-brand-primary hover:text-brand-primary-dark p-0 font-bold tracking-wide group'
  }
  return 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-brand-sm font-bold tracking-wide'
})
</script>


