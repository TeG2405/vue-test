<template>
  <div :class="$style.root">
    <div :class="$style.controls">
      <button :class="[$style.btn, $style.remove]" @click="$emit('remove')">Удалить</button>
      <button :class="[$style.btn, $style[edit ? 'close' : 'edit']]" @click="toggleEditor" />
    </div>
    <component :is="is" :="properties" />
    <div v-if="edit" :class="$style.editor">
      <div v-for="(value, key) in properties" :class="$style.prop" :key="key">
        <label :class="$style.label">{{key}}</label>
        <div :class="$style.control">
          <textarea :class="$style.input" :value="value" @input="(event) => changeProperty(key, event.target.value)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, reactive  } from 'vue';
import { getComponentByName, getComponentPropertiesByName } from '@/views';


export default {
  name: 'Viewer',
  props: {
    name: String,
  },
  setup(props){
    const edit = ref(false);
    const properties = reactive(getComponentPropertiesByName(props.name));
    const is = computed(() => getComponentByName(props.name));
    const toggleEditor = () => (edit.value = !edit.value);
    const changeProperty = (key, value) => (properties[key] = value);
    return {
      edit,
      properties,
      is,
      toggleEditor,
      changeProperty,
    }
  }
}
</script>

<style module lang="scss">
.root{
  position: relative;
  min-height: 30px;
  &:hover{ outline: 1px solid #000 }
  .controls{
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
    @at-root .root:hover .controls{
      opacity: 1;
    }
    .btn{
      width: 30px;
      height: 30px;
      display: block;
      border: none;
      cursor: pointer;
      background: #000;
      color: #fff;
      border-radius: 0;
      margin-left: 10px;
    }
    .remove{
      background: #ff0000;
      width: auto;
    }
    .edit:before{
      content: '🖊';
    }
    .close:before{
      content: '×';
    }
  }
  .editor{
    padding: 15px;
    background-color: rgba(#ccc, 0.2);
    .label{
      margin-bottom: 10px;
      display: block;
    }
    .input{
      display: block;
      width: 100%;
      padding: 8px 20px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      outline: none;
    }
  }
}
</style>