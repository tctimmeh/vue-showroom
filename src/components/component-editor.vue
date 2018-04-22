<template>
  <div class="component-editor">
    <div class="pane component-preview">
      <h6 class="title is-6">Preview</h6>
    </div>

    <div class="pane component-controls">
      <h6 class="title is-6">Controls</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-editor',
}
</script>

<style scoped lang="scss">
  .pane {
    padding: 1rem;
  }
</style>
