<template>
  <div class="wrapper bg-[#F2F2F2] pb-8 dark:bg-darkmode-medium">
    <h1 class="text-center text-dark text-2xl font-semibold my-10 pt-4 dark:text-text-color">
      WHAT KIND OF WINE SHOP AM I?
    </h1>
    <div class="flex items-center justify-center gap-4 px-2 md:flex-col sm:flex-col xs:flex-col">
      <div class="relative w-[500px] sm:w-[375px] xs:w-[360px]">
        <YouTube 
          ref="youtube" 
          src="https://www.youtube.com/embed/z7_mScx-Waw?controls=1?autoplay=0"
          style="width: 100%;"
          width="100%"
          height="300"
          @ready="onReady"
        />
        <img
          v-if="banner"
          class="w-full h-[300px] absolute top-0 left-0 z-40"
          src="https://winewine.com.ua/wp-content/uploads/2020/10/winewine-video.png"
          @click="hideBanner()"
        >
        <font-awesome-icon
          v-if="banner"
          class="absolute top-[50%] left-[50%] text-[#fff] w-10 h-10 z-50"
          icon="fa-solid fa-circle-play"
          @click="hideBanner()"
        /> 
      </div>
      <div>
        <div class="max-w-2xl text-dark sm:max-w-md xs:max-w-xs sm:text-center xs:text-center dark:text-text-color">
          <p class="my-4">
            I am a store-warehouse WINE WINE from Bayadera Group - one of the largest alcohol importers in Eastern Europe. Therefore, you can buy wine and strong alcohol from me at wholesale prices.
          </p>
          <p>I'm not just a wine shop! I want to change the style of buying wine in Ukraine: instead of buying one bottle of wine for the evening several times, so that we build a stock of wine at home. As we do with products or household chemicals.</p>
          <p class="my-4">
            That is why I have very cool wholesale prices: it is much more profitable to buy wine in bulk.
          </p>
          <p>My first WINE WINE wine store was launched in August 2019, the online alcohol store was launched during the quarantine period. Ahead - a network throughout Ukraine.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import YouTube from 'vue3-youtube';


const youtube = ref(null);
const banner = ref(true);

const onReady = ()=>{
  youtube.value.playVideo();
};

const hideBanner = () =>{
  banner.value = false;
  onReady();
};
</script>

<style scoped>
.wrapper{
  margin: 0 auto;
}

</style>
