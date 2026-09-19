# AI 评测

本目录评测 `kui-vue` 的 AI 辅助资料与生成代码。命令从仓库根目录运行，先安装开发依赖。评测器使用本地源码类型，不需要先发布 npm 包。

## 固定场景回归（CI）

```bash
pnpm check:ai-evals
```

26 个用例包括常用组件及三个业务模板。检查完整源码、实际组件节点、静态 API 契约、TypeScript 类型；Vue 使用 vue-tsc 检查 script 与 template。参考代码必须通过，不允许使用 @ts-ignore / @ts-nocheck 等绕过检查。业务模板通过 sourceFile 引用真实文件，避免维护两份代码。

此命令已接入仓库完整验证。表单提交/重置、表格查询/分页、弹窗取消/保存的运行时回归由现有 `tests/ai-templates.test.*` 执行；`pnpm verify` 覆盖这些测试。`check:ai-evals` 本身不执行生成代码。

报告在 `.ai-eval-results/reference.json`，包含每例 API 问题、跳过项、类型诊断、通过率和源码。CI / Release 会保留报告 7 天。运行时行为通过不能从静态通过率推断。

## 按需模型评测

CI 不调用模型，也不需要模型密钥。模型、版本、接入工具由调用者选择，没有默认付费服务。

### 接入现有模型工具

```bash
pnpm eval:ai --generator /absolute/path/to/model-adapter --model your-model-version
```

adapter 是你自己维护的可信可执行文件，不是模型生成的命令。每例调用一次，无命令行参数：

- stdin：JSON，包含 `name`、`model`、`prompt`、`instructions`、`api`、`expectProps`。
- `instructions` 包含本库 Skill，`api` 包含该例相关组件的真实元数据；**不提供参考答案**。
- stdout：只输出完整 TSX / Vue SFC 源码（允许一层 Markdown 代码围栏）。日志写 stderr。
- 退出码非零或超过 180 秒视为生成失败，计入失败用例。adapter 自行读取凭证并调用模型，评测报告不收集其 stderr。

模型返回值只做解析和类型检查，绝不导入执行。当前模式是 `skill-and-api-injection`，不是多轮 MCP 工具调用评测。回调语义、视觉效果和真实请求正确性需要人工复核或在隔离环境补充行为测试。

### 使用已经生成的回答

```bash
pnpm eval:ai --export-prompts .ai-eval-results/prompts.json
pnpm eval:ai --responses /path/to/responses.json --model your-model-version
```

prompts.json 是供外部模型工具使用的输入，不包含参考源码。responses.json 是对象：每个 case name 对应一段完整源代码字符串；必须包含当前选择的全部用例，不能漏掉失败回答来抬高通过率。需要测试某一个场景时，在导出和评分命令中都加 `--case primary-action`。

```json
{
  "primary-action": "完整源代码字符串"
}
```

上面的单例响应仅能配合 `--case primary-action` 使用。`--out /path/to/report.json` 可指定输出位置；默认模型报告为 `.ai-eval-results/model.json`，重复运行会覆盖，做版本对比时指定不同文件。

报告记录模型标识、组件库版本、场景/上下文 SHA-256、评测时间、耗时、生成状态、源码及各例结果。`passRate` 仅代表组件使用/API/类型门槛通过率，`runtimeEvaluated` 固定为 false；不伪造语义通过率、模型用量或费用。导入参考答案进行自检也不算真实模型实测。

## 增加用例

在 `cases.json` 添加唯一 name、明确 prompt、必用组件 components，以及完整 source 或 sourceFile。使用组件的规范名称，不使用导入别名；静态节点检查因此可重复。`expectProps` 可要求某组件的字面量属性，例如提交按钮的 htmlType=submit、多选 Select 的 multiple=true；这些是有限的结构要求，不是完整的业务语义评测。新用例应关注常见 API 误用或业务场景，不应只为增加数量。

先运行固定回归和相关模板交互测试，再运行模型评测。错误枚举、缺失组件、无效语法、类型检查绕过等反例由 `tests/ai-evals.test.mjs` 覆盖。
