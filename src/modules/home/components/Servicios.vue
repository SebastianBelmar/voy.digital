<template>
    <div id="section2" class="w-full bg-blanco flex flex-col items-center justify-center">
        <div class="w-full max-w-[1200px] px-6 sm:px-12 mt-16">
            <h2 class="text-2xl md:text-4xl xl:text-4xl font-bold w-full text-center">Te presentamos la ruta</h2>
            <h3 class="text-xl md:text-2xl xl:text-2xl md:mt-4 w-full text-center">Identifica donde estás situado para optimizar tu presencia digital</h3>

            <div class="flex flex-wrap w-full mt-4 max-w-[1200px] mx-auto">
                <div class="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-4">
                    <Accordion numero="1" subtitulo="Desarrollo de" titulo="Manual de Marca" :video="video1">
                        
                                            
                        <template #titulo-inferior>
                            Este es el PRIMER PASO para optimizar tu comunicación organizacional
                        </template>
                        <template #contenido>
                            El manual de marca gráfica hace que tu imagen corporativa sea consistente en toda tu empresa (sitio web, redes sociales, ploteo de vehículos, etc).
                            <br>
                            <br>
                            Esto es con el fin de verse profesional y generar confianza.
                        </template>
                    </Accordion>
                </div>
                <div class="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-4">
                    <Accordion numero="2" subtitulo="Desarrollo de" titulo="Sitio web" :video="video2">
                        
                        <template #titulo-inferior>
                            Este es el SEGUNDO PASO para optimizar tu comunicación
                        </template>
                        <template #contenido>
                            El sitio web es una herramienta que provee de autoridad a tu empresa frente a tus clientes.
                            <br>
                            <br>
                            Aquí puedes generar conversiones para aumentar tus ventas y tu captura de prospectos.
                        </template>
                    </Accordion>
                </div>
                <div class="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-4">
                    <Accordion numero="3" subtitulo="Creación de" titulo="Videos para tus redes" :video="video3">
                        
                        <template #titulo-inferior>
                            Este es el TERCER PASO para optimizar tu comunicación
                        </template>
                        <template #contenido>
                            Una vez tienes tu marca gráfica definida y tu sitio web operativo es hora de llamar la atención de tu audiencia y capturar leads, y la mejor forma de hacerlo hoy en día es con videos cortos y llamativos.
                            <br>
                            <br>
                            Un video bien hecho connota profesionalismo y confianza.
                        </template>
                    </Accordion>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

import video1 from '@/assets/marca.mp4'
import video2 from '@/assets/web.mp4'
import video3 from '@/assets/video.mp4'


const Accordion = defineAsyncComponent(() => import('./Accordion.vue'));

</script>