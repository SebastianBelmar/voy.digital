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
                  <p class="p-4 text-center text-xl font-light hover:font-semibold cursor-pointer" @click="scrollToSection(section1)" :class="{ active: currentSection === 'section1' }">Inicio</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollToSection(section2)" :class="{ active: currentSection === 'section2' }">Servicios</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex  items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" @click="scrollToSection(section3)">Equipo</p>
                </div>
                <div class="w-32 mr-4 h-20 justify-center bg-medio-claro flex-shrink-0 flex items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer">Portafolio</p>
                </div>
                <div class="w-32 mr-4 h-20 bg-medio-claro flex-shrink-0 flex justify-end items-center">
                  <p class="p-4 text-center text-xl hover:font-bold cursor-pointer" >Testimonios</p>
                </div>

              </div>
        </div>
        
        <div class="w-64 bg-medio flex-shrink-0">
        </div>
      </div>
    </div>
  </nav>

  <div>
    <div ref="section1" class="section bg-principal h-screen">
      <!-- Contenido de la Sección 1 -->
    </div>
    
    <div ref="section2" class="section bg-oscuro h-screen">
      <!-- Contenido de la Sección 2 -->
    </div>

    <div ref="section3" class="section bg-principal h-screen">
      <!-- Contenido de la Sección 1 -->
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineAsyncComponent, onMounted, onUnmounted } from 'vue';

  const props = defineProps(['open']);

  const Icon = defineAsyncComponent(() => import('@/components/Icon.vue'));
  const emit = defineEmits(['openEvent'])

  const emitOpenEvent = () => {
    emit('openEvent');
  };


  const section1 = ref(null);
  const section2 = ref(null);
  const section3 = ref(null);

  const scrollToSection = (section) => {
    console.log(section.offsetTop)

    const offsetTop = section.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };


  // activar secciones
  // Ref para almacenar la sección actual
  const currentSection = ref('section1');


  // Manejadores de eventos de desplazamiento
  const handleScroll = () => {
    if (section1.value && section2.value) {
      const scrollPosition = window.scrollY;

      // Establecer la sección actual en función de la posición de desplazamiento
      if (
        scrollPosition >= section1.value.offsetTop &&
        scrollPosition < section2.value.offsetTop
      ) {
        currentSection.value = 'section1';
      } else if (scrollPosition >= section2.value.offsetTop) {
        currentSection.value = 'section2';
      } else {
        currentSection.value = null;
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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
  background-color: #4caf50;
}
</style>