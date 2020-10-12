<cn>
#### 尺寸
展示小尺寸。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Page :current="1" :total="50" mini/>
    <Page :current="1" :total="50" mini show-sizer/>
    <Page :current="1" :total="50" mini show-elevator/>
    <Page :current="1" :total="50" mini show-elevator show-total/>
  </div>
</template>
```