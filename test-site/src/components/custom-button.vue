<template>
  <div @click="pushed">
    Click me and check the <strong>Events</strong> panel
  </div>
</template>

<script>
export default {
  name: 'vue-events',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    pushed() {
      this.count += 1
      this.$emit('pushed', {count: this.count})
    }
  },
  styleguide: {
    category: 'Event Capturing',
    events: {
      vue: ['pushed']
    }
  }
}
</script>

<style scoped>
  div {
    width: 30rem;
    height: 1rem;
    padding: 1rem;
    background-color: peachpuff;
  }
</style>
