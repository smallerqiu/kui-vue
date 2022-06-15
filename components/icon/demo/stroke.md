<cn>
#### 线条粗细
可以通过 `strokeWidth` 属性设置图标的线条。
</cn>

```vue
<template>
  <div>
    <Icon type="chevron-double-forward" />
    <Icon type="chevron-double-forward" :strokeWidth="30"/>
    <Icon type="chevron-forward" />
    <Icon type="chevron-forward" :strokeWidth="30"/>
  </div>
</template>
```