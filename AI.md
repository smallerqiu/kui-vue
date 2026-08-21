# Kui Vue AI 开发接入

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

`check:ai-assets` 防止生成物过期，`check:ai-evals` 编译 20 个代表性 Vue SFC 用例并检查组件覆盖。
