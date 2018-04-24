<template>
  <div>
    <div class="header">
      <slot name="header">Default Header</slot>
    </div>

    <div class="body">
      <slot name="body">Default body</slot>

      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slots-demo',
  styleguide: {
    category: 'Slots',
    examples: [
      {
        slots: {
          header: '<h1>A nice header</h1>',
          body: 'Some <strong>body</strong> content',
          extra: [
            '<p>More at the bottom</p>',
            '<p>And even more</p>'
          ]
        }
      }
    ]
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--</style>-->
