<template>
  <div class="w-full bg-claro flex flex-col p-3 sm:p-5 rounded-3xl">
    <div class="w-full aspect-[9/8] rounded-2xl bg-cover bg-center" :style="{ backgroundImage: `url( ${image} )` }">

    </div>
    <div class="w-full mt-2 sm:mt-4 md:mt-6 md:mb-2 lg:mt-4 lg:mb-1">
        <p class="w-full text-center text-sm sm:text-lg md:text-2xl lg:text-xl font-semibold">{{ name }}</p>
        <p class="w-full text-center text-xs sm:text-sm md:text-xl lg:text-lg">{{ position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
};
</script>
