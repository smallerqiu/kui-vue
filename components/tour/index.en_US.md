# Tour

Gradually introduce features around the actual goals on the page.

## Examples

[Basic](./demo/basic.vue)

- Positions each guide step around a real page target.

[Placements](./demo/placement.vue)

- Places guide cards around different targets.

[Controlled steps](./demo/controlled.vue)

- Controls visibility and current step externally.

[Without mask](./demo/mask.vue)

- Keeps the surrounding page visible.

## Tour API

| Property     | Description                                                         | Type       | Default |
| ------------ | ------------------------------------------------------------------- | ---------- | ------- |
| modelValue   | Visibility (v-model)                                                | boolean    | false   |
| open         | Visibility; takes precedence over modelValue, supports v-model:open | boolean    | false   |
| current      | Current step                                                        | number     | -       |
| steps        | Tour steps                                                          | TourStep[] | []      |
| mask         | Show mask                                                           | boolean    | true    |
| closable     | Show close button                                                   | boolean    | true    |
| escKey       | Close with Escape                                                   | boolean    | true    |
| onChange     | Step change                                                         | function   | -       |
| onOpenChange | Visibility change                                                   | function   | -       |
| onFinish     | Tour completed                                                      | function   | -       |
