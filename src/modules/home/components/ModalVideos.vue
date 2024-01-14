<template>
  <Transition name="modal">
    <div v-if="open" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blanco text-white rounded-2xl shadow-lg shadow-sombra z-100">
    
      <div @click="close" class="absolute bg-danger w-8 h-8 -right-4 -top-4 rounded-full flex justify-center items-center text-2xl hover:rotate-90 transition-all duration-150 ease-in-out hover:scale-110 cursor-pointer hover:brightness-125" >
        <i class="ri-close-line text-blanco"></i>
      </div>
      <!-- Contenido de tu div flotante -->
      <iframe  :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="bg-principal rounded-t-lg w-80 h-80 sm:w-[440px] sm:h-[480px] lg:w-[940px] lg:h-[640px]"></iframe>
    
      <p class="text-lg bg-claro font-semibold rounded-b-2xl p-6 flex items-center"><span class="mx-3"><i class="ri-youtube-fill text-2xl"></i></span>Portafolio - {{ text }}</p>
    </div>
  </Transition>
  <Transition name="fondo">
    <div @click="close" v-show="open"  class="fixed bg-oscuro opacity-30 top-0 left-0 w-full h-full z-50"></div>
  </Transition>

</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    text: { 
      type: String,
      required: true,
      default: 'Portafolio Online'
    },
    video: {
      type: String,
      required: true,
    }
  },
  emits: ['closeModal'],
  setup(props, {emit}){

    const close = () => {
      emit('closeModal')
    };

    return {
      close,
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
	transition: all 0.3s ease-out;
}
.modal-enter-from {
    opacity: 0;
    scale: 0.8;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -60%);
}
.modal-leave-to {
    opacity: 0;
    scale: 0.8;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -60%);
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
</style>