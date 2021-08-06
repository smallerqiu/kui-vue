<cn>
#### 基本用法
`Badge` 基础使用
</cn>

```vue
<template>
  <div>
    <Badge :count="3">
      <Button>最新消息</Button>
    </Badge>
    <Badge :count="15" color="orange" style="margin:0 30px;">
      <Button>最新评论</Button>
    </Badge>
  </div>
</template>
```