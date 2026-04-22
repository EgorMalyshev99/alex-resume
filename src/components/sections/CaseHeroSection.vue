<template>
  <section class="bg-paper px-4 pt-8 pb-12 lg:px-20 lg:pt-25 lg:pb-15">
    <div class="mx-auto flex max-w-310 flex-col gap-10 lg:gap-15">
      <!-- Back -->
      <RouterLink
        to="/"
        class="text-brand text-4.25 inline-flex w-fit items-center gap-2 font-semibold hover:underline"
      >
        ← {{ $t('caseDetails.back') }}
      </RouterLink>

      <!-- Title -->
      <h1 class="text-ink-dim lg:text-25 font-sans text-5xl leading-tight font-bold">
        {{ $t(`caseDetails.${slug}.title`) }}
      </h1>

      <!-- Overview card -->
      <div class="bg-surface shadow-card flex flex-col gap-3 rounded-xl p-6">
        <div class="flex flex-col gap-5 lg:flex-row">
          <!-- Overview text -->
          <div class="flex flex-1 flex-col gap-3">
            <p class="text-ink-dim text-6.5 leading-normal font-bold">
              {{ $t('caseDetails.overviewLabel') }}
            </p>
            <p class="text-ink-dim text-lg leading-5.5">
              {{ $t(`caseDetails.${slug}.overview`) }}
            </p>
          </div>

          <!-- Team avatars -->
          <div class="flex w-full flex-col gap-3 lg:w-50">
            <p class="text-ink-dim text-6.5 leading-normal font-bold">
              {{ $t('caseDetails.teamLabel') }}
            </p>
            <div class="flex">
              <div
                v-for="(member, i) in team"
                :key="i"
                class="border-surface flex h-9.25 min-w-9.25 items-center justify-center rounded-full border-2 px-2
                  text-sm font-semibold text-white"
                :class="i === 0 ? 'bg-accent' : 'bg-ink-dim'"
                :style="{ marginLeft: i > 0 ? '-7px' : '0', zIndex: team.length - i }"
              >
                {{ member }}
              </div>
            </div>
          </div>

          <!-- NDA -->
          <div class="flex w-full flex-col gap-3 lg:w-75">
            <p class="text-ink-dim text-6.5 leading-normal font-bold">
              {{ $t('caseDetails.ndaLabel') }}
            </p>
            <p class="text-ink-dim text-lg leading-5.5">
              {{ $t(`caseDetails.${slug}.nda`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- App / workflow flow -->
      <div class="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0">
        <div class="flex gap-5 pb-4 lg:justify-between lg:pb-0">
          <div v-for="(step, i) in appFlow" :key="i" class="flex w-55 shrink-0 flex-col items-center gap-6">
            <div
              class="bg-surface text-ink-dim shadow-card flex min-h-16.5 w-full items-center justify-center rounded-lg
                px-4 py-4 text-center text-sm leading-normal font-semibold"
            >
              {{ step }}
            </div>
            <div
              class="flex h-119 w-full items-center justify-center rounded-4xl bg-neutral-200 text-xs text-neutral-400"
            >
              Screen {{ i + 1 }}
            </div>
          </div>
        </div>
      </div>

      <!-- Impact overview -->
      <div class="flex flex-col gap-6">
        <h2 class="text-ink-dim text-6.5 leading-normal font-bold">
          {{ $t('caseDetails.impactOverviewLabel') }}
        </h2>
        <div class="flex flex-col gap-4 lg:flex-row">
          <div
            v-for="(item, i) in impactItems"
            :key="i"
            class="bg-surface shadow-card flex flex-1 flex-col gap-4 rounded-xl p-6"
          >
            <p class="text-ink-dim text-xl leading-normal font-semibold">{{ item.title }}</p>
            <p class="text-ink-dim text-base leading-5.5">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const props = defineProps<{ slug: string }>()
const { t } = useI18n()

const team = computed(() => t(`caseDetails.${props.slug}.team`).split('|'))
const appFlow = computed(() => t(`caseDetails.${props.slug}.appFlow`).split('|'))
const impactItems = computed(() => {
  const count = parseInt(t(`caseDetails.${props.slug}.impactCount`))
  return Array.from({ length: count }, (_, i) => ({
    title: t(`caseDetails.${props.slug}.impact${i + 1}Title`),
    body: t(`caseDetails.${props.slug}.impact${i + 1}Body`),
  }))
})
</script>
