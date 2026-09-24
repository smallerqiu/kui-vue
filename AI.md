# Kui Vue AI 开发接入

图标属性注意：`Button.icon` 接收从 `kui-icons` 导入的 `IconType[]` 图标数据。例如 `import { Search } from 'kui-icons'` 后，在模板中使用 `<Button :icon="Search" />`，在 TSX 中使用 `<Button icon={Search} />`。不要传 `h(Icon, ...)`、VNode、组件函数或图标名称字符串；自定义内容使用默认插槽。Input 的 prefix/suffix 插槽与 Button.icon 不是同一种接口。

Kui Vue 随 npm 版本一起发布组件元数据、JSON Schema、Agent Skill、MCP Server 和评测用例。AI 工具因此可以查询当前安装版本的真实 API，而不是猜测属性。

## 项目初始化

```bash
pnpm add kui-vue kui-icons
pnpm exec kui-vue-ai init
```

初始化命令会把 Kui Vue 使用约束追加到项目的 `AGENTS.md`，重复执行不会重复写入。

## MCP Server

在支持 stdio MCP 的客户端中添加下面的服务：

```json
{
  "mcpServers": {
    "kui-vue": {
      "command": "pnpm",
      "args": ["exec", "kui-vue-mcp"]
    }
  }
}
```

不同客户端的配置文件位置会随版本变化，请在客户端的 MCP 设置页面中添加该命令。服务提供：

- 组件搜索和完整 API 查询
- 根据需求推荐组件
- Vue 模板未知属性检查
- 每个组件的 `kui-vue://components/{Name}` 资源
- 表单、表格和弹窗编辑器提示词

## 各客户端建议

- Codex：运行初始化命令，并把 `node_modules/kui-vue/ai/skills/kui-vue` 作为 Skill 安装；在 MCP 设置中添加上述服务。参见 [Codex 官方文档](https://developers.openai.com/codex/)。
- Claude Code、Cursor：运行初始化命令，再通过各自的 MCP 设置添加上述 stdio 服务。
- GitHub Copilot：运行初始化命令，使 Agent 读取 `AGENTS.md`；也可以把其中 Kui Vue 段落同步到 `.github/copilot-instructions.md`。

## 可直接读取的资源

- 在线精简索引：<https://k-ui.cn/llms.txt>
- 在线完整文档：<https://k-ui.cn/llms-full.txt>
- 在线元数据：<https://k-ui.cn/kui-components.json>
- JSON Schema：<https://k-ui.cn/schema/kui-components.schema.json>
- npm 导出：`kui-vue/metadata`、`kui-vue/metadata/schema`、`kui-vue/skill`

## 维护验证

```bash
pnpm generate:ai
pnpm check:ai-assets
pnpm check:ai-evals
```

`check:ai-assets` 防止生成物过期，`check:ai-evals` 编译代表性 Vue SFC 用例并检查组件覆盖。

## 按需查询与校验范围

优先查询安装版本附带的元数据，而不是在线最新版本：

1. `search_components({ query, offset?, limit? })` 分页搜索，默认 10 条，最多 20 条。
2. `get_component_api({ name, section? })` 默认返回 API 与行为约定，不包含示例源码。`section` 可选 `props`、`events`、`slots`、`models`、`behavior` 或 `all`。
3. `list_component_examples({ name, offset?, limit? })` 返回示例标题和 ID；用 `get_component_example({ name, id })` 读取单个示例。
4. `list_templates({ query? })` 列出业务模板；`get_template({ id })` 获取完整 SFC 和安装说明。

元数据包含可提取的枚举值 `enumValues`、显式必填标记 `required`、源码默认表达式 `defaultExpression`、`models` 绑定关系与 `behavior` 行为约定。未提供默认表达式表示没有提取到明确默认值，不能据此猜测运行时结果。行为约定目前重点覆盖 Form、FormItem、Button、Modal、Table、Page、Menu、ConfigProvider、Select、Switch、Input、Space。

`validate_kui_usage` 检查组件属性名、已知字面量枚举/布尔值/数字、事件名、v-model 更新事件、明确必填属性，以及有完整契约的命名插槽。原生事件与属性允许透传。动态表达式、展开绑定、自定义组件、别名导入及契约不完整的插槽不做完整类型推断。

返回的 `valid` 仅表示没有发现静态错误；`complete: false`、`skipped` 和 `nextStep` 会明确检查边界。它不等于类型检查或运行测试通过，应用仍需执行 `vue-tsc --noEmit` 和交互测试。

## 可运行的业务模板

- `form`：必填和邮箱校验、提交、重置、禁用及保存反馈。
- `table`：搜索、分页、加载、失败提示及过期请求保护。
- `modal-editor`：新增/编辑共用弹窗、草稿隔离、校验、保存和取消。

模板位于 npm 包的 `ai/templates/`，均使用局部组件导入。应用入口引入一次 `kui-vue/style/index.css`，将模板保存为 `App.vue` 即可运行。模板中的异步请求是本地模拟，需要接入真实后端；没有预设后端地址或凭证。

维护时运行 `pnpm check:ai-templates` 检查模板类型与真实组件交互，`pnpm test -- tests/ai-validation.test.ts --maxWorkers=1` 检查 MCP 契约。

## 低内存机器上的构建

`pnpm build` 保留完整发布产物，但每个阶段单独启动 Node，顺序完成后退出，释放打包器和类型检查器内存。默认每个阶段的 Node old-space 上限为 2048 MB；Terser 最多 1 个工作线程，Less 在主线程执行。

- 日常开发：`pnpm dev`，无需先构建发布包。
- 本地检查打包效果：`pnpm build:local`，生成 CSS、ESM、类型和编辑器提示；不生成 CJS/UMD，也不适合直接发布。
- 完整发布：`pnpm build`。
- 单阶段排查：`pnpm build:css`、`pnpm build:es`、`pnpm build:types`、`pnpm build:lib`、`pnpm build:umd`。

ES 构建不再同时生成类型，需要类型时使用 `build:types` 或 `build:local`。确需提高堆上限，可设置 `KUI_BUILD_HEAP_MB=2560 pnpm build`。堆上限不是整个进程或整台机器的内存上限；在 8 GB 机器上避免同时运行构建、全量测试和多个开发服务器。
