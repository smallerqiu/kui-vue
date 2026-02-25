## API

| Property      | Description                                                                                       | Type           | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | -------------- | ------- |
| title         | Drawer title. When null or false, the title is not displayed                                      | String         | -       |
| width         | Drawer width, used when `placement` is `left` or `right`, supports percentage                     | Number, String | 520     |
| height        | Drawer height, used when `placement` is `top` or `bottom`, supports percentage                    | Number, String | 256     |
| placement     | The display direction of the drawer. Provides 4 display methods: `left`, `top`, `right`, `bottom` | String         | right   |
| footer        | Footer content. Set `footer=null` to not display the footer                                       | slot           | true    |
| closable      | Whether to show the close button                                                                  | Boolean        | true    |
| target        | The parent element to display                                                                     | Function       | -       |
| mask-closable | Whether clicking the mask allows closing                                                          | Boolean        | false   |
| okText        | OK button text                                                                                    | String         | OK      |
| cancelText    | Cancel button text                                                                                | String         | Cancel  |
| ok            | Callback when OK is clicked                                                                       | Function       | -       |
| cancel        | Callback when Cancel is clicked                                                                   | Function       | -       |
| close         | Callback when the drawer closes                                                                   | Function       | -       |
| mask          | Whether to show the mask                                                                          | Boolean        | true    |
