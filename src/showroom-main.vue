<template>
  <div class="showroom-main">
    <component-menu class="component-menu" :components="components" :selected-component="component"
                    @select="selectComponent"
    />

    <component-editor class="component-editor" :component="component" :example="example" />
  </div>
</template>

<script>
import ComponentMenu from './menu/component-menu.vue'
import ComponentEditor from './editor/component-editor.vue'

const defaultExample = {
  props: {}
}

export default {
  name: 'showroom-main',
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
    let [categoryName, componentName] = window.location.hash.split('|') // eslint-disable-line prefer-const
    if (categoryName && categoryName[0] === '#') {
      categoryName = categoryName.slice(1)
    }
    const component = this.getComponentByName(categoryName, componentName)
    this.selectComponent(component)
  },
  methods: {
    selectComponent(component) {
      this.component = component

      const example = component && component.styleguide && component.styleguide.examples
        ? component.styleguide.examples[0]
        : {}
      this.example = Object.assign({}, defaultExample, example)

      const category = component && component.styleguide && component.styleguide.category
        ? component.styleguide.category
        : ''

      if (component) {
        window.location.hash = `${category}|${component.name}`
      }
      else {
        window.location.hash = ''
      }
    },

    getComponentByName(categoryName, componentName) {
      for (const component of this.components) {
        const category = component.styleguide && component.styleguide.category ? component.styleguide.category : ''
        if ((category === categoryName) && (componentName === component.name)) {
          return component
        }
      }
      return undefined
    }
  }
}
</script>

<style scoped lang="scss">
  .showroom-main {
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
