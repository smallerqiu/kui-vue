<cn>
#### 对齐
设置对齐模式。
</cn>

```vue
<template>
  <div class="demo-space">
    Align start
    <Space align="start">
      <Button size="large">large</Button>
      <Button>default</Button>
      <Button size="small">small</Button>
      Start text
    </Space>
    <br/>
    <br/>
    Align end
    <Space align="end">
      <Button size="large">large</Button>
      <Button>default</Button>
      <Button size="small">small</Button>
      End text
    </Space>
    <br/>
    <br/>
    Align center
    <Space align="center">
      <Button size="large">large</Button>
      <Button>default</Button>
      <Button size="small">small</Button>
      Center text
    </Space>
    <br/>
    <br/>
    Align baseline
    <Space align="start">
      <Button>button</Button>
      <span style="background:#eee">Baseline text</span>
    </Space>
  </div>
</template>
<style scoped>

</style>
```