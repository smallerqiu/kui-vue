# Avatar

Used to represent users or things, supports image, icon, or character display.

## Examples

<code src="./demo/basic.vue">Basic</code>
<code src="./demo/change.vue">Auto Font Size Adjustment</code>
<code src="./demo/types.vue">Types</code>

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
