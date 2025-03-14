<script setup lang="ts">
  const sidebarState = useLocalStorage("sidebarState", true);
</script>

<template>
  <div
    class="ease-cubic-in-out flex h-dvh w-full flex-col bg-[#F7F8FA] transition-[padding] duration-200"
    :class="sidebarState ? 'pl-[calc(22rem+8px)]' : ''"
  >
    <LazyUiHighlights />
    <UiSidebar />
    <div class="relative mx-auto my-0 flex min-h-full w-full max-w-2xl flex-col">
      <slot />
    </div>
  </div>
</template>
