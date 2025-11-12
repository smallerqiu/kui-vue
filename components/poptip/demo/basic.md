<cn>
#### 基础用法
最简单的用法，浮层的大小由内容区域决定。
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
    <Poptip dark>
      <template slot="content">
        <p>明月几时有,把酒问青天!</p>
        <p>明月几时有,把酒问青天!</p>
      </template>
      <Button type="primary">No title</Button>
    </Poptip>
  </Space>
</template>
```