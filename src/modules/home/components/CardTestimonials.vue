<template>
    <div class=" w-full flex justify-center h-[26rem] p-2">
        <div class="bg-fondo w-[25rem] h-80 rounded-3xl flex flex-col justify-between px-8 pt-8 pb-6">
            
            <div class="text-sm sm:text-base text-left h-48 overflow-hidden overflow-y-scroll" v-text="texto">
            </div>
                
            <div class=" h-12 mt-2 flex">
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

<style scoped>

/* Toda el área del scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
/* Pulgar (scrollbar thumb) */
::-webkit-scrollbar-thumb {
  background-color: #3D858F; /* Color del pulgar */
  border-radius: 6px; /* Bordes redondeados del pulgar */
}

/* Pista (scrollbar track) */
::-webkit-scrollbar-track {
  background-color: #f0f0f000; /* Color de la pista */
}

/* Esquina del scrollbar (si es visible) */
::-webkit-scrollbar-corner {
  background-color: #ffffff00; /* Color de la esquina */
}

/* Estilos al pasar el ratón sobre el scrollbar */
::-webkit-scrollbar-thumb:hover {
  background-color: #88BAC1; /* Nuevo color del pulgar al pasar el ratón */
}

/* Estilos al hacer clic en el scrollbar */
::-webkit-scrollbar-thumb:active {
  background-color: #88BAC1; /* Nuevo color del pulgar al hacer clic */
}
</style>