import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeApp from '@/components/HomeApp.vue';
import ListaSalas from '@/components/ListaSalas.vue';
import ListaFilmes from '@/components/ListaFilmes.vue';
import FilmeComponent from '@/components/FilmeComponent.vue';
import SalaComponent from '@/components/SalaComponent.vue';

// Restante do código...

// Defina suas rotas
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeApp, name: 'home' },
  { path: '/salas', component: ListaSalas, name: 'salas' },
  { path: '/filmes', component: ListaFilmes, name: 'filmes' },
  { path: '/filme/:id', component: FilmeComponent, name: 'filme' },
  { path: '/sala/:id', component: SalaComponent, name: 'sala' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
