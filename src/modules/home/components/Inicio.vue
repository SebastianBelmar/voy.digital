<template>
    <div id="section1" class="w-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: `url( ${image} )` }" >
        <div class="flex flex-col gap-8 xl:gap-12 w-full px-6 items-center pt-36 pb-24 md:py-44 xl:pt-60 xl:py-44 text-blanco bg-principal gradient-linear">
            <h2 class="text-xl md:text-2xl xl:text-3xl font-base ">Somos</h2>

            <h2 class="text-5xl md:text-6xl xl:text-7xl fuente-titulo mb-4 mr-4 flex flex-col md:flex-row gap-3 justify-center items-center">
                <span>CREADORES</span>
                <span>DIGITALES</span> 
            </h2>

            <h3 class="text-lg sm:text-lg md:text-xl xl:text-2xl font-semibold">Optimizamos tu presencia digital</h3>
            <div class="w-64 md:hidden">
                <ButtonMeeting :title="'Agendar una Reunión'" className="'text-2xl md:text-3xl py-4 md:py-5 rounded-2xl md:rounded-4xl'"/>
            </div>
            <div class="hidden md:flex md:w-80 overflow-hidden redondo-4xl">
                <ButtonMeeting :title="'Agendar Reunión'" className="'text-2xl md:text-2xl py-4 md:py-5 redondo-4xl'"/>

            </div>
            <div class="flex flex-col items-center">
                <h3 class="text-base md:text-lg xl:text-xl font-semibold mt-16">Ver ruta de optimización</h3>
                <i class="beat ri-arrow-down-s-line text-5xl md:text-6xl xl:text-7xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" @click="scrollToCertainPoint"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonMeeting from '../../../components/ButtonMeeting.vue';
    import { scrollTarget } from '@/helpers/scrollMenu';
    import { onMounted } from 'vue';
    import image from '@/assets/banner.mp4'

    export default {
            components: {
                ButtonMeeting,
            },
            
        setup(){

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

@keyframes beat {
    0%, 100% {
    transform: scale(1);
    }
    50% {
    transform: scale(1.1);
    }
}

/* Aplica la animación a un elemento con la clase 'beat' */
.beat { /* Cambia el color según tu preferencia */
    animation: beat 1s infinite; /* 1s de duración y repetición infinita */
}
.redondo-4xl {
    border-radius: 1.7rem;
}
</style>