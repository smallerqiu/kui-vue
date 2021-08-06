<cn>
#### 进度条
标准的进度条。
</cn>

```vue
<template>
  <Progress :percent="30" />
  <Progress :percent="50" status="active" />
  <Progress :percent="70" status="exception" />
  <Progress :percent="100" />
  <Progress :percent="50" :showInfo="false" />
</template>
```