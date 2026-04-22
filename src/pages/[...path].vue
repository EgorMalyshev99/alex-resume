<template>
  <DefaultLayout>
    <section class="container flex flex-col items-center gap-6 py-24 text-center lg:py-32">
      <p class="text-ink-dim font-sans text-6xl font-bold lg:text-8xl">
        {{ $t('notFound.code') }}
      </p>
      <h1 class="text-ink-dim font-sans text-2xl font-semibold lg:text-3xl">
        {{ $t('notFound.title') }}
      </h1>
      <p class="max-w-lg text-base leading-7 text-neutral-600">
        {{ $t('notFound.body') }}
      </p>
      <RouterLink
        to="/"
        class="bg-brand font-display hover:bg-brand-hover inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base
          font-semibold text-white transition-colors"
      >
        {{ $t('notFound.cta') }}
      </RouterLink>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
