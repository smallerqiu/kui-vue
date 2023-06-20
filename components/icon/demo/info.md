# Icon 图标

kui 的图标使用开源项目 [ionicons](http://ionicons.com/) 前版本5.5 
>3.x 版本以后不再支持`webfont` 使用 `svg`代替 

使用图标组件，你需要安装 `kui-icons` 图标组件包：
```bash
npm install --save kui-icons
```

## 使用

```js
<template>
  <div>
    <Icon :type="Heart" />
  </div>
</template>
<script>
import { Heart } from 'kui-icons'
export default{
  data() {
    return {
      Heart
    }
  }
}
</script>
```

3.3 版本开始, 使用 Icon 需要单独引入，使用按需加载，这样在编译之后的体积会变得更小。


3.1.1 版本之后 使用 `ionicons` 图标库 5.5 版本, 5.0 图标库请配合 `kui-vue@3.1.0` 

## 使用Sprite模式
```js
import sprite from 'kui-icons/lib/sprite.svg'

<svg width="1em" height="1em">
  <use xlink:href={`${sprite}#LogoKui`}></use>
</svg>

```

## 代码演示