# AI 辅助开发

Kui Vue 随每个 npm 版本发布组件元数据、JSON Schema、Agent Skill 和 MCP Server。AI 编程工具可以查询当前版本的真实 API，减少不存在的属性和错误示例。

## 初始化项目

```bash
pnpm add kui-vue kui-icons
pnpm exec kui-vue-ai init
```

初始化命令会把 Kui Vue 使用约束写入项目的 `AGENTS.md`，重复执行不会重复添加。

## 连接 MCP Server

在支持 stdio MCP 的客户端中添加：

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

配置文件的位置取决于客户端和版本，请通过客户端当前的 MCP 设置页面添加。服务提供以下能力：

- 搜索组件和查询完整 API
- 根据界面需求推荐组件
- 检查 Vue 模板中的未知组件属性
- 读取 `kui-vue://components/{Name}` 组件资源
- 使用表单、数据表格和弹窗编辑器提示词

## Agent Skill

Skill 随 npm 包发布在：

```text
node_modules/kui-vue/ai/skills/kui-vue
```

Codex 等支持 Skills 的工具可以安装这个目录。其他工具仍可通过 `AGENTS.md` 和 MCP 使用相同规范。

## 在线资源

- [AI 精简索引](/llms.txt)
- [AI 完整文档](/llms-full.txt)
- [组件元数据](/kui-components.json)
- [元数据 JSON Schema](/schema/kui-components.schema.json)

这些文件由组件源码和文档自动生成，并由 CI 检查是否过期。

## 推荐工作流

1. 先用 `recommend_components` 选择组件。
2. 用 `get_component_api` 查询准确的属性、事件和示例。
3. 生成 Vue 3 TypeScript 代码。
4. 用 `validate_kui_usage` 检查未知属性。
5. 运行项目的类型检查、Lint 和测试。
