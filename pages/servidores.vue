<template>
  <div>
      <h2>Servidores</h2>
  
      <div class="flex items-center justify-between border-2 border-gray-200 rounded-lg my-4 px-2">
        <!--Filtro por gerencia-->
        <div>
          <label for="unidades">Filtrar por unidade: </label>
          <select class="ml-2 py-1 border-2 border-gray-200 rounded-lg outline-none focus:ring-0 focus:border-goias-50" v-model="unidade">
            <option value="" class="text-gray-500">Selecione uma unidade</option>
            <option  v-for="items in posts" :value="items.unidade" > {{items.unidade}} </option>
          </select>
        </div>

        <!--Filtro por nome-->
        <div class="text-right">
          <input type="text" class="my-4 py-1 border-2 border-gray-200 rounded-lg mr-2 outline-none focus:ring-0 focus:border-goias-50" 
          placeholder="Pesquise por nome" v-model="nome" @keyup="voltarPaginaInicial">
        </div>
        
      </div>
      
      <!--Carregar cards dos servidores-->
      <div class="grid grid-cols-4 gap-5 items-stretch">
        <ServidorCard v-for="(item, i) in servidores" :key="i" :servidor="item"/>
      </div>
      
      <!-- <div class="flex flex-row gap-1">
        <Pagination  @changePage="" :pagina="pagina" :page="pages"/>
      </div> -->
      
        <!--Select para escolher quantos servidores serão exibidos por página-->
      <span class="inline-block mt-4">Exibindo 
        <select v-model="limite" class="rounded border-">
        <option v-for="item in [10,20,40,]">{{ item }}</option>
      </select> servidores por página.</span>

      <div class="flex flex-col items-center mt-4">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
            Página <span class="font-semibold text-gray-900 dark:text-white">{{ pagina }}</span> de <span class="font-semibold text-gray-900 dark:text-white">{{ paginas }}</span>
        </span>
        <!-- Buttons -->
        <div class="inline-flex mt-2 mb-5 xs:mt-0 gap-2">
            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-l hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="anterior(); scrollTop()">
                Anterior
            </button>

            <select v-model="pagina" class="rounded border-goias-50 outline-none focus:ring-0 focus:border-goias-50">
              <option v-for="item in paginas">{{ item }}</option>
            </select>

            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-r hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="proximo(); scrollTop()">
                Proximo 
            </button>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
// import Pagination from '~/components/pagination.vue';

import { idText } from 'typescript';
import Organograma from './organograma.vue';

const pagina = ref(1)
const limite = ref(20)
const servidores = ref({}) 
const paginas = ref(1);
const nome = ref("");
const unidade = ref("");


// const { getItems } = useDirectusItems();

// const fetchArticles = async () => {
//   try {
//     const filters = { content: "testcontent", title: "Test1" };
//     const items = await getItems({
//       collection: "servidores",
//       params: {
//               // filter: {nome: "Frederico dos Santos Arraes"},
//               fields: [
//                   "*.*"
//               ],
//               limit : limite.value,
//               page : pagina.value
//           },
//     });
//     return items
//   } catch (e) {}
// };
// const servidores = await fetchArticles();
async function carregaServidores(numPagina: number, numLimite: number, strNome: string, strUnidade: string) {
  useDirectusItems().getItems({
      collection: "servidores",
      params: {
        //filter: {"unidade":strUnidade},
        //filter:  strNome != "" ?  {"nome":{"_contains":strNome}} : {},

        //filter: strUnidade != "" ?  {"lotacao":{ "unidade": { "_contains":strUnidade}  }} : {},

        filter: strNome != "" ?  {"nome":{"_contains":strNome}} : strUnidade != "" ?  {"lotacao":{ "unidade": { "_contains":strUnidade}  }} : {},

        fields: ["cpf","nome","lotacao.unidade", "lotacao"],
        // fields: ["*", "lotacao.unidade"],
        limit: numLimite,
        page: numPagina,
        sort: "nome",
        meta: "filter_count"
      },
    }).then((data) => {
      servidores.value = data.data;
      paginas.value = Math.ceil((data.meta?.filter_count ?? 1)/numLimite);
    });
}

const { getItems } = useDirectusItems()
const teste = async () => {
  try {
    const filters = { content: "testcontent", title: "Test1" };
    const items = await getItems({
      collection: "organograma",
      params: {
              // filter: {id:4},
              fields: [
                  "*.*"
              ],
          },
    });
    return items
  } catch (e) {}
};
const posts = await teste()


watch(
  [pagina,limite,nome,unidade],([novaPagina,novoLimite,novoNome,novaUnidade])=>carregaServidores(novaPagina,novoLimite,novoNome,novaUnidade)
  ,{ immediate: true }
)

// function moveTo () {
//       let to = this.moveToDown
//         ? this.$refs.description.offsetTop - 60
//         : 0

//       window.scroll({
//         top: to,
//         left: 0,
//         behavior: 'smooth'
//       })

//       this.moveToDown = !this.moveToDown
//     }

function voltarPaginaInicial(){
  // if(nome.value == novoNome){
    pagina.value = 1
  // }
}

function scrollTop() {
  window.scrollTo(0, this.top);
}

function anterior(){
  if(pagina.value > 1){
    pagina.value--
  }
}

function proximo(){
    if(pagina.value < paginas.value){
      pagina.value++
    }
  }

  

</script>

<style scoped>
  h2 {
      margin-bottom: 20px;
      font-size: 36px;
  }
  p {
      margin: 20px 0;
  }

</style>

<!-- colocar uma busca na tela -->
<!-- deixar uma opção para editar o cargo, unidade  -->
<!-- no organograma um jeito de (interface) definir o responsável pela unidade -->
<!-- colocar mais páginas em servidores para mostar todo mundo -->

<!-- emit pega dados e joga para fora emitindo um evento -->
<!-- props e para exportar dados para outro componente -->