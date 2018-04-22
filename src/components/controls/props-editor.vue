<template>
  <div class="props-editor">
    <div v-if="options.component" class="controls">
      <table class="fields">
        <tr class="prop-field" v-for="(value, name) in options.props" :key="name">
          <th class="field-label">{{ name }}:</th>
          <td class="field-control">
            <input class="prop-control text-control" type="text" v-model="options.props[name]" />
          </td>
        </tr>
      </table>
    </div>
    <div v-else class="no-props">
      No props to edit
    </div>
  </div>
</template>

<script>
export default {
  name: 'props-editor',
  props: {
    options: Object,
    required: true,
  },
}
</script>

<style scoped lang="scss">
  .no-props {
    color: #aaa;
  }

  .fields, .field-control {
    width: 100%;
  }

  .field-label {
    font-weight: bold;
    min-width: 12rem;
    text-align: right;
    display: inline-block;
    margin-right: 1rem;
  }

  .field-control {
    padding-bottom: 0.5rem;
  }

  .text-control {
    font-size: 1rem;
    padding: 0.4rem;
    border: 1px solid #aaa;
  }
</style>
