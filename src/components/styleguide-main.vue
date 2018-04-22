<template>
  <div class="styleguide-main">
    <component-menu class="component-menu" :components="components" :selectedComponent="component"
                    @select="selectComponent"
    />

    <component-editor class="component-editor" :component="component" :example="example" />
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
      component: undefined,
      example: undefined,
    }
  },
  mounted() {
    let [categoryName, componentName] = window.location.hash.split('|')
    if (categoryName && categoryName[0] === '#') {
      categoryName = categoryName.slice(1)
    }
    const component = this.getComponentByName(categoryName, componentName)
    this.component = component
    this.example = component && component.styleguide && component.styleguide.examples ? component.styleguide.examples[0] : {}
  },
  methods: {
    selectComponent(component) {
      this.component = component
      this.example = component.styleguide && component.styleguide.examples ? component.styleguide.examples[0] : {}

      const category = component.styleguide && component.styleguide.category ? component.styleguide.category : ''
      window.location.hash = `${category}|${component.name}`
    },

    getComponentByName(categoryName, componentName) {
      for (const component of this.components) {
        const category = component.styleguide && component.styleguide.category ? component.styleguide.category : ''
        if ((category === categoryName) && (componentName === component.name)) {
          return component
        }
      }
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
    box-shadow: 0 0 8px 0 #777;
  }

  .component-editor {
    flex-grow: 1;
  }
</style>
