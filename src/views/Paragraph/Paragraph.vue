<template>
<p>{{text}}</p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    text: {type: String, defaultValue: 'Текст параграфа...'},
  },
}
</script>