<template>
<div :class="$style.root">
    <slot />
</div>
</template>

<script>
export default {
    name: 'Toolbar'
}
</script>

<style module lang="scss">
.root{
    position: relative;
    height: 100%;
    width: 320px;
    max-width: 100%;
    background-color: rgba(#ccc, 0.2);
    padding: 15px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>