// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes aqui
import HomeApp from '@/components/HomeApp.vue';
import SalaComponent from './components/SalaComponent.vue';
import FilmeComponent from './components/FilmeComponent.vue';

// Use o VueRouter
const routes = [
    { path: '/', component: HomeApp },
    { path: '/sala/:id', component: SalaComponent },
    { path: '/filme/:id', component: FilmeComponent },
    // Adicione mais rotas conforme necessário
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
    
});

const app = createApp(App);

export default router;

// Use o VueRouter no aplicativo
app.use(router);

// Monte o aplicativo
app.mount('#app');

