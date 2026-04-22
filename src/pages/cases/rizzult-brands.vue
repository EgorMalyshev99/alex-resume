<template>
  <DefaultLayout>
    <div class="bg-paper">
      <CaseHeroSection :slug="slug" />
      <CaseBodySection :slug="slug" />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import CaseBodySection from '@/components/sections/CaseBodySection.vue'
import CaseHeroSection from '@/components/sections/CaseHeroSection.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const slug = 'rizzult-brands'
</script>
