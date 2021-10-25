# 定制主题
设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![](/img/theme.jpg)

### 覆盖定制
如果项目使用webpack构建，可以通过覆盖less变量来定制主题
新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：
```js
//引入 styles
@import '~kui-vue/components/styles/index.less';

// 暗黑主题
// @import '~kui-vue/components/styles/dark.less';

//以下是 暗黑主题的覆载 ,你可以自己定义
@color: rgba(0, 0, 0, .75); //字体颜色
@title-color: rgba(0, 0, 0, .85); //标题凸显颜色
@back-color: #fff; //组件背景
@mask-color: rgba(0, 0, 0, .6); //蒙层背景
@icon-color: rgba(0, 0, 0, .4); //图标颜色
@hover-color:fadeout(@border-color, 60%); //item 的 hover 颜色
@selected-color:fadeout(@main, 90%); //item 的 选中 颜色
@radius: ~'2px'; //圆角大小
@border-color: #d8d8d8; //边框颜色
@disable-border: #d0d0d0; //禁用边框颜色
@disable-back: #f5f5f5;//禁用背景颜色
@disable-color: rgba(0, 0, 0, .3); //禁用文字颜色
```
然后在入口文件 main.js 内导入这个 less 文件即可：
```js
import Vue from 'vue';
import kui from 'kui-vue';
import 'assets/styles/custom.less';

Vue.use(kui);
```

### 暗黑主题

组建在 `3.2.3` 版本提供了 暗黑主题, 直接引用即可

```js
import '~kui-vue/dist/k-ui-dark.css'
```
OR
```html
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui-dark.css">
```
