<template>
  <Spinner v-if="spinner" />
  <main
    v-else
    class="mt-20 "
  >
    <div class="">
      <div class="flex items-center justify-start gap-20">
        <div class="w-1/3 h-1/3 flex items-center justify-end">
          <img
            class="w-1/3 h-1/3"
            :src="wine.img"
            :alt="wine.name"
          >
        </div>
        <div>
          <h2 class="text-2xl font-semibold dark:text-text-color">
            {{ wine.name }}
          </h2>
          <div class="flex  mt-5 dark:text-text-color">
            <span class="font-semibold">Country: </span>
            <span class=" ml-2 italic">{{ wine.country }}</span>
          </div>
          <div class="flex  mt-5 dark:text-text-color">
            <span class="font-semibold">Type: </span>
            <span class="ml-2 italic">{{ wine.type }}</span>
          </div>
          <div class="flex  mt-5 dark:text-text-color">
            <p>
              <span class="font-semibold">Taste: </span>
              <span class="ml-2 italic">{{ wine.color }}</span>
            </p>
          </div>
          <div class="mt-5 dark:text-text-color">
            <p class="font-semibold ">
              Wine description:
            </p>
            <p class="max-w-xl mt-5 italic">
              {{ wine.description }}
            </p>
            <p class="text-end mt-5 flex flex-col justify-end items-end">
              <span class="font-semibold">Price:</span>  {{ wine.price }}₴
              <Button
                btn-type="add"
                class="dark:text-[#000]"
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
