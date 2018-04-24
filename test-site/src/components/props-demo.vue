<template>
  <div>
    <p>Text is: {{ text }}</p>

    <div>Boolean props: <input type="checkbox" v-model="good" /></div>

    <p>Numbers: {{ number }}</p>
  </div>
</template>

<script>
export default {
  name: 'props-demo',
  props: {
    text: {
      type: String,
      default: ''
    },
    good: {
      type: Boolean,
      default: false,
    },
    number: {
      type: Number,
      default: 0
    }
  },
  styleguide: {
    category: 'Props',
    examples: [
      {
        props: {
          text: 'Some example text',
          good: true,
          number: 3.14159
        }
      }
    ]
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
