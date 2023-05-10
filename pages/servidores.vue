<template>
    <div>
        <h2>Servidores</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in servidores">
                <ServidorCard/></div>
        </div>
    </div>
</template>

<script setup>
     const { getItems } = useDirectusItems();
     const fetchArticles = async () => {
  try {
    const filters = { content: "testcontent", title: "Test1" };
    const items = await getItems({
      collection: "servidores",
      params: {
        // filter: filters,
      },
    });
    return items
  } catch (e) {}
};

const servidores = await fetchArticles();
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
