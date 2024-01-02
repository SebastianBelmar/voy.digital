<template>
    <div id="section4" class="w-full bg-oscuro flex flex-col items-center justify-center ">
        <h1 class="text-4xl">Portafolio</h1>
        <CarouselPlay/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const CarouselPlay = defineAsyncComponent(() => import('./CarouselPlay.vue'));

export default {
    components : {
        CarouselPlay
    },
    setup(){
    
    }
}
</script>