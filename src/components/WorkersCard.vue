<template>
  <div class="mb-5">
    <div class=" flex flex-row items-center justify-center gap-4 sm:flex-col xs:flex-col sm:w-[300px] xs:w-[300px]">
      <img
        :src="(worker.img)"
        :alt="worker.name"
        class="w-[300px] h-[300px] rounded-md object-cover xs:h-[250px]"
      >
      <div class="flex flex-col ">
        <p class="font-bold">
          <span class="font-normal mr-2">Name:</span>   {{ worker.name }}
        </p>
        <p class="my-4 font-semibold ">
          <span class="font-normal mr-2">Profession:</span>  {{ worker.profession }}
        </p>
        <p class="italic font-semibold sm:max-w-[350px] xs:max-w-[300px]"><span class="font-normal mr-2 not-italic">About worker:</span>{{ worker.description }}</p>
      </div>
    </div>
  </div>
</template>
    
<script setup>

defineProps({
  worker: {
    type: Object,
    default: ()=>({})
  }
});
</script>
