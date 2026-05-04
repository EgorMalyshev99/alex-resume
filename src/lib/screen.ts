import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

export enum ScreenSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = '2xl',
}

export enum ScreenBreakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536,
}

export const useScreen = () => {
  const { width } = useWindowSize()
  const screen = ref(ScreenSizes.lg)

  const isSm = computed(() => width.value >= ScreenBreakpoints.sm)
  const isMd = computed(() => width.value >= ScreenBreakpoints.md)
  const isLg = computed(() => width.value >= ScreenBreakpoints.lg)
  const isXl = computed(() => width.value >= ScreenBreakpoints.xl)
  const is2Xl = computed(() => width.value >= ScreenBreakpoints.xxl)

  return { screen, isSm, isMd, isLg, isXl, is2Xl, width }
}
