<template>
  <div class="footerToBottom">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>


<script setup>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

