<cn>
#### 对齐
设置对齐模式。
</cn>

```vue
<template>
  <div class="demo-space">
    <Space align="start">
      <div class="demo-space-align">Start</div>
      <Button>Start</Button>
      <Tag color="blue">Start</Tag>
    </Space>
    <br/>
    <br/>
    <Space align="end">
      <div class="demo-space-align" >end</div>
      <Button>end</Button>
      <Tag color="blue">end</Tag>
    </Space>
    <br/>
    <br/>
    <Space align="center">
      <div class="demo-space-align" >center</div>
      <Button>center</Button>
      <Tag color="blue">center</Tag>
    </Space>
    <br/>
    <br/>
    <Space align="baseline">
      <div  class="demo-space-align">baseline</div>
      <Button>baseline</Button>
      <Tag color="blue">baseline</Tag>
    </Space>
  </div>
</template>
<style lang=less>
.demo-space-align{
  border:1px solid var(--kui-color-border);
  height:120px;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100px;
}
</style>
```