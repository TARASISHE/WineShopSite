<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 bg-dark/80  z-[500]">
    <SuccessOrder v-if="succesedPayment">Order Success</SuccessOrder>
    <div class="fixed top-[20%] left-[25%] bg-[#F2F2F2] w-1/2 h-1/2 z-[501] rounded-xl flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-5">
        <h2 class="text-xl font-semibold">
          Payment information
        </h2>
        <input
          v-model="userName"
          class="paymentinp block w-[400px] p-2 text-[#313131] rounded-lg placeholder:text-dark"
          type="text"
          placeholder="Enter your name and surname"
        >
        <input
          v-model="userPhone"
          class="paymentinp block w-[400px] p-2 text-[#313131] rounded-lg placeholder:text-dark"
          type="phone"
          placeholder="Enter your phone number"
        >
        <button
          class="popup_close"
          @click="closePopup()"
        >
          X
        </button>
        <button
          class="w-48 border-[1px]  rounded-md py-3 mt-2 font-semibold  duration-300 transition-all hover:bg-[#999DA0] hover:border-[#999DA0]"
          @click="addOrder()"
        >
          Pay
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useWineStore } from '../stores/WineStore.js';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebase';
import { ref } from 'vue';
import SuccessOrder from '../components/SuccessOrder.vue';

const WineStore = useWineStore();

const props = defineProps({
  closePopup: {
    type: Function
  }
});

const userName = ref('');
const userPhone = ref('');
const succesedPayment = ref(false);

const showInfo = ()=>{
  succesedPayment.value = true;
  setTimeout(()=>{
    succesedPayment.value = false;
    props.closePopup();
  }, 2000);
};

const addOrder = async ()=>{
  const wineNames = Object.values(WineStore.cartWines).map(el =>`${el.quantity} - ` + `${el.name}`).join(', ');
  if (userName.value.length > 3 && userPhone.value.length >= 6 ){
    addDoc(collection(db, 'orders'), {
      name: userName.value,
      phone: userPhone.value,
      ordername: wineNames,
      price: WineStore.cartWines.reduce((acc, item) => acc += item.price * item.quantity, 0)
    });
    userName.value = '';
    userPhone.value = '';
    showInfo()
  }
};

</script>

<style scoped>


  .popup_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .popup_title{
    text-align: center;
  }
  .popup_close{
    position: absolute;
    top: 10px;
    right: 15px;
  }
</style>
