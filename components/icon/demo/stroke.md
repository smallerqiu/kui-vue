<cn>
#### 线条粗细
可以通过 `strokeWidth` 属性设置图标的线条。
</cn>

```vue
<template>
  <div>
    <Icon type="chevron-double-forward-outline" />
    <Icon type="chevron-double-forward-outline" :strokeWidth="30"/>
    <Icon type="chevron-forward-outline" />
    <Icon type="chevron-forward-outline" :strokeWidth="30"/>
  </div>
</template>
```