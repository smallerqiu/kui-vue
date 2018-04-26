<template>
    <div>
        <h2>安装</h2>
        <h3>CDN 引入</h3>
        <p>在页面上引入 js 和 css 文件即可开始使用：</p>
        <Code expand>{{code.import}}</Code>
        <h3>示例</h3>
        <Code class="html javascript" expand>{{code.demo}}</Code>
        <h3>NPM 安装</h3>
        <Code lang="js">{{code.install}}</Code>
    </div>
</template>
<script>
import code from '../code/install'
import Code from '../components/code'
export default {
    components: { Code },
    data() {
        return {
            code: code
        };
    }
};
</script>
