<template>
  <section id="cases">
    <div class="mb-8 flex flex-col gap-3">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('cases.title') }}
      </h2>
      <p class="text-ink-dim text-xl leading-7">
        {{ $t('cases.description') }}
      </p>
    </div>

    <div class="flex flex-col gap-8 lg:gap-14">
      <article v-for="item in cases" :key="item.href" class="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
        <CaseCard
          :title="$t(item.title)"
          :role="$t(item.role)"
          :focus="item.focus"
          :description="$t(item.description)"
          :tags="item.tags.map((tag) => $t(tag))"
          :href="item.href"
        />

        <RouterLink
          :to="item.href"
          :class="[
            'block overflow-hidden rounded-b-xl bg-neutral-100 lg:rounded-r-xl lg:rounded-b-none',
            item.imageOrderClass,
          ]"
        >
          <img :src="item.image" :alt="$t(item.title)" class="size-full object-cover" />
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import CaseCard from '@/components/ui/CaseCard.vue'

const cases = computed(() => [
  {
    title: 'cases.influencersTitle',
    role: 'cases.influencersRole',
    focus: 'Creator flow, mobile UX',
    description: 'cases.influencersDescription',
    tags: ['cases.influencersTag1', 'cases.influencersTag2', 'cases.influencersTag3'],
    href: '/cases/rizzult-influencers',
    image: '/influencers-case-preview.jpg',
    imageOrderClass: '',
  },
  {
    title: 'cases.managerTitle',
    role: 'cases.managerRole',
    focus: 'Campaign management, B2B UX, User flow',
    description: 'cases.managerDescription',
    tags: ['cases.managerTag1', 'cases.managerTag2', 'cases.managerTag3'],
    href: '/cases/rizzult-talent-manager',
    image: '/managers-case-preview.jpg',
    imageOrderClass: 'lg:order-1',
  },
  {
    title: 'cases.brandsTitle',
    role: 'cases.brandsRole',
    focus: 'User flow, mobile UX',
    description: 'cases.brandsDescription',
    tags: ['cases.brandsTag1', 'cases.brandsTag2', 'cases.brandsTag3'],
    href: '/cases/rizzult-brands',
    image: '/brands-case-preview.jpg',
    imageOrderClass: '',
  },
])
</script>
