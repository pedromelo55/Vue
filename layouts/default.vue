<template>
    <div class="bg-white">
        <header class="shadow-sm bg-slate-200">
            <nav class="container mx-auto p-4 flex justify-between">
                <div class="flex gap-5">
                    <img src="../layouts/img/goias-secti.svg" alt="Logo SECTI" class="w-20 h-15">
                    <NuxtLink to="/" class="font-bold text-black">SECTI</NuxtLink>
                </div>
                <ul class="flex gap-4 text-black">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/servidores">Servidores</NuxtLink></li>
                    <li><NuxtLink to="/organograma" class="btn">Organograma</NuxtLink></li>
                    <!-- <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li> -->
                </ul>
            </nav>
        </header>

       <!-- output the page content -->
       <div class="container mx-auto p-4">
            <slot />
       </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>