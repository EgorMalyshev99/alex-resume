<template>
  <DefaultLayout>
    <SiteHero />

    <div
      class="bg-paper relative z-10 rounded-t-3xl transition-[top] duration-200 ease-in-out"
      :class="isScrolled ? '-top-10' : 'top-0'"
    >
      <div class="container py-12 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 lg:py-25">
        <SiteSidebar />
        <div class="flex max-w-200 flex-col">
          <CasesSection />
          <AboutMeSection />
          <ProcessSection />
          <ExpertiseSection />
          <ExperienceSection />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import CasesSection from '@/components/sections/CasesSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ExpertiseSection from '@/components/sections/ExpertiseSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import SiteHero from '@/components/sections/SiteHero.vue'
import SiteSidebar from '@/components/sections/SiteSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const SCROLL_TOP_EPS = 8

const isScrolled = ref(false)

const updateScroll = () => {
  isScrolled.value = window.scrollY > SCROLL_TOP_EPS
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
