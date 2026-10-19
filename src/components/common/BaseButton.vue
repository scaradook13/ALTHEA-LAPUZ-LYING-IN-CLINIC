<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
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
  variant: { type: String, default: 'primary' }, // primary, dark, secondary, outline, text, link
  size: { type: String, default: 'md' }, // sm, md, lg
  fullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

defineEmits(['click'])

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-xs rounded-lg'
    case 'lg':
      return 'px-6 py-3.5 text-sm sm:text-base rounded-xl'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm rounded-xl'
  }
})

const variantClasses = computed(() => {
  if (props.variant === 'primary' || props.variant === 'dark') {
    return 'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-active shadow-brand-sm hover:shadow-brand'
  }
  if (props.variant === 'secondary') {
    return 'bg-white border border-brand-border text-brand-primary hover:bg-brand-soft hover:border-brand-primary/50 hover:text-brand-primary-hover active:bg-brand-light shadow-card'
  }
  if (props.variant === 'outline') {
    return 'bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-soft hover:border-brand-primary-hover hover:text-brand-primary-hover active:bg-brand-light'
  }
  if (props.variant === 'text' || props.variant === 'link') {
    return 'text-brand-primary hover:text-brand-primary-hover p-0 group'
  }
  return 'bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-active shadow-brand-sm'
})
</script>
