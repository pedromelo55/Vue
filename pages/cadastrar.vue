<template>
    <!--Lista de servidores-->
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span class="sr-only">Action button</span>
                        Action
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label for="unidades">Filtrar por unidade: </label>
                    <select class="ml-2 py-1 border-2 border-gray-200 rounded-lg outline-none focus:ring-0 focus:border-goias-50" v-model="unidade">
                        <option value="" class="text-gray-500">Selecione uma unidade</option>
                        <option  v-for="items in posts" :value="items.unidade" > {{items.unidade}} </option>
                    </select>
                </div>

                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-0 focus:border-goias-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-goias-50"
                    placeholder="Pesquise por nome" v-model="nome" @keyup="voltarPaginaInicial">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Unidade
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ativo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody v-for="servidor in servidores">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" :src="'https://sgi.desenvolvimento.go.gov.br/perfil/'
                                + servidor.cpf + '.jpg'" alt="Imagem do servidor"
                                onerror="this.onerror=null; this.src='https://sgi.desenvolvimento.go.gov.br/perfil/0.png'">
                            <div class="pl-3">
                                <div class="text-base font-semibold">{{ servidor.nome }}</div>
                                <div class="font-normal text-gray-500">Não vai precisar de email</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            {{ servidor.lotacao.unidade }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {{ servidor.ativo }}
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar usuário</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <form action="#" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit user
                            </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                    <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Development" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                    <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                                    <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input type="password" name="new-password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="">
                                </div>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <!--Select para escolher quantos servidores serão exibidos por página-->
            <span class="inline-block mt-4">Exibindo 
                <select v-model="limite" class="my-4 py-1 border-2 border-gray-200 rounded-lg mr-2 outline-none focus:ring-0 focus:border-goias-50">
                <option v-for="item in [10,20,40,60]">{{ item }}</option>
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
    </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

const pagina = ref(1)
const limite = ref(20)
const servidores = ref({}) 
const paginas = ref(1);
const nome = ref("");
const unidade = ref("");

const props = defineProps(['servidor'])

async function carregaServidores(numPagina: number, numLimite: number, strNome: string, strUnidade: string) {
  useDirectusItems().getItems({
      collection: "servidores",
      params: {
        filter: strNome != "" ?  {"nome":{"_contains":strNome}} : strUnidade != "" ?  {"lotacao":{ "unidade": { "_contains":strUnidade}  }} : {},
        fields: ["cpf","nome","lotacao.unidade", "lotacao","ativo"],
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

const { getItems } = useDirectusItems()

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

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();

})

</script>

<style scoped>

</style>