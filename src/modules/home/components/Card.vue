<template>
    <div class=" w-full flex justify-center h-96 p-2">
        <div class="bg-claro w-[25rem] h-80 rounded-3xl flex flex-col justify-between px-8 pt-8 pb-6">
            
            <div class="text-base text-left" v-text="texto">
            </div>
                
            <div class=" h-12 flex">
                <div class="bg-oscuro h-12 w-12 rounded-2xl bg-cover bg-center" :style="{ backgroundImage: `url( ${imagen} )` }"/>

                
                <div class="flex flex-col ml-4 justify-center">
                    <p class="text-sm text-start font-semibold" v-text="nombre"/>   
                    <p class="text-xs text-start" v-text="cargo"/>
                        
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    imagen: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    cargo: {
      type: String,
      required: true
    },

  }
};
</script>