<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant }), props.class)">
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { buttonVariants, type ButtonVariants } from '.'

import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>
