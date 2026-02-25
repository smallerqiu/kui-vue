<cn>
### 带文字的分割线
分割线中带有文字，可以用 orientation 指定文字位置。
</cn>
<en>
### Divider with Text
A divider with text in the middle, where `orientation` can specify the text position.
</en>

```vue
<template>
  <div>
    <p>See the light through the mist.！</p>
    <Divider orientation="left" text="Text" />
    <p>See the light through the mist.！</p>
    <Divider>Text</Divider>
    <p>See the light through the mist.！</p>
    <Divider orientation="right" text="Text" />
    <p>See the light through the mist.！</p>
  </div>
</template>
```
