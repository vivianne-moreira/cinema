<!-- RoomDetails.vue -->
<template>
    <div class="room-details">
      <h2>Room Details</h2>
      <p>Room {{ room.number }} - {{ room.description }}</p>
      <h3>Movie List</h3>
      <MovieList :movies="room.movies" :currentPage="currentPage" :totalPages="totalPages" @change-page="changePage" />
    </div>
  </template>
  
  <script lang="ts">
  import MovieList from './MovieList.vue';
  
  export default {
    components: {
      MovieList,
    },
    props: {
      room: {
        type: Object,
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
  /* Adicione estilos conforme necessário */
  .room-details {
    padding: 10px;
    cursor: pointer;
    /* Estilos para os detalhes da sala */
  }
  </style>
  