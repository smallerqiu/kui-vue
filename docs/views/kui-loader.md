# kui-loader

# 用途

替换 `kui` 组件库标签，如定义一个组件 名为 `switch`, 那么在引用过程种会和 `html` 本身的标签冲突，所以要进行替换。

# 安装

```bash
npm i kui-loader --save-dev
#or
yarn add kui-loader
```

# 用法

example :   `index.vue`

```js
<template>
  <div>
    <Switch true-text="Yes" false-text="No" />
    <br />
    <Switch true-text="1" false-text="0" />
    <br />
    <Switch true-text="On" false-text="Off" />
    <br />
    <Image 
      width="120" 
      src="https://www.chuchur.com/upload/avatar/test_300.jpg"
    />
    <br />
    <Switch>
      <Icon type="checkmark" slot="checked"/>
      <Icon type="close" slot="unchecked"/>
    </Switch>
    <Switch>
      <Icon type="logo-apple" slot="checked"/>
      <Icon type="logo-windows" slot="unchecked"/>
    </Switch>
    <br />
     <Switch>
      <Icon type="airplane" slot="unchecked"/>
      <Icon type="wifi" slot="checked"/>
    </Switch>
  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:false
    }
  }
}
</script>
```

以上编译不会通过的，所以要进行解析替换标签：

在 `webpack.conf.js`

```js
module.exports = {
  bail: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
          { loader: 'kui-loader', options: { prefix: false } } //放在最后保证优先加载
        ]
      }
    ]
  }
}
```

在非 template/render 模式下，你也可以这么用 ,使用 `k-`前缀来区分 ，部分组件也可以使用 `-` 来分割，看示例：

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>KUI - example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">
    <script src="//unpkg.com/kui-icons/lib/kui-icons.js"></script>
    <script src="//unpkg.com/moment/min/moment.min.js"></script>
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"></script>
</head>

<body>
  <div id="app">
    <k-button @click="show">Click me!</k-button>
    <k-modal v-model="visible" title="Welcome">Welcome to use KUI</k-modal>

    <k-image 
        width="120" 
        src="https://www.chuchur.com/upload/avatar/test_300.jpg"
      />
    <br />

    <k-button-group size="small" circle>
      <button ><k-icon type="chevron-back"/> Backward</button>
      <button>Forward <k-icon type="chevron-forward"/></button>
    </k-button-group>
  </div>
</body>
<script>
new Vue({
  el: '#app',
  data: {
    visible: false
  },
  methods: {
    show: function () {
      this.visible = true;
    }
  }
})
</script>
</html>
```

记得开启替换选项：

```js
-      { loader: 'kui-loader', options: { prefix: false } }
+      { loader: 'kui-loader', options: { prefix: true } }
```