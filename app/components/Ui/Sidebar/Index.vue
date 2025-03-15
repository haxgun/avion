<script setup lang="ts">
  import { SidebarData } from "@/data/App/Sidebar.data";
  import Content from "~/components/Ui/Sidebar/Content.vue";
  import ContentButton from "~/components/Ui/Sidebar/ContentButton.vue";
  import Header from "~/components/Ui/Sidebar/Header.vue";
  import { AlignRight01 } from "untitledui-js/vue";

  const isOpen = ref(true);
  const sidebarState = useLocalStorage("sidebarState", isOpen.value);

  function toggleSidebar() {
    isOpen.value = !isOpen.value;
    sidebarState.value = isOpen.value;
  }
</script>

<template>
  <Transition name="sidebar" mode="out-in">
    <div
      v-if="sidebarState"
      class="fixed bottom-2 left-2 top-2 flex w-full max-w-[22rem] flex-col gap-7 rounded-[2rem] bg-[#FAFBFB]/80 p-8 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.01)] backdrop-blur-xl"
    >
      <Header :is-open="isOpen" @toggle="toggleSidebar" />
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
    <div
      v-else
      @click="toggleSidebar"
      class="fixed left-7 top-7 flex cursor-pointer items-center justify-center rounded-lg bg-[#e0e3e6] p-3"
    >
      <AlignRight01 :size="16" />
    </div>
  </Transition>
</template>

<style scoped>
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition:
      opacity 0.1s linear,
      transform 0.1s linear;
  }

  .sidebar-enter-from,
  .sidebar-leave-to {
    opacity: 0;
    transform-origin: left 0px;
  }

  .sidebar-enter-to,
  .sidebar-leave-from {
    opacity: 1;
    transform-origin: left 0px;
  }
</style>
