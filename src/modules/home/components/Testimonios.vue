<template>
    <div id="section5" class="w-full h-[100vh] bg-principal flex flex-col items-center justify-center">
        <h1 class="text-4xl">Testimonios</h1>
        <CarouselProfiles />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const CarouselProfiles = defineAsyncComponent(() => import('./CarouselProfiles.vue'));

export default {
    components : {
        CarouselProfiles
    },
    setup(){
    
    }
}
</script>