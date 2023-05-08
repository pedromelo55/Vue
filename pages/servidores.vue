<template>
    <div>
        <h2>Servidores</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
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