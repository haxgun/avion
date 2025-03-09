<template>
  <div class="gap container grid grid-cols-2 grid-rows-2 gap-8">
    <FeaturesCard
      v-memo="feature"
      v-for="feature in features_data"
      :key="feature.title"
      :title="feature.title"
      :category="feature.category"
      :description="feature.description"
      :category_color="feature.category_color"
      :full_width="feature.full_width"
    />
  </div>
</template>
<script setup lang="ts">
  import FeaturesCard from "@/components/Landing/FeaturesCard.vue";
  import { Features } from "@/data/Featues.data";

  const features_data = Features;
</script>
