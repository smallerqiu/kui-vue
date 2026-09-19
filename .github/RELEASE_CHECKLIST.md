# Release checklist

Use this checklist after feature freeze and before publishing a new KUI Vue version.

本地 `pnpm test:visual` 使用已安装的 Google Chrome，无需另外下载 Playwright 浏览器；CI 使用 Playwright 配套的 Chromium。两者版本和平台可能产生截图差异，更新基线前请检查差异内容。

## GitHub Actions 发布

`Release` workflow 默认 `publish=false`，只运行完整验证、构建并上传 `npm-package`，不会发布。CI 和 Release 的视觉测试失败时会上传 `visual-test-results`，包含 Playwright 生成的截图及差异文件。

首次配置：

1. 将 `.github/workflows/release.yml` 合入仓库默认分支，使手动运行入口可用。
2. 在 GitHub 创建 `npm` environment，设置发布审批人和允许发布的版本 tag。
3. 在 npm 的 `kui-vue` 包设置中添加 GitHub Actions trusted publisher：owner `smallerqiu`、repository `kui-vue`、workflow `release.yml`、environment `npm`，允许直接 publish。流程使用 OIDC，不需要配置长期 npm token。参见 [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/)。

发布步骤：

1. 更新 `package.json`、`src/views/change-log.md`，执行 `pnpm generate:ai`，提交修改并等待 CI 通过。
2. 在 Actions → Release 保持 `publish=false` 试运行，下载 `npm-package`，检查并安装其中的 `kui-vue.tgz`。
3. 为审核后的提交创建并推送与包版本一致的 tag，例如 `v6.0.0`（请替换为实际尚未发布的版本）。
4. 在该 tag 上手动触发：`gh workflow run release.yml --ref v6.0.0 -f publish=true -f dist_tag=latest`。预发布版本使用 `dist_tag=next`。
5. 审批 `npm` environment 的任务。流程检查 tag、版本和更新日志，运行 `pnpm verify`，发布 prepare 阶段生成的同一个 tarball。推送 tag 本身不会触发发布。

## 发布前检查

- [ ] Run `pnpm verify` from a clean checkout.
- [ ] Review visual changes with `pnpm test:visual`; update snapshots only for intentional changes with `pnpm test:visual:update`.
- [ ] Install the packed package in one existing Vite application and exercise forms, overlays, dropdowns, route changes, dark mode, and locale switching.
- [ ] Check the generated package with `npm pack --dry-run` and confirm no source-only or private files are included.
- [ ] Confirm the changelog, package version, and Git tag use the same version.
- [ ] Publish only from a clean commit after every required CI job passes.
