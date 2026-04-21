<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="w-full py-8 text-center text-sm text-ink-dim">
    <div class="container mx-auto px-4 lg:px-6">
      <p>{{ $t('footer.copyright', { year }) }}</p>
    </div>
  </footer>
</template>
