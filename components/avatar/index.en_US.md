# Avatar

Used to represent users or things, supports image, icon, or character display.

## Examples

[Basic](./demo/basic.vue)

- Avatars support preset and custom sizes, with three available shapes.

[Types](./demo/types.vue)

- Three types are supported: Image, Icon, and Text. Icon and Text avatars support custom icon color and background color.

[With logo and grouping](./demo/badge-group.vue)

- Typically used for message prompts and avatar combination display.

[Auto Font Size Adjustment](./demo/change.vue)

- For text avatars, when the string is long, the font size automatically adjusts based on the avatar width.

## API

| Property | Description                                                          | Type                                  | Default |
| -------- | -------------------------------------------------------------------- | ------------------------------------- | ------- |
| icon     | Avatar icon; overrides the default User fallback when an image fails | IconType                              | -       |
| shape    | Avatar shape                                                         | `circle \| square \| round`           | circle  |
| size     | Avatar size                                                          | `large \| small \| default` \| number | default |
| src      | Image source                                                         | string                                | -       |
| alt      | Alternative text when the image cannot be displayed                  | string                                | -       |
| onError  | Image error callback; return `false` to prevent rendering fallback   | (event: Event) => boolean             | -       |

## AvatarGroup API

| Property | Description                                              | Type                                      | Default |
| -------- | -------------------------------------------------------- | ----------------------------------------- | ------- |
| maxCount | Maximum number of avatars to display                     | number                                    | -       |
| size     | Sets child size and adjusts their overlap proportionally | 'large' \| 'small' \| 'default' \| number | default |
| spacing  | Child avatar overlap in pixels; `0` disables overlap     | number                                    | auto    |
| shape    | Sets the shape of all child avatars                      | `circle \| square \| round`               | circle  |
