<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 bg-dark/80  z-[500] flex flex-col items-center justify-center ">
    <InformationAboutPayment v-if="succesedPayment">
      <span class="text-[#32612d]">Order Success</span> <font-awesome-icon
        class="ml-2 text-[#32612d]"
        icon="fa-solid fa-check"
      /> 
    </InformationAboutPayment>
    <InformationAboutPayment v-if="failurePayment">
      <span class="text-[#D0312D]">Order Failure</span><font-awesome-icon
        class="text-[#D0312D] ml-1"
        icon="fa-solid fa-circle-xmark"
      />
    </InformationAboutPayment>
    <div class=" px-2 bg-[#F2F2F2] w-1/2 h-[500px] z-[501] rounded-xl flex flex-col items-center justify-center sm:left-[15%] sm:w-[500px] sm:h-[400px] xs:w-[310px] xs:h-[300px]">
      <div class="flex flex-col items-center justify-center gap-5">
        <h2 class="text-xl font-semibold sm:text-lg xs:text-lg">
          Payment information
        </h2>
        <input
          v-model="userName"
          class="paymentinp block w-[400px] p-2 text-[#313131] rounded-lg placeholder:text-dark md:w-[300px] sm:w-[300px] xs:w-[250px]"
          type="text"
          placeholder="Enter your name and surname"
        >
        <input
          v-model="userPhone"
          class="paymentinp block w-[400px] p-2 text-[#313131] rounded-lg placeholder:text-dark md:w-[300px] sm:w-[300px] xs:w-[250px]"
          type="tel"
          placeholder="Enter your phone number"
        >
        <button
          class="popup_close"
          @click="closePopup()"
        >
          X
        </button>
        <p class="text-[#D0312D] font-semibold max-w-[200px] text-center">{{ error }}</p>
        <button
          class="w-48 border-[1px]  rounded-md py-3 mt-2 font-semibold  duration-300 transition-all hover:bg-[#999DA0] hover:border-[#999DA0] sm:w-40 xs:w-32"
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
import InformationAboutPayment from './InformationAboutPayment.vue';

const WineStore = useWineStore();

const props = defineProps({
  closePopup: {
    type: Function
  }
});

const userName = ref('');
const userPhone = ref('');
const succesedPayment = ref(false);
const failurePayment = ref(false);
const error = ref('');

const showSuccesedPayment = ()=>{
  succesedPayment.value = true;
  setTimeout(()=>{
    succesedPayment.value = false;
    props.closePopup();
  }, 2000);
};

const showFailurePayment = ()=>{
  failurePayment.value = true;
  setTimeout(()=>{
    failurePayment.value = false;
  }, 2000);
};


const addOrder = async ()=>{
  try {
    if (userName.value.length < 3){
      error.value = 'Your name is to short';
    }
    if (!userName.value.length && !userPhone.value.length){
      error.value = 'You need to enter your information';
    }
    if ( userPhone.value.length < 10){
      error.value = 'Incorrect phone number';
    }
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
      showSuccesedPayment();
    }
  } catch (err){
    console.log(err);
    showFailurePayment();
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
