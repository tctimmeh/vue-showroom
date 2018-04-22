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
      this.options = {
        component: {
          props: this.example ? this.example.props || {} : {}
        }
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

  .preview, .controls {
    padding: 1rem;
  }

  .preview {
    flex-grow: 1;
  }

  .controls {
    border-top: 1px solid #ccc;
  }
</style>
