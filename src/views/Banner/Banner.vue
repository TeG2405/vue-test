<template>
<div :class="$style.root">
  <img :class="$style.img" :src="src" :alt="alt">
</div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    alt: {type: String, defaultValue: 'Банер 1'},
    src: {type: String, defaultValue: 'http://placehold.it/1200x300'},
  },
}
</script>

<style module lang="scss">
.root{
  position: relative;
  .img{
    display: block;
    max-width: 100%;
    margin: auto;
  }
}
</style>