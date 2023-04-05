<template>
  <Spinner v-if="spinner" />
  <main
    v-else
    class="mb-20 mt-20"
  >
    <div>
      <select
        v-model="selectedCategory"
        class="w-32  mt-0 ml-5 mr-5 mb-5 bg-main-bg border-darkred border-[1px] dark:bg-darkmode-light dark:border-darkmode-light dark:text-text-color"
      >
        <option 
          v-for="category in categories"
          :key="category.value"
          class="text-dark dark:text-text-color"
          :value="category.title"
        >
          {{ category.title }}
        </option>
      </select>
    </div>
    <CatologueWines :catologue-wine-cards="filtredClothes" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import CatologueWines from '../components/CatologueWines.vue';
import { useWineStore } from '../stores/WineStore.js';
import Spinner from '../components/Spinner.vue';


const WineStore = useWineStore();
const selectedCategory = ref('All');
const spinner = ref(false);

const filtredClothes = computed(()=>{
  if (selectedCategory.value === 'All'){
    return WineStore.allWines ;
  } else {
    return WineStore.allWines.filter(product => !product.color.indexOf(selectedCategory.value));
  }
});


const categories = ref([
  {
    title: 'All', value: 'all'
  },
  {
    title: 'White', value: 'white'
  },
  {
    title: 'Red', value: 'red'
  }, 
  {
    title: 'Pink', value: 'pink'
  }
]);


const loadingData = async ()=>{
  try {
    spinner.value = true;
    await WineStore.getWines();
  } catch (err){
    console.log(err);
  } finally {
    spinner.value = false;
  } 
};


loadingData();


</script>
