<template>     
    <div class="relative w-full  bg-oscuro-claro overflow-hidden rounded-xl" @mouseover="carouselStop" @mouseleave="carouselStart">
        <div class="flex">
            <swiper
                    :slidesPerView="numberSlides"
                    :loop="true"
                    :cssMode="true"
                    :autoplay="{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }"
                    :mousewheel="true"
                    :keyboard="true"
                    :modules="modules"
                    class="mySwiper"
                    @swiper="onSwiper"
                >
                    <swiper-slide v-for="(item, i) in datos" :key="'card'+i" class="">                
                        <CardImage class="mx-auto" @toggleEvent="openModalVideo(item.videoUrl, item.text)"  :video="item.video" :text="item.text"/>
                    </swiper-slide>

                </swiper>


        </div>
    </div>

    <div class="bg-oscuro h-20 w-full">
        <div class="flex  items-center  w-full">
            <div class="flex gap-12 items-center justify-center text-blanco text-5xl w-full py-8">
                <i class="ri-arrow-left-s-line cursor-pointer" @click="prev" @mouseover="carouselStop" @mouseleave="carouselStart"></i>
                <i class="text-4xl cursor-pointer" :class="{'ri-play-mini-fill' : pausar, 'ri-pause-fill': !pausar}" @click="toggle"></i>
                <i class="ri-arrow-right-s-line cursor-pointer" @click="next" @mouseover="carouselStop" @mouseleave="carouselStart"></i>
            </div>
        </div>
    </div>
    <Modal :open="openModal" :text="text" :video="videoYoutube" @closeModal="close"/>

</template>

<script>
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { datosPortafolio } from './../assets/js/datosCarouselPlay'
import video from '@/assets/videos/Andres Maximilian.mp4'

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const CardImage = defineAsyncComponent(() =>
  import('./CardImage.vue')
);

const Modal = defineAsyncComponent(() => import('./ModalVideos.vue'));


export default {
    components: {
        CardImage, // Registra el componente para usarlo en el template
        Modal,
        Swiper,
        SwiperSlide,
    },
    setup(){

        const datos = ref(datosPortafolio);
        const text = ref('')

        const pausar = ref(false)
        let pausarBoton = true

        const openModal = ref(false)
        const videoYoutube = ref('')

        const toggle = () => {
            pausar.value = !pausar.value
            pausarBoton = !pausarBoton
            if(pausarBoton) {
              swiperInstance.value?.autoplay?.start()
            } else {
              swiperInstance.value?.autoplay?.stop()
            }

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
        
        const swiperInstance = ref();

        function onSwiper(swiper) {
          swiperInstance.value = swiper;
        }

        function next() {
        // swiperInstance?.value?.slideTo(position);
          swiperInstance?.value?.slideNext();
        }
        function prev() {
        // swiperInstance?.value?.slideTo(position);
          swiperInstance?.value?.slidePrev()
        }
        function carouselStop() {
          if(pausarBoton){
              swiperInstance.value?.autoplay?.stop()
              pausar.value = true
            }
        }
        function carouselStart() {
          if(pausarBoton){
              swiperInstance.value?.autoplay?.start();
              pausar.value = false
          }
        }

        const numberSlides = ref(1);

        const handleResize = () => {
          const windowWidth = window.innerWidth;
          numberSlides.value = 1
          if(windowWidth>400){
            numberSlides.value =  windowWidth /273
          }

        };

        onMounted(() => {
          handleResize()
          window.addEventListener('resize', handleResize);
        });

        onBeforeUnmount(() => {
          window.removeEventListener('resize', handleResize);
        });

        return {
          datos,
          text,
          pausar,
          video,
          openModal,
          videoYoutube,

          onSwiper,
          next,
          prev,
          carouselStop,
          carouselStart,

          toggle,
          activar,
          openModalVideo,
          numberSlides,
          close,

          navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },

            modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard],
        }
    }
}
</script>

<style scoped>
</style>