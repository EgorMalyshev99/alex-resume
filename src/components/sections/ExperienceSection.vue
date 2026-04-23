<template>
  <section id="experience" class="py-16 lg:py-20" data-figma-node="1:386">
    <div class="mb-12 flex flex-col gap-3">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('experience.title') }}
      </h2>
      <p class="text-xl">
        {{ $t('experience.description') }}
      </p>
    </div>

    <ol class="flex flex-col divide-y divide-gray-100">
      <li v-for="item in items" :key="item.key" class="flex flex-col gap-4 py-6 lg:flex-row lg:gap-6 lg:py-8">
        <img
          :src="item.avatar"
          :alt="$t(`experience.${item.key}Company`)"
          width="62"
          height="62"
          class="size-15.5 shrink-0 rounded-xl object-cover"
        />
        <div class="flex flex-1 flex-col gap-3">
          <div class="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between">
            <div class="flex flex-col gap-1">
              <p class="text-2xl font-bold">{{ $t(`experience.${item.key}Company`) }}</p>
              <p class="text-xl font-medium">{{ $t(`experience.${item.key}Role`) }}</p>
            </div>
            <span class="text-lg">{{ $t(`experience.${item.key}Period`) }}</span>
          </div>
          <ul class="flex flex-col gap-2">
            <li v-for="i in item.bullets" :key="i" class="flex items-start gap-3">
              <img src="/icons/icon-arrow-right.svg" width="26" height="26" class="size-6.5" alt="arrow right" />
              <span class="text-base text-gray-300">{{ $t(`experience.${item.key}Bullet${i}`) }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
const items = [
  { key: 'rizzult', avatar: '/rizzult-logo.png', bullets: 3 },
  { key: 'acme', avatar: '/drim-logo.png', bullets: 2 },
  { key: 'freelance', avatar: '/ninji-logo.png', bullets: 3 },
  { key: 'brandlab', avatar: '/renthop-logo.png', bullets: 2 },
  { key: 'uni', avatar: '/scrille-logo.png', bullets: 1 },
]
</script>
