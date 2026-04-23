<template>
  <section id="expertise" class="py-16 lg:py-20" data-figma-node="1:325">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('expertise.title') }}
      </h2>
      <p class="text-xl">
        {{ $t('expertise.description') }}
      </p>
    </header>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
      <div v-for="card in cards" :key="card.prefix" class="flex flex-col gap-4 rounded-xl bg-white px-6 py-5 shadow">
        <h3 class="text-ink-dim font-sans text-2xl font-semibold">
          {{ $t(`expertise.${card.prefix}Title`) }}
        </h3>
        <ul class="flex flex-col gap-5">
          <li v-for="i in card.count" :key="i" class="flex items-center gap-3">
            <span class="bg-accent block size-2 shrink-0 rounded-full" />
            <span class="text-base">{{ $t(`expertise.${card.prefix}${i}`) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  { prefix: 'design', count: 5 },
  { prefix: 'research', count: 4 },
  { prefix: 'delivery', count: 5 },
]
</script>
