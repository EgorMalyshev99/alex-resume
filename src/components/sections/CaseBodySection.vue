<template>
  <section class="bg-paper px-4 py-16 lg:px-20 lg:py-30">
    <div class="mx-auto max-w-310">
      <div class="flex flex-col gap-16 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
        <!-- Sticky TOC (desktop only) -->
        <nav class="hidden lg:block">
          <ul class="sticky top-24 flex flex-col gap-3">
            <li v-for="(label, i) in tocLabels" :key="i">
              <a
                :href="`#${tocAnchors[i]}`"
                class="hover:text-brand text-xl transition-colors"
                :class="activeAnchor === tocAnchors[i] ? 'font-bold text-neutral-900' : 'text-ink-dim'"
                >{{ label }}</a
              >
            </li>
          </ul>
        </nav>

        <!-- Content sections -->
        <div class="flex flex-col gap-16 lg:gap-30">
          <!-- Goal -->
          <div id="goal" class="flex flex-col gap-3">
            <h2 class="text-ink-dim text-8 leading-normal font-bold">
              {{ $t(`caseDetails.${slug}.goal.title`) }}
            </h2>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="text-ink-dim text-xl leading-7.5" v-html="$t(`caseDetails.${slug}.goal.body`)" />
          </div>

          <!-- My Role -->
          <div id="my-role" class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <h2 class="text-ink-dim text-8 leading-normal font-bold">
                {{ $t(`caseDetails.${slug}.myRole.title`) }}
              </h2>
              <p class="text-ink-dim text-xl leading-7.5">
                {{ $t(`caseDetails.${slug}.myRole.intro`) }}
              </p>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                v-for="(item, i) in myRoleItems"
                :key="i"
                class="bg-surface shadow-card flex flex-col justify-center gap-5 rounded-xl p-6"
              >
                <div class="size-15 rounded-xl bg-neutral-200" aria-hidden="true" />
                <div class="flex flex-col gap-4">
                  <p class="text-ink-dim text-2xl leading-normal font-semibold">{{ item.title }}</p>
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <p class="text-ink-dim text-lg leading-6" v-html="item.body" />
                </div>
              </div>
            </div>
          </div>

          <!-- Process -->
          <div id="process" class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <h2 class="text-ink-dim text-8 leading-normal font-bold">
                {{ $t(`caseDetails.${slug}.process.title`) }}
              </h2>
              <p class="text-ink-dim text-xl leading-7.5">
                {{ $t(`caseDetails.${slug}.process.intro`) }}
              </p>
            </div>
            <div class="flex flex-col gap-6">
              <div
                v-for="(item, i) in processItems"
                :key="i"
                class="bg-surface shadow-card flex items-center gap-5 rounded-xl p-6"
              >
                <div class="size-15 shrink-0 rounded-xl bg-neutral-200" aria-hidden="true" />
                <div class="flex flex-col gap-3">
                  <p class="text-ink-dim text-2xl leading-normal font-semibold">{{ item.title }}</p>
                  <p class="text-ink-dim text-lg leading-6">{{ item.body }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Key UX Decisions -->
          <div id="key-decisions" class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <h2 class="text-ink-dim text-8 leading-normal font-bold">
                {{ $t(`caseDetails.${slug}.keyDecisions.title`) }}
              </h2>
              <p class="text-ink-dim text-xl leading-7.5">
                {{ $t(`caseDetails.${slug}.keyDecisions.intro`) }}
              </p>
            </div>
            <div class="flex flex-col gap-6">
              <div v-for="(item, i) in keyDecisions" :key="i" class="bg-surface shadow-card flex gap-5 rounded-xl p-6">
                <div
                  class="bg-accent-subtle text-accent flex size-7.5 shrink-0 items-center justify-center rounded-full
                    text-sm font-semibold"
                >
                  {{ i + 1 }}
                </div>
                <div class="flex flex-col gap-3">
                  <p class="text-ink-dim text-2xl leading-normal font-semibold">{{ item.title }}</p>
                  <p class="text-ink-dim text-lg leading-6">{{ item.body }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Impact -->
          <div id="impact" class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <h2 class="text-ink-dim text-8 leading-normal font-bold">
                {{ $t(`caseDetails.${slug}.impact.title`) }}
              </h2>
              <p class="text-ink-dim text-xl leading-7.5">
                {{ $t(`caseDetails.${slug}.impact.intro`) }}
              </p>
            </div>
            <ul class="flex flex-col gap-5">
              <li v-for="(item, i) in impactItems" :key="i" class="flex items-start gap-3">
                <span class="text-accent mt-1.75 shrink-0 text-base">→</span>
                <p class="text-ink-dim text-xl leading-7.5">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ slug: string }>()
const { tm } = useI18n()

const tocLabels = computed(() => tm(`caseDetails.${props.slug}.toc`))
const tocAnchors = ['goal', 'my-role', 'process', 'key-decisions', 'impact']

const myRoleItems = computed(() => tm(`caseDetails.${props.slug}.myRole.items`))
const processItems = computed(() => tm(`caseDetails.${props.slug}.process.items`))
const keyDecisions = computed(() => tm(`caseDetails.${props.slug}.keyDecisions.items`))
const impactItems = computed(() => tm(`caseDetails.${props.slug}.impact.items`))

const activeAnchor = ref<string>('')

let observer: IntersectionObserver | null = null

function onScroll() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  const tocAnchor = tocAnchors[tocAnchors.length - 1]
  if (atBottom && tocAnchor) activeAnchor.value = tocAnchor
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeAnchor.value = entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )

  tocAnchors.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })

  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>
