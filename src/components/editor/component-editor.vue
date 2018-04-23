<template>
  <div class="component-editor">
    <component-preview class="preview" :component="component" :options="options" @eventTriggered="captureEvent"/>
    <component-panels class="panels" :options="options" :events="events"/>
  </div>
</template>

<script>
import ComponentPreview from './component-preview'
import ComponentPanels from './component-panels'

export default {
  name: 'component-editor',
  components: {
    ComponentPreview,
    ComponentPanels
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
      options: {},
      events: [],
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
      this.events = []
      if (!this.component) {
        this.options = {}
        return
      }

      const props = {}
      for (const propName in this.component.props) {
        if (!this.component.props.hasOwnProperty(propName)) {
          continue
        }
        props[propName] = this.example.props[propName]
          || this.component.props[propName].default
          || undefined
      }

      this.options = {
        component: this.component,
        example: this.example || {},
        props,
      }
    },

    captureEvent(event) {
      this.events.push(event)
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

  .panels {
    border-top: 1px solid #ccc;
  }
</style>
