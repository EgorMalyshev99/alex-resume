<template>
  <section id="skills" class="py-16 lg:py-20" data-figma-node="1:325">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('skills.title') }}
      </h2>
      <p class="max-w-xl text-base leading-7 text-neutral-600">
        {{ $t('skills.description') }}
      </p>
    </header>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
      <div v-for="col in columns" :key="col.title" class="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6">
        <h3 class="text-ink-dim font-sans text-lg font-semibold">
          {{ col.title }}
        </h3>
        <ul class="flex flex-col gap-3">
          <li v-for="item in col.items" :key="item" class="flex items-start gap-3 text-sm leading-5 text-neutral-700">
            <span class="bg-brand mt-2 size-2 shrink-0 rounded-full" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface SkillColumn {
  title: string
  items: string[]
}

const { tm } = useI18n()
const columns = computed<SkillColumn[]>(() => tm('skills.columns'))
</script>
