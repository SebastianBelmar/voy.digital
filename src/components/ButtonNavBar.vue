<template>
    <div class=" h-16 flex justify-start items-center select-none" :class="className">
        <p class="text-start text-xl cursor-pointer transition-all duration-150 ease-in-out" :class="{ 'font-bold hover:font-bold': active === equalActive, 'hover:font-semibold' : active !== equalActive  }" v-text="title"/>
    </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    },
    equalActive: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'w-14'
    }
  }
};
</script>
