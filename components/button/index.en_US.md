# Button

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

[Outline Theme](./demo/outline.vue)

- Only display the border.

[Color Variants](./demo/color.vue)

- Use `color` to create more button variants.

[Light Theme](./demo/light.vue)

- Light theme.

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

| Property | Description                                                                                          | Type                                       | Default |
| -------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------- |
| type     | Set the button type                                                                                  | `primary` \| `link`\| `dashed` \| `danger` | -       |
| htmlType | Set the native type value of the button                                                              | String                                     | button  |
| disabled | Disabled state of the button                                                                         | Boolean                                    | -       |
| size     | Button size,                                                                                         | `small`\|`large`                           | -       |
| shape    | When shape=circle, presents a circular button                                                        | Boolean                                    | false   |
| theme    | Button theme                                                                                         | `solid` \| `light` \| `normal`             | -       |
| icon     | Button icon                                                                                          | String                                     | -       |
| loading  | Whether the button is in loading mode                                                                | Boolean                                    | false   |
| href     | The address to jump to when clicked. Specifying this property makes the button behave like an a link | String                                     | -       |
| target   | Equivalent to the target attribute of an a link, takes effect when href exists                       | String                                     | -       |
| block    | Option to fit button width to its parent width                                                       | Boolean                                    | false   |
