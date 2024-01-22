<!-- MovieList.vue -->
<template>
    <div class="movie-list">
      <h2>Movie List</h2>
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="changePage" />
    </div>
  </template>
  
  <script>
  import MovieCard from './MovieCard.vue';
  import Pagination from './Pagination.vue';
  
  export default {
    components: {
      MovieCard,
      Pagination,
    },
    props: {
      movies: {
        type: Array as () => { id: number; title: string; description: string }[],
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    methods: {
      changePage(newPage: unknown) {
        this.$emit('change-page', newPage);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos para a lista de filmes */
  .movie-list {
    padding: 10px;
    cursor:pointer;
    /* Certifique-se de que esses estilos se apliquem apenas a este componente */
  }
  </style>
  