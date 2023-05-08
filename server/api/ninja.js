export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event)

    // const { age } = await readBody(event)

    //api call with private key

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=TZTaMKgHMDxgTcxj4PbbxvDDBmjzYbIa2DtfmKvp')

    return data
})