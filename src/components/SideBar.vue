<template>
    <Transition name="close">
        <i v-show="open" @click="emitCloseEvent" class="fixed top-0 right-0 p-3 text-3xl cursor-pointer ri-close-line z-100 md:hidden"></i>
    </Transition>
    <Transition name="menu">
        <nav v-show="open" class="fixed w-80 h-[100vh] rounded-r-2xl bg-blanco z-50 md:hidden shadow-xl shadow-sombra z-200">
            <Logo />

            <div class="w-40 mr-4 h-20 justify-center bg-medio-claro flex  items-center">
            <p class="p-4 text-center text-xl font-light hover:font-semibold cursor-pointer" @click="scrollTarget(section1)" >Inicio</p>
            </div>
            <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
            <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section2)" >Servicios</p>
            </div>
            <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
            <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section3)" >Equipo</p>
            </div>
            <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex items-center">
            <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section4)"  >Portafolio</p>
            </div>
            <div class="w-32 mr-4 h-20 bg-medio-claro flex-shrink-0 flex justify-end items-center">
            <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section5)" >Testimonios</p>
            </div>

                    
        </nav>
    </Transition>
    <Transition name="fondo">
        <div  v-show="open" @click="emitCloseEvent" class="bg-oscuro fixed w-full h-[100%] opacity-20 md:hidden z-10"></div>
    </Transition>
</template>

<script setup>
    import { defineProps, onMounted, onBeforeUnmount } from 'vue';
    import Logo from '@/components/Logo.vue';
    import { scrollTarget, handleScroll} from './../helpers/scrollMenu';

    const props = defineProps(['open']);
    const emit = defineEmits(['closeEvent'])

    const emitCloseEvent = () => {

    emit('closeEvent');
    };

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
            emit('closeEvent');
        }
    };
    let section1;
    let section2;
    let section3;
    let section4;
    let section5;

    onMounted(() => {
        section1 = document.getElementById('section1');
        section2 = document.getElementById('section2');
        section3 = document.getElementById('section3');
        section4 = document.getElementById('section4');
        section5 = document.getElementById('section5');
        

        window.addEventListener('resize', handleResize);
        //console.log(refNavBar)
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>

<style scoped>
/* menu */
.menu-enter-active, .menu-leave-active {
	transition: all 0.5s ease-out;
}
.menu-leave-active {
  transition-delay: 0.3s;
}
.menu-enter-from {
    transform: translateX(-20rem);
    opacity: 0;
}
.menu-leave-to {
    transform: translateX(-20rem);
    opacity: 0;
}
/* fondo */
.fondo-enter-active,
.fondo-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fondo-enter-from,
.fondo-leave-to {
  opacity: 0;
}

/* close */
.close-enter-active,
.close-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.close-enter-active {
  transition-delay: 0.3s;
}
.close-enter-from,
.close-leave-to {
  opacity: 0;
}
</style>