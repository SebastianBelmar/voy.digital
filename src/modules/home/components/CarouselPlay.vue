<template>     
    <div class="relative w-full max-w-[1000px] bg-oscuro-claro overflow-hidden rounded-xl" @mouseover="pausar = true" @mouseleave="activar">
        <div class="absolute bg-gradient-to-r from-oscuro to-[rgba(0,0,0,0)] w-[8vw] h-full z-1 left-0 opacity-30">
        </div>
        <div class="absolute bg-gradient-to-l from-oscuro to-[rgba(0,0,0,0)] w-[8vw] h-full z-1 right-0 opacity-30">
        </div>
        <!-- :style="{animation: `35s slide infinite linear`}" -->

        <div class="flex" >

            <div class="flex flex-nowrap transition-all duration-1000 ease-in-out" :class="{ 'slide-paused' : pausar, 'slide-left' : sentido, 'slide-right' : !sentido }" 
            v-for="i in 3" :key="'slice'+i">
                <div class="px-4" v-for="(item, j) in itemsCarousel" :key="i+'card'+j">
                    <CardImage :image="item.image" :text="item.text"/>
                </div>
            </div>


        </div>



    </div>
    <div class="bg-oscuro h-20 w-full max-w-[1000px]">
        <div class="flex  items-center  w-full">
            <div class="flex gap-12 items-center justify-center text-blanco text-4xl w-full py-4">
                <i class="ri-arrow-left-s-line cursor-pointer" @click="sentido = false"></i>
                <i class="text-3xl cursor-pointer" :class="{'ri-play-mini-fill' : !pausar, 'ri-pause-fill': pausar}" @click="toggle"></i>
                <i class="ri-arrow-right-s-line cursor-pointer" @click="sentido = true"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import { items } from './../helpers/itemCarousel'

const CardImage = defineAsyncComponent(() =>
  import('./CardImage.vue')
);

export default {
    components: {
        CardImage // Registra el componente para usarlo en el template
    },
    setup(){
        const image = 'https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww'
        const text = 'hola foca'

        const itemsCarousel = ref(items);

        const pausar = ref(false)
        const sentido = ref(false)
        let pausarBoton = true

        const toggle = () => {
            pausar.value = !pausar.value
            pausarBoton = !pausarBoton

        }
        const activar = () => {
            if(pausarBoton){
                pausar.value = false
            }
        }

        return {
            image,
            text,
            pausar,
            sentido,
            itemsCarousel,

            toggle,
            activar
        }
    }
}
</script>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-inv {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-right {
  animation: 10s slide infinite linear;
}
.slide-left {
  animation: 10s slide-inv infinite linear;
}

.slide-paused {
    animation-play-state: paused !important;
}
</style>