<template>
  <div class="component-editor">
    <component-preview class="preview" :component="component" />
    <component-controls class="controls" :component="component" />
  </div>
</template>

<script>
import ComponentPreview from './component-preview'
import ComponentControls from './component-controls'

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
</style>
