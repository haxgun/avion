<script setup lang="ts">
  import { ChevronDown, Translate02 } from "untitledui-js/vue";

  const { locale, locales, setLocaleCookie, setLocale } = useI18n();

  const currentLang = computed(() => {
    return (
      (locales.value as Array<{ code: string; name: string }>).find(
        (lang) => lang.code === locale.value
      )?.name || "Unknown"
    );
  });
</script>

<template>
  <div class="flex w-full">
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <div
          class="flex w-56 cursor-pointer flex-row items-center justify-center gap-3 rounded-sm bg-neutral-100 p-2 text-sm transition-all hover:bg-neutral-200"
        >
          <Translate02 size="16" />
          {{ currentLang }}
          <ChevronDown size="16" class="ml-auto" />
        </div>
      </UiDropdownMenuTrigger>

      <UiDropdownMenuContent class="w-48">
        <UiDropdownMenuRadioGroup v-model="locale">
          <UiDropdownMenuRadioItem
            v-for="lang in locales"
            :key="lang.code"
            :value="lang.code"
            @select="
              () => {
                setLocaleCookie(lang.code);
                setLocale(lang.code);
              }
            "
          >
            {{ lang.name }}
          </UiDropdownMenuRadioItem>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>
