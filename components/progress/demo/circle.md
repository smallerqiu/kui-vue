<cn>
#### 进度圈
圆形的进度条。
</cn>

```vue
<template>
  <Progress type="circle" :percent="50" />
  <Progress type="circle" :percent="70" status="exception" />
  <Progress type="circle" :percent="100" />
</template>
```