<template>
<div class="flex flex-col items-center">

    <div class="bg-principal w-full h-40 rounded-t-2xl overflow-hidden z-2">
        <slot name="imagen"></slot> 
    </div>
    <div class="grid grid-cols-12 bg-claro w-full py-4 px-1 transition-all duration-500 ease-in-out border-b-oscuro border-b z-2 cursor-pointer" 
        :class="{'rounded-b-2xl' : !expandir}"
        @click="toggle">
        <div class="col-span-2 text-4xl font-bold text-center">
                <slot name="numero"></slot> 
        </div>
        <div class="col-span-8 px-1">            
            <div class="text-sm">
                <slot name="subtitulo"></slot> 
            </div>
            <div class="font-bold text-lg">
                <slot name="titulo"></slot> 
            </div>
        </div>
        <div class="col-span-2 flex justify-center items-center text-4xl">
            <i class="ri-arrow-down-s-line transition-all duration-500 ease-in-out" :class="{ 'rotate-180' : expandir}"></i>
        </div>
    </div>

    <div  class="w-full px-[8vw] bg-claro rounded-b-2xl transition-all duration-1000 ease-in-out h-0 -translate-y-4 overflow-hidden z-1"  :style="{ height: `${altura}`}">
        <div ref="div">
            <div class="text-xl font-bold mt-16">
                <slot name="titulo-inferior"></slot>
            </div>
            <div class="text-sm mt-6">
                <slot name="contenido"></slot>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { onMounted, ref} from "vue";
export default {
    setup() {
        const expandir = ref(false)
        const div = ref(null) 
        const altura = ref('0px')

        let alto
        
        const toggle = () => {
            expandir.value = !expandir.value
            if(expandir.value){
                altura.value = `${alto+130}px`
            }else{
                altura.value = '0px'
            }
            
        }

        onMounted(
            () => {
                alto = div.value.clientHeight
            }
        )
            
        return {
            expandir,
            div,
            altura,
            toggle
        }
    }
}




</script>

<style scoped>
.v-enter-active, .v-leave-active {
	transition: all 0.3s ease-out;
}
.v-enter-from {
    transform: translateY(-15rem);
}
.v-leave-to {
    transform: translateY(-15rem);
}
</style>

  
