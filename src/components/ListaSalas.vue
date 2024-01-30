<template>
  <div class="sala-list">
    <h2 class="sala-list-title">Lista de Salas</h2>
    <div v-for="sala in salas" :key="sala.id" class="sala-block">
      <div @click="toggleDetails(sala.id)" class="sala-header">
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
          descricao: 'Bem-vindo à Sala Plus, um oásis de sofisticação que redefine o conceito de conforto. Este espaço exclusivo combina luxo e modernidade, oferecendo um refúgio onde o design meticuloso se encontra com o entretenimento de última geração. Com assentos elegantemente estofados, iluminação ambiental e tecnologia de ponta, a Sala Plus proporciona uma experiência única, transformando cada momento em uma celebração de luxo e prazer audiovisual. Seja para noites de cinema em casa, encontros íntimos ou simplesmente relaxar com estilo, a Sala Plus oferece um ambiente que transcende expectativas, elevando cada experiência a um patamar de excelência inigualável.',
          tipo: 'Plus',
          filmes: [
            { id: 1, nome: 'It - A Coisa', diretor: 'Andy Muschietti', duracao: 120 },
            { id: 2, nome: 'Carrie - A Estranha', diretor: 'Brian De Palma', duracao: 90 },
          ],
        },
        {
          id: 2,
          nome: 'Sala 2',
          descricao: 'Adentre a Sala 4DX, onde a magia do cinema ganha vida em uma experiência imersiva como nunca antes. Aqui, não assistimos apenas filmes; vivemos cada cena com todos os sentidos. Com assentos que se movem sincronizados com a ação na tela, efeitos atmosféricos que envolvem e uma qualidade de áudio e imagem incomparável, a Sala 4DX transcende os limites do convencional. Sinta a emoção dos ventos, respingos de água e aromas envolventes enquanto se entrega a um espetáculo cinematográfico que vai além da tela. Prepare-se para uma jornada sensorial única, onde cada momento se torna uma aventura cinematográfica intensa e inesquecível.',
          tipo: '4DX',
          filmes: [
            { id: 3, nome: 'Invocação do Mal ', diretor: 'James Wan', duracao: 150 },
            { id: 4, nome: 'Terror no Pântano', diretor: 'Adam Green', duracao: 110 },
          ],
        },
        {
        id: 3,
          nome: 'Sala 3',
          descricao: 'Adentre a elegante simplicidade da Sala 2D, onde a pureza da experiência cinematográfica é a protagonista. Com um ambiente acolhedor e assentos confortáveis, esta sala oferece uma jornada visual imersiva sem distrações. Desfrute da clareza cristalina da projeção 2D, permitindo que cada detalhe da narrativa ganhe vida de maneira nítida e cativante. Com uma atmosfera tranquila e foco total na tela, a Sala 2D é o refúgio perfeito para apreciadores de cinema que valorizam a essência da arte cinematográfica em sua forma mais autêntica e tradicional. Explore histórias e mergulhe nas emoções do filme, tudo isso em um ambiente que prioriza a pureza da magia do cinema.',
          tipo: '2D',
          filmes: [
            { id: 3, nome: 'It - A Coisa', diretor: 'Andy Muschietti', duracao: 120 },
            { id: 3, nome: 'It - A Coisa', diretor: 'Andy Muschietti', duracao: 120 },
          ],
        },
        {
          id: 4,
          nome: 'Sala 4',
          descricao: 'Adentre o fascinante universo tridimensional da Sala 3D, onde a fronteira entre espectador e narrativa se desfaz em uma experiência visualmente envolvente. Com tecnologia de ponta, esta sala proporciona uma profundidade de campo que transporta os espectadores para dentro do próprio enredo. Sinta a magia do cinema ganhar vida com imagens vibrantes e realistas que se estendem para além da tela, criando uma atmosfera imersiva e cativante. Com óculos 3D que abrem portas para um mundo de detalhes e efeitos visuais extraordinários, a Sala 3D transforma cada cena em uma jornada sensorial única, redefinindo a maneira como vivenciamos a sétima arte. Prepare-se para uma experiência tridimensional que transcende as barreiras da realidade e mergulhe de cabeça em um espetáculo visual deslumbrante.',
          tipo: '3D',
          filmes: [
            { id: 4, nome: 'Carrie - A Estranha', diretor: 'Brian De Palma', duracao: 90 },
            { id: 4, nome: 'Terror no Pântano', diretor: 'Adam Green', duracao: 110 },
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
  height: 150px;
}
</style>
