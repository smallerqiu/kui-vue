<cn>
### 进度条
标准的进度条。
</cn>
<en>
### Progress Bar
A standard progress bar.
</en>

```vue
<template>
  <Progress :percent="30" />
  <Progress :percent="50" status="active" />
  <Progress :percent="70" status="exception" />
  <Progress :percent="100" />
  <Progress :percent="50" :showInfo="false" />
</template>
```
