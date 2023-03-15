import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWineStore = defineStore('WineStore', () => {
  
  const cartWines = ref([]);
  const allWines = ref([]);
  const spinner = ref(false);

  const countCartWines = computed(()=>{
    return cartWines.value.length;
  });

  const getCartWines = computed(()=>{
    return cartWines.value;
  });


  const getWines = async () =>{
    try {
      spinner.value = true;
      const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/winedb/allWines');
      const data = response.data;
      allWines.value = data;
    } catch (err){
      console.log(err);
    } finally {
      spinner.value = false;
    }
  };

  const addToCart = (item) => {
    let index = cartWines.value.findIndex(product => product.id === item.id);
    if (index !== -1) {
      allWines.value[index].quantity += 1;
    } else {
      item.quantity = 1;
      cartWines.value.push(item);
    }
  };

  const incrementQ = (item) =>{
    let index = cartWines.value.findIndex(product => product.id === item.id);
    if (index !== -1) {
      cartWines.value[index].quantity += 1;
    }
  };

  const decrementQ = (item) =>{
    let index = cartWines.value.findIndex(product => product.id === item.id);
    if (index !== -1) {
      cartWines.value[index].quantity -= 1;
      if (cartWines.value[index].quantity === 0){
        cartWines.value = cartWines.value.filter(product => product.id !== item.id);
      }
    }
  };

  const removeFromCart = (item) =>{
    cartWines.value = cartWines.value .filter(product => product.id !== item.id);
  };


  const winesInLocalStorage = localStorage.getItem('wines'); 

  if (winesInLocalStorage) {
    cartWines.value = JSON.parse(winesInLocalStorage)._value;
  }
  
  watch(
    () => cartWines,
    (state) => {
      localStorage.setItem('wines', JSON.stringify(state));
    },
    { deep: true }
  );


  return {
    cartWines,
    allWines,
    countCartWines,
    getCartWines,
    addToCart,
    incrementQ,
    decrementQ,
    removeFromCart,
    getWines,
    spinner
  };
});
