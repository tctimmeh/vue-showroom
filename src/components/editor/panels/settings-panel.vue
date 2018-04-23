<template>
  <div>
    <div class="background-color-setting">
      <strong>Background Color:</strong>
      <input class="background-color-input" type="color" v-model="options.preview.backgroundColor"/>
      <button class="background-clear-button" @click="clearBackgroundColor">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-options',
  props: {
    options: Object,
    required: true,
  },
  methods: {
    clearBackgroundColor() {
      console.log('clear')
      this.options.preview.backgroundColor = 'inherit'
    }
  }
}
</script>

<style scoped lang="scss">
  .background-color-input {
    display: inline-block;
    background-color: white;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 1px solid #999;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }

  .background-clear-button {
    height: 1.5rem;
    display: inline-block;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-left: 0.25rem;
    cursor: pointer;

    &:hover {
      border-color: #999;
    }
  }
</style>
