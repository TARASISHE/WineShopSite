<template>
  <router-link :to="`/detail/${popularWines.id}`">
    <div class="flex flex-col items-center justify-center bg-[#dddddd] h-[270px] p-2 drop-shadow-2xl rounded-md hover:scale-105 ">
      <img
        :src="popularWines.img"
        :alt="popularWines.name"
        class="w-40 h-40"
      >
      <p class="text-md max-w-[150px] text-center">
        {{ popularWines.name }}
      </p>
      <p class="italic">{{ popularWines.price }}₴</p>
    </div>
  </router-link>
</template>

<script setup>

defineProps({
  popularWines: {
    type: Object,
    default: ()=>{}
  }
});
</script>
