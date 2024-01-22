<template>
    <div>
      <!-- Detalhes da sala -->
      <h2>Caracteristicas da Sala</h2>
      <p>Número da Sala: {{ sala.numero }}</p>
      <p>Descrição: {{ sala.descricao }}</p>
      <!-- Lista dos filmes disponíveis nesta sala -->
      <h3>Filmes Disponiveis</h3>
      <ul>
        <li v-for="filme in filmesDisponiveis" :key="filme.id">
          {{ filme.nome }} - {{ filme.diretor }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      sala: {
        type: Object as PropType<{ numero: number; descricao: string }>,
        required: true,
      },
      filmesDisponiveis: {
        type: Array as PropType<Array<{ id: number; nome: string; diretor: string }>>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  /* Estilos para o componente sala */
  </style>
  