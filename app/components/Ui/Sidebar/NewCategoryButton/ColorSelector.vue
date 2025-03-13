<script lang="ts" setup>
  import { ChevronDown } from "untitledui-js/vue";

  const selectColor = ref("#008ffd");

  const colors = [
    "#FF0000",
    "#FF6F61",
    "#FF8C42",
    "#FFA500",
    "#FFCC80",
    "#FFFF00",
    "#C8E6C9",
    "#00FF00",
    "#69F0AE",
    "#00FFFF",
    "#008ffd",
    "#0000FF",
    "#9575CD",
    "#800080",
    "#FFC0CB",
    "#E1BEE7",
    "#A52A2A",
    "#FF8A65",
    "#FFD700",
    "#FFEE58",
    "#C0C0C0",
  ];
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <button
        class="color-select-trigger relative flex items-center justify-center gap-1 overflow-hidden rounded-[7px] bg-[#f2f4f7] p-[10px] transition-all hover:ring-0 focus:scale-95"
      >
        <div class="h-3 w-3 rounded-full bg-[var(--selected-color)]" />
        <ChevronDown :size="14" color="#27272B" />
        <div
          class="absolute -left-7 top-0 h-10 w-10 rounded-full bg-[var(--selected-color)] opacity-50 blur-2xl transition-colors"
        />
      </button>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="start" class="flex max-w-72 flex-col gap-1 rounded-lg p-5">
      <span class="px-[6px] text-sm font-medium">Выберите цвет</span>
      <div class="box-border inline-flex flex-wrap">
        <div v-for="color in colors" @click="selectColor = color" :key="color" class="p-[6px]">
          <div
            :style="{ backgroundColor: color }"
            class="h-[22px] w-[22px] rounded-full border-4 border-white transition-all hover:ring-2 hover:ring-neutral-300"
            :class="[selectColor === color ? 'ring-2 ring-neutral-300' : '']"
          />
        </div>
      </div>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<style scoped>
  .color-select-trigger {
    --selected-color: v-bind(selectColor);
  }
</style>
