# Popconfirm

Click an element to pop up a bubble-style confirmation box.

## When to Use

When an operation on a target element requires further user confirmation, a floating layer prompt appears near the target element to ask the user.

Compared to the full-screen centered modal dialog box popped up by 'confirm', the interaction form is lighter.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage.

[Internationalization](./demo/local.vue)

- Use `okText` and `cancelText` to customize button text.

[Position](./demo/placement.vue)

- Control the direction via `placement`, with twelve available positions.

## API

| Property   | Description                                                                                                                                                                                           | Type          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| title      | Displayed title                                                                                                                                                                                       | string, Slots | -       |
| placement  | Position where the tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | string        | top     |
| width      | Display width, defaults to content area size                                                                                                                                                          | string        | -       |
| okText     | OK button text                                                                                                                                                                                        | string        | OK      |
| cancelText | Cancel button text                                                                                                                                                                                    | string        | Cancel  |
| show       | Whether to display by default                                                                                                                                                                         | bool          | false   |
| dark       | Whether to display dark theme                                                                                                                                                                         | bool          | false   |
| onCancel   | Callback when cancel is clicked                                                                                                                                                                       | () => void    | -       |
| onOk       | Callback when OK is clicked                                                                                                                                                                           | () => void    | -       |
