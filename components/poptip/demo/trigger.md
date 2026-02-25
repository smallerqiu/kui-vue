<cn>
### 触发模式
通过 `trigger`来控制触发模式, 鼠标移入 `hover`、点击 `click`。
</cn>
<en>
### Trigger Mode
Control the trigger mode via `trigger`, with options for mouse hover (`hover`) or click (`click`).
</en>

```vue
<template>
  <Space>
    <Poptip title="Title">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
    <Poptip title="Title" trigger="focus">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Focus</Button>
    </Poptip>
    <Poptip title="Title" trigger="click">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Click me</Button>
    </Poptip>
  </Space>
</template>
```
