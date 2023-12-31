<template>
  <nav class="fixed bg-fondo w-full h-14 md:h-20">
    <div class="flex justify-between items-center h-14 px-4 md:hidden">
      <Icon class="h-6"/>
      <transition>
        <i class="ri-more-2-fill text-2xl cursor-pointer "
          @click="emitOpenEvent"
          v-show="!open"
          ></i>
      </transition>
    </div>

    <div class="hidden md:flex h-20 justify-center">
      <div class="flex min-w-[768px] max-w-[1380px] h-20 bg-medio-claro">
        <div class="w-72 bg-medio flex-shrink-0">

        </div>

        <div class=" bg-oscuro min-w-[800px] max-w-[800px] flex-shrink-0">
              <div class="w-full h-20 flex justify-end z-10">
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
                  <p class="p-4 text-center text-xl font-light hover:font-semibold cursor-pointer" @click="scrollTarget(section1)" :class="{ active: active === 'active1' }">Inicio</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section2)" :class="{ active: active === 'active2' }">Servicios</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section3)" :class="{ active: active === 'active3' }">Equipo</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section4)" :class="{ active: active === 'active4' }" >Portafolio</p>
                </div>
                <div class="w-32 mr-4 h-20 bg-medio-claro flex-shrink-0 flex justify-end items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollTarget(section5)" :class="{ active: active === 'active5' }">Testimonios</p>
                </div>
              </div>
        </div>
        
        <div  class="w-64 bg-medio flex-shrink-0">
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup>
  import { ref, defineProps, defineAsyncComponent, onMounted, onUnmounted } from 'vue';
  import { scrollTarget, handleScroll} from './../helpers/scrollMenu';

  const props = defineProps(['open']);

  const Icon = defineAsyncComponent(() => import('@/components/Icon.vue'));
  const emit = defineEmits(['openEvent'])

  const emitOpenEvent = () => {
    emit('openEvent');
  };

  const active = ref('active1')

  let section1;
  let section2;
  let section3;
  let section4;
  let section5;

  onMounted(() => {
    section1 = document.getElementById('section1');
    section2 = document.getElementById('section2');
    section3 = document.getElementById('section3');
    section4 = document.getElementById('section4');
    section5 = document.getElementById('section5');
    
    let sections = [
      section1,
      section2,
      section3,
      section4,
      section5,
    ]

    window.addEventListener('scroll', function(event) {
      handleScroll(event, active, sections);
    });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', function(event) {
      handleScroll(event, active, sections);
    });
  });
</script>

<style scoped>
/* fondo */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.v-enter-active {
  transition-delay: 0.3s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.bold-text {
      font-weight: 600; /* Aplica el peso 600 (negrita) a este elemento */
}
.active {
  font-weight: 600;
}
</style>