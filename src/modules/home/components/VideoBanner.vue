<template>
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source :src="video" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
</template>

<script>

import video from '@/assets/banner.mp4'

export default { 
    setup(){

        return {
            video,
        }
    }
}
</script>

<style>

</style>