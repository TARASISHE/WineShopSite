<template>
  <main>
    <div class="mt-20 px-4">
      <div
        v-if="WineStore.cartWines.length < 1"
        class="flex items-center justify-center h-full dark:text-text-color"
      >
        Nothing in cart :(
      </div>
      <div
        v-for="wine in WineStore.getCartWines"
        :key="wine.id"
        class="flex mb-10 justify-around items-center border-b-2 border-gray-300  pb-5 dark:border-text-color
          sm:flex-col sm:gap-4   
          xs:flex-col xs:gap-2"
      >
        <div class="flex flex-row items-center justify-center xs:flex-col sm:h-[600px] xs:h-[500px]">
          <img
            class="w-full h-40 rounded sm:h-[75%] xs:h-[50%]  sm:w-[300px] xs:w-[250px]"
            :src="wine.img"
            :alt="wine.title"
          >
        </div>
        <div class="flex flex-col items-start justify-center px-4 xs:items-center">
          <p class="max-w-[250px]   xs:text-center xs:mb-1 xs:mt-2 dark:text-text-color">
            {{ wine.name }}
          </p>
        </div>
        <div class="flex flex-row items-center justify-center px-4 dark:text-text-color">
          <button
            class="text-2xl p-2"
            @click="WineStore.incrementQ(wine)"
          >
            +
          </button>
          <p class="px-4">
            {{ wine.quantity }}
          </p>
          <button
            class="text-2xl p-2"
            @click="WineStore.decrementQ(wine)"
          >
            -
          </button>
        </div>
        <div class="flex flex-row items-center justify-center px-4 dark:text-text-color">
          <p>₴{{ wine.price * wine.quantity }} </p>
        </div>
        <div>
          <Button
            btn-type="deleted"
            @click="WineStore.removeFromCart(wine)"
          >
            Delete
          </Button>
        </div>
      </div>
      <div
        v-if="WineStore.cartWines.length"
        class="w-full flex-col items-end flex justify-end"
      >
        <p class="font-semibold px-5 dark:text-text-color">
          <span class="mr-2">Total:</span>{{ WineStore.cartWines.reduce((acc,item) => acc += item.price * item.quantity,0) }}₴
        </p>
        <button
          class="w-48 bg-darkred rounded-md py-3 mt-2 font-semibold hover:bg-text-color duration-300 transition-all"
          @click="togglePopup('buttonTrigger')"
        >
          Pay
        </button>
      </div>
    </div>
    <Transition name="fade">
      <PaymentPopup
        v-if="popupTriggers.buttonTrigger" 
        :close-popup="()=> togglePopup('buttonTrigger')"
      />
    </Transition>
  </main>
</template>
  
<script setup>
  
import Button from '../components/Button.vue';
import { useWineStore } from '../stores/WineStore.js';
import PaymentPopup from '../components/PaymentPopup.vue';
import { ref } from 'vue';


const WineStore = useWineStore();

const popupTriggers = ref({
  buttonTrigger: false
});

const togglePopup = (trigger)=>{
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
};

  
</script>
  
  
  <style scoped>
  img{
      max-width: inherit;
  }

  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  </style>
