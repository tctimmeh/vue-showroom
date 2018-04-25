<template>
  <div class="vueshowroom-event-log">
    <ul class="vueshowroom-event-log__event-list">
      <li v-for="(event, index) in reversedEvents" :key="index" class="vueshowroom-event-log__event-description">
        <button class="vueshowroom-event-log__inspect-button" title="Inspect in console" @click="inspect(event)">
          &#x1f441;
        </button>

        <span class="vueshowroom-event-log__event-time">{{ formatDate(event.time) }}</span>
        -
        <span class="vueshowroom-event-log__event-name">{{ event.name }}</span>

        <span v-if="event.data" class="vueshowroom-event-log__event-data">
          -
          <span class="vueshowroom-event-log__event-data-class">{{ className(event.data) }}</span>
          <span class="vueshowroom-event-log__event-data-data">{{ event.data }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  hour12: false,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
})

export default {
  name: 'events-panel',
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    reversedEvents() {
      return this.events.slice().reverse()
    }
  },
  methods: {
    formatDate(dateTime) {
      return dateTimeFormat.format(dateTime)
    },

    className(arg) {
      if (!arg) {
        return ''
      }
      return arg.constructor.name
    },

    inspect(event) {
      console.log({name: event.name, time: event.time, data: event.data})
    }
  }
}
</script>

<style lang="scss">
  .vueshowroom-event-log__event-list {
    list-style: none;
  }

  .vueshowroom-event-log__event-description {
    padding: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(even) {
      background-color: #f7f7f7;
    }
  }

  .vueshowroom-event-log__inspect-button {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
      border-color: #999;
    }
  }

  .vueshowroom-event-log__event-name {
    font-weight: bold;
  }

  .vueshowroom-event-log__event-data-class {
    margin-right: 0.5rem;
  }
</style>
