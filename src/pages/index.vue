<template>
  <DefaultLayout>
    <SiteHero />

    <div class="container">
      <div class="py-12 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 lg:py-25">
        <SiteSidebar />
        <div class="flex flex-col">
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
import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import CasesSection from '@/components/sections/CasesSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ExpertiseSection from '@/components/sections/ExpertiseSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import SiteHero from '@/components/sections/SiteHero.vue'
import SiteSidebar from '@/components/sections/SiteSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
