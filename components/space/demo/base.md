<cn>
#### 基本用法 
相邻组件水平间距。
</cn>

```vue
<template>
  <Space>
    <Button>Button</Button>
    <Button icon="search">Button</Button>
    <Tooltip placement="top">
      <Button>Space</Button>
      <template slot="title">
        <p>I am space</p>
      </template>
    </Tooltip>
  </Space>
</template>
```