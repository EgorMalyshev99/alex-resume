<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none absolute inset-0 z-0 h-full w-full blur-2xl lg:blur-3xl"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const ORANGE = { r: 207, g: 109, b: 10 } as const
const INDIGO = { r: 60, g: 57, b: 234 } as const

const RADIUS_WIDTH_FRAC = 0.34
const MOBILE_MAX_WIDTH = 768
const MOBILE_ANCHOR_PULL = 0.28
const MOBILE_ANCHOR_X = 0.5
const MOBILE_ANCHOR_Y = 0.36
const MOBILE_RADIUS_BOOST = 1.45
const RADIUS_PULSE_MIN = 0.8

const SPHERES = [
  { color: ORANGE, nx: 1.02, ny: -0.02, phase: 0, radiusMul: 1, skipOnCompact: false },
  { color: ORANGE, nx: 1.02, ny: 1.04, phase: 1.7, radiusMul: 1, skipOnCompact: true },
  { color: INDIGO, nx: -0.02, ny: 1.03, phase: 3.1, radiusMul: 1.5, skipOnCompact: false },
] as const

const canvasRef = ref<HTMLCanvasElement | null>(null)

const rgba = (c: { r: number; g: number; b: number }, a: number) => `rgba(${c.r},${c.g},${c.b},${a})`

let raf = 0
let ro: ResizeObserver | null = null
let removeWindowResize: (() => void) | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let dpr = 1

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = canvas.getBoundingClientRect()
    const w = Math.max(1, width)
    const h = Math.max(1, height)
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)
  }

  const draw = (t: number) => {
    const { width: cw, height: ch } = canvas.getBoundingClientRect()
    const w = Math.max(1, cw)
    const h = Math.max(1, ch)
    const motion = Math.min(w, h)
    const time = t * 0.0017
    const compact = w < MOBILE_MAX_WIDTH
    const pull = compact ? MOBILE_ANCHOR_PULL : 0
    const radiusBoost = compact ? MOBILE_RADIUS_BOOST : 1
    const baseR = w * RADIUS_WIDTH_FRAC * radiusBoost
    const amp = motion * (compact ? 0.05 : 0.058)

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    for (const s of SPHERES) {
      if (compact && s.skipOnCompact) continue

      const ox =
        Math.sin(time * 0.78 + s.phase) * amp +
        Math.cos(time * 1.02 + s.phase * 1.4) * (amp * 0.45) +
        Math.sin(time * 1.45 + s.phase * 0.6) * (amp * 0.22)
      const oy =
        Math.cos(time * 0.66 + s.phase * 1.1) * amp +
        Math.sin(time * 0.94 + s.phase * 0.85) * (amp * 0.42) +
        Math.cos(time * 1.28 + s.phase * 1.2) * (amp * 0.2)
      const nx = s.nx + (MOBILE_ANCHOR_X - s.nx) * pull
      const ny = s.ny + (MOBILE_ANCHOR_Y - s.ny) * pull
      const cx = nx * w + ox
      const cy = ny * h + oy

      const pulse =
        0.5 * (1 + Math.sin(time * 0.88 + s.phase * 2.2)) * 0.5 * (1 + Math.sin(time * 0.41 + s.phase * 1.1))
      const radiusT = RADIUS_PULSE_MIN + (1 - RADIUS_PULSE_MIN) * pulse
      const r = baseR * radiusT * s.radiusMul

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      g.addColorStop(0, rgba(s.color, 0.95))
      g.addColorStop(0.35, rgba(s.color, 0.35))
      g.addColorStop(0.7, rgba(s.color, 0.08))
      g.addColorStop(1, rgba(s.color, 0))

      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
    }

    raf = requestAnimationFrame(draw)
  }

  resize()
  ro = new ResizeObserver(resize)
  ro.observe(canvas)
  window.addEventListener('resize', resize)
  removeWindowResize = () => window.removeEventListener('resize', resize)

  raf = requestAnimationFrame(draw)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  ro = null
  removeWindowResize?.()
  removeWindowResize = null
})
</script>
