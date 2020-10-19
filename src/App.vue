<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <draggable :class="$style.draggable" group="bricks" :list="layout">
        <viewer v-for="name in layout" :key="name">
          <component :is="getComponentByName(name)" />
        </viewer>
      </draggable>
    </div>
    <div :class="$style.sidebar">
      <toolbar>
        <draggable :group="{ name: 'bricks', pull: 'clone', put: false }" :list="bricks">
          <brick v-for="name in bricks" :key="name">{{ name }}</brick>
        </draggable>
      </toolbar>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { VueDraggableNext as Draggable } from 'vue-draggable-next';

import {getComponentByName, getAllViews, getCompositionBase} from '@/views';

import Toolbar from '@/components/Toolbar/Toolbar';
import Brick from '@/components/Brick/Brick';
import Viewer from '@/components/Viewer/Viewer';

export default {
  name: 'App',
  components: {
      Viewer,
      Brick,
      Toolbar,
      Draggable,
  },
  setup(){
    const bricks = ref(getAllViews());
    const layout = ref(getCompositionBase());
    return {
      bricks,
      layout,
      getComponentByName,
    };
  },
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