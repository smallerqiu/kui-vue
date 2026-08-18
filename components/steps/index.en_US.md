# Steps

[Basic](./demo/basic.vue?show=vertical)

- Supports data items, clickable steps, and vertical layout.

[Vertical](./demo/vertical.vue?show=vertical)

- Presents detailed workflows vertically.

[Statuses](./demo/status.vue?show=vertical)

- Shows error and per-step custom statuses.

[Clickable steps](./demo/clickable.vue?show=vertical)

- Handle change to switch the current step.

[Custom icons](./demo/icon.vue?show=vertical)

- Sets a custom icon for each step.

[Controlled](./demo/controlled.vue?show=vertical)

- Controls the current step with external state and buttons.

## Steps API

| Property  | Description    | Type                 | Default    |
| --------- | -------------- | -------------------- | ---------- |
| current   | Current step   | number               | 0          |
| direction | Direction      | horizontal\|vertical | horizontal |
| status    | Current status | process\|error       | process    |
| items     | Step data      | StepItem[]           | -          |
| onChange  | Step click     | function             | -          |

## Step API

| Property    | Description      | Type       | Default |
| ----------- | ---------------- | ---------- | ------- |
| title       | Title            | VNodeChild | -       |
| description | Description      | VNodeChild | -       |
| icon        | Custom marker    | VNodeChild | -       |
| status      | Step status      | StepStatus | -       |
| disabled    | Disable clicking | boolean    | false   |
