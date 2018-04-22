<template>
  <div class="props-editor">
    Props editor here
    {{ options }}
  </div>
</template>

<script>
export default {
  name: 'props-editor',
  props: {
    options: Object,
    required: true,
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
