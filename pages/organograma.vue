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
    definePageMeta({
        layout: 'org'
    })

    import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({

    setup() {

        let selected = ref([]);
        let treeOrientation = ref("0");
        let treeData = reactive({
    "label": "Gabinete do Secretário",
    "expand": false,
    "some_id": 1,
    "children": [
      {
        "label": "Procuradoria Setorial",
        "some_id": 2
      },
      {
        "label": "Conselho Estadual de Ciência e Tecnologia - CONCITEG",
        "some_id": 3
      },
      {
        "label": "Chefia de Gabinete",
        "some_id": 4
      },
      {
        "label": "Gerência da Secretaria-Geral",
        "some_id": 5
      },
      {
        "label": "Comunicação Setorial",
        "some_id": 6
      },
      {
        "label": "Escritório de Projetos Setorial",
        "some_id": 7
      },
      {
        "label": "Superintendência de Gestão Integrada",
        "some_id": 8
      },
      {
        "label": "Subsecretaria de Formação de Talentos e Transformação Digital",
        "some_id": 9
      },
      {
        "label": "Subsecretaria de Inovação e Desenvolvimento Sustentável",
        "some_id": 10
      }
    ]
  },
  {
    "label": "Unidades Inativas",
    "expand": false,
    "some_id": 45,
    "children": [
      {
        "label": "Gerência De Desenvolvimento Dos Parques Tecnológicos",
        "some_id": 48
      },
      {
        "label": "Superintendência De Políticas Para Cidades E Infraestrutura",
        "some_id": 49
      }
    ]
  },
  {
    "label": "Procuradoria Setorial",
    "expand": false,
    "some_id": 2,
    "children": []
  },
  {
    "label": "Gerência de Gestão e Finanças",
    "expand": false,
    "some_id": 18,
    "children": []
  },
  {
    "label": "Superintendência de Capacitação e Formação Tecnológica",
    "expand": false,
    "some_id": 25,
    "children": [
      {
        "label": "Gerência de Políticas de Ciência, Tecnologia e Inovação",
        "some_id": 27
      },
      {
        "label": "Gerência de Educação Profissional e Tecnológica",
        "some_id": 28
      },
      {
        "label": "Gerência de Educação Superior",
        "some_id": 29
      },
      {
        "label": "Coordenação de Escola do Futuro",
        "some_id": 30
      }
    ]
  },
  {
    "label": "Gerência de Políticas de Ciência, Tecnologia e Inovação",
    "expand": false,
    "some_id": 27,
    "children": []
  },
  {
    "label": "Assessoria de Educação e Inovação Tecnológica",
    "expand": false,
    "some_id": 31,
    "children": []
  },
  {
    "label": "Gerência de Apoio às Tecnologias Exponenciais",
    "expand": false,
    "some_id": 32,
    "children": []
  },
  {
    "label": "Superintendência de Inovação Tecnológica",
    "expand": false,
    "some_id": 35,
    "children": [
      {
        "label": "Gerência de Empreendedorismo, Startups e Cluster Produtivos",
        "some_id": 37
      },
      {
        "label": "Gerência de Ecossistema de Inovação",
        "some_id": 38
      },
      {
        "label": "Gerência de Internacionalização de Empreendimentos Inovadores",
        "some_id": 39
      },
      {
        "label": "Gerência de Articulação e Atração de Investimento para o Empreendedorismo Inovador",
        "some_id": 40
      }
    ]
  },
  {
    "label": "Gerência de Empreendedorismo, Startups e Cluster Produtivos",
    "expand": false,
    "some_id": 37,
    "children": []
  },
  {
    "label": "Gerência de Formação da Cultura da Sustentabilidade",
    "expand": false,
    "some_id": 41,
    "children": []
  },
  {
    "label": "Gerência De Desenvolvimento Dos Parques Tecnológicos",
    "expand": false,
    "some_id": 48,
    "children": []
  },
  {
    "label": "Conselho Estadual de Ciência e Tecnologia - CONCITEG",
    "expand": false,
    "some_id": 3,
    "children": []
  },
  {
    "label": "Gerência de Compras Governamentais",
    "expand": false,
    "some_id": 19,
    "children": []
  },
  {
    "label": "Superintendência de Transformação Digital",
    "expand": false,
    "some_id": 26,
    "children": [
      {
        "label": "Gerência de Apoio às Tecnologias Exponenciais",
        "some_id": 32
      },
      {
        "label": "Gerência de Fomento à Tecnologia Digital",
        "some_id": 33
      },
      {
        "label": "Gerência de Inovação para o Governo",
        "some_id": 34
      }
    ]
  },
  {
    "label": "Gerência de Educação Profissional e Tecnológica",
    "expand": false,
    "some_id": 28,
    "children": []
  },
  {
    "label": "Gerência de Fomento à Tecnologia Digital",
    "expand": false,
    "some_id": 33,
    "children": []
  },
  {
    "label": "Superintendência de Desenvolvimento Sustentável",
    "expand": false,
    "some_id": 36,
    "children": [
      {
        "label": "Gerência de Formação da Cultura da Sustentabilidade",
        "some_id": 41
      },
      {
        "label": "Gerência de Difusão de C&T",
        "some_id": 42
      },
      {
        "label": "Gerência de Fomento a Tecnologia Social, Colaborativa e Sustentável",
        "some_id": 43
      }
    ]
  },
  {
    "label": "Gerência de Ecossistema de Inovação",
    "expand": false,
    "some_id": 38,
    "children": []
  },
  {
    "label": "Gerência de Difusão de C&T",
    "expand": false,
    "some_id": 42,
    "children": []
  },
  {
    "label": "Superintendência De Políticas Para Cidades E Infraestrutura",
    "expand": false,
    "some_id": 49,
    "children": []
  },
  {
    "label": "Chefia de Gabinete",
    "expand": false,
    "some_id": 4,
    "children": []
  },
  {
    "label": "Gerência de Tecnologia",
    "expand": false,
    "some_id": 20,
    "children": []
  },
  {
    "label": "Gerência de Educação Superior",
    "expand": false,
    "some_id": 29,
    "children": []
  },
  {
    "label": "Gerência de Inovação para o Governo",
    "expand": false,
    "some_id": 34,
    "children": []
  },
  {
    "label": "Gerência de Internacionalização de Empreendimentos Inovadores",
    "expand": false,
    "some_id": 39,
    "children": []
  },
  {
    "label": "Gerência de Fomento a Tecnologia Social, Colaborativa e Sustentável",
    "expand": false,
    "some_id": 43,
    "children": []
  },
  {
    "label": "Gerência da Secretaria-Geral",
    "expand": false,
    "some_id": 5,
    "children": []
  },
  {
    "label": "Gerência de Infraestrutura Predial",
    "expand": false,
    "some_id": 21,
    "children": []
  },
  {
    "label": "Coordenação de Escola do Futuro",
    "expand": false,
    "some_id": 30,
    "children": [
      {
        "label": "Assessoria de Educação e Inovação Tecnológica",
        "some_id": 31
      }
    ]
  },
  {
    "label": "Gerência de Articulação e Atração de Investimento para o Empreendedorismo Inovador",
    "expand": false,
    "some_id": 40,
    "children": []
  },
  {
    "label": "Comunicação Setorial",
    "expand": false,
    "some_id": 6,
    "children": []
  },
  {
    "label": "Gerência de Gestão e Desenvolvimento de Pessoas",
    "expand": false,
    "some_id": 22,
    "children": []
  },
  {
    "label": "Escritório de Projetos Setorial",
    "expand": false,
    "some_id": 7,
    "children": []
  },
  {
    "label": "Gerência de Apoio Administrativo e Logístico",
    "expand": false,
    "some_id": 23,
    "children": []
  },
  {
    "label": "Superintendência de Gestão Integrada",
    "expand": false,
    "some_id": 8,
    "children": [
      {
        "label": "Gerência de Gestão e Finanças",
        "some_id": 18
      },
      {
        "label": "Gerência de Compras Governamentais",
        "some_id": 19
      },
      {
        "label": "Gerência de Tecnologia",
        "some_id": 20
      },
      {
        "label": "Gerência de Infraestrutura Predial",
        "some_id": 21
      },
      {
        "label": "Gerência de Gestão e Desenvolvimento de Pessoas",
        "some_id": 22
      },
      {
        "label": "Gerência de Apoio Administrativo e Logístico",
        "some_id": 23
      },
      {
        "label": "Gerência de Contabilidade",
        "some_id": 24
      }
    ]
  },
  {
    "label": "Gerência de Contabilidade",
    "expand": false,
    "some_id": 24,
    "children": []
  },
  {
    "label": "Subsecretaria de Formação de Talentos e Transformação Digital",
    "expand": false,
    "some_id": 9,
    "children": [
      {
        "label": "Superintendência de Capacitação e Formação Tecnológica",
        "some_id": 25
      },
      {
        "label": "Superintendência de Transformação Digital",
        "some_id": 26
      }
    ]
  },
  {
    "label": "Subsecretaria de Inovação e Desenvolvimento Sustentável",
    "expand": false,
    "some_id": 10,
    "children": [
      {
        "label": "Superintendência de Inovação Tecnológica",
        "some_id": 35
      },
      {
        "label": "Superintendência de Desenvolvimento Sustentável",
        "some_id": 36
      }
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