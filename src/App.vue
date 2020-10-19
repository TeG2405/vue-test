<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <draggable :class="$style.draggable" group="bricks" :list="layout">
        <viewer
          v-for="(name, index) in layout"
          :name="name"
          :key="name + index"
          @remove="() => removeView(index)"
        />
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

import { getAllViews, getCompositionBase } from '@/views';

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
    const removeView = (index) => layout.value.splice(index, 1);
    return {
      bricks,
      layout,
      removeView,
    };
  },
}
</script>

<style module lang="scss">
body{
  font-family: sans-serif;
  font-size: 14px;
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