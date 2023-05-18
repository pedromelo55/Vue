// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-directus'
    ],
    directus: {
        url: "https://sgi.desenvolvimento.go.gov.br/parametros-bi/"
    },
    app: {
        head: {
            title: 'ShopApp',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
    },
    build: {
        transpile: ['primevue']
    },

})
