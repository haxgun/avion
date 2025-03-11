<script setup lang="ts">
  import { ref } from "vue";

  const tasks = ref([
    { id: 1, title: "Задача 1", completed: false },
    { id: 2, title: "Задача 2", completed: false },
    { id: 3, title: "Задача 3", completed: false },
  ]);

  const hasTasks = computed(() => tasks.value.some((task) => !task.completed));
</script>

<template>
  <Transition mode="out-in">
    <div v-if="!hasTasks" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <span class="text-black/20">Задачи завершены</span>
    </div>
    <div v-else class="flex flex-col gap-3 py-3">
      <div
        class="flex h-[44px] w-full items-center gap-2 rounded-[8px] bg-white px-5 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] first:rounded-b-[8px] first:rounded-t-[16px] last:rounded-b-[16px] last:rounded-t-[8px]"
        v-for="task in tasks"
        :key="task.id"
      >
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'text-gray-500': task.completed }">{{ task.title }}</span>
      </div>
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
</style>
