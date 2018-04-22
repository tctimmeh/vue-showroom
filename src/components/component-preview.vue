<template>
  <div class="component-preview">
    <div v-if="component" ref="preview">
      <component :is="component" v-bind="options.component.props" />
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
    options: {
      type: Object,
      required: true,
    }
  },
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
