<template>
    <div v-for="pagina in page">
      <button class="bg-goias-50 hover:bg-goias-100 text-white font-bold mt-2 py-2 px-4 border-b-4 border-goias-150 hover:border-goias-50 rounded" 
      @click="$emit('changePage')"
      >{{ pagina }} </button>
    </div>
</template>

<script setup>


const props = defineProps(['pagina', 'page'])
const emit = defineEmits(['changePage'])



/// modificar o offset para funcionar https://dedicio.medium.com/como-criar-um-componente-de-pagina%C3%A7%C3%A3o-em-vue-js-86fed480e45b
//https://vuejs.org/guide/components/events.html#declaring-emitted-events

</script>

<style scoped>

</style>