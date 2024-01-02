<template>
    <div class="flex gap-4 w-full overflow-hidden px-4 bg-principal">
        <template v-for="(item, index) in listaDeElementos" :key="index">
            <CardImage>
                <template #imagen>
                    <img src="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww" alt="imagen"
                    class="scale-125 translate-y-2">
                </template>
                <template #titulo>
                    {{ item }}
                </template>
            </CardImage>
        </template>
    </div>
    <div class="flex  items-center bg-fondo w-full">
            <div class="flex gap-12 items-center justify-center bg-claro text-blanco text-4xl w-full py-4">
                <i class="ri-arrow-left-s-line"></i>
                <i class="ri-play-mini-fill text-3xl"></i>
                <i class="ri-arrow-right-s-line"></i>
            </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const CardImage = defineAsyncComponent(() => import('./CardImage.vue'));

export default {
    components : {
        CardImage
    },
    setup(){
        const listaDeElementos = ['Desarrollo web', 'Edicion de video', 'Marca Grafica', 'Desarrollo web']

        return {
            listaDeElementos
        }
    }
}
</script>

<style>

</style>