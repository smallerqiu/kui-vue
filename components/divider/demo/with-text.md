
<cn>
#### 带文字的分割线
分割线中带有文字，可以用 orientation 指定文字位置。
</cn>

```vue
<template>
  <div>
    <p>
      床前明月光，疑是地上霜，举头望明月，低头思故乡！
    </p>
    <Divider orientation="left" text="李白"/>
    <p>
     床前明月光，疑是地上霜，举头望明月，低头思故乡！
    </p>
    <Divider>李白</Divider>
    <p>
      床前明月光，疑是地上霜，举头望明月，低头思故乡！
    </p>
    <Divider orientation="right"  text="李白"/>
    <p>
      床前明月光，疑是地上霜，举头望明月，低头思故乡！
    </p>
  </div>
</template>
```