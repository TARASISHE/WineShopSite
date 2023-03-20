<template>
  <div class="wrapper max-w-7xl overflow-hidden lg:max-w-5xl md:max-w-3xl sm:max-w-[639px] xs:max-w-[370px]">
    <div
      :style="{'margin-left': '-' + (100 * currentSlideIndex)+ '%'}"
      class="relative flex transition-all duration-1000"
    >
      <SliderItem     
        v-for="item in carouselData"
        :key="item.id"
        :item-data="item"
      />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import SliderItem from './SliderItem.vue';
const props = defineProps({
  carouselData: {
    type: Array,
    default: ()=>([])
  },
  interval: {
    type: Number,
    default: ()=>(0)
  }
});

onMounted(()=>{
  if (props.interval > 0){
    setInterval(()=>{
      showNext();
    }, props.interval);
  }
});

const currentSlideIndex = ref(0);

// const showPrev = () =>{
//   if (currentSlideIndex.value > 0){
//     currentSlideIndex.value--;
//   }
 
// };

const showNext = () =>{
  if (currentSlideIndex.value >= props.carouselData.length - 1){
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value++;
  }
};

</script>



