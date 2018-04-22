<template>
  <div class="component-controls">
    <div class="panel-links">
      <span class="panel-link" v-for="(panel, key) in panels" :key="key" :class="{'selected': selectedPanel === key}"
            @click="selectedPanel = key"
      >
        {{ panel.title }}
      </span>
    </div>
    <div class="panels">
      <component v-for="(panel, key) in panels" :key="key" :is="panel.panel" v-if="selectedPanel === key"
                 :options="options"
      />
    </div>
  </div>
</template>

<script>
import PropsEditor from './props-editor'
import PreviewOptions from './preview-options'

export default {
  name: 'component-controls',
  components: {PropsEditor},
  props: {
    options: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      selectedPanel: 'props'
    }
  },
  created() {
    this.panels = {
      props: {
        title: 'Props',
        panel: PropsEditor,
      },
      preview: {
        title: 'Preview',
        panel: PreviewOptions,
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .component-controls {
    background-color: white;
    min-height: 10rem;
  }

  .panel-links {
    margin: 0 1rem;
  }

  .panel-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #8bd;
      color: white;
    }
  }

  .panels {
    padding: 1rem;
  }
</style>
