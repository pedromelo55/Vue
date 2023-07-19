<template>
    <div>
        <h2>Cadastro</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis,
        ipsum expedita doloremque modi incidunt itaque quis asperiores consequatur repellat.</p>
        <label for="categoria">Filtrar por categoria: </label>
          <select class="ml-2 py-1 border-2 border-gray-200 rounded-lg outline-none focus:ring-0 focus:border-goias-50" v-model="unidade">
            <option value="" class="text-gray-500">Selecione uma categoria</option>
            <option  v-for="items in posts" :value="items.unidade" > {{items.unidade}} </option>
          </select>
          <!--cpf, nome, mesa (opcional), lotação, lotação extra (opcional), ativo --> 
          <!--Checkbox desmarcado para mostrar servidores inativos-->
          <!--Form de servidor-->
          <div>
            <input type="text" class="my-4 py-1 border-2 border-gray-200 rounded-lg mr-2 outline-none focus:ring-0 focus:border-goias-50" 
            placeholder="Nome">
            <input type="text" class="my-4 py-1 border-2 border-gray-200 rounded-lg mr-2 outline-none focus:ring-0 focus:border-goias-50" 
            placeholder="CPF">
            <input type="text" class="my-4 py-1 border-2 border-gray-200 rounded-lg mr-2 outline-none focus:ring-0 focus:border-goias-50" 
            placeholder="Mesa">
            <select class="ml-2 py-1 border-2 border-gray-200 rounded-lg outline-none focus:ring-0 focus:border-goias-50" v-model="unidade">
                <option value="" class="text-gray-500">Selecione uma categoria</option>
                <option  v-for="items in posts" :value="items.unidade" > {{items.unidade}} </option>
            </select>

        </div>
    </div>
</template>

<script setup>

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