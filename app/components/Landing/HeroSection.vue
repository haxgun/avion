<script lang="ts" setup>
  import { Play, Stars02 } from "untitledui-js/vue";
</script>

<template>
  <div class="flex h-[55dvh] flex-col items-center justify-center gap-8">
    <span
      class="flex flex-row items-center justify-center gap-2 rounded-full border border-white/10 bg-lightblue/70 px-4 py-1 text-xs font-medium text-white transition-all hover:bg-lightblue/80"
    >
      <Stars02 :size="12" color="#fff" />
      {{ $t("landing.hero.popup") }}
    </span>
    <h1 class="whitespace-pre-line text-center text-6xl font-black leading-[1]">
      {{ $t("landing.hero.title.first") }}
      <span class="text-[#008fff]">{{ $t("landing.hero.title.smart") }}</span>
      {{ $t("landing.hero.title.second") }}
    </h1>
    <h4 class="whitespace-pre-line text-center text-base font-medium text-[#737373]">
      {{ $t("landing.hero.description") }}
    </h4>
    <div class="flex flex-row gap-3">
      <UiButton>
        <Play :size="16" />
        {{ $t("landing.hero.buttons.watch") }}
      </UiButton>
      <UiButton variant="blue"
        ><NuxtLink to="/registration">{{ $t("landing.hero.buttons.start") }}</NuxtLink></UiButton
      >
    </div>
  </div>
</template>
