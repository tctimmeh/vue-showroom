<template>
  <div class="vueshowroom-props-editor">
    <div v-if="options.props && Object.keys(options.props).length" class="vueshowroom-props-editor__prop-controls">
      <table class="vueshowroom-props-editor__fields">
        <tr class="vueshowroom-props-editor__prop-field" v-for="(value, name) in options.props" :key="name">
          <th class="vueshowroom-props-editor__field-label">{{ name }}:</th>
          <td class="vueshowroom-props-editor__field-control">
            <input v-if="typeof options.props[name] === 'string'"
                   class="vueshowroom-props-editor__prop-control vueshowroom-props-editor__text-control" type="text"
                   v-model="options.props[name]"
            >

            <input v-else-if="typeof options.props[name] === 'boolean'"
                   class="vueshowroom-props-editor__prop-control vueshowroom-props-editor__boolean-control"
                   type="checkbox" v-model="options.props[name]" >

            <input v-else-if="typeof options.props[name] === 'number'"
                   class="vueshowroom-props-editor__prop-control vueshowroom-props-editor__number-control"
                   type="number" v-model="options.props[name]" >

            <input v-else disabled type="text"
                   class="vueshowroom-props-editor__prop-control vueshowroom-props-editor__disabled-control"
                   :value="JSON.stringify(options.props[name])"
            >
          </td>
        </tr>
      </table>
    </div>
    <div v-else class="vueshowroom-props-editor__no-props">
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

<style lang="scss">
  .vueshowroom-props-editor__no-props {
    color: #999;
  }

  .vueshowroom-props-editor__fields, .vueshowroom-props-editor__field-control {
    width: 100%;
  }

  .vueshowroom-props-editor__field-label {
    font-weight: bold;
    min-width: 12rem;
    text-align: right;
    display: inline-block;
    margin-right: 1rem;
  }

  .vueshowroom-props-editor__field-control {
    padding-bottom: 0.5rem;
  }

  .vueshowroom-props-editor__text-control, .vueshowroom-props-editor__number-control,
  .vueshowroom-props-editor__disabled-control {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #aaa;
  }
</style>
