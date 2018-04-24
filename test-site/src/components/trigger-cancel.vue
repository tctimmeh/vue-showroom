<template>
  <div>You can close me! <button @click="$emit('close')">Close</button></div>
</template>

<script>
export default {
  name: 'trigger-close',
  styleguide: {
    category: 'Triggers',
    events: {
      vue: ['close']
    },
    trigger: {
      cancelEvent: 'close'
    }
  }
}
</script>
