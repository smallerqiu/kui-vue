# Avatar

Used to represent users or things, supports image, icon, or character display.

## Examples

[Basic](./demo/basic.vue)
- Avatars support three sizes and two shapes.

[Auto Font Size Adjustment](./demo/change.vue)
- For text avatars, when the string is long, the font size automatically adjusts based on the avatar width.

[Types](./demo/types.vue)
- Three types are supported: Image, Icon, and Text. Icon and Text avatars support custom icon color and background color.


## API

| Property | Description                                     | Type                          | Default |
| -------- | ----------------------------------------------- | ----------------------------- | ------- |
| icon     | Set the icon type for the avatar                | String,Number                 | 400     |
| shape    | Specify the shape of the avatar: circle, square | String                        | circle  |
| size     | Set the size of the avatar                      | large, small, default, Number | default |
| src      | Resource address for image avatar               | String                        | -       |

## AvatarGroup API

| Property | Description                         | Type   | Default |
| -------- | ----------------------------------- | ------ | ------- |
| maxCount | Maximum number of images to display | NUmber | -       |
