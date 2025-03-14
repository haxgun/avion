<script lang="ts" setup>
  import { vOnClickOutside } from "@vueuse/components";
  import { ChevronDown } from "untitledui-js/vue";
  import { ref } from "vue";

  const selectColor = ref("#008ffd");
  const selectMenu = ref(false);

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
  defineExpose({
    selectMenu,
  });
</script>

<template>
  <div class="relative">
    <button
      class="color-select-trigger relative flex items-center justify-center gap-1 overflow-hidden rounded-[7px] bg-[#f2f4f7] p-[10px] transition-all hover:ring-0 focus:scale-95"
      @click="selectMenu = !selectMenu"
    >
      <div class="h-3 w-3 rounded-full bg-[var(--selected-color)]" />
      <ChevronDown :size="14" color="#27272B" />
      <div
        class="absolute -left-7 top-0 h-10 w-10 rounded-full bg-[var(--selected-color)] opacity-50 blur-xl transition-colors"
      />
    </button>
    <Transition name="dropdown" mode="out-in">
      <div
        v-if="selectMenu"
        v-on-click-outside="
          (event) => {
            event.preventDefault();
            selectMenu = false;
          }
        "
        class="absolute left-0 top-10 flex w-72 flex-col gap-3 rounded-lg p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_30px_70px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
      >
        <span class="text-sm font-medium">Выберите цвет</span>
        <div class="box-border inline-flex flex-wrap gap-3">
          <div
            v-for="color in colors"
            :key="color"
            class="rounded-full p-1 transition-all hover:ring-2 hover:ring-neutral-300"
            :class="[selectColor === color ? 'ring-2 ring-neutral-300' : '']"
            @click="
              (event) => {
                event.stopPropagation();
                selectColor = color;
              }
            "
          >
            <div :style="{ backgroundColor: color }" class="h-4 w-4 rounded-full" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 0.1s linear,
      transform 0.1s linear;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform-origin: left top 0px;
    transform: scale(0.95);
  }

  .dropdown-enter-to,
  .dropdown-leave-from {
    opacity: 1;
    transform-origin: left top 0px;
    transform: scale(1);
  }

  .color-select-trigger {
    --selected-color: v-bind(selectColor);
  }
</style>
