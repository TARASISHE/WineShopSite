import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faCartShopping, faBookOpenReader, faWineBottle, faMoon, faSun, faPeopleGroup, faCirclePlay, faPhone, faCopyright, faEnvelope, faCheck, faCircleXmark, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

library.add(faHouse, faCartShopping, faBookOpenReader, faWineBottle, faMoon, faSun, faPeopleGroup, faCirclePlay, faPhone, faCopyright, faEnvelope, faTelegram, faCheck, faCircleXmark, faSun, faLightbulb);
app.use(createPinia());
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
