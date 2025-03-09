<script setup lang="ts">
  import SidebarContent from "@/components/Ui/Sidebar/SidebarContent.vue";
  import SidebarHeader from "@/components/Ui/Sidebar/SidebarHeader.vue";
  import { CalendarDate, CheckSquareBroken, HomeSmile } from "untitledui-js/vue";
</script>

<template>
  <div
    class="fixed bottom-2 left-2 top-2 flex w-full max-w-[22rem] flex-col gap-7 rounded-[2rem] bg-[#FAFBFB]/80 p-8 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.01)] backdrop-blur-xl"
  >
    <SidebarHeader />
    <SidebarContent>
      <div
        class="flex w-full cursor-pointer flex-row items-center justify-between rounded-sm bg-transparent px-4 py-2 text-left transition-colors hover:bg-[#F3F6FA]"
      >
        <div class="flex h-5 flex-row items-center gap-4">
          <HomeSmile :size="16" />
          Home
        </div>
        <span class="rounded-sm bg-[#f2f4f7] px-[6px] text-xs font-medium leading-5 text-[#a0a5ab]"
          >2</span
        >
      </div>
      <div
        class="flex w-full cursor-pointer flex-row items-center justify-between rounded-sm bg-transparent px-4 py-2 text-left transition-colors hover:bg-[#F3F6FA]"
      >
        <div class="flex h-5 flex-row items-center gap-4">
          <CheckSquareBroken :size="16" />
          Completed
        </div>
        <span class="rounded-sm bg-[#f2f4f7] px-[6px] text-xs font-medium leading-5 text-[#a0a5ab]"
          >7</span
        >
      </div>
      <div
        class="flex w-full cursor-pointer flex-row items-center justify-between rounded-sm bg-transparent px-4 py-2 text-left transition-colors hover:bg-[#F3F6FA]"
      >
        <div class="flex h-5 flex-row items-center gap-4">
          <CalendarDate :size="16" />
          Today
        </div>
        <span class="rounded-sm bg-[#f2f4f7] px-[6px] text-xs font-medium leading-5 text-[#a0a5ab]"
          >0</span
        >
      </div>
    </SidebarContent>
  </div>
</template>
