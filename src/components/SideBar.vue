<template>
    <Transition name="close">
        <i v-show="open" @click="emitCloseEvent" class="absolute top-0 right-0 p-3 md:hidden text-3xl cursor-pointer ri-close-line z-10"></i>
    </Transition>
    <Transition name="menu">
        <nav v-show="open" class="fixed w-80 h-[100vh] rounded-r-2xl bg-blanco z-50 md:hidden shadow-xl shadow-sombra">
            <Logo />
        </nav>
    </Transition>
    <Transition name="fondo">
        <div  v-show="open" @click="emitCloseEvent" class="bg-oscuro fixed w-full h-[100%] opacity-20 md:hidden"></div>
    </Transition>
</template>

<script setup>
    import { defineProps, onMounted, onBeforeUnmount } from 'vue';
    import Logo from '@/components/Logo.vue';

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

    onMounted(() => {
        window.addEventListener('resize', handleResize);
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