<template>
    <div>
<!--detalhes do filme-->
        <h2>Caracteristicas do Filme</h2>
        <p>Nome: {{ filme.nome }}</p>
        <p>Diretor: {{ filme.diretor }}</p>
        <p>Duração: {{ filme.duracao }} minutos</p>
<!--detalhes da sala-->
        <h3>Salas Disponiveis</h3>
        <ul>
            <li v-for="sala in salasDisponiveis" :key="sala.numero">
                Sala {{ sala.numero }} - {{ sala.descricao }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    props: {
        filme: {
            type: Object as PropType<{ nome: string; diretor: string; duracao:number }>,
            required: true,
        },
    salasDisponiveis: {
        type: Array as PropType<Array<{ numero: number; descricao: string; diretor: string }>>,
        required: true,
        },
    },
});
</script>

<style scoped>
/* Estilo do componente filme*/
</style>

