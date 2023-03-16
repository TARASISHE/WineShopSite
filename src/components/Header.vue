<template>
  <div class="w-full h-14 bg-darkred fixed top-0 left-0 dark:bg-darkmode-light z-[100]">
    <div class="flex justify-between h-full items-center px-5">
      <div class="text-text-color">
        <router-link to="/">
          <span><font-awesome-icon icon="fa-solid fa-wine-bottle" /></span> 
          <span class="font-bold px-1">TARAWine</span>
        </router-link>
      </div>
      <div class="flex gap-6 items-center font-medium text-text-color sm:hidden xs:hidden">
        <router-link  
          v-for="link in links"
          :key="link.name"
          class="relative"
          :to="link.to"
        >
          {{ link.name }}
          <span
            v-if="WineStore.cartWines.length && link.name === 'Cart'" 
            class="absolute top-[11px] left-[28px] bg-dark text-white  rounded-[100%] w-[15px] h-[15px] text-[10px] flex items-center justify-center dark:text-dark dark:bg-text-color"
          >
            {{ WineStore.cartWines.length }}
          </span>
        </router-link>
        <font-awesome-icon
          v-if="!isDark"
          class="ml-2"
          icon="fa-solid fa-lightbulb"
          @click="toggleDark()"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-moon"
          @click="toggleDark()"
        />
      </div>
      <div class="hidden sm:flex  sm:items-center  sm:justify-end text-text-color sm:gap-5 xs:flex xs:gap-5 xs:items-center">
        <routerLink to="/">
          <font-awesome-icon icon="fa-solid fa-house" />
        </routerLink>
        <routerLink to="/catologue">
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />
        </routerLink>
        <routerLink
          to="/cart"
          class="relative"
        >
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span
            v-if="WineStore.cartWines.length" 
            class="absolute top-[8px] left-[10px] bg-dark text-white  rounded-[100%] w-[15px] h-[15px] text-[10px] flex items-center justify-center"
          >
            {{ WineStore.cartWines.length }}
          </span>
        </routerLink>
        <routerLink to="/workers">
          <font-awesome-icon icon="fa-solid fa-people-group" />
        </routerLink>
        <font-awesome-icon
          v-if="!isDark"
          icon="fa-solid fa-lightbulb"
          @click="toggleDark()"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-moon"
          @click="toggleDark()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { useWineStore } from '../stores/WineStore.js';

const WineStore = useWineStore();

const isDark = useDark({});
const toggleDark = useToggle(isDark);

const links = ref([
  {
    name: 'Catologue', to: '/catologue'
  },
  {
    name: 'Out team', to: '/workers'
  },
  {
    name: 'Cart', to: '/cart'
  }
]);

</script>
