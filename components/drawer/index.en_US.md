# Drawer

A floating panel that slides in from the edge of the screen.

## When to Use

- The drawer slides in from the edge of the parent window, covering part of the parent window content. Users can operate within the drawer without leaving the current task. After the operation is completed, they can smoothly return to the original task.
- When an additional panel is needed to control the parent window content, this panel can be called out when needed. For example, controlling interface display styles, adding content to the interface.
- When temporary tasks need to be inserted into the current task flow, creating or previewing additional content. For example, displaying terms of agreement, creating sub-objects.

## Examples

[Custom](./demo/custom.vue)

- Use `title` to set the title, `width` to control the width, and `placement` to control the direction.

[Inject into Target Element](./demo/target.vue)

- Can be expanded within the target element.

[Form Mode](./demo/with-form.vue)

- Content will be presented in form mode, with a header and footer, and the footer can be customized.

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
