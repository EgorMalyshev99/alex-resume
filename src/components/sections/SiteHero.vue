<template>
  <section
    class="bg-paper relative flex min-h-dvh flex-col justify-center overflow-hidden px-4 py-20 lg:px-16 lg:py-24"
  >
    <HeroGlowSpheres />

    <div class="relative z-10 mx-auto flex max-w-310 flex-col items-center gap-10 text-center">
      <div class="flex flex-col items-center gap-6">
        <div class="text-ink-dim flex flex-wrap items-center justify-center gap-3 font-sans text-xl lg:text-2xl">
          <span>{{ $t('hero.greeting') }}</span>
          <span
            class="inline-block size-7.5 overflow-hidden rounded-full bg-neutral-300 align-middle"
            aria-hidden="true"
          >
            <img src="/avatar-sm.png" alt="Avatar" width="30" height="30" class="size-full object-cover" />
          </span>
          <span>{{ $t('hero.intro') }}</span>
        </div>

        <h1 class="text-ink-dim max-w-253 font-sans text-4xl font-bold lg:text-6xl">
          {{ $t('hero.titleLine1') }} <br class="hidden lg:block" />
          {{ $t('hero.titleLine2') }}
        </h1>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <Button variant="primary" class="w-full sm:w-39.25" as-child>
          <a href="#" @click.prevent>{{ $t('hero.ctaDownload') }}</a>
        </Button>
        <Button class="bg-accent hover:bg-accent-hover text-white" as-child>
          <a href="#cases" @click.prevent="scrollToCases">{{ $t('hero.ctaView') }}</a>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroGlowSpheres from '@/components/effects/HeroGlowSpheres.vue'
import { Button } from '@/components/ui'

const scrollToCases = () => {
  document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
