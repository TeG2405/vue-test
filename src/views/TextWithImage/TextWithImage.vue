<template>
<div :class="$style.root">
  <img :class="$style.img" :src="src" :alt="alt">
  {{text}}
</div>
</template>

<script>
export default {
  name: 'TextWithImage',
  props: {
    alt: {type: String, defaultValue: 'Картинка'},
    src: {type: String, defaultValue: 'http://placehold.it/100x100'},
    text: {type: String, defaultValue: 'Текст к картинке'}
  },
}
</script>

<style module lang="scss">
.root{
  position: relative;
  &:after{
    content: '';
    display: table;
    clear: both;
  }
  .img{
    display: block;
    max-width: 50%;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
  }
}
</style>