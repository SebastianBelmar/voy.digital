<template>
    <NavBar @openEvent="openSideBar" :open="mostrar"/>
    <SideBar @closeEvent="closeSideBar" :open="mostrar"/>
    <router-view></router-view>

    <div class="h-40"></div>

</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue'
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const SideBar = defineAsyncComponent(() => import('@/components/SideBar.vue'));

const mostrar = ref(false);

const openSideBar = () => {
    mostrar.value = !mostrar.value;
}

const closeSideBar = () => {
  mostrar.value = false;
}

</script>
