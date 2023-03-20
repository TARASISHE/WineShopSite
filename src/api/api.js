import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();

const getWinesData = async () =>{
  try {
    const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/winedb/allWines');
    const data = await response.data;
    return data;
  } catch (error){
    console.log(error);
  }
};

const getWorkersData = async ()=>{
  try {
    const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/allWineWorkers/allWorkersData');
    const data = await response.data;
    return data;
  } catch (err){
    console.log(err);
  } 
};

const loadInfoAboutWineData = async () =>{
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/TARASISHE/winedb/allWines/${route.params.id}`
    );
    const data = await response.data;
    return data;
  } catch (error){
    console.log(error);
  }
};

const getBestWorkersData = async ()=>{
  try {
    const respresponse = await axios.get('https://my-json-server.typicode.com/TARASISHE/wineWorkers/bestWorkersData');
    const data = await response.data;
    return data;
  } catch (err){
    console.log(err);
  } 
};


export { getWinesData, getWorkersData, loadInfoAboutWineData, getBestWorkersData };
