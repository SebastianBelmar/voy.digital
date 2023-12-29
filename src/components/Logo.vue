<template>
    <img class="cursor-pointer" src="./../assets/logo.PNG" alt="logo" @click="goToWelcome">
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const goToWelcome = () => {
const router = useRouter();
router.push({ name: 'welcome', params: {} });
};
</script>
