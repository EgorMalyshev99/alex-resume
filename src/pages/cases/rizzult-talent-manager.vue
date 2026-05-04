<template>
  <DefaultLayout>
    <div class="bg-paper">
      <!-- Hero -->
      <section class="bg-paper pt-8 pb-15 lg:pt-25">
        <div class="container flex flex-col gap-10 lg:gap-15">
          <RouterLink
            to="/"
            class="text-brand text-4.25 inline-flex w-fit items-center gap-2 font-semibold hover:underline"
          >
            <img
              src="/icons/icon-arrow-right-alt.png"
              width="22"
              height="22"
              class="size-5.5 scale-x-[-1]"
              alt="Arrow"
            />
            {{ $t('case.back') }}
          </RouterLink>

          <h1 class="text-ink-dim font-sans text-5xl font-bold lg:text-[100px]">
            {{ $t('manager.title') }}
          </h1>

          <div class="bg-surface shadow-card flex flex-col gap-3 rounded-xl p-6">
            <div class="flex flex-col gap-5 lg:flex-row">
              <div class="flex flex-1 flex-col gap-3">
                <p class="text-ink-dim text-2xl font-bold lg:text-[26px]">{{ $t('case.overviewLabel') }}</p>
                <p class="text-ink-dim text-lg">{{ $t('manager.overview') }}</p>
              </div>
              <div class="flex w-full flex-col gap-3 lg:w-50">
                <p class="text-ink-dim text-2xl font-bold lg:text-[26px]">{{ $t('case.teamLabel') }}</p>
                <div class="flex flex-col gap-1">
                  <div class="flex">
                    <div
                      v-for="(member, i) in team.slice(0, 2)"
                      :key="`team-r1-${i}`"
                      class="border-surface flex h-9.25 min-w-9.25 items-center justify-center rounded-full border-2
                        text-sm font-semibold text-white"
                      :class="i === 0 ? 'bg-accent' : 'bg-ink-dim'"
                      :style="{ marginLeft: i > 0 ? '-7px' : '0', zIndex: team.length - i }"
                    >
                      {{ member }}
                    </div>
                  </div>
                  <div v-if="team.length > 2" class="flex">
                    <div
                      v-for="(member, i) in team.slice(2)"
                      :key="`team-r2-${i}`"
                      class="border-surface bg-ink-dim flex h-9.25 min-w-9.25 items-center justify-center rounded-full
                        border-2 text-sm font-semibold text-white"
                      :style="{
                        marginLeft: i > 0 ? '-7px' : '0',
                        zIndex: team.length - (i + 2),
                      }"
                    >
                      {{ member }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full flex-col gap-3 lg:w-75">
                <p class="text-ink-dim text-2xl font-bold lg:text-[26px]">{{ $t('case.ndaLabel') }}</p>
                <p class="text-ink-dim text-lg">{{ $t('manager.nda') }}</p>
              </div>
            </div>
          </div>

          <div class="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <div class="flex gap-5 pb-4 lg:justify-between lg:pb-0">
              <div v-for="i in 5" :key="i" class="flex w-55 shrink-0 flex-col items-center gap-6">
                <div
                  class="bg-surface text-ink-dim shadow-card flex min-h-18 w-full items-center justify-center rounded-lg
                    px-4 py-4 text-center text-sm font-semibold"
                >
                  {{ $t(`manager.flow${i}`) }}
                </div>
                <img
                  :src="`/managers-case-${i}.png`"
                  :alt="$t(`manager.flow${i}`)"
                  class="h-119 w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <h2 class="text-ink-dim text-2xl font-bold lg:text-[26px]">{{ $t('case.impactOverviewLabel') }}</h2>
            <div class="flex flex-col gap-4 lg:flex-row">
              <div
                v-for="i in 3"
                :key="i"
                class="bg-surface shadow-card flex flex-1 flex-col gap-3 rounded-xl p-6 lg:gap-2"
              >
                <p class="text-ink-dim text-xl leading-tight font-semibold">{{ $t(`manager.impact${i}Title`) }}</p>
                <p class="text-ink-dim text-base">{{ $t(`manager.impact${i}Body`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Body -->
      <section class="bg-paper container py-15 lg:py-30">
        <div class="mx-auto">
          <div class="flex flex-col gap-16 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
            <aside class="hidden w-75 shrink-0 self-start lg:sticky lg:top-24 lg:block">
              <nav class="flex flex-col gap-4 font-sans">
                <ul class="flex flex-col gap-2">
                  <li v-for="toc in tocItems" :key="toc.anchor">
                    <a
                      :href="`#${toc.anchor}`"
                      class="text-ink-dim cursor-pointer"
                      :class="activeAnchor === toc.anchor ? 'text-2xl font-bold' : 'text-xl'"
                      @click.prevent="scrollToTocSection(toc.anchor)"
                    >
                      {{ toc.label }}
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <div class="flex max-w-200 flex-col gap-30">
              <div id="goal" class="flex flex-col gap-3">
                <h2 class="text-ink-dim text-3xl font-bold">{{ $t('manager.goalTitle') }}</h2>
                <!-- eslint-disable-next-line vue/no-v-html -- trusted locale copy -->
                <p class="text-ink-dim text-xl" v-html="$t('manager.goalBody')"></p>
              </div>

              <div id="my-role" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-3xl font-bold">{{ $t('manager.myRoleTitle') }}</h2>
                  <p class="text-ink-dim text-xl">{{ $t('manager.myRoleIntro') }}</p>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="bg-surface shadow-card flex flex-col justify-center gap-5 rounded-xl p-6"
                  >
                    <img :src="roleCardIcons[i - 1]" class="size-15 shrink-0" width="60" height="60" alt="" />
                    <div class="flex flex-col gap-2">
                      <p class="text-ink-dim text-2xl font-semibold">
                        {{ $t(`manager.role${i}Title`) }}
                      </p>
                      <p class="text-ink-dim text-lg">{{ $t(`manager.role${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="process" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-3xl font-bold">{{ $t('manager.processTitle') }}</h2>
                  <p class="text-ink-dim text-xl">{{ $t('manager.processIntro') }}</p>
                </div>
                <div class="flex flex-col gap-6">
                  <div v-for="i in 4" :key="i" class="bg-surface shadow-card flex items-center gap-5 rounded-xl p-6">
                    <img :src="decisionCardIcons[i - 1]" class="size-15 shrink-0" width="60" height="60" alt="" />
                    <div class="flex flex-col gap-2">
                      <p class="text-ink-dim text-2xl font-semibold">
                        {{ $t(`manager.process${i}Title`) }}
                      </p>
                      <p class="text-ink-dim text-lg">{{ $t(`manager.process${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="key-decisions" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-3xl font-bold">{{ $t('manager.decisionsTitle') }}</h2>
                  <p class="text-ink-dim text-xl">{{ $t('manager.decisionsIntro') }}</p>
                </div>
                <div class="flex flex-col gap-6">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="bg-surface shadow-card flex flex-col gap-5 rounded-xl p-6 lg:flex-row"
                  >
                    <div
                      class="bg-accent-subtle text-accent flex size-7.5 shrink-0 items-center justify-center
                        rounded-full text-sm font-semibold"
                    >
                      {{ i }}
                    </div>
                    <div class="flex flex-col gap-3">
                      <p class="text-ink-dim text-2xl font-semibold">
                        {{ $t(`manager.decision${i}Title`) }}
                      </p>
                      <p class="text-ink-dim text-lg">{{ $t(`manager.decision${i}Body`) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="impact" class="flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                  <h2 class="text-ink-dim text-3xl font-bold">{{ $t('manager.impactTitle') }}</h2>
                  <p class="text-ink-dim text-xl">{{ $t('manager.impactIntro') }}</p>
                </div>
                <ul class="flex flex-col gap-5">
                  <li v-for="i in 5" :key="i" class="flex items-start gap-3">
                    <img
                      src="/icons/icon-arrow-right-alt.png"
                      class="size-6.5 shrink-0"
                      width="26"
                      height="26"
                      alt="arrow"
                    />
                    <p class="text-ink-dim text-xl">{{ $t(`manager.impactItem${i}`) }}</p>
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

import { scrollToTocSection, useTocObserver } from '@/composables/useTocObserver'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const { t } = useI18n()

const team = ['Me', 'PM', 'FD', 'BE', 'BE', 'BE']

const roleCardIcons = [
  '/icons/icon-path.png',
  '/icons/icon-design.png',
  '/icons/icon-paper.png',
  '/icons/icon-target.png',
] as const

const decisionCardIcons = [
  '/icons/icon-lines.png',
  '/icons/icon-mail.png',
  '/icons/icon-ab.png',
  '/icons/icon-chart.png',
] as const

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
