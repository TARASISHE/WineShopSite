<template>
  <div>
    <router-link :to="`/detail/${catologueWine.id}`">
      <div class="flex flex-col items-center justify-center bg-[#dddddd] h-[300px] w-[250px] p-2 drop-shadow-2xl rounded-md hover:scale-105 ">
        <img
          :src="(catologueWine.img)"
          :alt="catologueWine.name"
          class="w-40 h-40"
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
