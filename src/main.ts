import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HomeApp from './components/HomeApp.vue';

createApp(App).use(router).component('HomeApp', HomeApp).mount('#app');
