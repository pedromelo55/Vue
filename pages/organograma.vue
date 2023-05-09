<template>
   <h1>Basic</h1>
    <div>
        <blocks-tree :data="treeData" :horizontal="treeOrientation=='1'"  :collapsable="true"></blocks-tree>
    </div>

    <h1>With slots</h1>
    <div>
        <blocks-tree :data="treeData" :horizontal="treeOrientation=='1'" :collapsable="true" :props="{label: 'label', expand: 'expand', children: 'children',  key:'some_id'}">
        <template #node="{data,context}">
            <span>
                <input type="checkbox" :checked="selected.indexOf(data.some_id)> -1" @change="(e)=>toggleSelect(data,e.target.checked)"/> {{data.label}}
            </span>
            <br/>
            <span v-if="data.children && data.children.length">
                <a href="#" @click="context.toggleExpand">toggle expand</a>
            </span>
        </template>
        </blocks-tree>
        <div>
        Selected: {{selected}}
        </div>
    </div>

    <h1>Change orientation</h1>
    <select v-model="treeOrientation">
        <option value="0">Vertical</option>
        <option value="1">Horizontal</option>
    </select>

</template>

<script>
    import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({

    setup() {

        let selected = ref([]);
        let treeOrientation = ref("0");
        let treeData = reactive({
            label: 'Gabinete do Secretário',
            expand: true,
            some_id: 1,
            children: [
                { label: 'Conselho Estadual de Ciência e Tecnologia - CONCITEG', some_id: 2, },
                { label: 'Gerência da Secretaria-Geral', some_id: 3, },
                { label: 'Comunicação Setorial', some_id: 4, },
                { label: 'Chefia de Gabinete', some_id: 5, },
                { label: 'Procuradoria Setorial', some_id: 6, },
                { label: 'Escritório de Projetos Setorial', some_id: 7, },
                { 
                    label: 'Superintendência de Gestão Integrada', 
                    some_id: 8, 
                    expand: false, 
                    children: [
                        { label: 'Gerência de Gestão e Finanças', some_id: 9 },
                        { label: 'Gerência de Compras Governamentais', some_id: 10 },
                        { label: 'Gerência de Tecnologia', some_id: 11 },
                        { label: 'Gerência de Infraestrutura Predial', some_id: 12 },
                        { label: 'Gerência de Gestão e Desenvolvimento de Pessoas', some_id: 13 },
                        { label: 'Gerência de Apoio Administrativo e Logístico', some_id: 14 },
                        { label: 'Gerência de Contabilidade', some_id: 15 },
                        {  
                            label: 'subchild 2', 
                            some_id: 16, 
                            expand: false, 
                            children: [
                                { label: 'subchild 11', some_id: 7 },
                                { label: 'subchild 22', some_id: 8 },
                            ]
                        },
                    ]
                },
            ]
        });

        const toggleSelect = (node, isSelected) => {
            isSelected ? selected.value.push(node.some_id) : selected.value.splice(selected.value.indexOf(node.some_id), 1);
            if(node.children && node.children.length) {
                node.children.forEach(ch=>{
                    toggleSelect(ch,isSelected)
                })
            }
        }

        return {
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