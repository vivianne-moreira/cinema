<template>
  <div class="sala-list">
    <h2 class="sala-list-title">Lista de Salas</h2>
    <div v-for="sala in salas" :key="sala.id" class="sala-block">
      <div @click="toggleDetails(sala.id)" class="sala-header">
        <img :src="'sala.imagem'" alt="Imagem da sala" class="sala-imagem" />
        {{ sala.nome }} - Tipo: {{ sala.tipo }}
      </div>
      <!-- Renderiza os detalhes da sala diretamente aqui -->
      <div v-if="showDetails[sala.id]" class="detalhes-sala">
        <p>Descrição: {{ sala.descricao }}</p>
        <h3>Filmes Disponíveis</h3>
        <ul>
          <li v-for="filme in sala.filmes" :key="filme.id">
            {{ filme.nome }} - {{ filme.diretor }} - Duração: {{ filme.duracao }} minutos
          </li>
        </ul>
      </div>
    </div>
    <div class="espaço-em-branco"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Filme {
  id: number;
  nome: string;
  diretor: string;
  duracao: number;
}

interface Sala {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  imagem: string;
  filmes: Filme[];
}

export default defineComponent({
  data() {
    return {
      salas: [
      {
          id: 1,
          nome: 'Sala 1',
          descricao: 'Descrição',
          tipo: 'Plus',
          imagem: '/src/assets/imagemsala/sala1.jpeg',
          filmes: [
            { id: 1, nome: 'Filme A', diretor: 'Diretor A', duracao: 120 },
            { id: 2, nome: 'Filme B', diretor: 'Diretor B', duracao: 90 },
          ],
        },
        {
          id: 2,
          nome: 'Sala 2',
          descricao: 'Descrição',
          tipo: '4DX',
          imagem: '/src/assets/imagemsala/sala2.png',
          filmes: [
            { id: 3, nome: 'Filme C', diretor: 'Diretor C', duracao: 150 },
            { id: 4, nome: 'Filme D', diretor: 'Diretor D', duracao: 110 },
          ],
        },
        {
        id: 3,
          nome: 'Sala 3',
          descricao: 'Descrição',
          tipo: '2D',
          imagem: '/ssc/assets/imagemsala/sala3.jpeg',
          filmes: [
            { id: 3, nome: 'Filme A', diretor: 'Diretor A', duracao: 120 },
            { id: 3, nome: 'Filme A', diretor: 'Diretor A', duracao: 120 },
          ],
        },
        {
          id: 4,
          nome: 'Sala 4',
          descricao: 'Descrição',
          tipo: '3D',
          imagem: '/src/assets/imagemsala/sala4.jpg',
          filmes: [
            { id: 4, nome: 'Filme B', diretor: 'Diretor B', duracao: 90 },
            { id: 4, nome: 'Filme D', diretor: 'Diretor D', duracao: 110 },
          ],
        },      
      ] as Sala[],
      showDetails: {} as Record<number, boolean>,
    };
  },
  methods: {
    toggleDetails(salaId: number): void {
      this.showDetails[salaId] = !this.showDetails[salaId];
    },
  },
});
</script>

<style scoped>
.sala-list {
  margin-bottom: 20px;
  text-align: center;
}

.sala-list-title {
  font-size: 2rem;
  padding: 20px;
  margin-bottom: 10px;
}

.sala-block {
  margin-bottom: 20px;
}

.sala-header {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
}

.sala-header:hover {
  background-color: #f0f0f0;
}

.detalhes-sala {
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.espaço-em-branco {
  height: 20px; /* Altura desejada para o espaço em branco após as informações */
}
</style>
