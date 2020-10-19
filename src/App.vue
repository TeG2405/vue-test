<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <draggable :class="$style.draggable" group="bricks" :list="layout">
        <brick v-for="value in layout" :key="value">{{ value }}</brick>
      </draggable>
    </div>
    <div :class="$style.sidebar">
      <toolbar>
        <draggable :group="{ name: 'bricks', pull: 'clone', put: false }" :list="bricks">
          <brick v-for="value in bricks" :key="value">{{ value }}</brick>
        </draggable>
      </toolbar>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import Toolbar from '@/components/Toolbar/Toolbar';
import Brick from '@/components/Brick/Brick';
export default {
  name: 'App',
  components: {
      Brick,
      Toolbar,
      Draggable,
  },
  data(){ return {
    bricks: ['Компонент 1', 'Компонент 2', 'Компонент 3'],
    layout: [],
  }},
}
</script>

<style module lang="scss">
body{
  padding: 0;
  margin: 0;
}
.root{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  .main{
    flex: 1 1 auto;
    .draggable{
      height: 100%;
    }
  }
  .sidebar{
    flex: 0 0 auto;
  }
}
</style>