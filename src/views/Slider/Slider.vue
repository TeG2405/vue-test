<template>
<div :class="$style.root">
  <img :class="$style.img" src="http://placehold.it/1200x300" alt="">
</div>
</template>

<script>
export default {
  name: 'Slider',
}
</script>

<style module lang="scss">
.root{
  position: relative;
  .img{
    display: block;
    max-width: 100%;
  }
}
</style>