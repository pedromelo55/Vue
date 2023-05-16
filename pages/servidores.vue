<template>
    <div>
        <h2>Servidores</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <div class="grid grid-cols-4 gap-5 items-stretch">
          <ServidorCard v-for="(item, i) in servidores" :key="i" :servidor="item"/>
        </div>
        <div class="flex flex-row">
          <Pagination  @changePage="change(p)" :pagina="pagina" :page="pages"/>
        </div>
    </div>
</template>

<script setup>
// import Pagination from '~/components/pagination.vue';

  const { getItems } = useDirectusItems();

  const pagina = ref(2)

  const fetchArticles = async () => {
    try {
      const filters = { content: "testcontent", title: "Test1" };
      const items = await getItems({
        collection: "servidores",
        params: {
                // filter: filters,
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