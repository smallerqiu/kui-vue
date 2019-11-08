<cn>
#### 按钮组合
将多个 `Button` 放入 `ButtonGroup` 内，可实现按钮组合的效果。
</cn>
```tpl
<template>
  <div>
    <ButtonGroup large>
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
    </ButtonGroup>
    <ButtonGroup circle>
      <Button>待发货</Button>
      <Button>已发货</Button>
      <Button>已签收</Button>
      </ButtonGroup>
    <ButtonGroup mini circle>
      <Button  type="success">编辑</Button>
      <Button  type="danger">删除</Button>
      <Button  type="primary">保存</Button>
    </ButtonGroup>
  </div>
</template>
```