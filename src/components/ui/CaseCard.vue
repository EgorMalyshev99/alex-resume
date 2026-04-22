<template>
  <article
    class="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors
      hover:border-neutral-400"
  >
    <div class="flex flex-col gap-1">
      <h3 class="text-ink-dim text-xl font-semibold">{{ title }}</h3>
      <p v-if="role" class="text-sm text-neutral-500">{{ role }}</p>
    </div>
    <p v-if="description" class="flex-1 text-sm leading-6 text-neutral-700">
      {{ description }}
    </p>
    <ul v-if="tags?.length" class="flex flex-wrap gap-2">
      <li v-for="tag in tags" :key="tag" class="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
        {{ tag }}
      </li>
    </ul>
    <a
      v-if="href"
      :href="href"
      class="text-brand mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:underline"
    >
      {{ $t('cases.readMore') }}
    </a>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  role?: string
  description?: string
  tags?: string[]
  href?: string
}>()
</script>
