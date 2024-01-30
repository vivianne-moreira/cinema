<template>
  <div class="home-app">
    <div class="welcome-section">
      <h1>Seja Bem-Vindo ao Cinema Vue</h1>
      <p class="info-string">
        Descubra os melhores filmes em cartaz e aproveite a experiência única
        do nosso cinema. Cinema Vue, experiência única!
      </p>
    </div>

    <div class="featured-section">
      <h2 class="h2">Destaques</h2>
      <b-carousel class="featured-carousel">
        <b-carousel-slide :key="0" class="carousel-slide">
          <div class="filme-content">
            <div v-for="filme in filmesMaisVistos" :key="filme.id" class="filme-item">
              <img :src="require(`@/assets/imagemfilme/${filme.imagem}`)" alt="Imagem do Filme" class="filme-img-carousel" />
              <h3>{{ filme.nome }}</h3>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="info-section">
      <h2>Mais Informações</h2>
      <p class="info-description">
        Conheça nossas salas de última geração, equipadas com tecnologia de
        ponta para proporcionar a melhor experiência cinematográfica. Disponíveis salas 
        4Dx e Plus, além das tradicionais 2D e 3D. Aproveite!
      </p>
    </div>

    <div class="options-section">
      <h2 class="section-title">Explore</h2>
      <div class="explore-container"></div>
      <div>
        <router-link to="/salas" class="explore-link">
          <button class="explore-button">Ver Salas Disponíveis</button>
        </router-link>
      </div>
      <router-link to="/filmes" class="explore-link">
        <button class="explore-button">Ver Filmes em Cartaz</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      filmesMaisVistos: [
        { id: 1, nome: 'It - A Coisa', imagem: 'filmeA.jpeg' },
        { id: 2, nome: 'Carrie - A Estranha', imagem: 'filmeB.jpeg' },
      ],
    };
  },
});
</script>

<style scoped>
.filme-img-carousel {
  max-width: 100%;
  height: auto;
  width: 100%;
  max-height: 300px;
}

.carousel-slide {
  flex: 0 0 auto;
  margin-right: 10px;
}

.featured-section {
  text-align: center;
  margin-bottom: 20px;
}

.featured-carousel {
  display: flex;
  justify-content: center;
}

.filme-content {
  display: flex;
}

.filme-item {
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.home-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
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
}

.explore-button {
  display: block;
  width: 250px;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #09b38b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.explore-button:hover {
  background-color: #fff;
  color: #09b38b;
  border: 1px solid #09b38b;
}

.home-app::after {
  content: '';
  display: block;
  height: 50px;
}
</style>
