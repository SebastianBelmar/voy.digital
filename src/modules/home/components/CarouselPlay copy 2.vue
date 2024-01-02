<template>
    <swiper
      :slidesPerView="1"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: true }"
      :speed="1000"
      :spaceBetween="30"
      :grabCursor="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >


      <swiper-slide>
            <div>
            <div class="h-full w-56 bg-principal overflow-hidden rounded-2xl z-0">  
                <div class="h-80">
                    <img src="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww" alt="imagen"
                    class="scale-125 translate-y-2">
                </div>
            </div>
            <div class="z-1 relative -top-14 bg-success text-blanco ancho p-2 rounded-xl mb-4 mx-auto text-center">
                1
            </div>
        </div>
      </swiper-slide>
      <swiper-slide>
            <div>
            <div class="h-full w-56 bg-principal overflow-hidden rounded-2xl z-0">  
                <div class="h-80">
                    <img src="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8OSUzQTE2fGVufDB8fDB8fHww" alt="imagen"
                    class="scale-125 translate-y-2">
                </div>
            </div>
            <div class="z-1 relative -top-14 bg-success text-blanco ancho p-2 rounded-xl mb-4 mx-auto text-center">
                2
            </div>
        </div>
      </swiper-slide>
    </swiper>

    <swiper
    :slidesPerView="1"
    :autoplay="{ delay: 0, disableOnInteraction: false }"
    :speed="1000"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    import {  Navigation, Autoplay } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';

    //import { defineAsyncComponent } from 'vue';

    //const CardImage = defineAsyncComponent(() => import('./CardImage.vue'));
    // import required modules
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [ Autoplay,  Navigation],
        };
      },
    };
  </script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>