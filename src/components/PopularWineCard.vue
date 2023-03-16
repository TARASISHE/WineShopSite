<template>
  <router-link :to="`/detail/${popularWines.id}`">
    <div class="flex flex-col items-center justify-center bg-[#dddddd] h-[270px] p-2 drop-shadow-2xl rounded-md hover:scale-105 sm:h-[450px] xs:h-[300px] sm:w-[250px] xs:w-[250px]">
      <img
        :src="popularWines.img"
        :alt="popularWines.name"
        class="max-w-fit w-40 h-40 sm:h-[70%] xs:h-[70%] sm:w-[140px] xs:w-[140px]"
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
    default: ()=>{}
  }
});
</script>


<style scoped>
img{
  max-width: fit-content;
  display: block;
}
</style>
