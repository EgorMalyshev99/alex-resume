<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface SidebarItem {
  label: string
  href: string
}

const { tm } = useI18n()
const items = computed<SidebarItem[]>(() => tm('sidebar.items') as SidebarItem[])
</script>

<template>
  <aside
    class="hidden w-[300px] shrink-0 self-start lg:sticky lg:top-24 lg:block"
    data-figma-node="1:174"
  >
    <nav class="flex flex-col gap-4 font-sans">
      <h2 class="text-xl font-semibold text-ink-dim">
        {{ $t('sidebar.brand') }}
      </h2>
      <ul class="flex flex-col gap-2 text-base text-neutral-700">
        <li v-for="item in items" :key="item.href">
          <a :href="item.href" class="transition-colors hover:text-brand">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
