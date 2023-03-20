<template>
  <div class="flex flex-col items-center justify-center bg-[#dddddd] h-[270px] p-2 drop-shadow-2xl rounded-md hover:scale-105">
    <img
      :src="(worker.img)"
      alt="Best Worker img"
      class="w-40 h-40 rounded-lg"
    >
    <p class="text-md mt-2 text-center font-semibold">
      {{ worker.name }}
    </p>
    <p>
      {{ worker.profession }}
    </p>
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
  
