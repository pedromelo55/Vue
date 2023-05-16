<template>
    <div v-for="pagina in page">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
      @click="changePage(pagina)">{{ pagina }} </button>
    </div>
</template>

<script setup>
import { arrayBuffer } from 'stream/consumers';
import { computed } from 'vue';

const props = defineProps(['pagina', 'page'])
const emit = defineEmits(['changePage'])



/// modificar o offset para funcionar https://dedicio.medium.com/como-criar-um-componente-de-pagina%C3%A7%C3%A3o-em-vue-js-86fed480e45b
//https://vuejs.org/guide/components/events.html#declaring-emitted-events

</script>

<style scoped>

</style>