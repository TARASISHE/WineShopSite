<template>
  <main class="mt-20">
    <SliderCarousel
      :carousel-data="sliderItems"
      :interval="3000"
    />
    <PopularWines
      :wine-cards="popularVinesToShow"
    />
    <AbouShop />
    <AboutGoods class="mt-4" />
    <InterestingGoods class="mt-4" />
    <BestWorkers :best-workers-data="workersToShow" />
  </main>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

import { getBestWorkersData } from '../api/api';
import BestWorkers from '../components/BestWorkers.vue';
import InterestingGoods from '../components/InterestingGoods.vue';
import AboutGoods from '../components/AboutGoods.vue';
import AbouShop from '../components/AbouShop.vue';
import PopularWines from '../components/PopularWines.vue';
import { popularVines } from '../data/popularVines';
import SliderCarousel from '../components/SliderCarousel.vue';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';


const popularVinesToShow = ref(popularVines);
const sliderItems = [
  {  
    id: 1,
    image: img1
  },
  {
    id: 2,
    image: img2 
  },
  {
    id: 3,
    image: img3
  }
];


const workersToShow = ref([]);

const getWorkers = async () =>{
  await getBestWorkersData()
  workersToShow.value = getBestWorkersData;
}

onBeforeMount(()=>{
  getWorkers();
});

</script>
