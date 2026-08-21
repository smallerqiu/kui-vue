<p align="center">
    <a href="https://k-ui.cn">
        <img width="100" src="https://cdn.chuchur.com/img/logo-kui.svg">
    </a>
</p>
<h1 align="center">
   Kui for Vue
</h1>

<div align="center">

Lightweight Desktop UI Component Library for Vue.js

[![kui-vue](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square)](https://www.npmjs.org/package/kui-vue)
[![NPM downloads](http://img.shields.io/npm/dm/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
[![NPM downloads](https://img.shields.io/npm/dt/kui-vue.svg?style=flat-square)](https://npmjs.org/package/kui-vue)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/dist/index.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/kui-vue/style/index.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)

![theme](demo.png)

English | [简体中文](README.zh-CN.md)

</div>

# Documentation

- [Quick Start](https://k-ui.cn/guide/quick-started)
- [Components Overview](https://k-ui.cn/guide/components)
- [Dark Mode](https://k-ui.cn/guide/dark-mode)
- [Icons](https://k-ui.cn/components/icons)
- [Internationalization](https://k-ui.cn/guide/language)
- [CHANGELOG](https://k-ui.cn/guide/change-log)

# Features

- Up to 50 high-quality Components.
- Internationalization Support for Dozens of Languages.
- Develop with TypeScript
- Supports Vue.js 3.x
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports Electron

# Install

```bash
npm install kui-vue --save
```

```bash
npm add kui-vue
```

```bash
yarn add kui-vue
```

```bash
bun add kui-vue
```

Using a script tag for global use:

```html
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/style/index.css" />
<!-- import kui -->
<script src="//unpkg.com/kui-vue"></script>
```

# Usage

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

## Local Development

```bash
git clone git@github.com:smallerqiu/kui-vue.git
cd kui-vue
pnpm install
pnpm dev
```

The documentation development server runs at [http://localhost:7005](http://localhost:7005) by default.

Common commands:

```bash
pnpm dev          # Start the documentation development server
pnpm typecheck    # Run TypeScript checks
pnpm build:docs   # Build the documentation site
pnpm build        # Build the component library and styles
```

## Browser Support

KUI Vue supports the latest two versions of major modern browsers, including Chrome, Edge, Firefox, and Safari. Internet Explorer is not supported.

## AI-assisted development

Kui Vue publishes version-matched component metadata, an Agent Skill, and an MCP server so coding assistants can use the public API without guessing.

```bash
pnpm exec kui-vue-ai init
pnpm exec kui-vue-mcp
```

- AI index: https://k-ui.cn/llms.txt
- Complete AI documentation: https://k-ui.cn/llms-full.txt
- Package metadata: `kui-vue/metadata`
- Agent Skill: `kui-vue/skill`

## Contributing

Issues and pull requests are welcome. Before submitting code, please ensure that the type checks and relevant builds pass.

- [GitHub repository](https://github.com/smallerqiu/kui-vue)
- [Gitee repository](https://gitee.com/chuchur/kui-vue)
- [Issue tracker](https://gitee.com/chuchur/kui-vue/issues)

## License

[MIT](./LICENSE)

Copyright © 2017-present Qiu
