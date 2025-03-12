<script setup lang="ts">
  import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
  import { Check } from "untitledui-js/vue";

  const tasks = reactive([
    { id: 1, title: "Задача 1", completed: false },
    { id: 2, title: "Задача 2", completed: false },
    { id: 3, title: "Задача 3", completed: false },
  ]);

  const hasTasks = computed(() => tasks.some((task) => !task.completed));
</script>

<template>
  <Transition mode="out-in">
    <div
      v-if="!hasTasks"
      class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 font-semibold text-black/20"
    >
      <DotLottieVue
        style="height: 80px; width: 80px; fill: #27272b"
        autoplay
        src="/tasks_complete.lottie"
      />
      <span>{{ $t("app.content.noTasks") }}</span>
    </div>
    <div v-else class="flex flex-col gap-2 py-3">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="flex w-full items-center rounded-[8px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] first:rounded-b-[8px] first:rounded-t-[16px] last:rounded-b-[16px] last:rounded-t-[8px]"
      >
        <div class="flex h-11 w-11 items-center justify-center">
          <Transition mode="out-in">
            <div
              v-if="!task.completed"
              class="h-5 w-5 rounded-[6px] bg-[#e0e3e6]"
              @click="task.completed = !task.completed"
            />
            <div
              v-else
              class="flex h-5 w-5 items-center justify-center rounded-[6px] bg-[#27272B] text-white"
              @click="task.completed = !task.completed"
            >
              <Check :size="14" />
            </div>
          </Transition>
        </div>
        <span class="text-sm" :class="{ 'line-through': task.completed }">{{ task.title }}</span>
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
