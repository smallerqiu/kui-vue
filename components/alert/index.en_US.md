# Alert

Warning prompts to display information that needs attention.

## When to Use

- When a page needs to display warning information to the user.
- A non-overlay static display form, always displayed, does not disappear automatically, users can click to close.

## Examples

[Closable](./demo/close.vue)
- Use `closable` to control whether the close button is displayed, with smooth and natural closing animation.

[Custom Icon](./demo/customIcon.vue)
- Use `showIcon` to control whether the icon is displayed.

[Icon](./demo/icon.vue)
- Use `showIcon` to control whether the icon is displayed.


## API

| Property    | Description                                                                      | Type         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------------ | ------- |
| type        | Alert type, optional values are `success`, `info`, `warning`, `error` or not set | String       | warning |
| message     | Alert content                                                                    | String，Slot | -       |
| description | Auxiliary text introduction for the alert                                        | String       | -       |
| showIcon    | Whether to show the icon                                                         | Boolean      | false   |
| closable    | Whether to show the close button                                                 | Boolean      | false   |
| bordered    | Whether to display the border                                                    | Boolean      | false   |
| close       | Callback function triggered when closing                                         | Function     | -       |
| icon        | Custom icon                                                                      | Array        | -       |
