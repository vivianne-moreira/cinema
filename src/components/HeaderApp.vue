<template>
  <div>
    <!-- Barra superior com logo e nome -->
    <header class="top-bar">
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Cinema Vue Logo">        <span>Cinema Vue</span>
        <span></span>
      </div>
    </header>
    
    <!-- Barra inferior com links de navegação -->
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/salas" class="nav-link">Salas Disponíveis</router-link>
      <router-link to="/filmes" class="nav-link">Filmes Disponíveis</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderApp',
};
</script>

<style scoped>
.top-bar {
  background-color: #093846; /* Cor de fundo da barra superior */
  color: #fff; /* Cor do texto da barra superior */
  padding: 10px; /* Espaçamento interno da barra superior */
  display: flex; /* Torna a barra superior um contêiner flexível */
  justify-content: space-between; /* Distribui os itens nas extremidades da barra superior */
  align-items: center; /* Alinha os itens verticalmente ao centro da barra superior */
  height: 70px; /* Altura da barra superior */
}

.logo {
  display: flex; /* Torna o conteúdo da logo um contêiner flexível */
  align-items: center; /* Alinha os itens verticalmente ao centro da logo */
}

.logo img {
  width: 40px; /* Ajuste o tamanho da imagem da logo conforme necessário */
  height: auto; /* Mantém a proporção da imagem da logo */
  margin-right: 10px; /* Adiciona um espaço entre a imagem da logo e o texto da logo */
}

.logo span {
  font-size: 1.5rem; /* Tamanho da fonte do texto da logo */
  font-weight: bold; /* Peso da fonte do texto da logo */
}

.navigation {
  background-color: #09b38b; /* Cor de fundo da barra de navegação */
  color: #fff; /* Cor do texto da barra de navegação */
  display: flex;
  justify-content: center;
  padding: 10px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  margin: 0 5px; /* Adiciona espaço entre os botões da barra de navegação */
  border: 2px solid #fff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #fff; /* Cor de fundo ao passar o mouse na barra de navegação */
  color: #093846; /* Cor do texto ao passar o mouse na barra de navegação */
}
</style>
