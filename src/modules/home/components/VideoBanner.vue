<template>
    <div class="absolute w-full h-full" :class="{'skeleton' : !isVideoLoaded}">
        <video ref="myVideo" autoplay muted loop class="absolute inset-0 w-full h-full object-cover ">
          <source :src="video" type="video/mp4">
          Tu navegador no soporta el elemento de video.
        </video>
    </div>
</template>

<script>

import video from '@/assets/banner.mp4'
import { onMounted, ref } from 'vue'

export default { 
    setup(){
        const myVideo = ref()
        const isVideoLoaded = ref(true)

        onMounted(
            () => {
                myVideo.value.addEventListener("loadeddata", () => {
                    isVideoLoaded.value = true;
                });
            }
        )
        return {
            video,
            myVideo,
            isVideoLoaded,
        }
    }
}
</script>

<style>

</style>