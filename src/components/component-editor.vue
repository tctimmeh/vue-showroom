<template>
  <div class="component-editor">
    <component-preview class="preview" :component="component" :options="options" />
    <component-controls class="controls" :options="options" />
  </div>
</template>

<script>
import ComponentPreview from './component-preview'
import ComponentControls from './controls/component-controls'

export default {
  name: 'component-editor',
  components: {
    ComponentPreview,
    ComponentControls
  },
  props: {
    component: {
      type: Object,
      required: false,
      default: undefined,
    },
    example: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.reset()
  },
  watch: {
    component() {
      this.reset()
    },
    example() {
      this.reset()
    }
  },
  methods: {
    reset() {
      if (!this.component) {
        this.options = {}
        return
      }

      const props = {}
      for (const propName in this.component.props) {
        if (!this.component.props.hasOwnProperty(propName)) {
          continue
        }
        props[propName] = this.example.props[propName] || this.component.props[propName].default || undefined
      }

      this.options = {
        component: this.component,
        example: this.example || {},
        props,
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .component-editor {
    display: flex;
    flex-direction: column;
  }

  .preview {
    padding: 1rem;
  }

  .preview {
    flex-grow: 1;
  }

  .controls {
    border-top: 1px solid #ccc;
  }
</style>
