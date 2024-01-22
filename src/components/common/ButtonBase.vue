<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<string>,
      default: 'default', // 'default', 'primary', 'secondary', etc.
    },
    size: {
      type: String as PropType<string>,
      default: 'medium', // 'small', 'medium', 'large', etc.
    },
  },
  computed: {
    buttonClass(): string {
      return `button ${this.type} ${this.size}`;
    },
  },
  methods: {
    handleClick(): void {
      this.$emit('click');
    },
  },
});
</script>

<style scoped>
.button {
  /* Estilos base */
  padding: 10px;
  cursor: pointer;
}

.default {
  padding: 10px;
  cursor: pointer;
}

.primary {
  padding: 10px;
  cursor: pointer;
}

/* Adicione estilos para outros tipos conforme necessário */

.medium {
  padding: 10px;
  cursor: pointer;
}

.large {
  padding: 10px;
  cursor: pointer;
}

/* Adicione estilos para outros tamanhos conforme necessário */
</style>
