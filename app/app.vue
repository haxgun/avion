<script setup lang="ts">
  import { ConfigProvider } from "radix-vue";

  const useIdFunction = () => useId();
</script>

<template>
  <div>
    <ConfigProvider :use-id="useIdFunction">
      <ClientOnly>
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <UiVueSonner />
      </ClientOnly>
    </ConfigProvider>
  </div>
</template>
