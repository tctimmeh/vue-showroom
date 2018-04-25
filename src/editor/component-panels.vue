<template>
  <div class="vueshowroom-component-panels">
    <div class="vueshowroom-component-panels__panel-links">
      <span class="vueshowroom-component-panels__panel-link" v-for="(panel, key) in panels" :key="key"
            :class="{'vueshowroom-component-panels__panel-link--selected': selectedPanel === key}"
            @click="selectedPanel = key"
      >
        {{ panel.title }}
      </span>
    </div>
    <div class="vueshowroom-component-panels__panel-container">
      <component v-for="(panel, key) in panels" :key="key" :is="panel.panel" v-if="selectedPanel === key"
                 :options="options" :events="events"
      />
    </div>
  </div>
</template>

<script>
import PropsPanel from './panels/props-panel.vue'
import SettingsPanel from './panels/settings-panel.vue'
import EventsPanel from './panels/events-panel.vue'

export default {
  name: 'component-panels',
  props: {
    options: {
      type: Object,
      required: true,
    },
    events: {
      type: Array,
      required: true
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
        panel: PropsPanel,
      },
      events: {
        title: 'Events',
        panel: EventsPanel,
      },
      preview: {
        title: 'Settings',
        panel: SettingsPanel,
      }
    }
  }
}
</script>

<style lang="scss">
  .vueshowroom-component-panels {
    background-color: white;
    min-height: 10rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
  }

  .vueshowroom-component-panels__panel-links {
    margin: 0 1rem;
    user-select: none;
  }

  .vueshowroom-component-panels__panel-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    &.vueshowroom-component-panels__panel-link--selected {
      background-color: #8bd;
      color: white;
    }
  }

  .vueshowroom-component-panels__panel-container {
    padding: 1rem;
    overflow-y: auto;
  }
</style>
