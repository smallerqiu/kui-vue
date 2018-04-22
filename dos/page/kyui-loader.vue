<template>
    <div>
        <h2>KUI-Loader</h2>
        <h3>用途</h3>
        <p>在vue 里面，自定义组件名称是无法和 原生的html组件 重名的， 在vue1.x 版本有这个限制，但是在vue2.x 以后，有虚拟DOM ，所以可以使用原生组件来命名自定义组件，但是有大小写区分(template/render模式)</p>
        <h3>使用方法</h3>
        <h4>安装</h4>
        <p>通过 npm 安装 kui-loader</p>
        <Code lang="js">{{code.install}}</Code>
        <h4>配置</h4>
        <p>配置 webpack，修改 vue-loader 的配置，如下：</p>
        <Code lang="js">{{code.webconfig}}</Code>
        <h4>说明</h4>
        <p>可以直接写 &lt;Switch&gt; 标签；</p>
        <p>参数 prefix 设置为 true 后，所有 kyui 组件标签名都可以使用前缀 k-</p>
    </div>
</template>
<script>
import code from '../code/vue-loader'
export default {
    data() {
        return {
            code: code
        };
    }
};
</script>
