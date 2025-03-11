<script setup lang="ts">
  definePageMeta({
    layout: "app",
  });

  useSeoMeta({
    title: "Avion - Home",
    description: "To-do list.",
  });
</script>

<template>
  <LazyAppContentHeader />
  <LazyAppContentInput />
  <LazyAppContentTasks />
</template>
