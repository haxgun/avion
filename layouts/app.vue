<script setup lang="ts">
  import Sidebar from "~/components/Ui/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex h-dvh w-full flex-col bg-[#F7F8FA] pl-[calc(22rem+8px)]">
    <div>
      <div
        class="translate-z-0 fixed left-[10%] top-0 h-80 w-2/5 -translate-y-[175%] rotate-1 rounded-b-[20px] rounded-t-[120px] opacity-30 shadow-[20px_200px_240px_rgb(0,20,255)]"
      ></div>
      <div
        class="translate-z-0 fixed left-auto right-[20%] top-0 h-80 w-2/5 -translate-y-[175%] rotate-[359deg] rounded-b-[20px] rounded-t-[120px] opacity-30 shadow-[20px_200px_240px_rgb(0,143,253)]"
      ></div>
      <div
        class="translate-z-0 fixed left-auto right-0 top-0 h-80 w-2/5 -translate-y-[175%] rotate-[21deg] rounded-b-[20px] rounded-t-[120px] opacity-30 shadow-[20px_200px_240px_rgb(0,217,255)]"
      ></div>
    </div>
    <Sidebar />
    <div class="relative mx-auto my-0 flex min-h-full max-w-2xl flex-col">
      <slot />
    </div>
  </div>
</template>
