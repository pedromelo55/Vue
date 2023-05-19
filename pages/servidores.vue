<template>
  <div>
      <h2>Servidores</h2>
      <p>Texto aleatório em português</p>
      <div class="grid grid-cols-4 gap-5 items-stretch">
        <ServidorCard v-for="(item, i) in servidores" :key="i" :servidor="item"/>
      </div>
      <div class="flex flex-row gap-1">
        <Pagination  @changePage="newPage" :pagina="pagina" :page="pages"/>
      </div>
      
      <div class="flex flex-col items-center">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
            Exibindo <span class="font-semibold text-gray-900 dark:text-white">1</span> até <span class="font-semibold text-gray-900 dark:text-white">20</span> dos <span class="font-semibold text-gray-900 dark:text-white">100</span> Servidores
        </span>
        <!-- Buttons -->
        <div class="inline-flex mt-2 xs:mt-0 gap-2">
            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-l hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Anterior
            </button>
            <button class="px-4 py-2 text-sm font-medium text-white bg-goias-50 rounded-r hover:bg-goias-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="teste">
                Proximo 
            </button>
        </div>
      </div>

  </div>
</template>

<script setup>
// import Pagination from '~/components/pagination.vue';

const { getItems } = useDirectusItems();



const pagina = ref(1)

const fetchArticles = async () => {
  try {
    const filters = { content: "testcontent", title: "Test1" };
    const items = await getItems({
      collection: "servidores",
      params: {
              // filter: {nome: "Frederico dos Santos Arraes"},
              fields: [
                  "*.*"
              ],
              limit : 20,
              page : pagina.value
          },
    });
    return items
  } catch (e) {}
};

const servidores = await fetchArticles();

const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13]


function teste(){
  pagina = ref(2)
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