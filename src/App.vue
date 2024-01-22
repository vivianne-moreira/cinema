<template>
  <div id="app">
    <router-link to="/">HomeApp</router-link>
    <router-link to="/sala/1">Detalhes da Sala</router-link>
    <router-link to="/filme/1">Detalhes do Filme</router-link>

    <main class="columns is-gapless is-multiline">
      <div class="column is-one-quarter">
        <BarraLateral />
      </div>
      
      <div class="column">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
});
</script>

<style scoped>
.my-component{
  background-color: darkslategray;
}
</style>
