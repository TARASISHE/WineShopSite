<template>
  <h1 class="mt-10 text-center text-2xl font-semibold dark:text-text-color">
    Popular products
  </h1>
  <div class="flex items-center justify-center gap-10 mt-4 flex-wrap">
    <PopularWineCard
      v-for="popularWine in wineCards"
      :key="popularWine.id"
      :popular-wines="popularWine"
    />
  </div>
  <div class="flex items-center justify-center mt-8  ">
    <router-link to="/catologue" class="p-4 bg-[#dddddd] rounded-md hover:opacity-70 hover:font-semibold transition-all duration-100 ">
      Go to catologue
    </router-link>
  </div>
</template>

<script setup>
import PopularWineCard from './PopularWineCard.vue';

defineProps({
  wineCards: {
    type: Array,
    default: ()=>([])
  }
});
</script>
