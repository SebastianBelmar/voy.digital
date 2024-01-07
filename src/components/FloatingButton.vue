<template>

    <div class="fixed bottom-0 h-28 md:h-32 w-full z-5 pointer-events-none">
            <div class="abosulte bottom-0 h-28 md:h-32 w-full sm:w-[480px] mx-auto rounded-t-[2rem] sombra transition-all duration-700 ease-in-out z-5 " :class="{ 'translate-y-28 md:translate-y-32':  mostrar }">
                <div class="fixed bottom-0 bg-blanco h-[7rem] md:h-32 w-full sm:w-[480px] rounded-t-[2rem] z-10 ">
                    <div class="ancho-personalizado mx-auto my-[1.2rem] pointer-events-auto beat">
                        <ButtonMeeting className="'dsfsdf to-medio text-xl md:text-3xl py-5 md:py-8 rounded-2xl md:rounded-3xl '"/>
                    </div>

                </div>


                <div class="relative bg-blanco w-12 md:w-20 h-12 md:h-20 rounded-full -top-6 md:-top-10 mx-auto z-0 sombra text-2xl md:text-4xl flex flex-col cursor-pointer pointer-events-auto" @click="toggleButton">
                    <i class="ri-arrow-down-s-line my-0 md:mt-2 mx-3 md:mx-[22px] transition-transform duration-700 ease-in-out" :class="{'rotate-180 my-0' : mostrar}"></i>
                </div>
            </div>
        </div>

</template>

<script setup>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';

const ButtonMeeting = defineAsyncComponent(() => import('@/components/ButtonMeeting.vue'));

const mostrar = ref(true)
const desactivarBoton = ref(true)

const toggleButton = () => {
    mostrar.value = !mostrar.value
    desactivarBoton.value = false
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        if(desactivarBoton.value) {
            if(window.scrollY>1000) {
                mostrar.value = false
            } else {
                mostrar.value = true
            }
        }
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', () => {

    })
});
</script>

<style>
.sombra {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
}
.ancho-personalizado {
  width: calc(100% - 40px);
}

.v-enter-active, .v-leave-active {
	transition: all 0.5s ease-out;
}
.v-leave-active {
  transition-delay: 0.3s;
}
.v-enter-from {
    transform: translateY(-20rem);

}
.v-leave-to {
    transform: translateY(-20rem);
}

@keyframes beat {
    0%, 100% {
    transform: scale(1);
    }
    50% {
    transform: scale(1.03);
    }
}

/* Aplica la animación a un elemento con la clase 'beat' */
.beat { /* Cambia el color según tu preferencia */
    animation: beat 1s infinite; /* 1s de duración y repetición infinita */
}
</style>
