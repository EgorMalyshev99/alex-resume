<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href: string
    external?: boolean
  }>(),
  { external: false },
)

const rel = computed(() => (props.external ? 'noopener noreferrer' : undefined))
const target = computed(() => (props.external ? '_blank' : undefined))
</script>

<template>
  <a
    :href="href"
    :rel="rel"
    :target="target"
    class="inline-flex items-center gap-0.5 px-4 py-2.5 text-base leading-6 text-ink transition-opacity hover:opacity-70"
  >
    <slot />
  </a>
</template>
