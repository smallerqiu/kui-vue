# 快速上手

在开始之前，如果您刚开始接触Vue，建议您先细看 Vue及其相关文档： [vue](https://vuejs.org)，[vuex](https://vuex.vuejs.org)，[vue-router](http://router.vuejs.org/)，[vue-cli](https://cli.vuejs.org/),[vue-devtools](https://github.com/vuejs/vue-devtools)

### 引入 KUI

#### 1.安装脚手架

[vue-cli](https://github.com/vuejs/vue-cli)

```sh
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

#### 2. 初始化一个项目

```sh
$ vue create kui-demo
```

从 yarn 或 npm 安装并引入 kui-vue。

```sh
$ npm install kuiv-ue
#or
$ yarn add kui-vue
```
#### 3. 使用组件

一般在 **webpack** 入口页面` main.js` 中如下配置：

```js
import Vue from 'vue';
import App from './App';
import kui from 'kui-vue'; 
import 'kui-vue/dist/k-ui.css'; 

Vue.use(kui);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

以上代码便完成了 Kui 的引入。注意: 样式文件需要单独引入。

#### 局部导入组件

```js
import Vue from 'vue';
import { Button, Message } from 'kui';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Button);

Vue.prototype.$message = message;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

### 兼容性
Kui Vue 支持所有的现代浏览器和 IE9+。

对于 IE 系列浏览器，需提供 [es5-shim](https://github.com/es-shims/es5-shim) 和 [es6-shim](https://github.com/paulmillr/es6-shim) 等 Polyfills 的支持。

如果你使用了 babel，强烈推荐使用 [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) 和 [babel-plugin-transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/) 来替代以上两个 shim。

### 按需加载 

可以通过以下的写法来按需加载组件。

```js
import Button from 'kui-vue/components/button';
import 'kui-vue/components/button/style'; 
```

### 使用规范 
在非 `template/render` 模式下（例如使用 **CDN** 引用时），组件名要分隔，例如
`Buton` 必须要写成 `k-button`。

以下组件，在非 template/render 模式下，需要加前缀 k-
- Table ：`k-table`
- Button：`k-button`
- Input ：`k-input`
- Switch：`k-switch`
- Select：`k-select`
- Option：`k-option`
- Col：`k-col`
- Image：`k-image`

example :

```html
<html>

<body>
  <k-table></k-table>
</body> 
</html>  
```

以下组件，在非 `template/render` 模式下，组件名要分隔
- BackTop ：`back-top`
- ButtonGroup ：`button-group`
- CheckboxGroup：`checkbox-group`
- FormItem ：`form-item`
- DatePicker ：`date-picker`
- ColorPicker ：`color-picker`
- TimeLine ：`time-line`
- TimeLineItem ：`time-line-item`
- BreadcrumbItem ：`breadcrumb-item`
- MenuItem ：`menu-item`
- MenuGroup ：`menu-grop`
- MenuDivider ：`menu-divider`
- SubMenu ：`sub-menu`
- RadioGroup ：`radio-group`
- RadioButton ：`radio-button`
- CarouselItem ：`carousel-item`
 
 example :

```html
<html>

<body>
  <k-back-top></k-back-top>
</body> 
</html>  
```