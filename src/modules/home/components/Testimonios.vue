<template>
    <div id="section5" class="w-full bg-blanco flex flex-col items-center justify-center">
        <div class="w-full max-w-[1200px] px-6 sm:px-12 my-16 md:my-24 lg:my-36">
            <h3 class="text-2xl md:text-4xl xl:text-4xl font-bold w-full text-center">Testimonios</h3>
            <h4 class="text-xl md:text-2xl xl:text-2xl md:mt-4 w-full text-center mt-2 mb-6">Esta es la voz de quienes nos conocen</h4>
            <CarouselProfiles />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const CarouselProfiles = defineAsyncComponent(() => import('./CarouselTestimonials.vue'));

export default {
    components : {
        CarouselProfiles
    },
    setup(){
    
    }
}
</script>