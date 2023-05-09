import { defineNuxtPlugin } from "#app";
// import PrimeVue from "primevue/config";
// import Button from "primevue/button";
// import OrganizationChart from "primevue/organizationchart";
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';

let defaultoptions = {treeName:'blocks-tree'}

export default defineNuxtPlugin((nuxtApp) => {
 // nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(VueBlocksTree, defaultoptions);
  //nuxtApp.vueApp.component("Button", Button);
  //other components that you need
 // nuxtApp.vueApp.component("OrganizationChart", OrganizationChart);
});

