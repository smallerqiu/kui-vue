<cn>
#### 基础用法
最简单的用法，浮层的大小由内容区域决定。
</cn>

```vue
<template>
  <Tooltip>
    <template slot="title">
      <p>明月几时有,把酒问青天!</p>
      <p>不知天上宫阙,今夕是何年 ?</p>
    </template>
    <a>月几时有,把酒问青天</a>
  </Tooltip>
</template>
```