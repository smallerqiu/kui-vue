<cn>
### 基本用法
最简单的用法，浮层的大小由内容区域决定。
</cn>
<en>
### Basic Usage
The simplest usage, where the floating layer's size is determined by the content area.
</en>

```vue
<template>
  <Space>
    <Poptip title="Title">
      <template #content>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
    <Poptip dark>
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">No title</Button>
    </Poptip>
  </Space>
</template>
```
