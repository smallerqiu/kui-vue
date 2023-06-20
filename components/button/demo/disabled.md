<cn>
#### 禁用
通过添加 `disabled` 属性可将按钮设置为不可用状态。
</cn>

```vue
<template>
  <Button type="primary">Primary</Button>
  <Button disabled type="primary">disabled</Button>
  <br/>
  <Button type="danger">Danger</Button>
  <Button type="danger" disabled>Danger</Button>
  <br/>
  <Button>Default</Button>
  <Button disabled>Default</Button>
  <br/>
  <Button type="dashed">Dashed</Button>
  <Button disabled type="dashed">Dashed</Button>
  <br/>
  <Button type="link">Link</Button>
  <Button disabled type="link">Link</Button>
</template>
```