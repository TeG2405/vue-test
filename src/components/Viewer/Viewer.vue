<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Viewer',
}
</script>

<style module lang="scss">
.root{
  position: relative;
}
</style>