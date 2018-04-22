<template>
  <div class="styleguide-main">
    <component-menu class="component-menu" :components="components" />
    <component-editor class="component-editor" />
  </div>
</template>

<script>
import ComponentMenu from './component-menu/component-menu'
import ComponentEditor from './component-editor'

export default {
  name: 'styleguide-main',
  components: {
    ComponentMenu,
    ComponentEditor,
  },
  props: {
    components: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
  .styleguide-main {
    display: flex;
  }

  .component-menu {
    padding: 1rem;
  }

  .component-editor {
    flex-grow: 1;
  }
</style>
