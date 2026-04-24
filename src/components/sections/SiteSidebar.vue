<template>
  <aside class="hidden w-75 shrink-0 self-start lg:sticky lg:top-24 lg:block">
    <nav class="flex flex-col gap-4 font-sans">
      <ul class="flex flex-col gap-2">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="text-ink-dim cursor-pointer"
            :class="activeHref === item.href ? 'text-2xl font-bold' : 'text-xl'"
            @click.prevent="scrollTo(item.href)"
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

const { t } = useI18n()

const navItems = computed(() => [
  { label: t('sidebar.navCases'), href: '#cases' },
  { label: t('sidebar.navAbout'), href: '#about' },
  { label: t('sidebar.navProcess'), href: '#process' },
  { label: t('sidebar.navExpertise'), href: '#expertise' },
  { label: t('sidebar.navExperience'), href: '#experience' },
  { label: t('sidebar.navContacts'), href: '#contacts' },
])

const activeHref = ref<string>('')

function scrollTo(href: string) {
  const el = document.getElementById(href.slice(1))
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top, behavior: 'smooth' })
}

let observer: IntersectionObserver | null = null

function onScroll() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (atBottom) {
    const last = navItems.value.at(-1)
    if (last) activeHref.value = last.href
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

  navItems.value.forEach(({ href }) => {
    const el = document.getElementById(href.slice(1))
    if (el) observer!.observe(el)
  })

  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>
