<p align="center">
  <a href="https://k-ui.cn">
    <img width="88" src="https://cdn.chuchur.com/img/logo-kui.svg" alt="KUI Vue 标志">
  </a>
</p>
<h1 align="center">KUI Vue</h1>

<p align="center">
  <strong>面向 Vue 3 的现代 TypeScript UI 组件库。</strong>
</p>

<p align="center">
  70+ 精心设计的组件 · 明暗主题 · 支持 SSR 与 Nuxt · 灵活的设计 Token
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/kui-vue"><img src="https://img.shields.io/npm/v/kui-vue?style=flat-square&color=5b9cff" alt="npm 版本"></a>
  <a href="https://www.npmjs.com/package/kui-vue"><img src="https://img.shields.io/npm/dm/kui-vue?style=flat-square&color=5b9cff" alt="npm 下载量"></a>
  <a href="https://github.com/smallerqiu/kui-vue/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/smallerqiu/kui-vue/ci.yml?branch=master&style=flat-square&label=CI" alt="CI 状态"></a>
  <a href="https://github.com/smallerqiu/kui-vue"><img src="https://img.shields.io/github/stars/smallerqiu/kui-vue?style=flat-square&color=5b9cff" alt="GitHub Stars"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/kui-vue?style=flat-square" alt="MIT 许可证"></a>
</p>

<p align="center">
  <a href="https://k-ui.cn"><strong>文档</strong></a> ·
  <a href="https://k-ui.cn/guide/quick-started">快速开始</a> ·
  <a href="https://k-ui.cn/guide/components">组件总览</a> ·
  <a href="https://k-ui.cn/guide/dark-mode">暗色模式</a> ·
  <a href="https://github.com/smallerqiu/kui-vue/issues">问题反馈</a>
</p>

<p align="center">
  <a href="README.md">English</a> · 简体中文
</p>

<p align="center">
  <a href="https://k-ui.cn">
    <img src=".github/assets/demo.png" alt="KUI Vue 组件库预览">
  </a>
</p>

<p align="center"><code>pnpm add kui-vue</code></p>

# 特性

- 70+高质量组件
- 国际化支持 14 种语言
- 使用TypeScript开发
- 支持Vue3.x
- 支持 SSR
- 支持 [Nuxt.js](https://nuxtjs.org/)
- 支持 Electron

# 文档

- [快速开始](https://k-ui.cn/guide/quick-started)
- [组件总览](https://k-ui.cn/guide/components)
- [暗色模式](https://k-ui.cn/guide/dark-mode)
- [Icons](https://k-ui.cn/components/icons)
- [国际化](https://k-ui.cn/guide/language)
- [更新日志](https://k-ui.cn/guide/change-log)

# 安装

使用 pnpm：

```bash
pnpm add kui-vue
```

也可以使用 npm、Yarn 或 Bun：

```bash
npm install kui-vue
yarn add kui-vue
bun add kui-vue
```

使用脚本标记进行全局使用：

```html
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/style/index.css" />
<!-- import kui -->
<script src="//unpkg.com/kui-vue"></script>
```

# 使用

```html
<template>
  <div>
    <k-button type="primary" @click="test">Primary</k-button>
  </div>
</template>
<script setup lang="ts">
  import { message } from "kui-vue";
  const test = () => {
    message.info("Hello kui !");
  };
</script>
```

## 本地开发

```bash
git clone git@github.com:smallerqiu/kui-vue.git
cd kui-vue
pnpm install
pnpm dev
```

文档开发服务器默认运行在 [http://localhost:7005](http://localhost:7005)。

常用命令：

```bash
pnpm dev          # 启动文档开发服务器
pnpm typecheck    # TypeScript 类型检查
pnpm build:docs   # 构建文档站
pnpm build        # 构建组件库及样式
```

## 浏览器支持

支持主流现代浏览器的最近两个版本，包括 Chrome、Edge、Firefox 和 Safari；不支持 Internet Explorer。

## AI 辅助开发

Kui Vue 随版本发布组件 metadata、Agent Skill 和 MCP 服务，让 AI 编程工具根据真实公开 API 生成代码，而不是猜测属性。

```bash
pnpm exec kui-vue-ai init
pnpm exec kui-vue-mcp
```

- AI 索引：https://k-ui.cn/llms.txt
- 完整 AI 文档：https://k-ui.cn/llms-full.txt
- npm 组件数据：`kui-vue/metadata`
- 组件数据 Schema：`kui-vue/metadata/schema`
- Agent Skill：`kui-vue/skill`
- [完整接入指南](./AI.md)

## 参与贡献

欢迎提交 Issue 和 Pull Request。在提交代码前，请确保类型检查和相关构建能够通过。

- [GitHub 仓库](https://github.com/smallerqiu/kui-vue)
- [Gitee 仓库](https://gitee.com/chuchur/kui-vue)
- [问题反馈](https://github.com/smallerqiu/kui-vue/issues)

## 开源协议

[MIT](./LICENSE)

Copyright © 2017-present Qiu
