<template>
  <DefaultLayout>
    <div class="bg-paper">
      <!-- Hero -->
      <section class="bg-paper px-4 pt-8 pb-12 lg:px-20 lg:pt-25 lg:pb-15">
        <div class="mx-auto flex max-w-310 flex-col gap-10 lg:gap-15">
          <RouterLink
            to="/"
            class="text-brand text-4.25 inline-flex w-fit items-center gap-2 font-semibold hover:underline"
          >
            ← {{ $t('case.back') }}
          </RouterLink>

          <h1 class="text-ink-dim lg:text-25 font-sans text-5xl leading-tight font-bold">
            {{ $t('brands.title') }}
          </h1>

          <div class="bg-surface shadow-card flex flex-col gap-3 rounded-xl p-6">
            <div class="flex flex-col gap-5 lg:flex-row">
              <div class="flex flex-1 flex-col gap-3">
                <p class="text-ink-dim text-6.5 leading-normal font-bold">{{ $t('case.overviewLabel') }}</p>
                <p class="text-ink-dim text-lg leading-5.5">{{ $t('brands.overview') }}</p>
              </div>
              <div class="flex w-full flex-col gap-3 lg:w-50">
                <p class="text-ink-dim text-6.5 leading-normal font-bold">{{ $t('case.teamLabel') }}</p>
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
              <div class="flex w-full flex-col gap-3 lg:w-75">
                <p class="text-ink-dim text-6.5 leading-normal font-bold">{{ $t('case.ndaLabel') }}</p>
                <p class="text-ink-dim text-lg leading-5.5">{{ $t('brands.nda') }}</p>
              </div>
            </div>
          </div>

          <div class="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <div class="flex gap-5 pb-4 lg:justify-between lg:pb-0">
              <div v-for="i in 5" :key="i" class="flex w-55 shrink-0 flex-col items-center gap-6">
                <div
                  class="bg-surface text-ink-dim shadow-card flex min-h-16.5 w-full items-center justify-center
                    rounded-lg px-4 py-4 text-center text-sm leading-normal font-semibold"
                >
                  {{ $t(`brands.flow${i}`) }}
                </div>
                <div
                  class="flex h-119 w-full items-center justify-center rounded-4xl bg-neutral-200 text-xs
                    text-neutral-400"
                >
                  Screen {{ i }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <h2 class="text-ink-dim text-6.5 leading-normal font-bold">{{ $t('case.impactOverviewLabel') }}</h2>
            <div class="flex flex-col gap-4 lg:flex-row">
              <div v-for="i in 3" :key="i" class="bg-surface shadow-card flex flex-1 flex-col gap-4 rounded-xl p-6">
                <p class="text-ink-dim text-xl leading-normal font-semibold">{{ $t(`brands.impact${i}Title`) }}</p>
                <p class="text-ink-dim text-base leading-5.5">{{ $t(`brands.impact${i}Body`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Body -->
      <section class="bg-paper px-4 py-16 lg:px-20 lg:py-30">
        <div class="mx-auto max-w-310">
          <div class="flex flex-col gap-16 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
            <nav class="hidden lg:block">
              <ul class="sticky top-24 flex flex-col gap-3">
                <li v-for="toc in tocItems" :key="toc.anchor">
                  <a
                    :href="`#${toc.anchor}`"
                    class="hover:text-brand text-xl transition-colors"
                    :class="activeAnchor === toc.anchor ? 'font-bold text-neutral-900' : 'text-ink-dim'"
                  >
                    {{ toc.label }}
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex flex-col gap-16 lg:gap-30">
              <div id="goal" class="flex flex-col gap-3">
                <h2 class="text-ink-dim text-8 leading-normal font-bold">{{ $t('brands.goalTitle') }}</h2>
                <p class="text-ink-dim text-xl leading-7.5">{{ $t('brands.goalBody') }}</p>
              </div>

              <div id="my-role" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-8 leading-normal font-bold">{{ $t('brands.myRoleTitle') }}</h2>
                  <p class="text-ink-dim text-xl leading-7.5">{{ $t('brands.myRoleIntro') }}</p>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="bg-surface shadow-card flex flex-col justify-center gap-5 rounded-xl p-6"
                  >
                    <div class="size-15 rounded-xl bg-neutral-200" aria-hidden="true" />
                    <div class="flex flex-col gap-4">
                      <p class="text-ink-dim text-2xl leading-normal font-semibold">{{ $t(`brands.role${i}Title`) }}</p>
                      <p class="text-ink-dim text-lg leading-6">{{ $t(`brands.role${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="process" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-8 leading-normal font-bold">{{ $t('brands.processTitle') }}</h2>
                  <p class="text-ink-dim text-xl leading-7.5">{{ $t('brands.processIntro') }}</p>
                </div>
                <div class="flex flex-col gap-6">
                  <div v-for="i in 4" :key="i" class="bg-surface shadow-card flex items-center gap-5 rounded-xl p-6">
                    <div class="size-15 shrink-0 rounded-xl bg-neutral-200" aria-hidden="true" />
                    <div class="flex flex-col gap-3">
                      <p class="text-ink-dim text-2xl leading-normal font-semibold">
                        {{ $t(`brands.process${i}Title`) }}
                      </p>
                      <p class="text-ink-dim text-lg leading-6">{{ $t(`brands.process${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="key-decisions" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-8 leading-normal font-bold">{{ $t('brands.decisionsTitle') }}</h2>
                  <p class="text-ink-dim text-xl leading-7.5">{{ $t('brands.decisionsIntro') }}</p>
                </div>
                <div class="flex flex-col gap-6">
                  <div v-for="i in 3" :key="i" class="bg-surface shadow-card flex gap-5 rounded-xl p-6">
                    <div
                      class="bg-accent-subtle text-accent flex size-7.5 shrink-0 items-center justify-center
                        rounded-full text-sm font-semibold"
                    >
                      {{ i }}
                    </div>
                    <div class="flex flex-col gap-3">
                      <p class="text-ink-dim text-2xl leading-normal font-semibold">
                        {{ $t(`brands.decision${i}Title`) }}
                      </p>
                      <p class="text-ink-dim text-lg leading-6">{{ $t(`brands.decision${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="impact" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-8 leading-normal font-bold">{{ $t('brands.impactTitle') }}</h2>
                  <p class="text-ink-dim text-xl leading-7.5">{{ $t('brands.impactIntro') }}</p>
                </div>
                <ul class="flex flex-col gap-5">
                  <li v-for="i in 5" :key="i" class="flex items-start gap-3">
                    <span class="text-accent mt-1.75 shrink-0 text-base">→</span>
                    <p class="text-ink-dim text-xl leading-7.5">{{ $t(`brands.impactItem${i}`) }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

import { useTocObserver } from '@/composables/useTocObserver'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const { t } = useI18n()

const team = ['Me', 'PM', 'DS', 'FD', 'FD', 'BE', 'BE']

const tocAnchors = ['goal', 'my-role', 'process', 'key-decisions', 'impact']
const tocItems = computed(() => [
  { anchor: 'goal', label: t('case.tocGoal') },
  { anchor: 'my-role', label: t('case.tocMyRole') },
  { anchor: 'process', label: t('case.tocProcess') },
  { anchor: 'key-decisions', label: t('case.tocKeyDecisions') },
  { anchor: 'impact', label: t('case.tocImpact') },
])

const { activeAnchor } = useTocObserver(tocAnchors)
</script>
