<template>
    <Transition name="close">
        <i v-show="open" @click="emitCloseEvent" class="fixed top-0 right-0 p-3 text-3xl cursor-pointer ri-close-line z-100 xl:hidden"></i>
    </Transition>
    <Transition name="menu">
        <nav v-show="open" class="fixed flex flex-col justify-items w-80 h-[100vh] rounded-r-2xl bg-blanco z-50 xl:hidden shadow-xl shadow-sombra z-200">
          <div class="h-28 w-full rounded-tr-2xl flex-shrink-0 border-fondo border-b flex justify-center items-end">
            <div class="flex  w-full items-start pl-9 pb-6">
              <div class="w-56">
                <Logo />
              </div>
            </div>
          </div>
          <div class=" w-full overflow-y-auto my-8">
              <ButtonSideBarVue :active="active" :equalActive="'active1'" :title="'Inicio'" @click="scrollTarget(section1)"/>
              <ButtonSideBarVue :active="active" :equalActive="'active2'" :title="'Servicios'" @click="scrollTarget(section2)"/>
              <ButtonSideBarVue :active="active" :equalActive="'active3'" :title="'Equipo'" @click="scrollTarget(section3)"/>
              <ButtonSideBarVue :active="active" :equalActive="'active4'" :title="'Portafolio'" @click="scrollTarget(section4)"/>
              <ButtonSideBarVue :active="active" :equalActive="'active5'" :title="'Testimonios'" @click="scrollTarget(section5)"/>
          </div>
          <div class="w-full flex-shrink-0">
            <div class="flex  w-full items-start pl-8">
              <div class="w-64">
                <ButtonMeeting title="Agendar Reunión" className="'text-2xl xl:text-3xl py-5 xl:py-8 rounded-2xl xl:rounded-3xl'"/>
              </div>
            </div>
          </div>
          <div class="w-full flex-shrink-0 mt-16">
            <div class="flex  w-full items-start pl-8">
              <div class="w-64">
                <SocialNetworks/>
              </div>
            </div>
          </div>
                  
        </nav>
    </Transition>
    <Transition name="fondo">
        <div  v-show="open" @click="emitCloseEvent" class="bg-oscuro fixed w-full h-[100%] opacity-20 xl:hidden z-10"></div>
    </Transition>
</template>

<script setup>
    import { onMounted, onBeforeUnmount, ref } from 'vue';
    import Logo from '@/components/Logo.vue';
    import ButtonSideBarVue from '@/components/ButtonSideBar.vue';
    import ButtonMeeting from '@/components/ButtonMeeting.vue';
    import SocialNetworks from '@/components/SocialNetworks.vue';
    import { scrollTarget, handleScroll} from './../helpers/scrollMenu';

    const props = defineProps(['open']);
    const emit = defineEmits(['closeEvent'])

    const emitCloseEvent = () => {

    emit('closeEvent');
    };

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1024) {
            emit('closeEvent');
        }
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
      window.addEventListener('resize', handleResize);
            //console.log(refNavBar)
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });
</script>

<style scoped>
/* menu */
.menu-enter-active, .menu-leave-active {
	transition: all 0.5s ease-out;
}
.menu-leave-active {
  transition-delay: 0.3s;
}
.menu-enter-from {
    transform: translateX(-20rem);
    opacity: 0;
}
.menu-leave-to {
    transform: translateX(-20rem);
    opacity: 0;
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

/* close */
.close-enter-active,
.close-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.close-enter-active {
  transition-delay: 0.3s;
}
.close-enter-from,
.close-leave-to {
  opacity: 0;
}

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