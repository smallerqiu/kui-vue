<template>
  <div>
    <h2>服务端渲染的支持</h2>
    <h3>nuxt 环境构建</h3>
    <p>使用npx 或者 yarn 初始化项目,使用npm i npx -g 安装npx 或 yarn</p>
    <Code>{{c1}}</Code>
    <p>或者使用yarn</p>
     <Code>{{c2}}</Code>
    <p>更多详情请参阅 https://nuxtjs.org/guide/installation</p>
    <br/>

    <p>一步步完成后找到<code>plugins</code>目录，新建<code>kui.js</code>，写入一下内容：</p>
    <Code lang="js">{{config}}</Code>
    <br/>
    <p>然后修改根目录<code>nuxt.config.js</code>，修改配置文件，如下</p>
    <Code  lang="js">{{plugins}}</Code>
    <p>至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持</p>
  </div>
</template>
<script>
import Code from '../components/code'
export default {
  components:{Code},
  data(){
    return{
      c1:`$ npx create-nuxt-app <project-name>`,
      c2:`yarn create nuxt-app <project-name>`,
      config:`import Vue from 'vue';
import kui from 'kui-vue';

Vue.use(kui);
import 'kui-vue/dist/k-ui.css';`,
      plugins:`module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
      {src: '~plugins/kui', ssr: true}
  ],
  //....
}`
    }
  }
}
</script>
