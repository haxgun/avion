<script lang="ts" setup>
  defineProps<{
    category: string;
    title: string;
    description: string;
    category_color: string;
    full_width: boolean;
  }>();
</script>

<template>
  <div
    class="relative overflow-hidden rounded-3xl bg-[#f8fafb] pb-[45%] shadow-[0rem_0.25rem_0.75rem_rgba(12,20,66,0.02),0rem_1.875rem_5rem_rgba(12,20,66,0.08)] ring-1 ring-[#e0e2e4]"
    :class="[full_width ? 'col-span-2' : '']"
  >
    <div class="absolute bottom-14 left-14 right-14 z-10 grid max-w-[60%] gap-4">
      <span class="text-sm font-medium text-[--category_color]">{{ $t(category) }} </span>
      <h1 class="text-2xl font-bold">{{ $t(title) }}</h1>
      <p class="whitespace-pre-line text-base text-[#737373]">
        {{ $t(description) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
  * {
    --category_color: v-bind(category_color);
  }
</style>
