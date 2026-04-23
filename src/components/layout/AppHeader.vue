<template>
  <header class="sticky top-0 z-50 w-full bg-white/20 backdrop-blur-[6px]" data-figma-node="1:483">
    <div class="container flex items-center py-4 lg:py-5">
      <div class="flex flex-1 items-center justify-between">
        <nav class="flex items-center gap-0">
          <NavLink href="https://www.linkedin.com/in/alexey-matsko-867862216/" external>
            {{ $t('nav.linkedin') }}
          </NavLink>
          <NavLink href="https://www.behance.net/smogrus64cf02" external>{{ $t('nav.behance') }}</NavLink>
          <NavLink href="#contacts">{{ $t('nav.contacts') }}</NavLink>
        </nav>
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LocaleSwitcher from '@/components/ui/LocaleSwitcher.vue'
import NavLink from '@/components/ui/NavLink.vue'
</script>
