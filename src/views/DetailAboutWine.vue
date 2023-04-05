<template>
  <Spinner v-if="spinner" />
  <main
    v-else
    class="mt-20"
  >
    <Notification
      v-if="failure"
      class="absolute top-[70px] right-[15px] "
    >
      <span class="text-[#D0312D] font-bold">Error</span><font-awesome-icon
        class="text-[#D0312D] ml-1 font-bold"
        icon="fa-solid fa-circle-xmark"
      />
    </Notification>
    <div class="flex w-full items-center justify-center relative">
      <div class="flex w-full items-center justify-center  sm:gap-2 xs:gap-2 sm:flex-col xs:flex-col">
        <div class="w-[40%] h-1/3 flex items-center justify-center sm:justify-center xs:justify-center sm:w-[300px] sm:h-full xs:w-[150px] xs:h-full">
          <img
            class="w-[50%] h-1/3 sm:w-[300px] sm:h-[300px] xs:w-[100px] xs:h-[300px]"
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
              <PrimaryButton
                btn-type="add"
                class="dark:text-[#000] w-[300px] sm:w-[200px] xs:w-[175px]"
                @click="WineStore.addToCart(wine)"
              >
                Add to cart
              </PrimaryButton>
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
import PrimaryButton from '../components/PrimaryButton.vue';
import axios from 'axios';
import Notification from '../components/Notification.vue'
import { loadInfoAboutWineData } from '../api/api.js'


const WineStore = useWineStore();

const wine = ref({});
const route = useRoute();
const spinner = ref(false);
const failure = ref(false);


const loadInfoAboutWine = async () =>{
  try {
    spinner.value = true;
    wine.value = await loadInfoAboutWineData(route.params.id);
  } catch (error){
    failure.value = true;
  } finally {
    spinner.value = false;
  }
};

loadInfoAboutWine();

</script>


