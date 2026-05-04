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

| Property | Description                                                              | Type                 | Default |
| -------- | ------------------------------------------------------------------------ | -------------------- | ------- |
| animated | Whether to show animation effect                                         | bool                 | false   |
| avatar   | Whether to show avatar placeholder                                       | bool, AvatarProps    | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | bool                 | false   |
| rows     | Set the number of paragraph placeholder lines                            | number               | 3       |
| width    | Set the width of title placeholder                                       | number(%)            | 35      |
| delay    | Debounce (animation delay closing)                                       | number(milliseconds) | 500     |
| title    | Title point unit                                                         | number               | 35(px)  |

## Avatar Props

| Property | Description                                                              | Type                                | Default |
| -------- | ------------------------------------------------------------------------ | ----------------------------------- | ------- |
| animated | Whether to show animation effect                                         | bool                                | false   |
| radius   | Specify the border radius of the image                                   | number                              | -       |
| shape    | Specify the shape of the avatar                                          | circle \| square                    | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | bool                                | false   |
| size     | Set the size of avatar placeholder                                       | number \| large \| small \| default | -       |

## Button Props

| Property | Description                                                              | Type                       | Default |
| -------- | ------------------------------------------------------------------------ | -------------------------- | ------- |
| animated | Whether to show animation effect                                         | bool                       | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | bool                       | false   |
| shape    | Specify the shape of the button                                          | circle \| round \| default | -       |
| size     | Set the button size                                                      | large \| small \| default  | -       |
| block    | Option to adjust button width to its parent width                        | bool                       | false   |
| width    | Button width                                                             | number                     | -       |

## Text Props

| Property | Description                                                              | Type                      | Default |
| -------- | ------------------------------------------------------------------------ | ------------------------- | ------- |
| animated | Whether to show animation effect                                         | bool                      | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | bool                      | false   |
| size     | Set the text size                                                        | large \| small \| default | -       |
| width    | Text width                                                               | number                    | -       |

## Image Props

| Property | Description                                                              | Type             | Default |
| -------- | ------------------------------------------------------------------------ | ---------------- | ------- |
| animated | Whether to show animation effect                                         | bool             | false   |
| loading  | When true, show placeholder. Otherwise directly display child components | bool             | false   |
| radius   | Specify the border radius of the image                                   | number           | -       |
| size     | Image width (height)                                                     | number\|number[] | -       |
