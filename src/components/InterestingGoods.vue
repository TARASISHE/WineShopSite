<template>
  <div class="wrapper bg-[#F2F2F2] py-8 px-4 dark:bg-darkmode-medium">
    <div class="flex items-center justify-center gap-4 md:flex-col sm:flex-col xs:flex-col">
      <div class="relative">
        <video
          ref="video"
          controls
          class="h-[500px] w-full md:h-[400px] sm:h-[300px] xs:h-[250px]"
          src="https://winewine.com.ua/wp-content/uploads/2020/08/mahazyn-sklad-vain-vain-na-oboloni.mp4"
          @click="playVideo()"
        />
        <img
          v-if="banner"
          class="w-full h-[500px] absolute top-0 left-0 z-40 border-0 md:h-[400px] sm:h-[300px] xs:h-[250px]"
          src="https://winewine.com.ua/wp-content/uploads/2021/03/winewine_video.jpg"
        >
        <font-awesome-icon
          v-if="banner"
          class="absolute top-[45%] left-[45%] text-[#fff] w-14 h-14 z-50 cursor-pointer"
          icon="fa-solid fa-circle-play"
          @click="hideBanner()"
        /> 
      </div>
      <div>
        <div class="max-w-4xl text-center ">
          <h3 class="text-2xl dark:text-text-color sm:text-xl xs:text-lg">What is interesting about me?</h3>
          <p class="text-[#888888] my-4 dark:text-text-color"> The TaraWine store is, first and foremost, a good range of affordable everyday wines. But I also have special and rare wines:</p>
          <ul class="text-sm dark:text-text-color" >
            <li>orange wine (orange wines are white wines made by "red technology" with aging on skins")</li>
            <li>organic wines</li>
            <li>biodynamic wines</li>
            <li>highly rated gift and collectible wines</li>
            <li>vintage port wines</li>
          </ul>
          <p class="text-[#888888] my-4 dark:text-text-color sm:text-xl xs:text-lg ">As well as wines that are rare to find:</p>
          <ul class="text-sm dark:text-text-color">
            <li>Barolo Kinato</li>
            <li>rare sherries</li>
            <li>prosecco from historical grape varieties</li>
            <li>soave from dried grapes</li>
          </ul>
          <p class="text-[#888888] my-4 dark:text-text-color">Also, pay attention to the budget analogue of prosecco for aperol - sparkling wine made completely like prosecco, but at a very good price 😉</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const banner = ref(true);
const video = ref(null);

const playVideo = () =>{
  video.value.play();
};

const hideBanner = () =>{
  banner.value = false;
  playVideo();
};

</script>

<style scoped>

li{
  padding: 5px 0px;
}

li::before{
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #888888;
  border-radius: 100%;
  margin-bottom: 2px;
  margin-right: 20px;
}
</style>