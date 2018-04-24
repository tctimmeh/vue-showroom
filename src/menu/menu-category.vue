<template>
  <div class="menu-category">
    <div class="category-title">{{ category.name }}</div>

    <menu-category class="subcategory" v-for="(subCategory, subCategoryName) in category.categories"
                   :name="subCategoryName" :category="subCategory" :key="subCategoryName" :depth="depth + 1"
                   :selected-component="selectedComponent" :style="inlineStyle" @select="select"
    />

    <div class="component-link" :class="{selected: component === selectedComponent}"
         v-for="component in category.components" :key="component.name" :style="inlineStyle" @click="select(component)"
    >
      {{ component.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-category',
  props: {
    category: {
      type: Object,
      required: true,
    },
    selectedComponent: {
      type: Object,
      required: false,
      default: undefined,
    },
    depth: {
      type: Number,
      required: false,
      default: 1,
    }
  },
  computed: {
    inlineStyle() {
      return {
        marginLeft: `${this.depth * 0.5}rem`,
      }
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
  .category-title {
    color: #aaa;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    text-transform: uppercase;
    pointer-events: none;
  }

  .component-link {
    color: #333;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.25rem;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #8bd;
      color: white;
    }
  }
</style>
