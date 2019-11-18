<cn>
#### 文本域
当 `type` 属性取值为 `textarea` 时组件呈现文本域
</cn>

```tpl
<template>
  <div>
    <Input type="textarea" rows="4" placeholder="请输入内容..." />
    <Input type="textarea" rows="2" placeholder="请输入内容..." />
    <Input type="textarea" rows="2" placeholder="disabled..." disabled/>
  </div>
</template>
```