# 定制主题
设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

<p>
  <img src="https://k-ui.cn/img/theme.jpg" class="demo-theme"/>
</p>

### 覆盖定制
通过覆盖less变量来定制主题
新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：

```less
//引入 styles
@import '~kui-vue/components/styles/index.less';

// 重新定义变量
@main: #3a95ff //主体颜色

// 所有的变量在 ~kui-vue/components/styles/color.less 中定义
```

然后在入口文件 main.js 内导入这个 less 文件即可：

```js
import Vue from 'vue';
import kui from 'kui-vue';
import 'assets/styles/custom.less';

Vue.use(kui);
```