<script setup lang="ts">
  import Sidebar from "@/components/Ui/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex h-dvh w-full flex-col bg-[#F7F8FA] pl-[calc(22rem+8px)]">
    <LazyUiHighlights />
    <Sidebar />
    <div class="relative mx-auto my-0 flex min-h-full w-full max-w-2xl flex-col">
      <slot />
    </div>
  </div>
</template>
