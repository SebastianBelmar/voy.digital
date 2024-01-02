<template>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper"  @swiper="onSwiper">
      <swiper-slide>hola foca 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
    <div class="swiper-button-prev">previo</div>
    <div class="swiper-button-next" @click="goToSlide(3)">siguiente</div>
    <button  @click="goToSlide(3)">
        Go to slide 3
    </button>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Pagination } from 'swiper/modules';
    import { ref } from 'vue';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const swiperInstance = ref();

        function onSwiper(swiper) {
            swiperInstance.value = swiper;
        }

        function goToSlide(position) {
           // swiperInstance?.value?.slideTo(position);
            swiperInstance?.value?.slideNext();
        }
        return {
            onSwiper,
            goToSlide,

            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                return `<span class="${className} custom-bullet" style="background-color: #ff0000;"></span>`;
                },
            },
            modules: [Pagination],
        };
      },
    };
  </script>

    <style scoped>
    .custom-bullet {
        
  width: 10px;
  height: 10px;
  background-color: #ff0000;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px; /* Espaciado entre los bullets */
  cursor: pointer;
}
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

        .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination-bullet-active {
        color: #fff;
        background: #ffffff;
        }

        .swiper-button-next, 
        .swiper-button-prev {
        color: red;
        }

        .swiper-button-next:after, 
        .swiper-button-prev:after {
        font-size: 30px;
        }

        .swiper-button-next.swiper-button-disabled, 
        .swiper-button-prev.swiper-button-disabled {
            opacity: 0;
        }

        .swiper-pagination-bullet-active {
        background-color: red !important;
        }

        .swiper-pagination-bullet {
        background-color: rgba(255, 0, 0, 0.5);
        }
    </style>
  