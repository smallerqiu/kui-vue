# Skeleton

Provide a placeholder graphic combination at positions where content needs to be loaded.

## When to Use

- When the network is slow and requires a long waiting time for loading processing.
- In lists/cards with rich graphic and text information.
- Only used when loading data for the first time.
- Can be completely replaced by Spin, but can provide better visual effects and user experience in available scenarios.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- The simplest placeholder effect.

[Combination](./demo/group.vue?show=vertical)

- You can configure the number of skeleton screen paragraphs to better approximate the real rendering effect. The first line will be rendered as a paragraph start of 35% length.

[Animation Effect](./demo/animated.vue?show=vertical)

- Show animation effect.

[Child Component](./demo/child.vue?show=vertical)

- Loading placeholder includes child components.

[List](./demo/list.vue?show=vertical)

- Use loading placeholders in list components.

[Button/Avatar/Image](./demo/items.vue?show=vertical)

- Skeleton buttons, avatars, and images.

[Custom](./demo/custom.vue?show=vertical)

- Custom effect.

## API

| Property   | Description                                                              | Type                                              | Default |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------- | ------- |
| animated   | Whether to show animation effect                                         | boolean                                           | false   |
| avatar     | Whether to show avatar placeholder                                       | boolean \| { size?: SizeType; shape?: ShapeType } | false   |
| loading    | When true, show placeholder. Otherwise directly display child components | boolean                                           | false   |
| rows       | Set the number of paragraph placeholder lines                            | number                                            | 3       |
| delay      | Delay showing the skeleton to avoid flickering, in milliseconds          | number                                            | 500     |
| titleWidth | Title placeholder width, from 0 to 100                                   | number                                            | 35      |
| title      | Deprecated. Use `titleWidth` instead                                     | number                                            | -       |

## Avatar Props

| Property | Description                                                              | Type                                     | Default |
| -------- | ------------------------------------------------------------------------ | ---------------------------------------- | ------- |
| animated | Whether to show animation effect                                         | boolean                                  | false   |
| radius   | Specify the border radius of the image                                   | number                                   | -       |
| shape    | Specify the shape of the avatar                                          | 'circle' \| 'square'                     | circle  |
| loading  | When true, show placeholder. Otherwise directly display child components | boolean                                  | false   |
| delay    | Delay showing the skeleton, in milliseconds                              | number                                   | 500     |
| size     | Set the size of avatar placeholder                                       | number \| 'small' \| 'medium' \| 'large' \| 'default' | -       |

## Button Props

| Property | Description                                                              | Type                                         | Default |
| -------- | ------------------------------------------------------------------------ | -------------------------------------------- | ------- |
| animated | Whether to show animation effect                                         | boolean                                      | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | boolean                                      | false   |
| shape    | Specify the shape of the button                                          | 'circle' \| 'square' \| 'round' \| 'default' | -       |
| size     | Set the button size                                                      | 'small' \| 'medium' \| 'large' \| 'default' | -       |
| delay    | Delay showing the skeleton, in milliseconds                              | number                                       | 500     |
| block    | Option to adjust button width to its parent width                        | boolean                                      | false   |
| width    | Button width                                                             | number                                       | -       |

## Text Props

| Property | Description                                                              | Type                           | Default |
| -------- | ------------------------------------------------------------------------ | ------------------------------ | ------- |
| animated | Whether to show animation effect                                         | boolean                        | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | boolean                        | false   |
| size     | Set the text size                                                        | 'small' \| 'medium' \| 'large' \| 'default' | -       |
| delay    | Delay showing the skeleton, in milliseconds                              | number                         | 500     |
| width    | Text width                                                               | number                         | -       |

## Image Props

| Property | Description                                                              | Type               | Default |
| -------- | ------------------------------------------------------------------------ | ------------------ | ------- |
| animated | Whether to show animation effect                                         | boolean            | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | boolean            | false   |
| delay    | Delay showing the skeleton, in milliseconds                              | number             | 500     |
| radius   | Specify the border radius of the image                                   | number             | -       |
| size     | Image width (height)                                                     | number \| number[] | -       |
