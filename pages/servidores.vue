<template>
  <div>
      <h2>Servidores</h2>
      <p>Texto aleatório em português. Teste de github</p>
      <div class="grid grid-cols-4 gap-5 items-stretch">
        <ServidorCard v-for="(item, i) in servidores" :key="i" :servidor="item"/>
      </div>
      <div class="flex flex-row gap-1">
        <Pagination  @changePage="" :pagina="pagina" :page="pages"/>
      </div>
      
      <div class="flex flex-col items-center">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
            Exibindo <span class="font-semibold text-gray-900 dark:text-white">1</span> até <span class="font-semibold text-gray-900 dark:text-white">20</span> dos <span class="font-semibold text-gray-900 dark:text-white">100</span> Servidores
        </span>
        <!-- Buttons -->
        <div class="inline-flex mt-2 xs:mt-0 gap-2">
            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-l hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="anterior">
                Anterior
            </button>
            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-r hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="proximo">
                Proximo 
            </button>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">
// import Pagination from '~/components/pagination.vue';

const pagina = ref(1)
const limite = ref(20)
const servidores = ref({}) // corrigir o nome



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
async function carregaServidores(numPagina: number) {
  useDirectusItems().getItems({
      collection: "servidores",
      params: {
        limit: 20,
        page: numPagina,
        sort: "nome"
      },
    }).then((data) => servidores.value = data);
}

watch(
  pagina,(newValue)=>carregaServidores(newValue)
  ,{ immediate: true }
)
const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function anterior(){
  if(pagina.value > 1){
    pagina.value--
  }
}


function proximo(){
    if(pagina.value < 13){
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