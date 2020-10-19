<template>
<div :class="$style.root">
  <div class="swiper-container" ref="swiperRef">
    <div class="swiper-wrapper">
      <div v-for="(src, index) in items" class="swiper-slide" :key="index">
        <banner :src="src" alt="" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import Swiper from 'swiper';
import Banner from '@/views/Banner/Banner';
export default {
  name: 'Slider',
  props: {
    items: {
      type: Array,
      defaultValue: [
        'http://placehold.it/1200x300',
        'http://placehold.it/1200x300',
        'http://placehold.it/1200x300',
      ]},
  },
  components: {
    Banner,
  },
  setup() {
    const swiperRef = ref(null);
    const swiper = ref(null);
    onMounted(() => {
      swiper.value = new Swiper(swiperRef.value, {
        slidesPerView: 'auto',
      });
    });

    return {
      swiper,
      swiperRef,
    }
  }
}
</script>
<style src="swiper/swiper-bundle.min.css" />
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