## 使用

```js
<template>
  <div>
    <Icon :type="Heart" />
  </div>
</template>
<script setup lang="ts">
import { Heart } from 'kui-icons'
</script>
```

3.3 版本开始, 使用 Icon 需要单独引入，使用按需加载，这样在编译之后的体积会变得更小。

3.1.1 版本之后 使用 `ionicons` 图标库 5.5 版本

## 使用 Sprite 模式

```js
import sprite from "kui-icons/dist/sprite.svg";

<svg width="1em" height="1em">
  <use xlink:href={`${sprite}#LogoKui`}></use>
</svg>;
```

## 代码演示
