<script lang="ts" setup>
  import { vOnClickOutside } from "@vueuse/components";
  import { ChevronDown, CornerRightDown, Plus } from "untitledui-js/vue";

  const showCreateCategory = ref(false);
</script>

<template>
  <Transition mode="out-in">
    <div
      v-if="!showCreateCategory"
      @click="showCreateCategory = true"
      class="category-button group"
    >
      <div
        class="overflow-hidden rounded-sm bg-transparent p-[0.625rem] transition-all group-hover:bg-[#F2F4F7]"
      >
        <Plus :size="14" color="#27272B" />
      </div>
      <span> Create new task </span>
    </div>
    <div
      v-else
      v-on-click-outside="() => (showCreateCategory = false)"
      class="category-button justify-between"
    >
      <div class="flex flex-row items-center gap-2">
        <div class="flex gap-1 rounded-[7px] bg-[#f2f4f7] p-[10px]">
          <div class="h-3 w-3 rounded-full bg-lightblue"></div>
          <ChevronDown :size="14" color="#27272B" />
        </div>
        <input
          type="text"
          placeholder="Category name"
          class="bg-transparent font-medium outline-none"
        />
      </div>
      <button><CornerRightDown :size="16" color="#C4C7CA" /></button>
    </div>
  </Transition>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.1s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .category-button {
    @apply flex cursor-pointer flex-row items-center gap-2 px-1.5;
  }
</style>
