<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, SUPPORT_LOCALES, type SupportedLocale } from '@/i18n'

const { locale } = useI18n()

const current = computed<SupportedLocale>(() => locale.value as SupportedLocale)

function toggle(): void {
  const next = current.value === 'en' ? 'ru' : 'en'
  setLocale(next)
}
</script>

<template>
  <button
    type="button"
    :aria-label="$t('nav.switchLanguage')"
    class="inline-flex items-center gap-1 rounded-xl px-3 py-2 font-sans text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-white/50"
    @click="toggle"
  >
    <span
      v-for="l in SUPPORT_LOCALES"
      :key="l"
      :class="['transition-opacity', l === current ? 'opacity-100' : 'opacity-40']"
    >
      {{ l }}
    </span>
  </button>
</template>
