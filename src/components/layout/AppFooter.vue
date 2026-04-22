<template>
  <footer class="text-ink w-full font-sans">
    <section id="contacts" class="flex flex-col items-center justify-center gap-5 px-4 py-20 text-center lg:py-30">
      <div class="flex flex-col items-center gap-3">
        <h2 class="text-ink-dim lg:text-11 text-3xl font-bold lg:leading-tight">
          {{ $t('footerCta.title') }}
        </h2>
        <p class="text-ink-dim max-w-112.5 text-base leading-6">
          {{ $t('footerCta.description') }}
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
        <Button as-child>
          <a href="https://linkedin.com" target="_blank">{{ $t('footerCta.linkedin') }}</a>
        </Button>
        <Button as-child>
          <a target="_blank">{{ $t('footerCta.behance') }}</a>
        </Button>
        <Button as-child>
          <a href="https://t.me/" target="_blank">{{ $t('footerCta.telegram') }}</a>
        </Button>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui'
</script>
