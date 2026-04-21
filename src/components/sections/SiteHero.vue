<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#f4f2ec] px-4 py-20 lg:px-16 lg:py-24"
    data-figma-node="1:157"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 -top-48 size-[600px] rounded-full bg-[#907cff]/15 blur-3xl lg:size-[931px]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-60 top-1/2 size-[800px] rounded-full bg-[#3c39ea]/10 blur-3xl lg:size-[1275px]"
    />

    <div class="relative mx-auto flex max-w-[1240px] flex-col items-center gap-10 text-center">
      <div class="flex flex-col items-center gap-6">
        <div
          class="flex flex-wrap items-center justify-center gap-3 font-sans text-xl text-ink-dim lg:text-2xl"
        >
          <span>{{ $t('hero.greeting') }}</span>
          <span
            class="inline-block size-[30px] overflow-hidden rounded-full bg-neutral-300 align-middle"
            aria-hidden="true"
          >
            <img
              src="https://placehold.co/30x30/png"
              alt=""
              width="30"
              height="30"
              class="size-full object-cover"
            />
          </span>
          <span>{{ $t('hero.intro') }}</span>
        </div>

        <h1
          class="max-w-[1012px] font-sans text-4xl font-bold leading-tight text-ink-dim lg:text-6xl"
        >
          {{ $t('hero.titleLine1') }} <br class="hidden lg:block" />
          {{ $t('hero.titleLine2') }}
        </h1>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <AppButton href="#" variant="primary" class="w-full sm:w-[157px]">
          {{ $t('hero.cta.download') }}
        </AppButton>
        <AppButton href="#cases" class="bg-[#3c39ea] text-white hover:bg-[#2a27c7]">
          {{ $t('hero.cta.view') }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
