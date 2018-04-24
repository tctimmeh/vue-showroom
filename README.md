# Vue Showroom

Vue Styleguide is an interactive living component styleguide that you embed directly into your application, instead of
running a separate styleguide project and server.

## Installation

`npm install vue-showroom`

or

`yarn add vue-showroom`

Here is an example page that displays Showroom:

    <template>
      <showroom-main id="showroom" :components="components" />
    </template>

    <script>
    import ShowroomMain from 'vue-showroom'
    import allComponents from /* some file that exports all your components in an array... */

    export default {
      name: 'showroom-page',
      components: {
        ShowroomMain
      },
      created() {
        this.components = allComponents
      }
    }
    </script>

    <style>
      @import '../../dist/vue-showroom.min.css';
      #showroom {
        height: 100%;
        width: 100%;
        margin: 0;
      }
    </style>

Note that you must provide an array of every component that you want to appear in Showroom. Consider maintaining this
list in a dedicated file (e.g. `showroom-components.js`).

## Configuring Examples

By default Showroom will display your component with no prop data and no slot content, will not capture any events, and
will leave your components uncategorized in the menu. To control how a components appears in Showroom the component must
have `styleguide` field. For example:

    export default {
      name: 'my-button',
      styleguide: {
        category: 'Buttons',
      }
    }

This example puts the `my-button` component into the "Buttons" category in to the Showroom menu. See below for all 
options supported by the styleguide property.

#### Category

_Example_: `category: 'Dialogs'`

Names the grouping category that this component will appear under in the Showroom menu. If no category is provided then
the component will be listed at the top of the menu without a category.

#### Events

_Example_: `events: {dom: ['click'], vue: ['sign-in']}`

Provides the names of events that Showroom should capture. This field must be an object with 2 optional keys: `dom` 
and/or `vue`. The `dom` key is a list of DOM event names that should be captured. The `vue` key is a list of custom
Vue events that should be captured.

#### Trigger

_Example_: `trigger: { cancelEvent: 'cancel' }`

Sometimes you may not want to show a component right away. In these cases you can provide a `trigger` property. This
will cause Showroom to instead render trigger button instead of your actual component. When the button is clicked your
component will be shown. 

You can also specify a `cancelEvent` here to name a Vue event that, when triggered, will remove your component again. 
Note that you must be capturing the cancel event for this to work (see "Events" above).

#### Examples

_Example_: `examples: [ { props: { ... }, slots: { ... } ]`

Provide a list of examples for your component.

**Note**: Only 1 example is supported today. Even though this property must be a list, only the first example will be
used in Showroom.

Each example provides the prop data and/or slot content to use when rendering the example.

##### Props

_Example_: `examples: [ { props: { value: 123, content: 'abc' } } ]`

The values of prop data that will be passed to the component when rendering this example.

##### Slots

_Example_: `examples: [ { slots: { title: 'A <em>good</em> title', button: ['a', 'b', 'c'] } } ]`

The HTML to render in each slot. The values given here are passed as `v-html` to each slot, so you can embed HTML here.
If a list of values is given for a slot name then that slot will be rendered once for each value.

## Developing Showroom

- Run `yarn build` to build the releasable package
- After building, go into the `test-site` directory and run `yarn dev` to launch an example site that demonstrates 
  Showroom's features
