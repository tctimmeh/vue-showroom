<template>
  <div class="styleguide-main">
    <component-menu class="component-menu" :components="components" :selectedComponent="component"
                    @select="selectComponent"
    />

    <component-editor class="component-editor" :component="component" />
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
  data() {
    return {
      component: undefined
    }
  },
  methods: {
    selectComponent(component) {
      this.component = component
    }
  }
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
