<cn>
#### 触发模式
通过 `trigger`来控制触发模式, 鼠标移入 `hover`、点击 `click`。
</cn>

```vue
<template>
  <Space>
    <Poptip title="标题">
      <template slot="content">
        <p>明月几时有,把酒问青天!</p>
        <p>明月几时有,把酒问青天!</p>
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
    <Poptip title="标题" trigger="click">
      <template slot="content">
        <p>明月几时有,把酒问青天!</p>
        <p>明月几时有,把酒问青天!</p>
      </template>
      <Button type="primary">Click me</Button>
    </Poptip>
  </Space>
</template>
```