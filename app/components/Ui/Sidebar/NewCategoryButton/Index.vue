<script lang="ts" setup>
  import { vOnClickOutside } from "@vueuse/components";
  import { CornerRightDown, Plus } from "untitledui-js/vue";

  const showCreateCategory = ref(false);
</script>

<template>
  <Transition mode="out-in">
    <div
      v-if="!showCreateCategory"
      class="category-button group"
      @click="showCreateCategory = true"
    >
      <div
        class="overflow-hidden rounded-sm bg-transparent p-[0.625rem] transition-all group-hover:bg-[#F2F4F7]"
      >
        <Plus :size="14" color="#27272B" />
      </div>
      <span> {{ $t("app.sidebar.create") }} </span>
    </div>
    <div
      v-else
      class="category-button justify-between"
      v-on-click-outside.self="() => (showCreateCategory = false)"
    >
      <div class="flex flex-row items-center gap-2">
        <UiSidebarNewCategoryButtonColorSelector />
        <input
          type="text"
          :placeholder="$t('app.sidebar.newList')"
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
