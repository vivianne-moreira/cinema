<template>
    <input :type="type" :placeholder="placeholder" v-model="inputValue" @input="handleInput" />
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    props: {
      type: {
        type: String as PropType<string>,
        default: 'text', // 'text', 'password', 'email', etc.
      },
      placeholder: {
        type: String as PropType<string>,
        default: '',
      },
    },
    data() {
      return {
        inputValue: '',
      };
    },
    methods: {
      handleInput(): void {
        this.$emit('input', this.inputValue);
      },
    },
  });
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
   