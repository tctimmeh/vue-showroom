<template>
  <div class="component-panels">
    <div class="panel-links">
      <span class="panel-link" v-for="(panel, key) in panels" :key="key" :class="{'selected': selectedPanel === key}"
            @click="selectedPanel = key"
      >
        {{ panel.title }}
      </span>
    </div>
    <div class="panel-container">
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

<style scoped lang="scss">
  .component-panels {
    background-color: white;
    min-height: 10rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
  }

  .panel-links {
    margin: 0 1rem;
    user-select: none;
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

  .panel-container {
    padding: 1rem;
    overflow-y: auto;
  }
</style>
