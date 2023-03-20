<template>
  <Spinner v-if="spinner" />
  <main class="mt-20 dark:text-text-color">
    <WorkerList :worker-data="allWorkers" />
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

import { getWorkersData } from '../api/api';

import WorkerList from '../components/WorkerList.vue';
import Spinner from '../components/Spinner.vue';

const allWorkers = ref([]);
const spinner = ref(false);

const getWorkers = async ()=>{
  try {
    spinner.value = true;
    allWorkers.value = await getWorkersData();
  } catch (err){
    console.log(err);
  } finally {
    spinner.value = false;
  }
};

onBeforeMount(()=>{
  getWorkers();
});

</script>
