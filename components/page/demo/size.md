<cn>
#### 尺寸
展示小尺寸。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Page :current="1" :total="50" size="small"/>
    <Page :current="1" :total="50" size="small" show-sizer/>
    <Page :current="1" :total="50" size="small" show-elevator/>
    <Page :current="1" :total="50" size="small" show-elevator show-total/>
  </div>
</template>
```