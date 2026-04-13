# Skeleton

Provide a placeholder graphic combination at positions where content needs to be loaded.

## When to Use

- When the network is slow and requires a long waiting time for loading processing.
- In lists/cards with rich graphic and text information.
- Only used when loading data for the first time.
- Can be completely replaced by Spin, but can provide better visual effects and user experience in available scenarios.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest placeholder effect.

[Combination](./demo/group.vue)

- You can configure the number of skeleton screen paragraphs to better approximate the real rendering effect. The first line will be rendered as a paragraph start of 35% length.

[Animation Effect](./demo/animated.vue)

- Show animation effect.

[Child Component](./demo/child.vue)

- Loading placeholder includes child components.

[List](./demo/list.vue)

- Use loading placeholders in list components.

[Button/Avatar/Image](./demo/items.vue)

- Skeleton buttons, avatars, and images.

[Custom](./demo/custom.vue)

- Custom effect.

## API

| Property | Description                                                              | Type                 | Default |
| -------- | ------------------------------------------------------------------------ | -------------------- | ------- |
| animated | Whether to show animation effect                                         | Boolean              | false   |
| avatar   | Whether to show avatar placeholder                                       | Boolean, AvatarProps | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | Boolean              | -       |
| rows     | Set the number of paragraph placeholder lines                            | Number               | 3       |
| width    | Set the width of title placeholder                                       | Number(%)            | 35      |
| delay    | Debounce (animation delay closing)                                       | Number(milliseconds) | 500     |

## Avatar Props

| Property | Description                                                              | Type                                | Default |
| -------- | ------------------------------------------------------------------------ | ----------------------------------- | ------- |
| animated | Whether to show animation effect                                         | Boolean                             | false   |
| radius   | Specify the border radius of the image                                   | Number                              | -       |
| shape    | Specify the shape of the avatar                                          | circle \| square                    | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | Boolean                             | -       |
| size     | Set the size of avatar placeholder                                       | number \| large \| small \| default | -       |

## Button Props

| Property | Description                                                              | Type                       | Default |
| -------- | ------------------------------------------------------------------------ | -------------------------- | ------- |
| animated | Whether to show animation effect                                         | Boolean                    | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | Boolean                    | -       |
| shape    | Specify the shape of the button                                          | circle \| round \| default | -       |
| size     | Set the button size                                                      | large \| small \| default  | -       |
| block    | Option to adjust button width to its parent width                        | Boolean                    | -       |
| width    | Button width                                                             | Number                     | -       |

## Text Props

| Property | Description                                                              | Type                      | Default |
| -------- | ------------------------------------------------------------------------ | ------------------------- | ------- |
| animated | Whether to show animation effect                                         | Boolean                   | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | Boolean                   | -       |
| size     | Set the text size                                                        | large \| small \| default | -       |
| width    | Text width                                                               | Number                    | -       |

## Image Props

| Property | Description                                                              | Type          | Default |
| -------- | ------------------------------------------------------------------------ | ------------- | ------- |
| animated | Whether to show animation effect                                         | Boolean       | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | Boolean       | -       |
| radius   | Specify the border radius of the image                                   | Number        | -       |
| size     | Image width (height)                                                     | Number\|Array | -       |
