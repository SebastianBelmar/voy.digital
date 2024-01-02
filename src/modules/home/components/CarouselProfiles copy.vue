<template>
    <swiper
        :slidesPerView="numberSlides"
        :loop="true"
        :cssMode="true"
        :navigation="true"
        :pagination="pagination"
        :mousewheel="true"
        :keyboard="true"
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

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/navigation';
    import 'swiper/css/pagination';


    // import required modules
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { onBeforeUnmount, onMounted, ref } from 'vue';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {

            const numberSlides = ref(1);

            const handleResize = () => {
                const windowWidth = window.innerWidth;
                if (windowWidth <= 768) {
                    numberSlides.value = 1
                } else {
                    numberSlides.value = 3
                }
            };

            onMounted(() => {
                window.addEventListener('resize', handleResize);
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', handleResize);
            });
        return {
            numberSlides,

            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },

            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
        },
    };
</script>

<style scoped>
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
    .swiper-pagination-bullet-active {
    color: #fff;
    background: #000000;
    }
</style>