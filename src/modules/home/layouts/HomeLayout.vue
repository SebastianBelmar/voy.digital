<template>
  <SideBar @closeEvent="closeSideBar" :open="mostrar" />
  <NavBar  @openEvent="openSideBar" :open="mostrar"/>
    <router-view></router-view>

  <Footer />
    <div class="w-1/2">
      <FloatingButton />
    </div>
</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue'
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const SideBar = defineAsyncComponent(() => import('@/components/SideBar.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const FloatingButton = defineAsyncComponent(() => import('@/components/FloatingButton.vue'));

const mostrar = ref(false);

const openSideBar = () => {
    mostrar.value = !mostrar.value;
}

const closeSideBar = () => {
  mostrar.value = false;
}

</script>
