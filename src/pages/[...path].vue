<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <section
      class="container mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center lg:px-6 lg:py-32"
    >
      <p class="font-sans text-6xl font-bold text-ink-dim lg:text-8xl">
        {{ $t('notFound.code') }}
      </p>
      <h1 class="font-sans text-2xl font-semibold text-ink-dim lg:text-3xl">
        {{ $t('notFound.title') }}
      </h1>
      <p class="max-w-lg text-base leading-7 text-neutral-600">
        {{ $t('notFound.body') }}
      </p>
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 font-display text-base font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        {{ $t('notFound.cta') }}
      </RouterLink>
    </section>
  </DefaultLayout>
</template>
