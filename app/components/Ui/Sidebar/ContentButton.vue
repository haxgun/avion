<script setup lang="ts">
  const props = defineProps<{
    icon: object;
    count: number;
    label: string;
  }>();
</script>

<template>
  <div
    class="group flex w-full cursor-pointer flex-row items-center justify-between rounded-sm bg-transparent px-4 py-2 text-left transition-colors hover:bg-[#F3F6FA]"
  >
    <div class="flex h-5 flex-row items-center gap-4">
      <component :is="props.icon" :size="16" />
      {{ $t(props.label) }}
    </div>
    <span
      v-if="props.count > 0"
      class="min-w-5 rounded-sm bg-[#f2f4f7] px-[6px] text-center text-xs font-medium leading-5 text-[#a0a5ab] transition-colors group-hover:bg-[#E7EBF0] group-hover:text-[#8D9196]"
      >{{ props.count }}</span
    >
  </div>
</template>
