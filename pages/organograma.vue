<template>
   <h1>Basic</h1>
    <div>
        <blocks-tree :data="modifiedString" :horizontal="treeOrientation=='1'"  :collapsable="true"></blocks-tree>
    </div>

    <h1>Change orientation</h1>

    <pre>{{ modifiedString }}</pre>

    <select v-model="treeOrientation" class="w-36">
        <option value="0">Vertical</option>
        <option value="1">Horizontal</option>
    </select>

</template>

<script>
import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({

    async setup() {

        let selected = ref([]);
        let treeOrientation = ref("0");

        
        onMounted(async () => {
            await teste();
            
        });
        
        const { getItems } = useDirectusItems()
        
        let treeData = reactive([]);
        let modifiedString = ref({});
        
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

            items.forEach((item => {
                const {id: some_id, unidade: label, unidades_filhas} = item;
                const children = unidades_filhas.map(child =>  ({
                        label: child.unidade,
                        some_id: child.id,
                    
                }))
                const father = {
                    label,
                    expand: false,
                    some_id,
                    children: children
                }
                
                treeData.push(father);

            }))

            const novaString = JSON.stringify(treeData);
            modifiedString.value = (novaString.slice(2, -2)) 
            console.log(modifiedString);
    
        } catch (e) {}
        };



        const toggleSelect = (node, isSelected) => {
            isSelected ? selected.value.push(node.some_id) : selected.value.splice(selected.value.indexOf(node.some_id), 1);
            if(node.children && node.children.length) {
                node.children.forEach(ch=>{
                    toggleSelect(ch,isSelected)
                })
            }
        }

        return {
            modifiedString,
            treeData,
            selected,
            toggleSelect,
            treeOrientation
        }
    }
})
</script>

<style scoped>

</style>