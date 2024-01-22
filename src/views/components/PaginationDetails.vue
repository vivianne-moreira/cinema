<!-- Pagination.vue -->
<template>
    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
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
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit('change-page', page);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  .pagination {
    /* Estilos para a paginação */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }
  
  button {
    /* Estilos para os botões de página */
    cursor: pointer;
    padding: 5px 10px;
  }
  </style>
  