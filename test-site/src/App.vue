<template>
  <showroom-main id="showroom" :components="components" />
</template>

<script>
import ShowroomMain from '../../dist/vue-showroom.min'
import allComponents from './showroom-components'

export default {
  name: 'App',
  components: {
    ShowroomMain
  },
  created() {
    this.components = allComponents
  }
}
</script>

<style>
  @import '../../dist/vue-showroom.min.css';

  html, body, #showroom {
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
