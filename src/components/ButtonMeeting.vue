<template>
  <button 
    class="w-full bg-gradient-to-r from-oscuro to-oscuro rounded-2xl md:rounded-3xl py-5 md:py-8 text-blanco text-2xl md:text-3xl font-medium md:font-semibold hover:shadow-sombra hover:shadow-lg hover:bg-gradient-to-r hover:from-oscuro hover:to-medio transition-all duration-900 ease-in-out active:brightness-125" @click="enviarMensaje">
    Agendar una Reunión
  </button>
</template>

<script setup>
const enviarMensaje = () => {
  // Número de teléfono al que deseas enviar el mensaje (incluyendo el código de país)
  const numeroTelefono = '56965069659';

  // Mensaje que deseas enviar
  const mensaje = 'Una pasa noma';

  // Crea el enlace de WhatsApp con el número y el mensaje
  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  // Abre el enlace en una nueva ventana o pestaña
  window.open(enlaceWhatsApp, '_blank');
};
</script>

<style>

</style>