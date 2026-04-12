# Popconfirm

Click an element to pop up a bubble-style confirmation box.

## When to Use

When an operation on a target element requires further user confirmation, a floating layer prompt appears near the target element to ask the user.

Compared to the full-screen centered modal dialog box popped up by 'confirm', the interaction form is lighter.

## Examples

[Internationalization](./demo/local.vue)

- Use `okText` and `cancelText` to customize button text.

[Position](./demo/placement.vue)

- Control the direction via `placement`, with twelve available positions.

## API

| Property    | Description                                                                                                                                                                                           | Type          | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| title       | Displayed title                                                                                                                                                                                       | String, Slots | -       |
| placement   | Position where the tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | String        | top     |
| width       | Display width, defaults to content area size                                                                                                                                                          | String        | -       |
| ok-text     | OK button text                                                                                                                                                                                        | String        | OK      |
| cancel-text | Cancel button text                                                                                                                                                                                    | String        | Cancel  |
| cancel      | Callback when cancel is clicked                                                                                                                                                                       | Function      | -       |
| ok          | Callback when OK is clicked                                                                                                                                                                           | Function      | -       |
