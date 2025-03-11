<script setup lang="ts">
  defineProps<{
    keys: [string, string];
  }>();
</script>

<template>
  <div class="flex flex-row gap-[1px]">
    <kbd
      v-for="key in keys"
      :key="key"
      class="pointer-events-none inline-flex h-5 min-h-[16px] shrink-0 select-none items-center justify-center gap-1 rounded-[6px] border border-border bg-[#D4D7DA] px-[6px] font-sans text-[10px] font-semibold uppercase text-[#616870]"
    >
      {{ key }}
    </kbd>
  </div>
</template>
