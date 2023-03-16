<template>
  <div>
    <router-link :to="`/detail/${catologueWine.id}`">
      <div class=" flex flex-col items-center justify-center mb-3 bg-[#dddddd] h-[300px] w-[250px] p-2 drop-shadow-2xl rounded-md hover:scale-105 sm:h-[400px] xs:h-[350px] sm:w-[250px] xs:w-[250px]">
        <img
          :src="(catologueWine.img)"
          :alt="catologueWine.name"
          class="w-40 h-40 max-w-fit sm:h-[70%] xs:h-[70%] sm:w-[140px] xs:w-[140px]"
        >
        <p class="text-md max-w-[150px] text-center mt-2">
          {{ catologueWine.name }}
        </p>
        <p class="italic">
          {{ catologueWine.price }}₴
        </p>
      </div>
    </router-link>
    <Button
      btn-type="add"
      @click="WineStore.addToCart(catologueWine)"
    >
      Add to cart
    </Button>
  </div>
</template>
  
<script setup>

import { useWineStore } from '../stores/WineStore';
import Button from './Button.vue'; 

const WineStore = useWineStore();

defineProps({
  catologueWine: {
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

