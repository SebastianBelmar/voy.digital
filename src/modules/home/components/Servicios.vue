<template>
    <div id="section2" class="w-full bg-oscuro flex flex-col items-center justify-center">
        <div class="ancho ">
            <h1 class="text-4xl">Servicios</h1>
    
            <Accordion>
                <template #imagen>
                    <img src="https://media.istockphoto.com/id/1573329496/es/foto/multi-capas-de-textura-de-color-3d-papercut-capas-en-banner-vectorial-degradado-arte-de.jpg?b=1&s=170667a&w=0&k=20&c=gAcCK6KmiKBrJ__opmrqddHsnltEXWNyULm33zFy7Wg=" alt="imagen"
                    class="scale-125 translate-y-2">
                </template>
                <template #numero>
                    1
                </template>
                <template #subtitulo>
                    Desarrollo de
                </template>
                <template #titulo>
                    Manual de Marca
                </template>
                
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
    
            <Accordion >
                <template #imagen>
                    <img src="https://media.istockphoto.com/id/1573329496/es/foto/multi-capas-de-textura-de-color-3d-papercut-capas-en-banner-vectorial-degradado-arte-de.jpg?b=1&s=170667a&w=0&k=20&c=gAcCK6KmiKBrJ__opmrqddHsnltEXWNyULm33zFy7Wg=" alt="imagen"
                    class="scale-125 translate-y-2">
                </template>
                <template #numero>
                    2
                </template>
                <template #subtitulo>
                    Desarrollo de
                </template>
                <template #titulo>
                    Sitio web
                </template>
                
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
    
            <Accordion >
                <template #imagen>
                    <img src="https://media.istockphoto.com/id/1573329496/es/foto/multi-capas-de-textura-de-color-3d-papercut-capas-en-banner-vectorial-degradado-arte-de.jpg?b=1&s=170667a&w=0&k=20&c=gAcCK6KmiKBrJ__opmrqddHsnltEXWNyULm33zFy7Wg=" alt="imagen"
                    class="scale-125 translate-y-2">
                </template>
                <template #numero>
                    3
                </template>
                <template #subtitulo>
                    Creación de
                </template>
                <template #titulo>
                    Videos para tus redes
                </template>
                
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
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const Accordion = defineAsyncComponent(() => import('./Accordion.vue'));

</script>

<style scoped>
.ancho {
    width: calc(100% - 10vw);
}
</style>