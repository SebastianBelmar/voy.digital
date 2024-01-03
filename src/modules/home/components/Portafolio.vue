<template>
    <div id="section4" class="w-full bg-oscuro flex flex-col items-center justify-center ">
        <div class="w-full max-w-[1200px] px-6 sm:px-12 mt-16 mb-8">
            <h3 class="text-blanco text-2xl md:text-4xl xl:text-4xl font-bold w-full text-center">Algunos de nuestros trabajos</h3>
            <h4 class="text-blanco text-xl md:text-2xl xl:text-2xl md:mt-4 w-full text-center mt-2 mb-6">Marca gráfica, Desarrollo web, Edición de Videos y más, todo en un solo lugar.</h4>
        </div>
        <div class="w-full pb-8">
            <CarouselPlay/>
        </div>
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