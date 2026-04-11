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

<code src="./demo/block.vue">Block Button</code>
<code src="./demo/color.vue">Color Variants</code>
<code src="./demo/disabled.vue">Disabled</code>
<code src="./demo/group.vue">Button Group</code>
<code src="./demo/light.vue">Light Theme</code>
<code src="./demo/loading.vue">Loading State</code>
<code src="./demo/outline.vue">Outline Theme</code>
<code src="./demo/size.vue">Size</code>
<code src="./demo/withIcon.vue">With Icon</code>

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
