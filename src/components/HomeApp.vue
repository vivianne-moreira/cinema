<template>
  <div class="sala-component">
    <h2>Sala {{ sala.numero }}</h2>
    <p>Descrição: {{ sala.descricao }}</p>
    <h3>Filmes Disponíveis</h3>
    <ul>
      <li v-for="filme in filmesDisponiveis" :key="filme.id">
        {{ filme.nome }} - Diretor: {{ filme.diretor }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        sala: {
            type: Object as PropType<{
                numero: number;
                descricao: string;
            }>,
            required: true,
        },
        filmesDisponiveis: {
            type: Array as PropType<Array<{
                id: number;
                nome: string;
                diretor: string;
            }>>,
            required: true,
        },
    },
});
</script>

<style scoped>
/* Estilos específicos para o componente SalaComponent */
.sala-component {
color: blue
}
</style>
