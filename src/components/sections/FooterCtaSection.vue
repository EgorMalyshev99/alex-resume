<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
</script>

<template>
  <section
    id="contacts"
    class="flex flex-col items-center justify-center gap-5 px-4 py-20 text-center lg:py-[120px]"
    data-figma-node="1:474"
  >
    <div class="flex flex-col items-center gap-3">
      <h2 class="font-sans text-3xl font-bold text-ink-dim lg:text-[44px] lg:leading-tight">
        {{ $t('footerCta.title') }}
      </h2>
      <p class="max-w-[450px] text-base leading-6 text-ink-dim">
        {{ $t('footerCta.description') }}
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
      <AppButton href="https://linkedin.com" external>{{ $t('footerCta.linkedin') }}</AppButton>
      <AppButton href="https://behance.net" external>{{ $t('footerCta.behance') }}</AppButton>
      <AppButton href="https://t.me/" external>{{ $t('footerCta.telegram') }}</AppButton>
    </div>
  </section>
</template>
