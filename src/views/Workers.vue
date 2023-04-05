<template>
  <Spinner v-if="spinner" />
  <main class="mt-20 dark:text-text-color">
    <h1 class="text-3xl text-center">
      {{ errMsg }}
    </h1>
    <WorkerList :worker-data="allWorkers" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

import WorkerList from '../components/WorkerList.vue';
import Spinner from '../components/Spinner.vue';
import useFetch from '../composables/useFetch';

const { data: allWorkers, isLoading: spinner, error: errMsg, fetchData: fetchWorkers } = useFetch(
  'https://my-json-server.typicode.com/TARASISHE/allWineWorkers/allWorkersData');

onMounted( async ()=>{
  await fetchWorkers();
});

</script>
