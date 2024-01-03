<template>
    <transition>




    </transition>

    <div class="fixed bottom-0 h-28 md:h-36 w-full z-5 pointer-events-none">
            <div class="abosulte bottom-0 h-28 md:h-36 w-full sm:w-[480px] mx-auto rounded-t-[2rem] sombra transition-all duration-700 ease-in-out z-5 " :class="{ 'translate-y-28 md:translate-y-36':  mostrar }">
                <div class="fixed bottom-0 bg-blanco h-[7rem] md:h-36 w-full sm:w-[480px] rounded-t-[2rem] z-10 ">
                    <div class="ancho-personalizado mx-auto my-[1.2rem] pointer-events-auto">
                        <ButtonMeeting />
                    </div>

                </div>


                <div class="relative bg-blanco w-12 md:w-20 h-12 md:h-20 rounded-full -top-6 md:-top-10 mx-auto z-0 sombra text-2xl md:text-4xl flex flex-col cursor-pointer pointer-events-auto" @click="toggleButton">
                    <i class="ri-arrow-down-s-line my-1 md:mt-2 mx-3 md:mx-[22px] transition-transform duration-700 ease-in-out" :class="{'rotate-180 my-0' : mostrar}"></i>
                </div>
            </div>
        </div>

</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const ButtonMeeting = defineAsyncComponent(() => import('@/components/ButtonMeeting.vue'));

const mostrar = ref(true)

const toggleButton = () => {
    mostrar.value = !mostrar.value
}
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
</style>