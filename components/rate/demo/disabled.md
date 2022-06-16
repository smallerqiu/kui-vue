<cn>
#### 只读
只读，无法进行鼠标交互。只读，支持小数分值.
</cn>

```vue
<template>
  <div>
    <Rate disabled :value="2.5" allowHalf />
    <br />
    <br />
    <Rate disabled :value="3.3" show-score icon="heart"/>
    <br />
    <br />
    <Rate disabled :value="8.7" show-score :count="10"/>
  </div>
</template>
```