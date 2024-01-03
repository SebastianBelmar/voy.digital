<template>
    <div class="relative sm:w-96 mx-auto lg:w-full max-w-[1000px] h-96 flex flex-col">
        <div class="mx-4 lg:mx-12">
            <swiper
                    :slidesPerView="numberSlides"
                    :loop="true"
                    :cssMode="true"
            
                    :pagination="pagination"
                    :mousewheel="true"
                    :keyboard="true"
                    :modules="modules"
                    class="mySwiper"
                    @swiper="onSwiper"
                >
                    <swiper-slide v-for="(testimonio, i) in testimonios" :key="'testimonio'+i">                
                        <CardTestimonials :texto="testimonio.texto" :nombre="testimonio.nombre" :cargo="testimonio.cargo" :imagen="testimonio.imagen"/>
                    </swiper-slide>

                    <div class="swiper-pagination"></div>
                </swiper>
        </div>

            <button class="absolute -right-6 top-40 z-1 text-5xl text-oscuro" @click="next">
                <i class="ri-arrow-right-s-line"></i>
            </button>
            <button class="absolute -left-6 top-40 z-1 text-5xl text-oscuro" @click="prev">
                <i class="ri-arrow-left-s-line"></i>
            </button>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { datosTestimonios } from './../assets/js/datosTestimonios'
    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/navigation';
    import 'swiper/css/pagination';


    // import required modules
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

    import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue';

    const CardTestimonials = defineAsyncComponent(() =>
    import('./CardTestimonials.vue')
    );

    export default {
        components: {
            Swiper,
            SwiperSlide,
            CardTestimonials
        },
        setup() {
            const testimonios = ref(datosTestimonios);

            const numberSlides = ref(1);

            const imagen = 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'

            function onSwiper(swiper) {
                swiperInstance.value = swiper;
            }

            const handleResize = () => {
                const windowWidth = window.innerWidth;
                if (windowWidth <= 976) {
                    numberSlides.value = 1
                } else {
                    numberSlides.value = 2
                }
            };

            onMounted(() => {
                handleResize()
                window.addEventListener('resize', handleResize);
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', handleResize);
            });

            const swiperInstance = ref();

            function onSwiper(swiper) {
                swiperInstance.value = swiper;
            }

            function goToSlide(position) {
            // swiperInstance?.value?.slideTo(position);
                swiperInstance?.value?.slideNext();
            }
            function next() {
            // swiperInstance?.value?.slideTo(position);
                swiperInstance?.value?.slideNext();
            }
            function prev() {
            // swiperInstance?.value?.slideTo(position);
                swiperInstance?.value?.slidePrev()
            }
        return {
            testimonios,
            onSwiper,
            goToSlide,
            next,
            prev,
            imagen,

            numberSlides,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className} custom-bullet" style="background-color: #004650;height: 12px;width: 12px;"></span>`;
                },

            },

            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
        },
    };
</script>

<style scoped>

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
    padding: 8px 16px;
    transform: scale(1);
    color: rgba(255, 0, 0, 0.185)
    }
    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ffffff00;
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