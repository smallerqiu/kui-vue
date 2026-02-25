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
