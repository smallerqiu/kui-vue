## KUI-Loader</h2>
### 用途
在vue 里面，自定义组件名称是无法和 原生的html组件 重名的， 在vue1.x 版本有这个限制，但是在vue2.x 以后，有虚拟DOM ，所以可以使用原生组件来命名自定义组件，但是有大小写区分(template/render模式)
### 使用方法
#### 安装 
通过 npm 安装 kui-loader
```sh
npm i kui-loader --save-dev
#or
yarn add kui-loader
```
#### 配置
配置 webpack，修改 vue-loader 的配置，如下：

```js
module: {
    rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: { }
            },
            {
              loader: 'kui-loader',
              options: { prefix: false }
            }
          ]
        }
    ]
}
```

#### 说明
可以直接写 <Switch>标签；
参数 prefix 设置为 true 后，所有 kui 组件标签名都可以使用前缀 k-
 