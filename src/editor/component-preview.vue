<template>
  <div class="component-preview" :style="{backgroundColor: options.preview.backgroundColor}">
    <div v-if="triggerOptions && !previewVisible" class="component-trigger">
      <button class="trigger-button" @click="triggerPreview">Trigger</button>
    </div>
    <div v-else-if="component" ref="preview" v-on="domEventHandlers">
      <component :is="component" v-bind="options.props" v-on="vueEventHandlers">
        <div v-for="([slot, slotContent], index) in previewSlots" :key="index" :slot="slot" v-html="slotContent" />
      </component>
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
  data() {
    return {
      previewVisible: false
    }
  },
  computed: {
    triggerOptions() {
      if (!this.component || !this.component.styleguide || !this.component.styleguide.trigger) {
        return undefined
      }
      return this.component.styleguide.trigger
    },

    previewSlots() {
      if (!this.options.example || !this.options.example.slots) {
        return []
      }

      return Object.entries(this.options.example.slots).reduce((previous, current) => {
        const [slot, slotContent] = current
        if (typeof slotContent === 'string') {
          previous.push(current)
          return previous
        }
        return previous.concat(slotContent.map(content => [slot, content]))
      }, [])
    },

    domEventHandlers() {
      if (!this.component) {
        return {}
      }
      const domEventNames = (this.component.styleguide && this.component.styleguide.events
        && this.component.styleguide.events.dom) ? this.component.styleguide.events.dom : []
      return this.getEventHandlers(domEventNames, this.eventHandler)
    },

    vueEventHandlers() {
      if (!this.component) {
        return {}
      }
      const vueEventNames = (this.component.styleguide && this.component.styleguide.events
        && this.component.styleguide.events.vue) ? this.component.styleguide.events.vue : []
      return this.getEventHandlers(vueEventNames, this.eventHandler)
    }
  },
  methods: {
    getEventHandlers(eventNames, handlerFunc) {
      return eventNames.reduce((accumulator, name) => {
        accumulator[name] = handlerFunc.bind(this, name)
        return accumulator
      }, {})
    },

    eventHandler(eventName, event) {
      if (this.triggerOptions && eventName === this.triggerOptions.cancelEvent) {
        this.previewVisible = false
      }
      this.$emit('eventTriggered', {name: eventName, data: event, time: new Date()})
    },

    triggerPreview() {
      this.previewVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
  .trigger-button {
    background-color: white;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
