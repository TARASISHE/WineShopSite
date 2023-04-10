<template>
  <div>
    <router-link :to="`/detail/${catologueWine.id}`">
      <div class=" flex flex-col items-center justify-center mb-3 bg-[#dddddd] h-[300px] w-[250px] p-2 drop-shadow-2xl rounded-md hover:scale-105 sm:h-[500px] xs:h-[350px] sm:w-[250px] xs:w-[175px]">
        <img
          :src="(catologueWine.img)"
          :alt="catologueWine.name"
          class="w-40 h-40 max-w-fit sm:h-3/4 xs:h-3/5 sm:w-[150px] xs:w-[75px]"
        >
        <p class="text-md max-w-[150px] text-center mt-2">
          {{ catologueWine.name }}
        </p>
        <p class="italic py-2">
          {{ catologueWine.price }}₴
        </p>
      </div>
    </router-link>
    <PrimaryButton
      btn-type="add"
      @click="addWineInCard(catologueWine)"
    >
      Add to cart
    </PrimaryButton>
  </div>
  <Transition name="fade">
    <Notification
      v-if="notification"
      class="absolute top-[80px] right-0"
    >
      <span class="text-[#32612d]">Add in cart</span> <font-awesome-icon
        class="ml-2 text-[#32612d]"
        icon="fa-solid fa-check"
      />
    </Notification>
  </Transition>
  <Transition name="fade">
    <Notification
      v-if="notificationInCart"
      class="absolute top-[80px] right-0"
    >
      <span class="text-[#32612d]">Already in Cart</span> 
    </Notification>
  </Transition>
</template>
  
<script setup>

import Notification from './Notification.vue';
import { useWineStore } from '../stores/WineStore';
import PrimaryButton from './PrimaryButton.vue'; 
import { ref } from 'vue';

const WineStore = useWineStore();
const notification = ref(false);
const notificationInCart = ref(false);

defineProps({
  catologueWine: {
    type: Object,
    default: ()=>{}
  }
});

const addWineInCard = (item)=>{
  if (WineStore.cartWines.includes(item)){
    notificationInCart.value = true;
    setTimeout(()=>{
      notificationInCart.value = false;
    }, 1000);
  } else { 
    WineStore.addToCart(item);
    notification.value = true;
    setTimeout(()=>{
      notification.value = false;
    }, 1000);
  }
}; 


// const showAddedIteminCart = ()=>{
//   notification.value = true;
//   setTimeout(()=>{
//     notification.value = false;
//   }, 1000);
// };
</script>


<style scoped>
img{
  max-width: fit-content;
  display: block;
}
</style>

