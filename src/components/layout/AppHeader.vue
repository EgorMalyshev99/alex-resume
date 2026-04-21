<script setup lang="ts">
import NavLink from '@/components/ui/NavLink.vue'
import LocaleSwitcher from '@/components/ui/LocaleSwitcher.vue'
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white/20 backdrop-blur-[6px]" data-figma-node="1:483">
    <div class="container mx-auto flex items-center px-4 py-4 lg:px-20 lg:py-5">
      <div class="flex flex-1 items-center justify-between">
        <nav class="flex items-center gap-0">
          <NavLink href="https://linkedin.com" external>{{ $t('nav.linkedin') }}</NavLink>
          <NavLink href="https://behance.net" external>{{ $t('nav.behance') }}</NavLink>
          <NavLink href="#contacts">{{ $t('nav.contacts') }}</NavLink>
        </nav>
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>
