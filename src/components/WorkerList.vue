<template>
  <div
    class="wrapper px-4 max-w-4xl w-full h-full flex flex-col items-start justify-start gap-8
        lg:flex  lg:items-center lg:justify-center 
        md:flex  md:items-center md:justify-center
        sm:flex  sm:items-center sm:justify-center
        xs:flex  xs:items-center xs:justify-center"
  >
    <WorkersCard
      v-for="singleWorker in workerData"
      :key="singleWorker.id"
      :worker="singleWorker"
    />
  </div>
</template>
  
<script setup>
import WorkersCard from './WorkersCard.vue';
  
  
defineProps({
  workerData: {
    type: Array,
    default: ()=>([])
  }
});
</script>
  
  
