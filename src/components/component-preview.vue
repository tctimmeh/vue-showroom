<template>
  <div class="component-preview">
    <div v-if="component" ref="preview">
      <component :is="component" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-preview',
  props: {
    component: {
      type: Object,
      required: false,
      default: undefined
    },
  },
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
