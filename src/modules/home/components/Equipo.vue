<template>
    <div id="section3" class="w-full bg-blanco flex items-center justify-center">
        <div class="w-full max-w-[1200px] px-6 sm:px-12 my-16 md:my-24 lg:my-36">
            <h3 class="text-xl sm:text-2xl md:text-4xl xl:text-4xl font-bold w-full text-center">¿Por qué trabajar con nosotros?</h3>
            <h4 class="text-lg sm:text-xl md:text-2xl xl:text-2xl md:mt-4 w-full text-center mt-2 mb-6">Somos un equipo multidiciplinario, capaces de resolver tus problemas digitales de forma integral.</h4>


            <div class="grid grid-flow-row grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
                <div class="col-span-2 lg:col-span-1 w-full" v-for="(member, i) in datosEquipo" :key="i">
                    <CardProfile :image="member.image" :name="member.name" :position="member.position"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import { equipo } from './../assets/js/datosEquipo'

const CardProfile = defineAsyncComponent(() => import('./CardProfile.vue'));


export default {
    components : {
        CardProfile
    },
    setup(){
        const datosEquipo = ref(equipo);
        return{
            datosEquipo,
        }
    }
}
</script>