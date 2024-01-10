<template>
  <div>
    <div class="h-96 w-56 overflow-hidden rounded-2xl z-0 bg-cover bg-center flex flex-col items-center justify-end p-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cphrEmRff38?si=IzMhiXOs7S67eUyh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="z-1 w-full bg-success text-blanco p-2 rounded-xl text-center">
        <p class="text-sm font-bold" v-text="text"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.ancho {
    width: calc(100% - 2rem)
}
</style>