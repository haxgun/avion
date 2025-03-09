<script lang="ts" setup>
  import { Plus } from "untitledui-js/vue";
</script>

<template>
  <div class="flex flex-col gap-2 text-sm font-medium">
    <slot />
    <div class="group flex cursor-pointer flex-row items-center gap-2 px-[6px]">
      <div
        class="overflow-hidden rounded-sm bg-transparent p-[0.625rem] transition-all group-hover:bg-[#F2F4F7]"
      >
        <Plus :size="14" color="#27272B" />
      </div>
      <span> Create new task </span>
    </div>
  </div>
</template>
