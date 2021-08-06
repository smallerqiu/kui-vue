<cn>
#### 小尺寸
适合放在较狭窄的区域内。
</cn>

```vue
<template>
  <div :style="{width:'300px',marginBottom:'30px'}">
    <Progress size="small" :percent="50" />
    <Progress size="small" :percent="70" status="exception" />
    <Progress size="small" :percent="10"  />
  </div>
  <Progress type="circle" :width="80" :percent="50" />
  <Progress type="circle" :width="80" :percent="70" status="exception" />
  <Progress type="circle" :width="80" :percent="100" />
</template>
```