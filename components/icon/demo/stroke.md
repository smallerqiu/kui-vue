<cn>
#### 线条粗细
可以通过 `strokeWidth` 属性设置图标的线条。
</cn>

```vue
<template>
  <div>
    <Icon :type="ChevronDoubleForward" :strokeWidth="20"/>
    <Icon :type="ChevronDoubleForward" />
    <Icon :type="ChevronDoubleForward" :strokeWidth="80"/>
    <br/>
    <Icon :type="ChevronForward" :strokeWidth="20"/>
    <Icon :type="ChevronForward" />
    <Icon :type="ChevronForward" :strokeWidth="80"/>
  </div>
</template>
<script>
import { ChevronForward ,ChevronDoubleForward } from 'kui-icons'
export default{
  data() {
    return {
      ChevronForward,ChevronDoubleForward
    }
  }
}
</script>
```