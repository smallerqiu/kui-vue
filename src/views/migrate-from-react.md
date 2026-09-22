# 从 react-kui 迁移

本文面向已经使用 `react-kui`、准备在 Vue 页面中改用 `kui-vue` 的开发者。内容只讨论组件库的接入和 API 对应关系，不介绍应用从 React 改写为 Vue 或反向改写的工程过程。

本文以仓库中的 **react-kui 3.x / kui-vue 6.x** API 为基准。两边大多数组件的功能和命名相近，但不是可以直接替换包名的兼容层；旧版本请先对照目标版本的组件文档。

## 1. 安装与样式入口

```bash
pnpm add kui-vue
```

在 Vue 应用入口引入 `kui-vue/style/index.css`，组件可在 `<script setup>` 中具名导入，也可以通过 `app.use(kui)` 全局注册。本文示例使用局部导入；不需要为了迁移改成全局注册。

目标运行环境分别为 React 19.2+ / Vue 3.5+。安装时确认实际目标版本，不要假设两个包的版本号或 npm 发布进度一致。框架环境准备参见[快速开始](/guide/quick-started)。

迁移完成并确认旧页面不再使用后，再移除原组件库依赖。两套库都使用 `.k-*` 类和 `--kui-*` 变量，不要在同一页面叠加引入两套完整样式；逐页迁移时应隔离样式作用域或页面入口。

## 2. 常用 API 对照

| 用途                    | react-kui                                         | kui-vue                                         |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------- |
| Input / Select 等输入值 | `value` + `onChange`                              | `v-model`（`modelValue` + `update:modelValue`） |
| Switch 开关状态         | `checked` + `onChange(value)`                     | `v-model`；也支持 `v-model:checked`             |
| Checkbox 单项选中       | `checked` + `onChange(event)`，取 `event.checked` | `v-model`；`@change` 返回对象，不能当布尔值     |
| Modal 显隐              | `open` + `onOpenChange`                           | `v-model`                                       |
| Upload 文件列表         | `fileList` + `onChange(({ fileList }) => ...)`    | `v-model:fileList`                              |
| Page 页码 / 每页条数    | `page`、`pageSize` + `onChange(page, pageSize)`   | `v-model:page`、`v-model:pageSize`              |
| 只读属性                | `readOnly`                                        | `readonly`                                      |
| CSS 类 / 内联样式       | `className` / 样式对象                            | `class` / 样式对象或字符串                      |
| 内容扩展                | `children`、ReactNode 属性、render 回调           | 默认插槽、具名插槽、VNode/render 回调           |

不要机械地把所有 `onChange` 都改成 `@change`，或者把所有值都改成 `value`。先判断组件更新的是输入值、选中状态、文件列表还是分页状态，再连接对应的状态更新接口。

## 3. 输入值、选中状态与事件

下面两段实现相同的输入和布尔选中状态，先展示原库，再展示目标库：

```tsx
import { useState } from "react";
import { Input, Checkbox, Switch } from "react-kui";

export default function Settings() {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Input value={name} onChange={setName} />
      <Checkbox checked={agreed} onChange={(e) => setAgreed(e.checked)} />
      <Switch checked={enabled} onChange={(value) => setEnabled(value === true)} />
    </>
  );
}
```

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Input, Checkbox, Switch } from "kui-vue";

const name = ref("");
const agreed = ref(false);
const enabled = ref(false);
</script>

<template>
  <Input v-model="name" />
  <Checkbox v-model="agreed" />
  <Switch v-model="enabled" />
</template>
```

Input 的 change 参数是值，不是原生 DOM event；Checkbox 的 change 参数是包含 `checked` 的对象；Switch 的 change 参数是值。`valueType` 可以改变 Switch 等组件输出的值类型，使用 `number` / `string` 时不要用 `Boolean("0")` 转换，应明确判断 `1` / `"1"`。

React 的 `value`、`checked`、`open` 等状态属性统一用于初始化，并在外部属性变化时同步；用户交互也会更新组件内部状态。需要业务联动时，保存业务状态并接回对应的更新事件。

Vue 的 `v-model` 是组件声明的模型接口，不等同于 `:value`。尤其 Modal、Upload、Page 的绑定名称不同。`Select` 选项的数字 `1` 与字符串 `"1"` 也不同，模板中数字值应使用 `:value="1"`，保持后端数据与选项值类型一致。

## 4. Form：复用规则，重新连接 model

`Form`、`FormItem`、`prop`、`rules`、`labelCol`、`wrapperCol` 的结构大体可以保留。两边都能让带 `prop` 的 FormItem 自动连接支持表单上下文的子控件，下面的 Input 无需再单独绑定值。

```tsx
import { useState } from "react";
import { Button, Form, FormItem, Input } from "react-kui";

