import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HomeApp from './components/HomeApp.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const app = createApp(App);

// Use o VueRouter no aplicativo
app.use(router);

// Use o Vuex no aplicativo, se necessário
app.use(store);

// Registre o componente HomeApp
app.component('HomeApp', HomeApp);

// Monte o aplicativo
app.mount('#app');
