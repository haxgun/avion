<script lang="ts" setup>
  import { FooterData, FooterNavData, FooterSocialData } from "@/data/FooterNav.data";
  import { openLink } from "@/utils";

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
        <NuxtImg src="/logo.svg" width="118" height="38" fetchpriority="high" />
        <span class="text-base font-medium">{{ $t("landing.footer.description") }}</span>
        <LazyUiLanguageSwitcher />
      </div>
      <div class="flex flex-row gap-9">
        <div v-for="nav in footerNavData" :key="nav.title" class="flex w-40 flex-row gap-9">
          <ul class="flex flex-col leading-[2]">
            <li class="text-base font-medium leading-[2]">{{ $t(nav.title) }}</li>
            <li v-for="item in nav.items" :key="item">
              <NuxtLink
                :to="item.link"
                class="text-base font-medium text-[#737373] hover:text-[#4d4d4d]"
              >
                {{ $t(item.title) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <UiButton
            v-memo="social"
            size="icon"
            variant="icon"
            v-for="social in footerSocials"
            :key="social.title"
            @click="openLink(social.link)"
            class="social-button"
          >
            <component
              :is="social.icon"
              :size="16"
              :style="{ '--social-hover-color': social.color }"
            />
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
            {{ $t(item.title) }}
          </NuxtLink>
        </li>
      </ul>
      <span>{{ $t("landing.footer.under.made") }} </span>
      <span>{{ $t("landing.footer.under.copy") }}</span>
    </div>
  </footer>
</template>

<style>
  .social-button svg {
    fill: #27272b;
    transition: fill 0.2s;
  }

  .social-button:hover svg {
    fill: var(--social-hover-color);
  }
</style>
