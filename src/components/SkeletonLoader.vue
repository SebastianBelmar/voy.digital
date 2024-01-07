<template>
  <div class="contenedor ">
    <div class="skeleton"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton {
    position: relative;
}
.skeleton::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 100px;
    width: 100vw;
    height: 100%;
    background: linear-gradient(90deg, #eee, #f9f9f9, #eee);
    background-color: rgba(184, 184, 184, 0.452);
    animation: skeleton 1s infinite;

}
@keyframes skeleton {
    0% {
        transform: translateX(-100vw);
    }
    100% {
        transform: translateX(100vw);
    }
}
</style>