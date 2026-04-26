<template>
  <article
    class="grid h-full grid-rows-[1fr_auto_1fr] gap-4 rounded-t-xl bg-white p-6 lg:rounded-t-none lg:rounded-l-xl"
  >
    <div></div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <RouterLink v-if="href" :to="href" class="text-ink-dim text-2xl font-semibold">{{ title }}</RouterLink>
        <p v-if="description">
          {{ description }}
        </p>
      </div>
      <div v-if="role">
        <p class="text-base font-medium">{{ t('case.roleLabel') }}</p>
        <p class="text-gray-400">{{ role }}</p>
      </div>
      <div v-if="focus">
        <p class="text-base font-medium">{{ t('case.focusLabel') }}</p>
        <p class="text-gray-400">{{ focus }}</p>
      </div>
      <RouterLink
        v-if="href"
        :to="href"
        class="text-accent mt-auto inline-flex items-center gap-2 font-semibold hover:underline"
      >
        {{ t('cases.readMore') }} <img src="/icons/icon-arrow-right.svg" alt="arrow" />
      </RouterLink>
    </div>
    <p class="mt-auto text-center text-xs italic">{{ t('case.nda') }}</p>
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
