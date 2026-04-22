<template>
  <aside class="hidden w-75 shrink-0 self-start lg:sticky lg:top-24 lg:block" data-figma-node="1:174">
    <nav class="flex flex-col gap-4 font-sans">
      <h2 class="text-ink-dim text-xl font-semibold">
        {{ $t('sidebar.brand') }}
      </h2>
      <ul class="flex flex-col gap-2 text-base text-neutral-700">
        <li v-for="item in items" :key="item.href">
          <a
            :href="item.href"
            class="hover:text-brand transition-colors"
            :class="activeHref === item.href ? 'font-bold text-neutral-900' : ''"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface SidebarItem {
  label: string
  href: string
}

const { tm } = useI18n()
const items = computed<SidebarItem[]>(() => tm('sidebar.items'))

const activeHref = ref<string>('')

let observer: IntersectionObserver | null = null

function onScroll() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (atBottom) {
    const lastItem = items.value.at(-1)
    if (lastItem) activeHref.value = lastItem.href
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeHref.value = `#${entry.target.id}`
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )

  items.value.forEach(({ href }) => {
    const id = href.slice(1)
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
