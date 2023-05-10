<template>
   <h1>Basic</h1>
    <div>
        <blocks-tree :data="treeData" :horizontal="treeOrientation=='1'"  :collapsable="true"></blocks-tree>
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
                    ]
                },
                { 
                    label: 'Subsecretaria de Formação de Talentos e Transformação Digital', 
                    some_id: 16, 
                    expand: false, 
                    children: [
                        { 
                            label: 'Superintendência de Capacitação e Formação Tecnológica', 
                            some_id: 17, 
                            expand: false, 
                            children: [
                                { label: 'Gerência de Políticas de Ciência, Tecnologia e Inovação', some_id: 18 },
                                { label: 'Gerência de Educação Profissional e Tecnológica', some_id: 19 },
                                { label: 'Gerência de Educação Superior', some_id: 20 },
                                {
                                    label: 'Coordenação de Escola do Futuro (6)',
                                    some_id: 21,
                                    expand: false,
                                    children: [
                                        { label: 'Assessoria de Educação e Inovação Tecnológica', some_id: 22}
                                    ] 
                                },
                            ]
                        },
                        {  
                            label: 'Superintendência de Transformação Digital', 
                            some_id: 23, 
                            expand: false, 
                            children: [
                                { label: 'Gerência de Apoio às Tecnologias Exponenciais', some_id: 24 },
                                { label: 'Gerência de Fomento à Tecnologia Digital', some_id: 25 },
                                { label: 'Gerência de Inovação para o Governo', some_id: 26 },
                            ]
                        },
                    ]
                },
                {
                    label: 'Subsecretaria de Inovação e Desenvolvimento Sustentável',
                    some_id: 27,
                    expand: false,
                    children: [
                        {
                            label: 'Superintendência de Inovação Tecnológica', 
                            some_id: 28,
                            expand: false,
                            children: [
                                { label: 'Gerência de Empreendedorismo, Startups e Cluster Produtivos', some_id: 29 },
                                { label: 'Gerência de Ecossistema de Inovação', some_id: 30 },
                                { label: 'Gerência de Internacionalização de Empreendimentos Inovadores', some_id: 31 },
                                { label: 'Gerência de Articulação e Atração de Investimento para o Empreendedorismo Inovador', some_id: 32 }
                            ]
                        },
                        {
                            label: 'Superintendência de Desenvolvimento Sustentável', 
                            some_id: 33,
                            expand: false,
                            children: [
                                { label: 'Gerência de Formação da Cultura da Sustentabilidade', some_id: 34 },
                                { label: 'Gerência de Difusão de C&T', some_id: 35 },
                                { label: 'Gerência de Fomento a Tecnologia Social, Colaborativa e Sustentável', some_id: 36 },
                            ]
                        }
                    ],
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