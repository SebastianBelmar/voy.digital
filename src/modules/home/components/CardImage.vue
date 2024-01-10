<template>

    <div class="h-96 w-56 overflow-hidden rounded-2xl z-0 bg-cover bg-center flex flex-col items-center justify-between p-4" :style="{ backgroundImage: `url( ${image} )` }"> 
        <div class="z-1 w-full text-blanco p-2 text-center flex justify-end">
            <button class="text-xs font-semibold bg-success p-2 rounded-lg" v-text="text"></button>
        </div> 
        <button class="z-1 w-full bg-boton text-blanco p-1 px-3 rounded-lg text-center flex justify-between items-center">
            <i class="ri-play-fill text-lg"></i>

            <div class="flex justify-center items-center w-full">
              <p class="text-xs font-semibold" v-text="'VER VIDEO COMPLETO'"></p>
            </div>
        </button> 
    </div>

    
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },

  }
};
</script>

<style scoped>
.ancho {
    width: calc(100% - 2rem)
}
</style>