<template>
    <div class="relative w-full max-w-[1000px] h-96 flex flex-col">
        <div class="mx-6 lg:mx-12">
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
                    <swiper-slide>                
                        <div class=" w-full flex justify-center h-96 p-2">
                            <div class="bg-claro w-[25rem] h-80 rounded-3xl flex flex-col justify-between px-8 pt-8 pb-6">

                                <div class="text-base text-left" v-text="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam ullam ea temporibus maxime eaque sit quisquam vitae, commodi reiciendis non. Quia optio corrupti hic ab dolore quod doloremque voluptates?Quia optio corrupti hic ab dolore quod doloremque voluptates?'">
                                </div>
                                    
                                <div class=" h-12 flex">
                                    <div class="bg-oscuro h-12 w-12 rounded-2xl bg-cover bg-center" :style="{ backgroundImage: `url( ${imagen} )` }"/>

                                    
                                    <div class="flex flex-col ml-4 justify-center">
                                        <p class="text-sm text-start font-semibold" v-text="'Nombre Apellido'"/>   
                                        <p class="text-xs text-start" v-text="'Cargo'"/>
                                            
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>                
                        <Card :texto="'Lorem'" :nombre="'Felepe'" :cargo="'CEO'" :imagen="imagen"/>
                    </swiper-slide>

                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
                    <div class="swiper-pagination"></div>
                </swiper>
        </div>


        <button class="absolute right-0 top-40 z-1 text-4xl text-oscuro" @click="next">
            <i class="ri-arrow-right-s-line"></i>
        </button>
        <button class="absolute top-40 z-1 text-4xl text-oscuro" @click="prev">
            <i class="ri-arrow-left-s-line"></i>
        </button>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/navigation';
    import 'swiper/css/pagination';


    // import required modules
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

    import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue';

    const Card = defineAsyncComponent(() =>
    import('./Card.vue')
    );

    export default {
        components: {
            Swiper,
            SwiperSlide,
            Card
        },
        setup() {

            const numberSlides = ref(1);

            const imagen = 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'

            function onSwiper(swiper) {
                swiperInstance.value = swiper;
            }

            const handleResize = () => {
                const windowWidth = window.innerWidth;
                if (windowWidth <= 768) {
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