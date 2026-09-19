# 快速上手

KUI Vue 的 npm 包名是 `kui-vue`，当前版本需要 **Vue 3.5+** 和 **Node.js 20.19+**。组件支持全局注册，也可以在单文件组件的 `<script setup>` 中局部导入，并附带 TypeScript 类型声明。

## 1. 创建项目并安装

已有 Vue 3.5+ 项目可以直接安装组件库。新项目可以使用 Vite 的 Vue + TypeScript 模板：

```bash
pnpm create vite my-app --template vue-ts
cd my-app
pnpm install
pnpm add kui-vue
```

使用 npm 的已有项目也可以运行：

```bash
npm install kui-vue
```

Vue Router 和 Pinia 可按应用需要添加，不是使用组件库的前提。

## 2. 选择组件引入方式

### 方式一：全局注册

在 `src/main.ts` 中注册组件库，并引入一次完整样式：

```ts
import { createApp } from "vue";
import App from "./App.vue";
import kui from "kui-vue";
import "kui-vue/style/index.css";

createApp(App).use(kui).mount("#app");
```

`#app` 对应 `index.html` 中的 `<div id="app"></div>`。注册后，模板可以直接使用组件，无需逐个导入。应用自己的覆盖样式可以放在组件库样式之后。

全局注册提供 `Button`、`KButton` 等名称；单文件组件模板也支持相应的短横线写法 `<k-button>`。`Switch` 和 `Image` 同样有对应的 `KSwitch`、`KImage` 名称。

[全局组件名称](./buttons.vue)

- 全局注册后，组件可以使用原名或 K 前缀名称。

TypeScript 项目若需要全局组件的模板类型提示，可在 `src/env.d.ts` 中加入以下类型引用，并确保该文件被项目的 tsconfig 包含：

```ts
/// <reference types="kui-vue/global" />
```

### 方式二：在单文件组件中局部导入

局部使用时，入口只需加载样式和挂载应用：

```ts
import { createApp } from "vue";
import App from "./App.vue";
import "kui-vue/style/index.css";

createApp(App).mount("#app");
```

将下面示例保存为 `src/App.vue`。`<script setup>` 中导入的组件可以直接用于模板，事件通过 `@click` 绑定：

[局部导入与点击事件](./local.vue?show=vertical)

- 使用 ref 保存状态，通过点击事件更新计数。

具名导入的组件代码可由支持 tree-shaking 的构建工具裁剪；上面引入的仍是完整样式。两种方式选其一即可。

启动开发服务：

```bash
pnpm dev
```

需要图标时，在应用中声明图标依赖：

```bash
pnpm add kui-icons
```

```vue
<script setup lang="ts">
import { Plus } from "kui-icons";
import { Button } from "kui-vue";
</script>

<template>
  <Button :icon="Plus">新增</Button>
</template>
```

## 3. 使用 ref 和 v-model

使用 Vue 的响应式状态和 `v-model` 同步组件值。下面的 Input 和 Switch 都使用默认的 `v-model`：

[输入值与开关状态](./value.vue?show=vertical)

- `v-model="name"` 对应 `:model-value="name"` 和 `@update:model-value`。
- `:disabled="!enabled"` 传入布尔表达式；`disabled="false"` 是字符串，不应代替布尔绑定。
- 监听额外操作使用组件事件，例如 `@click`、`@change`；事件参数以各组件 API 为准。
- 不同组件可能使用具名绑定，例如 Menu 的 `v-model:openKeys`。请按对应组件文档选择绑定属性。

## 4. 通过 Form 绑定和校验字段

Form 接收响应式 `model` 对象，FormItem 的 `prop` 对应字段路径。受支持的表单控件会从 FormItem 获取值和变更绑定，无需同时再写 `v-model="model.name"`。

[字段绑定、校验与禁用](./form.vue?show=vertical)

- 清空名称后提交可查看必填校验，开关可切换表单禁用状态。

此示例中，输入会直接更新 `reactive` 创建的表单对象。`rules` 按字段名配置；`html-type="submit"` 触发表单校验，`@submit` 收到 `{ valid }`。`Form disabled` 会传递给支持表单状态继承的控件，组件显式设置的属性优先。更多用法见 [Form](/components/form)。

## 5. 使用 ConfigProvider 配置组件树

ConfigProvider 为后代组件提供语言、尺寸和外观设置，支持嵌套；组件自身的显式属性优先。它既可搭配全局注册，也可局部导入：

```vue
<script setup lang="ts">
import { Button, ConfigProvider, Space } from "kui-vue";
import en from "kui-vue/locale/en";
</script>

<template>
  <ConfigProvider :locale="en" size="small" theme="outline">
    <Space>
      <Button>默认小尺寸</Button>
      <Button size="large">覆盖尺寸</Button>
    </Space>
  </ConfigProvider>
</template>
```

`theme` 的 `fill`、`outline`、`plain` 表示组件外观；页面的深浅色设置见 [暗色模式](/guide/dark-mode)。语言配置只影响组件库内置文案，更多语言及日期格式配置见 [多语言](/guide/language)。

## 下一步

- [组件总览](/guide/components)：寻找适合页面的组件。
- [Form](/components/form)：查看字段校验、重置和嵌套字段。
- [ConfigProvider](/components/config)：统一应用内的组件配置。
