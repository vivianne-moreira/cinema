<template>
  <div class="filme-container">
    <h2 class="h2">Lista de Filmes</h2>
    <ul class="filme-list">
      <li v-for="(filme, index) in filmes" :key="filme.id" class="filme" :style="{ marginBottom: isUltimoFilmeSemSala(filme, index) ? '20px' : '0' }">
        <img :src="require(`@/assets/imagemfilme/${filme.imagem}`)" alt="Imagem do Filme" class="filme-imagem" />
        <div class="filme-titulo">
          {{ filme.nome }} - {{ filme.diretor }} - Duração: {{ filme.duracao }} minutos
        </div>
        <div class="filme-descricao">
          {{ filme.descricao }}
        </div>
        <div v-if="filme.salas.length > 0" class="sala-list">
          <p class="sala-list-title">Salas:</p>
          <ul class="sala-lista">
            <li v-for="sala in filme.salas" :key="sala.id">
              {{ sala.nome }}
              <p></p>
            </li>
          </ul>
        </div>
        <div v-else class="sala-list">
          <p class="sala-list-title">Nenhuma sala disponível para este filme.</p> <p></p>
        </div>
      </li>
    </ul>
    <div class="espaco-footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Filme {
  id: number;
  nome: string;
  diretor: string;
  duracao: number;
  imagem: string;
  descricao: string;
  salas: Sala[];
}

interface Sala {
  id: number;
  nome: string;
}

export default defineComponent({
  data() {
    return {
      filmes: [
      { id: 1, nome: 'It - A Coisa', diretor: 'Andy Muschietti', duracao: 120, imagem: 'filmeA.jpeg', descricao: 'Em It - A Coisa, um grupo de sete adolescentes de Derry, uma cidade no Maine, formam o auto-intitulado "Losers Club" - o clube dos perdedores. A pacata rotina da cidade é abalada quando crianças começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do "Losers Club" acabam ficando face a face com o responsável pelos crimes: o palhaço Pennywise.', salas: [{ id: 1, nome: 'Sala 1' }] },
      { id: 2, nome: 'Carrie - A Estranha', diretor: 'Brian De Palma', duracao: 90, imagem: 'filmeB.jpeg', descricao: 'Carietta White (Chloë Grace Moretz) sempre foi oprimida pela sua mãe, Margaret (Julianne Moore), uma fanática religiosa. Além dos maus tratos em casa, Carrie também sofre com o abuso dos colegas de escola, que nunca compreenderam sua aparência nem seu comportamento. Ridicularizada por todos, aos poucos ela descobre que possui estranhos poderes telecinéticos, que se manifestam com força total durante sua festa de formatura.', salas: [{ id: 1, nome: 'Sala 1' }] },
      { id: 3, nome: 'Invocação do Mal', diretor: 'James Wan', duracao: 150, imagem: 'filmeC.jpeg', descricao: 'Harrisville, Estados Unidos. Um casal (Ron Livinston e Lili Taylor) muda para uma casa nova ao lado de suas cinco filhas. Inexplicavelmente, estranhos acontecimentos começam a assustar as crianças, o pai e, principalmente, a mãe. Preocupada com algumas manchas que aparecem em seu corpo e com uma sequência de sustos que levou, ela decide procurar um famoso casal de investigadores paranormais (Patrick Wilson e Vera Farmiga), mas eles não aceitam o convite, acreditando ser somente mais um engano de pessoas apavoradas com canos que fazem barulhos durante a noite ou coisas do gênero. Porém, quando eles aceitam fazer uma visita ao local, descobrem que algo muito poderoso e do mal reside ali. Agora, eles precisam descobrir o que é e o porquê daquilo tudo acontecendo com os membros daquela família. É quando o passado começa a revelar uma entidade demoníaca querendo continuar sua trajetória de maldades.', salas: [{ id: 2, nome: 'Sala 2' }] },
      { id: 4, nome: 'Terror no Pântano', diretor: 'Adam Green', duracao: 110, imagem: 'filmeD.jpeg', descricao: 'Um grupo heterogêneo de turistas embarca em um passeio de barco pelos pântanos assombrados da Louisiana, onde eles aprendem o conto aterrorizante da lenda local "Victor Crowley", um homem terrivelmente desfigurado que foi morto acidentalmente com um machado pelas mãos de seu próprio pai. Mas quando o barco afunda e a história de fantasmas se torna real, o grupo tenta desesperadamente escapar do pântano com vida - e inteiros.', salas: [{ id: 2, nome: 'Sala 2' }] },
      { id: 5, nome: 'Ghoul', diretor: 'Phanton Films ', duracao: 105, imagem: 'filmeE.jpeg', descricao: 'Ao ser confrontado em um centro de interrogatório militar, um prisioneiro vira o jogo a seu favor e expõe os segredos mais vergonhosos de seus inquisidores. É possível lutar contra os demônios desse mundo. Mas e quanto aos que não pertencem a ele?', salas: [] },
      { id: 6, nome: 'O Exorcista', diretor: 'William Friedkin', duracao: 95, imagem: 'filmeF.jpeg', descricao: 'Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.', salas: [] },     
      ] as Filme[],
    };
  },
  methods: {
    isUltimoFilmeSemSala(filme: Filme, index: number): boolean {
      return index === this.filmes.length - 1 && filme.salas.length === 0;
    },
  },
});
</script>
<style scoped>
.filme-imagem {
  max-width: 100%;
  height: auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.filme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

.h2 {
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 2rem;
}

.filme-list {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.filme {
  width: 100%;
  max-width: 750px;
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
}

.filme-titulo {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.filme-descricao {
  font-size: 1rem;
  margin-top: 5px;
  color: #555;
}

.sala-list {
  margin-top: 10px;
}

.sala-list-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.sala-lista {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espaco-footer {
  height: 30px;
}
</style>
