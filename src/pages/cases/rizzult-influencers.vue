<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const slug = 'rizzult-influencers'
</script>

<template>
  <DefaultLayout>
    <article class="container mx-auto px-4 py-16 lg:px-6 lg:py-24">
      <header class="mb-10 flex flex-col gap-4">
        <p class="text-sm uppercase tracking-widest text-neutral-500">
          {{ $t(`caseDetails.${slug}.badge`) }}
        </p>
        <h1 class="font-sans text-4xl font-bold text-ink-dim lg:text-5xl">
          {{ $t(`caseDetails.${slug}.title`) }}
        </h1>
        <p class="max-w-2xl text-base leading-7 text-neutral-700 lg:text-lg lg:leading-8">
          {{ $t(`caseDetails.${slug}.subtitle`) }}
        </p>
      </header>
      <div class="flex aspect-video w-full items-center justify-center rounded-2xl bg-neutral-100">
        <span class="text-sm text-neutral-500">{{ $t('caseDetails.comingSoon') }}</span>
      </div>
    </article>
  </DefaultLayout>
</template>
