<cn>
### 对齐
设置对齐模式。
</cn>

```vue
<template>
  <Flex class="demo-space-align" wrap size="small">
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
  </Flex>
</template>
<style lang="less">
.demo-space-align {
  .k-space {
    border: 1px solid var(--kui-color-border);
    width: calc(50% - 8px);
    border-radius: 4px;
  }
  .block {
    border: 1px solid var(--kui-color-border);
    background: #92929252;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
  }
}
</style>
```
