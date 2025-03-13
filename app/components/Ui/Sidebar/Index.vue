<script setup lang="ts">
  import { SidebarData } from "@/data/App/Sidebar.data";
  import Content from "~/components/Ui/Sidebar/Content.vue";
  import ContentButton from "~/components/Ui/Sidebar/ContentButton.vue";
  import Header from "~/components/Ui/Sidebar/Header.vue";
</script>

<template>
  <div
    class="fixed bottom-2 left-2 top-2 flex w-full max-w-[22rem] flex-col gap-7 rounded-[2rem] bg-[#FAFBFB]/80 p-8 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.01)] backdrop-blur-xl"
  >
    <Header />
    <Content>
      <ContentButton
        v-for="data in SidebarData"
        :key="data.label"
        :icon="data.icon"
        :count="data.count"
        :label="data.label"
      />
    </Content>
  </div>
</template>
