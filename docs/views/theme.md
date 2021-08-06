# 定制主题
设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![](/img/theme.jpg)

### 覆盖定制
如果项目使用webpack构建，可以通过覆盖less变量来定制主题
新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：
```js
//引入 styles
@import '~kui-vue/components/styles/index.less';

// 主色覆盖为 ff0055
@main :#ff0055;

// 组件的圆角覆盖为5px
@radius:~'5px';
```
然后在入口文件 main.js 内导入这个 less 文件即可：
```js
import Vue from 'vue';
import kui from 'kui-vue';
import 'assets/styles/custom.less';

Vue.use(kui);
```
