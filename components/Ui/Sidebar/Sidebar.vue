<script setup lang="ts">
  import SidebarContent from "@/components/Ui/Sidebar/SidebarContent.vue";
  import SidebarHeader from "@/components/Ui/Sidebar/SidebarHeader.vue";
  import SidebarContentButton from "~/components/Ui/Sidebar/SidebarContentButton.vue";
  import { SidebarData } from "~/data/App/Sidebar.data";
</script>

<template>
  <div
    class="fixed bottom-2 left-2 top-2 flex w-full max-w-[22rem] flex-col gap-7 rounded-[2rem] bg-[#FAFBFB]/80 p-8 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.01)] backdrop-blur-xl"
  >
    <SidebarHeader />
    <SidebarContent>
      <SidebarContentButton
        v-for="data in SidebarData"
        :key="data.label"
        :icon="data.icon"
        :count="data.count"
        :label="data.label"
      />
    </SidebarContent>
  </div>
</template>
