<template>
    <div>
        <h2>安装</h2>
        <h3>CDN 引入</h3>
        <p>在页面上引入 js 和 css 文件即可开始使用：</p>
        <Code lang="xml html" expand>{{cdn}}</Code>
        <h3>示例</h3>
        <Code class="html javascript" expand>{{shili}}</Code>
        <h3>NPM 安装</h3>
        <Code lang="sql" expand>{{npm}}</Code>
    </div>
</template>
<script>
export default {
  data() {
    return {
      npm: "$ npm install kyui --save",
      cdn: `<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"><\/script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kyui/dist/k-ui.css">
<!-- import kyui -->
<script src="//unpkg.com/kyui/dist/k-ui.js"><\/script>`,
      shili: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>kyui example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/kyui/dist/k-ui.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"><\/script>
    <script type="text/javascript" src="http://unpkg.com/kyui/dist/k-ui.js"><\/script>
</head>
<body>
<div id="app">
    <k-button @click="show">Click me!</k-button>
    <Modal v-model="visible" title="Welcome">Welcome to use kyui</Modal>
</div>
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
  <\/script>
</body>
</html>`
    };
  }
};
</script>
