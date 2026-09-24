# Button

The icon prop accepts icon data imported from `kui-icons`, not a string or rendered `Icon` element. Use `:icon="Search"`, not `icon="Search"` or `:icon="h(Icon, ...)"`. Custom components belong in the default slot.

Buttons are used to initiate an immediate operation.

## When to Use

Marks one (or encapsulates a group of) operation commands, responds to user click behavior, and triggers the corresponding business logic.

## Component Registration

```js
import { Button } from "kui-vue";
Vue.use(Button);
```

## Examples

[Basic Usage](./demo/basic.vue)

- Use the `type` property to define a `Button`.

[Theme](./demo/theme.vue)

- Use `theme` to display different appearances.

[Color Variants](./demo/color.vue)

- Use `color` to create more button variants.

[With Icon](./demo/with-icon.vue)

- Set the button icon by adding the `icon` property.

[Size](./demo/size.vue)

- `small` for small size, `large` for large size.

[Disabled](./demo/disabled.vue)

- Add the `disabled` property to make the button unavailable.

[Loading State](./demo/loading.vue)

- Add the `loading` property to put the button in a loading state.

[Block Button](./demo/block.vue)

- The `block` property makes the button fit the width of its parent.

[Button Group](./demo/group.vue)

- Place multiple `Button` components inside `ButtonGroup` to group them.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Set the button type | `"default" \| "link" \| "warning" \| "text" \| "primary" \| "danger"` | - |
| htmlType | Set the native type value of the button | `"button" \| "submit" \| "reset"` | button |
| disabled | Disabled state of the button | `boolean` | false |
| size | Button size, | `"small" \| "medium" \| "large"` | - |
| color | Preset semantic color | `"default" \| "red" \| "orange" \| "yellow" \| "olive" \| "green" \| "teal" \| "blue" \| "volcano" \| "violet" \| "cyan" \| "gold" \| "lime" \| "magenta" \| "purple" \| "pink" \| "brown" \| "gray"` | - |
| shape | When shape=circle, presents a circular button | `"default" \| "circle" \| "square" \| "round"` | false |
| theme | Button theme | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | - |
| icon | Icon definition imported from kui-icons (e.g. Search), not a string or rendered Icon element | `IconType[]` | - |
| loading | Whether the button is in loading mode | `boolean` | false |
| href | The address to jump to when clicked. Specifying this property makes the button behave like an a link | `string` | - |
| target | Equivalent to the target attribute of an a link, takes effect when href exists | `string` | - |
| block | Option to fit button width to its parent width | `boolean` | false |
