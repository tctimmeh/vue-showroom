<template>
  <div id="app">
    <showroom-main id="showroom" :components="showroomComponents" />
  </div>
</template>

<script>
import ShowroomMain from '../../dist/vue-showroom.min'

import SimpleButton from './components/button.vue'
import CustomButton from './components/custom-button.vue'
import PropsDemo from './components/props-demo.vue'
import SlotsDemo from './components/slots-demo.vue'

export default {
  name: 'App',
  components: {
    ShowroomMain
  },
  created() {
    this.showroomComponents = [
      SimpleButton,
      CustomButton,
      PropsDemo,
      SlotsDemo
    ]
  }
}
</script>

<style>
  @import '../../dist/vue-showroom.min.css';

  html, body, #app, #showroom {
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
