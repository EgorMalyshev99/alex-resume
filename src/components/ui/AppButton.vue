<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'ghost'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: Variant
    external?: boolean
  }>(),
  { variant: 'ghost', external: false },
)

const is = computed(() => (props.href ? 'a' : 'button'))
const rel = computed(() => (props.external ? 'noopener noreferrer' : undefined))
const target = computed(() => (props.external ? '_blank' : undefined))

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3 font-display text-[17px] font-semibold leading-[22px] transition-colors'
  const variants: Record<Variant, string> = {
    primary: 'bg-brand text-white hover:bg-brand-hover',
    ghost: 'text-brand hover:bg-brand hover:text-white',
  }
  return `${base} ${variants[props.variant]}`
})
</script>

<template>
  <component :is="is" :href="href" :rel="rel" :target="target" :class="classes">
    <slot />
  </component>
</template>
