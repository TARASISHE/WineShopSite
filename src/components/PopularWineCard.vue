<template>
  <router-link :to="`/detail/${popularWines.id}`">
    <div class="flex flex-col items-center justify-center bg-[#dddddd] h-[270px] p-2 drop-shadow-2xl rounded-md hover:scale-105 sm:h-[400px] xs:h-[350px] sm:w-[250px] xs:w-[175px]">
      <img
        :src="popularWines.img"
        :alt="popularWines.name"
        class="w-40 h-40 max-w-fit sm:h-3/4 xs:h-3/5 sm:w-[150px] xs:w-[75px]"
      >
      <p class="text-md max-w-[150px] text-center">
        {{ popularWines.name }}
      </p>
      <p class="italic py-2">
        {{ popularWines.price }}₴
      </p>
    </div>
  </router-link>
</template>

<script setup>

defineProps({
  popularWines: {
    type: Object,
    default: ()=>({})
  }
});
</script>


<style scoped>
img{
  max-width: fit-content;
  display: block;
}
</style>
