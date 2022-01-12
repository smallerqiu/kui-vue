<cn>
#### 按钮组合
将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。
</cn>

```vue
<template>
  <div>
    <ButtonGroup size="large">
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup size="small" shape="circle">
      <Button ><Icon type="chevron-back"/> Backward</Button>
      <Button>Forward <Icon type="chevron-forward"/></Button>
    </ButtonGroup>
  </div>
</template>
```