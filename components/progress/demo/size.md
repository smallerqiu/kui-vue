<cn>
#### 尺寸
适合放在较狭窄的区域内。
</cn>

```vue
<template>
  Custom:
  <Progress :strokeHeight="10" :percent="50" />
  <Progress :strokeHeight="3" :percent="50" />
  <Progress :strokeWidth="15" type="circle" :width="80" :percent="50" />
  <Progress :strokeWidth="3" type="circle" :width="80" :percent="50" />
  <br/>
  Small:
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