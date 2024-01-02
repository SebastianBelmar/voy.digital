<template>
  <nav class="fixed bg-fondo w-full h-14 md:h-20 z-5">
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
      <div class="flex min-w-[768px] max-w-[1380px] h-20 bg-fondo">
        <div class="w-72 flex-shrink-0 flex justify-center items-center">
          <div class="w-56">
            <Logo />
          </div>
        </div>
        <!-- w-full min-w-[300px] max-w-[800px] -->
        <div class="overflow-x-auto flex">
          <div class=" bg-fondo w-[750px] flex items-center gap-12 justify-end pr-10 flex-shrink-0">
  
                <ButtonNavBar :active="active" :equalActive="'active1'" :title="'Inicio'" :className="'w-14'" @click="scrollTarget(section1)"/>
                <ButtonNavBar :active="active" :equalActive="'active2'" :title="'Servicios'" :className="'w-20'" @click="scrollTarget(section2)"/>
                <ButtonNavBar :active="active" :equalActive="'active3'" :title="'Equipo'" :className="'w-16'" @click="scrollTarget(section3)"/>
                <ButtonNavBar :active="active" :equalActive="'active4'" :title="'Portafolio'" :className="'w-24'" @click="scrollTarget(section4)"/>
                <ButtonNavBar :active="active" :equalActive="'active5'" :title="'Testimonios'" :className="'w-28'" @click="scrollTarget(section5)"/>
          </div>
        </div>
        
        <div  class="w-48 flex-shrink-0 flex justify-center items-center">
          <div class="w-full">
            <ButtonMeeting :title="'Agendar Reunión'" :className="'text-[17px] py-[0.4rem]  rounded-xl'"/>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup>
  import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue';
  import { scrollTarget, handleScroll} from './../helpers/scrollMenu';
  import ButtonNavBar from '@/components/ButtonNavBar.vue';
  import Logo from '@/components/Logo.vue';
  import ButtonMeeting from '@/components/ButtonMeeting.vue';

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

    active.value = 'active1'

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

/* Toda el área del scrollbar */
::-webkit-scrollbar {
  height: 6px;
}

/* Pulgar (scrollbar thumb) */
::-webkit-scrollbar-thumb {
  background-color: #3D858F; /* Color del pulgar */
  border-radius: 6px; /* Bordes redondeados del pulgar */
}

/* Pista (scrollbar track) */
::-webkit-scrollbar-track {
  background-color: #f0f0f0; /* Color de la pista */
}

/* Esquina del scrollbar (si es visible) */
::-webkit-scrollbar-corner {
  background-color: #ffffff; /* Color de la esquina */
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