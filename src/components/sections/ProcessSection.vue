<template>
  <section id="process" class="py-16 lg:py-20">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('process.title') }}
      </h2>
      <p class="text-xl">
        {{ $t('process.description') }}
      </p>
    </header>

    <ol class="flex flex-col gap-6">
      <li v-for="i in 5" :key="i" class="flex items-center gap-5 rounded-xl bg-white p-6 lg:p-7">
        <img :src="images[i - 1]" class="size-15 shrink-0" alt="" />
        <div class="flex flex-col gap-3">
          <h3 class="text-ink-dim font-sans text-lg font-semibold lg:text-2xl">
            {{ $t(`process.step${i}Title`) }}
          </h3>
          <p class="text-sm text-neutral-600 lg:text-lg">
            {{ $t(`process.step${i}Body`) }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/icons/icon-questions.png',
  '/icons/icon-path.png',
  '/icons/icon-design.png',
  '/icons/icon-five.png',
  '/icons/icon-smile.png',
]
</script>
