<script lang="ts" setup>
  import { AlignLeft01 } from "untitledui-js/vue";

  defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="flex flex-row items-center justify-between px-4">
    <NuxtImg src="/logo.svg" width="73" height="20" fetchpriority="high" />
    <button @click="emit('toggle')">
      <AlignLeft01 class="text-gray-500 transition-colors hover:text-gray-700" :size="16" />
    </button>
  </div>
</template>
