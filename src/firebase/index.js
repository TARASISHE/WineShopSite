import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCw0KBHRKJoAbF3C5jXUWx-HbvzqXq852Y',
  authDomain: 'wineshop-97f76.firebaseapp.com',
  projectId: 'wineshop-97f76',
  storageBucket: 'wineshop-97f76.appspot.com',
  messagingSenderId: '59255590866',
  appId: '1:59255590866:web:3f4ea17b18cada63f4820b'
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db, app
};
