<template>
  <Spinner v-if="spinner" />
  <main
    v-else
    class="mt-20 "
  >
    <div class="flex w-full items-center justify-center">
      <div class="flex w-full items-center justify-center  sm:gap-2 xs:gap-2 sm:flex-col xs:flex-col">
        <div class="w-[40%] h-1/3 flex items-center justify-center sm:justify-center xs:justify-center sm:w-[300px] sm:h-full xs:w-[300px] xs:h-full">
          <img
            class="w-[50%] h-1/3 sm:w-[300px] sm:h-[300px] xs:w-[150px] xs:h-[300px]"
            :src="wine.img"
            :alt="wine.name"
          >
        </div>
        <div class="w-full px-2 sm:text-center sm:flex sm:flex-col sm:items-center sm:justify-center xs:flex xs:flex-col xs:items-center xs:justify-center xs:text-center">
          <h2 class="text-2xl font-semibold dark:text-text-color mt-20 sm:mt-2 xs:mt-2">
            {{ wine.name }}
          </h2>
          <div class="flex  mt-5 dark:text-text-color sm:items-center sm:justify-center xs:items-center xs:justify-center xs:mt-3">
            <span class="font-semibold">Country: </span>
            <span class=" ml-2 italic">{{ wine.country }}</span>
          </div>
          <div class="flex  mt-5 dark:text-text-color  sm:items-center sm:justify-center xs:items-center xs:justify-center xs:mt-3">
            <span class="font-semibold">Type: </span>
            <span class="ml-2 italic">{{ wine.type }}</span>
          </div>
          <div class="flex  mt-5 dark:text-text-color  sm:items-center sm:justify-center xs:items-center xs:justify-center xs:mt-3">
            <p>
              <span class="font-semibold">Taste: </span>
              <span class="ml-2 italic">{{ wine.color }}</span>
            </p>
          </div>
          <div class="mt-5 dark:text-text-color xs:mt-3">
            <p class="font-semibold ">
              Wine description:
            </p>
            <p class="mt-5 italic sm:max-w-[600px] xs:max-w-none xs:mt-3">
              {{ wine.description }}
            </p>
            <p class="text-end mt-5 flex flex-col justify-end items-end pr-4">
              <span class="font-semibold">Price:</span>  {{ wine.price }}₴
              <Button
                btn-type="add"
                class="dark:text-[#000] w-[300px] sm:w-[200px] xs:w-[175px]"
                @click="WineStore.addToCart(wine)"
              >
                Add to cart
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import Spinner from '../components/Spinner.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useWineStore } from '../stores/WineStore.js';
import Button from '../components/Button.vue';

const WineStore = useWineStore();

const wine = ref({});
const route = useRoute();
const spinner = ref(false);


const loadInfoAboutMovie = async () =>{
  try {
    spinner.value = true;
    const resp = await fetch(
      `https://my-json-server.typicode.com/TARASISHE/winedb/allWines/${route.params.id}`
    );
    const data = await resp.json();
    wine.value = data;
    console.log( wine.value);

  } catch (error){
    alert(`Error:${error}`);
  } finally {
    spinner.value = false;
  }
  
};
loadInfoAboutMovie();

</script>


<style scoped>
.wrapper{
    margin: 0 auto;
}
.class{
    width: fit-content;
}
</style>
