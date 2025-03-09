<script lang="ts" setup>
  useSeoMeta({
    title: "Avion",
    description: "To-do list.",
  });
</script>

<template>
  <div>
    <LandingHeroSection />
    <div class="flex flex-col gap-12">
      <LazyLandingPreviewSection />
      <LazyLandingFeaturesSection />
    </div>
  </div>
</template>
