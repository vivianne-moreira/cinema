<!-- MovieCard.vue -->
<template>
  <div class="movie-card">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.descricao }}</p>
    <!-- Outros detalhes do filme -->
  </div>
</template>

<script lang="ts">
export default {
  props: {
    movie: {
      type: Object as () => { id: number; title: string; descricao: string },
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o MovieCard */
.movie-card {
  color: blue;
  /* Adicione estilos conforme necessário */
}
</style>