export default function Profile() {
  const [model, setModel] = useState<Record<string, unknown>>({ name: "" });
  return (
    <Form
      model={model}
      onChange={setModel}
      onSubmit={({ valid }) => {
        if (valid) console.log(model);
      }}
    >
      <FormItem prop="name" label="Name" rules={[{ required: true, message: "Required" }]}>
        <Input />
      </FormItem>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
```

```vue
<script setup lang="ts">
import { reactive } from "vue";
import { Button, Form, FormItem, Input } from "kui-vue";

const model = reactive({ name: "" });
function submit({ valid }: { valid: boolean }) {
  if (valid) console.log(model);
}
</script>

<template>
  <Form :model="model" @submit="submit">
    <FormItem prop="name" label="Name" :rules="[{ required: true, message: 'Required' }]">
      <Input />
    </FormItem>
    <Button html-type="submit">Submit</Button>
  </Form>
</template>
```

React 使用 `model` + `onChange` 接收不可变更新后的对象；Vue 可以直接传入 `reactive` model，由表单更新字段。不要同时维护 Form model 和另一份 Input state，否则重置、回填和校验可能读到不同数据。

两边 `onSubmit` / `@submit` 都接收 `{ valid }`，不是原生 submit event，也不是完整表单数据。校验通过后自行读取 model 并调用业务接口；上面的例子只打印数据，不发请求。`Button` 使用 `htmlType="submit"` / `html-type="submit"`，不要把视觉 `type` 当作原生提交类型。

`validate()` 返回 `Promise<{ valid: boolean }>`；`reset()` 清空字段和校验结果，不是恢复编辑页初始对象。需要恢复初始记录时，请另外保留数据副本。通过 ref 调用方法时，React 读取 `ref.current`，Vue 脚本读取 `ref.value`；ref 类型应从目标库导入，不能直接复用原库的 FormContext 类型。

规则默认在 change 时触发。只在提交时校验的规则可配置 `trigger: []`，并通过 `validate()` / 提交统一校验。Upload 要区分文件已加入、上传中、上传成功，不能只靠列表非空判断完成。

## 5. Modal、Upload 和分页

Modal 用法对照（`open` 为业务状态，React 的 `setOpen` 为其 setter）：

```tsx
<Modal open={open} onOpenChange={setOpen} title="Confirm" onOk={() => setOpen(false)}>
  Content
</Modal>
```

```vue
<Modal v-model="open" title="Confirm" @ok="open = false">
  Content
</Modal>
```

确认按钮的业务保存成功后再关闭，不要遗漏外部状态同步。`onCancel` / `@cancel` 是取消回调，不应代替所有关闭路径的状态绑定。

Upload 的事件参数是 `{ file, fileList }`。React 用 `fileList={files} onChange={({ fileList }) => setFiles(fileList)}`；Vue 用 `v-model:fileList="files"`，额外业务逻辑放在 `@change`。移除、拖动排序、上传状态变化的回调也应检查目标版本的事件定义。`action`、请求头、鉴权、响应转业务 URL 的逻辑仍需按应用接口配置。验证表单不会替你提交业务接口，上传组件则可能已通过 `action` 发出了上传请求。

Page 在 React 中用 `onChange(page, pageSize)` 同时更新两个状态；Vue 可绑定 `v-model:page` 与 `v-model:pageSize`。后端分页应以回调给出的新页码和条数请求数据，避免读取尚未同步的旧状态。

## 6. 插槽与 Table 自定义渲染

简单标题文字通常可以沿用。复杂内容需要改写：React 的 `prefix={<span>￥</span>}` 对应 Vue Input 的 `<template #prefix><span>￥</span></template>`；反向迁移则改为 ReactNode 属性。先查组件是否提供对应属性或插槽，不要把任意具名插槽直接改为同名 prop。

**Table 的 render 签名不同**：

- React：`render(value, record, rowIndex, column)`，返回 ReactNode。
- Vue：`render(h, record, colIndex, rowIndex, column)`，返回 VNodeChild。

```tsx
const columns = [
  {
    title: "Name",
    key: "name",
    render: (value: unknown) => <strong>{String(value ?? "")}</strong>,
  },
];
```

```ts
import type { Column } from "kui-vue";

const columns: Column[] = [
  {
    title: "Name",
    key: "name",
    render: (h, record) => h("strong", String(record.name ?? "")),
  },
];
```

不要直接复制 render 函数，否则第一个参数含义和行列索引都会错。静态 `key`、`title`、`width` 等列信息可逐项复用；自定义排序、合并单元格、选择回调和树节点渲染要按目标类型重新检查。Vue 的 VNode 和 React element 不能互传。

## 7. 主题、语言与弹层

`ConfigProvider` 的 `size`、`shape`、`theme`、`locale`、`getPopupContainer` 可按同名配置迁移；组件自身显式属性优先于继承值。`theme="outline"` 等是控件外观，暗色模式用 `theme-mode="dark"`，不要改成 `theme="dark"`。

语言包导入路径从 `react-kui/locale/zh-CN` 改为 `kui-vue/locale/zh-CN`。日期相关的 dayjs locale 也要在目标应用加载。CSS 变量可以对照迁移，但依赖内部 DOM 层级的覆盖样式要重新验证。

弹层可能挂载到父组件之外，局部主题和容器需检查 `getPopupContainer`。Vue 的 scoped 样式与 React 的 CSS Modules 不会自动覆盖所有弹层。命令式 `message` / `modal` 等 API 的内容也必须使用目标框架节点，不要假设独立创建的弹层自动继承页面 Provider。

## 8. 建议迁移顺序与验收

1. 接入目标库的样式、ConfigProvider、语言和主题，先迁移 Button / Input 等基础组件。
2. 迁移表单 model、事件参数、校验和 ref 方法，再迁移 Modal、Upload、Table、Tree、Menu 等复杂组件。
3. 验证数据回填、清空、重置、异步校验、禁用和只读；日期值格式、范围值和时区按接口契约检查。
4. 验证分页查询、上传完成/失败/移除/排序、弹窗全部关闭路径、菜单路由与展开选中状态。
5. 验证暗色/局部主题、弹层翻转、键盘交互，更新组件测试和视觉基线。路由相关回调应连接目标应用的路由系统。
6. 移除旧组件库及不再使用的样式。Next.js / Nuxt 的客户端边界、SSR 和 hydration 参见各自接入文档，不要照搬另一端的配置。

更多细节参见 [Form](/components/form)、[Upload](/components/upload)、[Table](/components/table)、[ConfigProvider](/components/config) 的目标端 API。
