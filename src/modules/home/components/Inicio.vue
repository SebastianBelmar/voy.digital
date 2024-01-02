<template>
    <div id="section1" class="w-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: `url( ${image} )` }">
        <div class="flex flex-col gap-8 xl:gap-12 w-full px-6 items-center py-36 md:py-44 xl:py-60 text-blanco bg-principal gradient-linear">
            <h2 class="text-3xl md:text-4xl xl:text-6xl font-base ">Somos</h2>

            <h2 class="text-5xl md:text-6xl xl:text-8xl fuente-titulo mb-4 mr-4 flex flex-col md:flex-row gap-3 justify-center items-center">
                <span>CREADORES</span>
                <span>DIGITALES</span> 
            </h2>

            <h3 class="text-xl md:text-4xl xl:text-5xl font-semibold">Optimizamos tu presencia digital</h3>
            <div class="w-80 md:hidden">
                <ButtonMeeting :title="'Agendar una Reunión'"/>
            </div>
            <div class="hidden md:flex md:w-96">
                <ButtonMeeting :title="'Agendar Reunión'"/>
            </div>
            <h3 class="text-xl md:text-2xl xl:text-3xl font-semibold mt-16">Ver ruta de optimización</h3>
            <i class="ri-arrow-down-s-line text-5xl md:text-6xl xl:text-7xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" @click="scrollToCertainPoint"></i>
        </div>
    </div>
</template>

<script>
    import ButtonMeeting from '../../../components/ButtonMeeting.vue';
    import { scrollTarget } from '@/helpers/scrollMenu';
    import { onMounted } from 'vue';

    export default {
            components: {
                ButtonMeeting,
            },
        setup(){
            const image = '@/../../../../../public/assets/fondo.png'
            let scrollElement  = document.getElementById('section1');
            const scrollToCertainPoint = () => {
                let scrollTo = scrollElement.offsetHeight - 80
                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth',
                });
            };
            onMounted(() => {
                scrollElement  = document.getElementById('section1');
            });
            return {
                image,

                scrollElement,
                scrollTarget,
                scrollToCertainPoint
            }
        }
    }
</script>

<style scoped>
.fuente-titulo {
    font-weight: 700;
}

.gradient-linear {
  background: linear-gradient(to bottom, #CC8D00B2, #FFFFFF4D);
}
</style>