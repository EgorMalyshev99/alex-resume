<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CaseCard from '@/components/ui/CaseCard.vue'

interface CaseItem {
  slug: string
  title: string
  role: string
  description: string
  tags: string[]
  image: string
}

const { tm } = useI18n()
const cases = computed<CaseItem[]>(() => tm('cases.items') as CaseItem[])
</script>

<template>
  <section id="cases" class="py-20 lg:py-24" data-figma-node="1:182">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="font-sans text-3xl font-bold text-ink-dim lg:text-4xl">
        {{ $t('cases.title') }}
      </h2>
      <p class="max-w-xl text-base leading-7 text-neutral-600">
        {{ $t('cases.description') }}
      </p>
    </header>

    <div class="flex flex-col gap-8 lg:gap-14">
      <article
        v-for="(c, idx) in cases"
        :key="c.slug"
        class="flex flex-col gap-6 lg:grid lg:items-stretch lg:gap-10"
        :class="idx % 2 === 0 ? 'lg:grid-cols-[1fr_1fr]' : 'lg:grid-cols-[1fr_1fr]'"
      >
        <CaseCard
          :title="c.title"
          :role="c.role"
          :description="c.description"
          :tags="c.tags"
          :href="`/cases/${c.slug}`"
          :class="idx % 2 === 1 ? 'lg:order-2' : ''"
        />
        <a
          :href="`/cases/${c.slug}`"
          class="block overflow-hidden rounded-2xl bg-neutral-100"
          :class="idx % 2 === 1 ? 'lg:order-1' : ''"
        >
          <img
            :src="c.image"
            :alt="c.title"
            width="400"
            height="452"
            class="size-full object-cover"
          />
        </a>
      </article>
    </div>
  </section>
</template>
