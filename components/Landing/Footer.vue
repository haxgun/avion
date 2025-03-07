<script lang="ts" setup>
  import { FooterData, FooterNavData, FooterSocialData } from "@/data/FooterNav.data";
  import { openLink } from "~/utils";

  const footerNavData = FooterNavData;
  const footerData = FooterData;
  const footerSocials = FooterSocialData;

  const isNotLast = (index: number) => {
    return index < footerData.length - 1;
  };
</script>

<template>
  <footer class="container mt-28 flex flex-col gap-10">
    <div class="flex w-full flex-row justify-between">
      <div class="flex max-w-[18rem] flex-col gap-4">
        <NuxtImg src="/logo.svg" width="118" height="38" />
        <span class="text-base font-medium"
          >Create your list of dreams and start realizing them today!</span
        >
      </div>
      <div class="flex flex-row gap-9">
        <div
          v-memo="nav"
          v-for="nav in footerNavData"
          :key="nav.title"
          class="flex w-40 flex-row gap-9"
        >
          <ul class="flex flex-col leading-[2]">
            <li class="text-base font-medium leading-[2]">{{ nav.title }}</li>
            <li v-for="item in nav.items" :key="item">
              <NuxtLink
                :to="item.link"
                class="text-base font-medium text-[#737373] hover:text-[#4d4d4d]"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <UiButton
            v-memo="social"
            size="icon"
            variant="icon"
            v-for="social in FooterSocialData"
            :key="social.title"
            @click="openLink(social.link)"
          >
            <component :is="social.icon" :size="16" color="#000" />
          </UiButton>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-4 py-4 text-xs">
      <ul class="flex flex-row gap-2 font-medium">
        <li
          v-for="(item, index) in footerData"
          :key="item.title"
          :class="[isNotLast(index) ? `after:ms-[0.5rem] after:content-['·']` : '']"
        >
          <NuxtLink :to="item.link" class="hover:underline">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <span> Made with ❤️ in Russia </span>
      <span>Copyright © 2025 <span class="text-[#0084ff]">Avion</span></span>
    </div>
  </footer>
</template>
