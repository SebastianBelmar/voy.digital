<template>

    <div class="relative h-96 w-56 overflow-hidden rounded-2xl z-0 bg-cover bg-center flex flex-col items-center justify-between"> 
      
      <div class="absolute top-4 right-4 w-full z-1 text-blanco text-center flex justify-end">
        <p class="text-xs font-semibold bg-success p-2 rounded-lg" v-text="text"></p>
      </div> 
      
      <button class="absolute bottom-4 left-4 z-1 w-48 bg-boton text-blanco p-1 px-3 rounded-lg text-center flex justify-between items-center" @click="toggle">
        <i class="ri-play-fill text-lg"></i>
        
        <div class="flex justify-center items-center w-full">
          <p class="text-xs font-semibold" v-text="'VER VIDEO COMPLETO'"></p>
        </div>
      </button> 

      <video autoplay muted loop class="inset-0 w-full h-full object-cover ">
          <source :src="video" type="video/mp4">
      </video>
        
    </div>

    
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    video: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },

  },
  emits: ['toggleEvent'],
  setup(props, {emit}){

    const toggle = () => {
      emit('toggleEvent')
    };

    return {
      toggle,
    }
  }
});
</script>

<style scoped>
.ancho {
    width: calc(100% - 2rem)
}
</style>