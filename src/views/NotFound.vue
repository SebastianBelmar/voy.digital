<template>
    <NavBar />
    <div class="w-full text-center p-[20vh]">
        <h1 class="text-oscuro text-4xl">Página No Encontrada</h1>
    </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));

</script>