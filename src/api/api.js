import axios from 'axios';

const getWinesData = async () =>{
  const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/winedb/allWines');
  const data = await response.data;
  return data;

};

const getWorkersData = async ()=>{
  const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/allWineWorkers/allWorkersData');
  const data = await response.data;
  return data;
};

const loadInfoAboutWineData = async (wineId) =>{
  const response = await axios.get(
    `https://my-json-server.typicode.com/TARASISHE/winedb/allWines/${wineId}`
  );
  const data = await response.data;
  return data;
};

const getBestWorkersData = async ()=>{
  const response = await axios.get('https://my-json-server.typicode.com/TARASISHE/wineWorkers/bestWorkersData');
  const data = await response.data;
  return data;
};


export { getWinesData, getWorkersData, loadInfoAboutWineData, getBestWorkersData };
