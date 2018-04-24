<template>
  <div class="component-menu">
    <menu-category class="menu-category" v-for="category in categories" :key="category.name"
                   :category="category" @select="select" :selected-component="selectedComponent"
    />
  </div>
</template>

<script>
import MenuCategory from './menu-category.vue'

function sortComponents(components) {
  const categories = {}
  for (const component of components) {
    const options = component.styleguide
    const categoryName = options ? options.category || '' : ''

    if (!categories.hasOwnProperty(categoryName)) {
      categories[categoryName] = {
        categories: {},
        components: [],
      }
    }
    const category = categories[categoryName]
    category.components.push(component)
  }

  return Object.entries(categories)
    .map(entry => {
      return {name: entry[0], ...entry[1]}
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

export default {
  name: 'component-menu',
  components: {
    MenuCategory
  },
  props: {
    components: {
      type: Array,
      required: true,
    },
    selectedComponent: {
      type: Object,
      required: false,
      default: undefined,
    }
  },
  computed: {
    categories() {
      return sortComponents(this.components)
    }
  },
  methods: {
    select(component) {
      this.$emit('select', component)
    }
  }
}
</script>

<style scoped lang="scss">
  .component-menu {
    background-color: white;
    overflow-y: auto;
    min-width: 18rem;
  }
</style>
