import './assets/main.css'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from "@/router";

const app = createApp(App);
app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .mount('#app')
