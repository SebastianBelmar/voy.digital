
<template>
    <div class="w-full flex flex-col">
        <div class="bg-fondo h-44 lg:h-32">
            <div class="h-44 lg:h-32 w-full max-w-[1200px] mx-auto px-12 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                <div class="w-64 mt-4 lg:mt-0.5">
                    <Logo />
                </div>
                <div class="w-auto scale-50">
                    <social-networks/>
                </div>
            </div>
        </div>
        <div class="bg-oscuro w-full h-14 flex justify-center items-center">
            <p class="text-blanco">Todos los derechos reservados</p>
        </div>
    </div>

</template>

<script>
import Logo from '@/components/Logo.vue';
import SocialNetworks from './SocialNetworks.vue';

export default {
    components: {
        Logo,
        SocialNetworks,
    },
    setup(){

    }
}
</script>

<style>

</style>