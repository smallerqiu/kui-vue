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

## AI 场景评测

`pnpm check:ai-evals` 检查 26 个固定场景的组件使用、API 和完整源码类型（Vue 使用 vue-tsc），已接入仓库验证。现有 AI 模板测试另行验证表单、分页表格和弹窗交互；静态通过不等于业务行为正确。

模型评测按需运行，可接入自己的模型工具：

```bash
pnpm eval:ai --generator /absolute/path/to/model-adapter --model your-model-version
```

可信 adapter 从 stdin 接收 JSON（需求、Skill 和相关组件 API，不含参考答案），在 stdout 返回完整源码；由 adapter 管理凭证并调用模型。CI 不调用付费模型。生成代码只解析和类型检查，不会被直接执行。

也可以先导出需求，再评测保存的模型回答：

```bash
pnpm eval:ai --export-prompts .ai-eval-results/prompts.json
pnpm eval:ai --responses /path/to/responses.json --model your-model-version
```

responses.json 是以用例名为键、源码字符串为值的对象。`--case primary-action` 选择单例，`--out report.json` 保存不同版本报告。报告记录模型、场景/上下文哈希、逐例错误、跳过项、源码和静态通过率，不将其表述为语义或运行时通过率。完整接入协议见仓库 `ai/evals/README.md`。
