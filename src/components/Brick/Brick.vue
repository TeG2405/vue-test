<template>
<div :class="$style.root">
    <slot />
</div>
</template>

<script>
export default {
    name: 'Brick',
}
</script>

<style module lang="scss">
.root{
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    &:not(:last-child){
        margin-bottom: 10px;
    }
}
</style>