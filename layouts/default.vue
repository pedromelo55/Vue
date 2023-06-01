<template>
    <div class="bg-white">
        <header class="shadow-sm bg-slate-100">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <!--<img src="../layouts/img/goias-secti.svg" alt="Logo SECTI" class="w-20 h-15">-->
                <NuxtLink to="/" class="font-bold text-2xl text-slate-800 flex items-center gap-2"><img src="../layouts/img/orgGO50.svg" alt="Logo OrgGO" class="h-12">OrganoGOV</NuxtLink>

                <ul class="flex gap-4 text-black font-medium">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/servidores">Servidores</NuxtLink></li>
                    <li><NuxtLink to="/organograma">Organograma</NuxtLink></li>
                </ul>
            </nav>
        </header>
       
        <!--Add "Icon by www.wishforge.games on freeicons.io on footer"-->
       <!-- output the page content -->
       <div class="container mx-auto p-4">
            <slot />
       </div>
       <footer>
            <hr>
            <img src="../layouts/img/secti-positivo.png" alt="Logo da SECTI" class="mt-5 ml-5 ">
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #0fac82;
}

</style>