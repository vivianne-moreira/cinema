<template>
  <div class="home-app">
    <div class="welcome-section">
      <h1>Seja Bem-Vindo ao Cinema Vue</h1>
      <p>
        Descubra os melhores filmes em cartaz e aproveite a experiência única
        do nosso cinema. Cinema Vue, experiência única!
      </p>
    </div>

    <div class="featured-section">
      <h2>Destaques</h2>
      <b-carousel>
        <b-carousel-slide v-for="filme in filmesMaisVistos" :key="filme.id">
          <img :src="filme.imagem" alt="Imagem do Filme" class="d-block w-100" />
          <h3>{{ filme.nome }}</h3>
          <p>{{ filme.descricao }}</p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="info-section">
      <h2>Mais Informações</h2>
      <p>
        Conheça nossas salas de última geração, equipadas com tecnologia de
        ponta para proporcionar a melhor experiência cinematográfica. Disponíveis salas 
        4Dx e Plus, além das tradicionais 2D e 3D. Aproveite!
      </p>
    </div>

    <div class="options-section">
      <h2 class="section-title">Explore</h2>
      <router-link to="/salas">Ver Salas Disponíveis</router-link>
      <br />
      <router-link to="/filmes">Ver Filmes em Cartaz</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      filmesMaisVistos: [
        { id: 1, nome: 'Filme A', descricao: 'Descrição do Filme A', imagem: 'src/assets/imagemfilme/filmeA.jpeg' },
        { id: 2, nome: 'Filme B', descricao: 'Descrição do Filme B', imagem: 'src/assets/imagemfilme/filmeB.jpeg' },
        // ...
      ],
    };
  },
});
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  margin-bottom: 10px;
}
.home-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.welcome-section,
.featured-section,
.info-section,
.options-section {
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #555;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.explore-link {
  text-decoration: none;
  color: #fff;
  background-color: #09b38b;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 50px;
  transition: background-color 0.3s, color 0.3s;
}

.explore-link:hover {
  background-color: #fff;
  color: #09b38b;
}

.home-app::after {
  content: '';
  display: block;
  height: 30px;
}
</style>
