<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Step {
  title: string
  description: string
}

const { tm } = useI18n()
const steps = computed<Step[]>(() => tm('process.steps') as Step[])
</script>

<template>
  <section id="process" class="py-16 lg:py-20" data-figma-node="1:290">
    <header class="mb-12 flex flex-col gap-3">
      <h2 class="font-sans text-3xl font-bold text-ink-dim lg:text-4xl">
        {{ $t('process.title') }}
      </h2>
      <p class="max-w-xl text-base leading-7 text-neutral-600">
        {{ $t('process.description') }}
      </p>
    </header>

    <ol class="flex flex-col gap-4">
      <li
        v-for="(step, idx) in steps"
        :key="step.title"
        class="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 lg:p-7"
      >
        <div
          class="flex size-[60px] shrink-0 items-center justify-center rounded-2xl bg-neutral-100 font-sans text-xl font-semibold text-brand"
        >
          {{ String(idx + 1).padStart(2, '0') }}
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-sans text-lg font-semibold text-ink-dim lg:text-xl">
            {{ step.title }}
          </h3>
          <p class="text-sm leading-6 text-neutral-600 lg:text-base">
            {{ step.description }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
