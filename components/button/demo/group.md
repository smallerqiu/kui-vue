<cn>
#### 按钮组合
将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。
</cn>

```vue
<template>
  <div>
    <ButtonGroup large circle>
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
    </ButtonGroup>
    <ButtonGroup circle>
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup mini circle>
      <Button type="success"><Icon type="ios-arrow-back"/> Backward</Button>
      <Button type="danger">Forward <Icon type="ios-arrow-forward"/></Button>
    </ButtonGroup>
  </div>
</template>
```