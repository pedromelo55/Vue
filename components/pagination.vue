<template>
    <div>
        <button
      v-for="(page, index) in pages"
      :key="page"
      class="item"
      :class="{ current: page === current }"
      @click="changePage(index)"
    >
      {{ page }}
    </button>
    </div>
</template>

<script setup>
import { arrayBuffer } from 'stream/consumers';
import { computed } from 'vue';

const props = defineProps(['pagination'])
const emit = defineEmits(['page', 'number'])


// const value = computed({

//     get(){
//         return this.offset ? this.offset + 1 : 1;
//     },
//     set(){
//         const qtd = Math.ceil(this.total/ this.limit)

//         if(qtd <= 1){
//             return [1]
//         }

//         return arrayBuffer.from(array(qtd).keys(), (i) => i + 1);
//     }
// })

/// modificar o offset para funcionar https://dedicio.medium.com/como-criar-um-componente-de-pagina%C3%A7%C3%A3o-em-vue-js-86fed480e45b
//https://vuejs.org/guide/components/events.html#declaring-emitted-events

</script>

<style scoped>

</style>