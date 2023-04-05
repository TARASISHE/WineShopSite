import { ref } from 'vue';

export default function useFetch (url){

  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
 

  const fetchData = async () =>{
    try {
      isLoading.value = true;
      const res = await fetch(url);
      if (!res.ok){
        error.value = 'Could not fetch data';
      }
      data.value = await res.json();
    } catch (error){
      error.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { data, error, isLoading, fetchData };
}

