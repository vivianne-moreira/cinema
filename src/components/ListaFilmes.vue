<template>
  <div class="filme-container">
    <h2 class="h2">Lista de Filmes</h2>
    <ul class="filme-list">
      <li v-for="(filme, index) in filmes" :key="filme.id" class="filme" :style="{ marginBottom: isUltimoFilmeSemSala(filme, index) ? '20px' : '0' }">
    <img :src="require(`@/assets/imagemfilme/${filme.imagem}`)" alt="Imagem do Filme" class="filme-imagem" />
        <div class="filme-titulo">
          {{ filme.nome }} - {{ filme.diretor }} - Duração: {{ filme.duracao }} minutos
        </div>
        <div class="filme-descricao">
          {{ filme.descricao }}
        </div>
        <div v-if="filme.salas.length > 0" class="sala-list">
          <p class="sala-list-title">Salas:</p>
          <ul class="sala-lista">
            <li v-for="sala in filme.salas" :key="sala.id">
              {{ sala.nome }}
            </li>
          </ul>
        </div>
        <div v-else class="sala-list">
          <p class="sala-list-title">Nenhuma sala disponível para este filme.</p>
        </div>
      </li>
    </ul>
    <div class="espaco-footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Filme {
  id: number;
  nome: string;
  diretor: string;
  duracao: number;
  imagem: string;
  descricao: string;
  salas: Sala[];
}

interface Sala {
  id: number;
  nome: string;
}

export default defineComponent({
  data() {
    return {
      filmes: [
      { id: 1, nome: 'Filme A', diretor: 'Diretor A', duracao: 120, imagem: 'filmeA.jpeg', descricao: 'Descrição do Filme A', salas: [{ id: 1, nome: 'Sala 1' }] },
      { id: 2, nome: 'Filme B', diretor: 'Diretor B', duracao: 90, imagem: 'filmeB.jpeg', descricao: 'Descrição do Filme B', salas: [{ id: 1, nome: 'Sala 1' }] },
      { id: 3, nome: 'Filme C', diretor: 'Diretor C', duracao: 150, imagem: 'filmeC.jpeg', descricao: 'Descrição do Filme C', salas: [{ id: 2, nome: 'Sala 2' }] },
      { id: 4, nome: 'Filme D', diretor: 'Diretor D', duracao: 110, imagem: 'filmeD.jpeg', descricao: 'Descrição do Filme D', salas: [{ id: 2, nome: 'Sala 2' }] },
      { id: 5, nome: 'Filme E', diretor: 'Diretor E', duracao: 105, imagem: 'filmeE.jpeg', descricao: 'Descrição do Filme E', salas: [] },
      { id: 6, nome: 'Filme F', diretor: 'Diretor F', duracao: 95, imagem: 'filmeF.jpeg', descricao: 'Descrição do Filme F', salas: [] },     
      ] as Filme[],
    };
  },
  methods: {
    isUltimoFilmeSemSala(filme: Filme, index: number): boolean {
      return index === this.filmes.length - 1 && filme.salas.length === 0;
    },
  },
});
</script>

<style scoped>
.filme-imagem {
  max-width: 100%;
  height: auto;
  width: 100%; /* Ajuste a largura conforme necessário */
  max-height: 600px; /* Ajuste a altura máxima conforme necessário */
}

.filme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.h2 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.filme-list {
  list-style-type: none;
  padding: 0;
}

.filme {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.filme-info {
  padding: 20px;
}

.filme-titulo {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.filme-descricao {
  margin-top: 10px;
}

.sala-list {
  margin-top: 20px;
}

.sala-list-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.sala-lista {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espaco-footer {
  height: 45px; /* Altura desejada para o espaço entre detalhes e o footer */
}
</style>