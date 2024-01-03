<template>

    <div class="h-96 w-56 overflow-hidden rounded-2xl z-0 bg-cover bg-center flex flex-col items-center justify-end p-4" :style="{ backgroundImage: `url( ${image} )` }"> 
        <div class="z-1 w-full bg-success text-blanco p-2 rounded-xl text-center">
            <p class="text-sm font-bold" v-text="text"></p>
        </div> 
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