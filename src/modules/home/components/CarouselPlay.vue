<template>     
    <div class="relative w-full  bg-oscuro-claro overflow-hidden rounded-xl" @mouseover="pausar = true" @mouseleave="activar">
        <div class="flex">
            <div class="flex flex-nowrap transition-all duration-1000 ease-in-out" :class="{ 'slide-paused' : pausar, 'slide-left' : sentido, 'slide-right' : !sentido }" 
            v-for="i in 3" :key="'slice'+i">
                <div class="px-4" v-for="(item, j) in datos" :key="i+'card'+j">
                    <CardImage @toggleEvent="openModalVideo(item.videoUrl, item.text)"  :video="item.video" :text="item.text"/>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-oscuro h-20 w-full">
        <div class="flex  items-center  w-full">
            <div class="flex gap-12 items-center justify-center text-blanco text-5xl w-full py-8">
                <i class="ri-arrow-left-s-line cursor-pointer" @click="sentido = false"></i>
                <i class="text-4xl cursor-pointer" :class="{'ri-play-mini-fill' : pausar, 'ri-pause-fill': !pausar}" @click="toggle"></i>
                <i class="ri-arrow-right-s-line cursor-pointer" @click="sentido = true"></i>
            </div>
        </div>
    </div>
    <Modal :open="openModal" :text="text" :video="videoYoutube" @closeModal="close"/>

</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import { items } from './../helpers/itemCarousel'
import { datosPortafolio } from './../assets/js/datosCarouselPlay'
import video from '@/assets/videos/Andres Maximilian.mp4'

const CardImage = defineAsyncComponent(() =>
  import('./CardImage.vue')
);

const Modal = defineAsyncComponent(() => import('./ModalVideos.vue'));


export default {
    components: {
        CardImage, // Registra el componente para usarlo en el template
        Modal
    },
    setup(){

        const datos = ref(datosPortafolio);
        const videoYoutube = ref('')
        const image = 'https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww'
        const text = ref('')

        const itemsCarousel = ref(items);

        const pausar = ref(false)
        const sentido = ref(false)
        let pausarBoton = true

        const openModal = ref(false)

        const toggle = () => {
            pausar.value = !pausar.value
            pausarBoton = !pausarBoton

        }
        const activar = () => {
            if(pausarBoton){
                pausar.value = false
            }
        }

        const openModalVideo = (url, texto) => {
          openModal.value = true
          text.value = texto
          videoYoutube.value = url
        }

        const close = () => {
          openModal.value = false
        }

        return {
          datos,
          image,
          text,
          pausar,
          sentido,
          itemsCarousel,
          video,
          videoYoutube,
          openModal,

          toggle,
          activar,
          openModalVideo,
          close
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
  animation: 15s slide infinite linear;
}
.slide-left {
  animation: 15s slide-inv infinite linear;
}

.slide-paused {
    animation-play-state: paused !important;
}
</style>