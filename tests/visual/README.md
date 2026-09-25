# 视觉测试与基准图更新

在项目根目录运行以下命令。本地测试使用已安装的 Chrome，测试服务会自动启动。

## 检查组件外观

```bash
pnpm test:visual
```

测试将当前截图与 `tests/visual/__screenshots__/` 中的基准图比较。失败时，
`test-results/` 下会生成预期图（expected）、实际图（actual）和差异图（diff）。

## 更新全部基准图

确认组件的外观变化符合预期后运行：

```bash
pnpm test:visual:update
```

## 只更新指定用例

通过 `-g` 匹配测试名称，例如只更新大尺寸、plain 主题、德语用例：

```bash
pnpm test:visual:update -g large-plain-light-de
```

其他截图用例名称见 `components.visual.spec.ts`。更新命令会运行所选测试，
重新截图并写入基准图目录，无须手动截图或复制图片。

## 更新后验证和提交

```bash
pnpm test:visual
git diff --stat -- tests/visual/__screenshots__/
```

检查更新后的图片，将相关组件代码和基准图一同提交。`test-results/` 是运行产物，
无需作为基准提交。不要仅为了消除失败而更新基准，应先确认差异符合预期。

本地使用 Chrome，GitHub Actions 使用 Playwright 配套 Chromium；系统字体或浏览器
版本也可能造成截图差异，因此 CI 中出现差异时仍需检查实际图和差异图。
