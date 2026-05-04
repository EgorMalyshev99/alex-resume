<template>
  <footer class="text-ink w-full font-sans">
    <section id="contacts" class="flex flex-col items-center justify-center gap-5 px-4 py-8 text-center lg:py-30">
      <div class="flex flex-col items-center gap-3">
        <h2 class="text-ink-dim text-4xl font-bold lg:text-5xl">
          {{ $t('footerCta.title') }}
        </h2>
        <p class="max-w-md text-base">
          {{ $t('footerCta.description') }}
        </p>
      </div>

      <div class="flex justify-center">
        <a class="text-accent text-2xl font-medium lg:text-3xl" href="mailto:matskosmog@gmail.com"
          >matskosmog@gmail.com</a
        >
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
        <Button variant="ghost" as-child>
          <a href="https://www.linkedin.com/in/alexey-matsko-867862216/" target="_blank">
            {{ $t('footerCta.linkedin') }}
          </a>
        </Button>
        <Button variant="ghost" as-child>
          <a href="https://www.behance.net/smogrus64cf02" target="_blank">{{ $t('footerCta.behance') }}</a>
        </Button>
        <Button variant="ghost" as-child>
          <a href="https://t.me/Smogli" target="_blank">{{ $t('footerCta.telegram') }}</a>
        </Button>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui'
</script>
