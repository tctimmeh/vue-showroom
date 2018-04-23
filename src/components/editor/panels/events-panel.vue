<template>
  <div class="event-log">
    <ul class="event-list">
      <li v-for="event in reversedEvents" class="event-description">
        <button class="inspect-button" title="Inspect in console" @click="inspect(event)">&#x1f441;</button>

        <span class="event-time">{{ formatDate(event.time) }}</span>
        -
        <span class="event-name">{{ event.name }}</span>

        <span v-if="event.data" class="event-data">
          -
          <span class="event-data-class">{{ className(event.data) }}</span>
          <span class="event-data-data">{{ event.data }}</span>
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

<style scoped lang="scss">
  .event-list {
    list-style: none;
  }

  .event-description {
    padding: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(even) {
      background-color: #f7f7f7;
    }
  }

  .inspect-button {
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

  .event-name {
    font-weight: bold;
  }

  .event-data-class {
    margin-right: 0.5rem;
  }
</style>
