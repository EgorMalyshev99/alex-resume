<template>
  <article
    class="grid h-full gap-4 rounded-t-xl bg-white px-6 py-8 lg:grid-rows-[1fr_auto_1fr] lg:rounded-t-none
      lg:rounded-l-xl lg:p-6"
  >
    <div class="hidden lg:block"></div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <RouterLink v-if="href" :to="href" class="text-ink-dim text-2xl font-semibold">{{ title }}</RouterLink>
        <p v-if="description" class="text-sm">
          {{ description }}
        </p>
      </div>
      <div v-if="role">
        <p class="text-base font-medium">{{ t('case.roleLabel') }}</p>
        <p class="text-sm text-gray-400">{{ role }}</p>
      </div>
      <div v-if="focus">
        <p class="text-base font-medium">{{ t('case.focusLabel') }}</p>
        <p class="text-sm text-gray-400">{{ focus }}</p>
      </div>
      <div class="flex flex-col items-start">
        <RouterLink
          v-if="href"
          :to="href"
          class="text-accent mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          {{ t('cases.readMore') }} <img src="/icons/icon-arrow-right.svg" alt="arrow" />
        </RouterLink>
      </div>
    </div>
    <p class="mt-auto hidden text-center text-xs italic lg:block">{{ t('case.nda') }}</p>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

defineProps<{
  title: string
  role?: string
  focus?: string
  description?: string
  tags?: string[]
  href?: string
}>()
</script>
