<template>
  <section
    class="bg-paper relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-20 lg:px-16 lg:py-24"
  >
    <HeroGlowSpheres />

    <div class="relative z-10 mx-auto flex flex-col gap-8 lg:gap-10">
      <div class="flex flex-col items-center gap-4 lg:gap-6">
        <div
          class="text-ink-dim flex-wrap items-center justify-center gap-3 text-center font-sans text-xl leading-10
            text-pretty lg:flex lg:text-2xl lg:leading-tight"
        >
          <template v-if="isLg">
            <span>{{ $t('hero.greeting') }}</span>
            <span class="group inline-block" aria-hidden="true">
              <img
                src="/avatar.jpg"
                class="transition-size size-7.5 rounded-full object-cover duration-300 group-hover:size-17
                  group-hover:-translate-y-6"
                alt="Avatar"
              />
            </span>
            <span class="relative">
              {{ $t('hero.introBefore')
              }}<span class="hero-title-role inline bg-no-repeat">{{ $t('hero.introRole') }}</span>
              <img src="/hero-cursor.png" width="85" height="55" class="absolute top-1/4 -right-24" alt="Design" />
            </span>
          </template>
          <template v-else>
            <span class="whitespace-nowrap">
              I'm
              <span class="mx-0.5 inline-block align-middle" aria-hidden="true">
                <img src="/avatar.jpg" class="size-7.5 rounded-full object-cover align-middle" alt="" />
              </span>
              Alex and
            </span>
            <br />
            as a Senior Product Designer
          </template>
        </div>

        <h1 class="text-ink-dim max-w-253 text-center font-sans text-4xl leading-tight font-bold lg:text-6xl">
          {{ $t('hero.titleLine1') }} <br class="hidden lg:block" />
          {{ $t('hero.titleLine2') }}
        </h1>
      </div>

      <div class="flex w-full flex-wrap justify-center gap-5">
        <Button class="flex-1 sm:flex-none" as-child>
          <a href="/Matsko_Aleksei_Product_Designer.pdf" target="_blank">{{ $t('hero.ctaDownload') }}</a>
        </Button>
        <Button class="flex-1 sm:flex-none" variant="accent" as-child>
          <a href="#cases" @click.prevent="scrollToCases">{{ $t('hero.ctaView') }}</a>
        </Button>
      </div>
    </div>

    <img v-if="!isLg" src="/hero-cursor.png" width="85" height="55" class="absolute right-4 bottom-20" alt="Design" />
  </section>
</template>

<script setup lang="ts">
import HeroGlowSpheres from '@/components/effects/HeroGlowSpheres.vue'
import { Button } from '@/components/ui'
import { useScreen } from '@/lib/screen'

const { isLg } = useScreen()

const scrollToCases = () => {
  document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero-title-role {
  position: relative;
}

.hero-title-role::before {
  content: '';
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 50px;
  background-image: url('/hero-title-decor.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}
</style>
