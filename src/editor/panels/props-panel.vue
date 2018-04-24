<template>
  <div class="props-editor">
    <div v-if="options.props && Object.keys(options.props).length" class="prop-controls">
      <table class="fields">
        <tr class="prop-field" v-for="(value, name) in options.props" :key="name">
          <th class="field-label">{{ name }}:</th>
          <td class="field-control">
            <input v-if="typeof options.props[name] === 'string'" class="prop-control text-control" type="text"
                   v-model="options.props[name]"
            >

            <input v-else-if="typeof options.props[name] === 'boolean'" class="prop-control boolean-control"
                   type="checkbox" v-model="options.props[name]" >

            <input v-else-if="typeof options.props[name] === 'number'" class="prop-control number-control"
                   type="number" v-model="options.props[name]" >

            <input v-else disabled class="prop-control disabled-control" type="text"
                   :value="JSON.stringify(options.props[name])"
            >
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
    options: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
  .no-props {
    color: #999;
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

  .text-control, .number-control, .disabled-control {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #aaa;
  }
</style>
