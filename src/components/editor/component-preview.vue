<template>
  <div class="component-preview">
    <div v-if="component" ref="preview" v-on="domEventHandlers">
      <component :is="component" v-bind="options.props" v-on="vueEventHandlers" />
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
  computed: {
    domEventHandlers() {
      if (!this.component) {
        return {}
      }
      const domEventNames = (this.component.styleguide && this.component.styleguide.events
        && this.component.styleguide.events.dom) ? this.component.styleguide.events.dom : []
      return this.getEventHandlers(domEventNames, this.domHandler)
    },

    vueEventHandlers() {
      if (!this.component) {
        return {}
      }
      const vueEventNames = (this.component.styleguide && this.component.styleguide.events
        && this.component.styleguide.events.vue) ? this.component.styleguide.events.vue : []
      return this.getEventHandlers(vueEventNames, this.domHandler)
    }
  },
  methods: {
    getEventHandlers(eventNames, handlerFunc) {
      return eventNames.reduce((accumulator, name) => {
        accumulator[name] = handlerFunc.bind(this, name)
        return accumulator
      }, {})
    },

    domHandler(eventName, event) {
      this.$emit('eventTriggered', {name: eventName, data: event, time: new Date()})
    },

    vueHandler(event) {
      this.$emit('eventTriggered', {name: 'cancel', data: event, time: new Date()})
    }
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
