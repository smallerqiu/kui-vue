<cn>
#### 对齐
设置对齐模式。
</cn>

```vue
<template>
  <div class="demo-space-align">
    <Space align="start">
      <div class="block">block</div>
      <Button>button</Button>
      <Tag color="blue">Start</Tag>
    </Space>
    <Space align="end">
      <div class="block">block</div>
      <Button>button</Button>
      <Tag color="blue">end</Tag>
    </Space>
    <Space align="center">
      <div class="block">block</div>
      <Button>button</Button>
      <Tag color="blue">center</Tag>
    </Space>
    <Space align="baseline">
      <div class="block">block</div>
      <Button>button</Button>
      <Tag color="blue">baseline</Tag>
    </Space>
  </div>
</template>
<style lang=less>
  .demo-space-align{
    .k-space{
      border:1px solid #0022ff50;
      padding:5px;
      margin:0 5px;
    }
    .block {
      border: 1px solid var(--kui-color-border);
      background:#eee;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
    }
  }
</style>
```