<template>
  <Spinner v-if="spinner" />
  <main class="mt-20 dark:text-text-color">
    <WorkerList :worker-data="allWorkers" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import WorkerList from '../components/WorkerList.vue';
import Spinner from '../components/Spinner.vue';

const allWorkers = ref([]);
const spinner = ref(false);

const getWorkers = async ()=>{
  try {
    spinner.value = true;
    const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/allWineWorkers/allWorkersData');
    const data = response.data;
    allWorkers.value = data;
  } catch (err){
    console.log(err);
  } finally {
    spinner.value = false;
  }
};

onMounted(()=>{
  getWorkers();
});

</script>
