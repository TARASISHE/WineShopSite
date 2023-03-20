<template>
  <h1 class="mt-10 text-center text-2xl font-semibold px-4 dark:text-text-color sm:text-xl xs:text-lg sm:mt-5 xs:mt-5 ">
    Best Workers of the Month
  </h1>
  <div class="flex items-center justify-center gap-4 mt-4 flex-wrap px-4">
    <BestWorkerCard
      v-for="worker in bestWorkersData"
      :key="worker.id"
      :worker="worker"
    />
  </div>
  <div class="flex items-center justify-center mt-8  ">
    <router-link
      to="/workers"
      class="p-4 bg-[#dddddd] rounded-md hover:opacity-70 hover:font-semibold transition-all duration-100 "
    >
      Go to worker`s page
    </router-link>
  </div>
</template>
  
<script setup>
import BestWorkerCard from './BestWorkerCard.vue';
  
defineProps({
  bestWorkersData: {
    type: Array,
    default: ()=>([])
  }
});
</script>
  
