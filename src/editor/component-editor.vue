<template>
  <div class="vueshowroom-component-editor">
    <component-preview class="vueshowroom-component-editor__preview" :component="component" :options="options"
                       @eventTriggered="captureEvent"/>
    <component-panels class="vueshowroom-component-editor__panels" :options="options" :events="events"/>
  </div>
</template>

<script>
import ComponentPreview from './component-preview.vue'
import ComponentPanels from './component-panels.vue'

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
      options: {
        component: undefined,
        example: {},
        props: {},
        preview: {
          backgroundColor: 'inherit'
        }
      },
      events: [],
    }
  },
  watch: {
    component() {
      this.reset()
    },
    example() {
      this.reset()
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    reset() {
      this.events = []
      if (!this.component) {
        this.options.component = undefined
        this.options.example = {}
        this.options.props = {}
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

      this.options.component = this.component
      this.options.example = this.example || {}
      this.options.props = props
    },

    captureEvent(event) {
      this.events.push(event)
    }
  }
}
</script>

<style lang="scss">
  .vueshowroom-component-editor {
    display: flex;
    flex-direction: column;
  }

  .vueshowroom-component-editor__preview {
    padding: 1rem;
    flex-grow: 1;
  }

  .vueshowroom-component-editor__panels {
    border-top: 1px solid #ccc;
  }
</style>
