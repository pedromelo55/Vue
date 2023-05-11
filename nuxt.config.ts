export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', 
        'nuxt-directus',
    ],
    directus: {
        url: "https://sgi.desenvolvimento.go.gov.br/parametros-bi/"
    },
    app: {
        head: {
            title: 'Organização SECTI',
            meta: [
                { name: 'description', content: 'Organização interna da SECTI' }
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