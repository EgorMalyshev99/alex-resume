<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface ExperienceEntry {
  company: string
  role: string
  period: string
  avatar: string
  bullets: string[]
}

const { tm } = useI18n()
const entries = computed<ExperienceEntry[]>(() => tm('experience.entries') as ExperienceEntry[])
</script>

<template>
  <section id="experience" class="py-16 lg:py-20" data-figma-node="1:386">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="font-sans text-3xl font-bold text-ink-dim lg:text-4xl">
        {{ $t('experience.title') }}
      </h2>
      <p class="max-w-xl text-base leading-7 text-neutral-600">
        {{ $t('experience.description') }}
      </p>
    </header>

    <ol class="flex flex-col divide-y divide-neutral-200">
      <li
        v-for="entry in entries"
        :key="entry.company + entry.period"
        class="flex flex-col gap-4 py-6 lg:flex-row lg:gap-6 lg:py-8"
      >
        <img
          :src="entry.avatar"
          :alt="entry.company"
          width="62"
          height="62"
          class="size-[62px] shrink-0 rounded-xl object-cover"
        />
        <div class="flex flex-1 flex-col gap-3">
          <header class="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between">
            <h3 class="font-sans text-lg font-semibold text-ink-dim">
              {{ entry.role }} · {{ entry.company }}
            </h3>
            <span class="text-sm text-neutral-500">{{ entry.period }}</span>
          </header>
          <ul class="flex flex-col gap-2">
            <li
              v-for="bullet in entry.bullets"
              :key="bullet"
              class="flex items-start gap-3 text-sm leading-6 text-neutral-700 lg:text-base"
            >
              <span class="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              <span>{{ bullet }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
