# KUI Vue Pro

KUI Vue Pro 是基于 Vue 3、TypeScript、Vite 和 KUI Vue 构建的企业级中后台解决方案。它提供完整的应用外壳和真实业务页面，可直接作为新项目的开发起点，无需再手工搭建路由、权限、布局和工程配置。

<p>
  <a href="https://admin.k-ui.cn" target="_blank">在线预览</a>
  ·
  <a href="https://github.com/smallerqiu/kui-vue-admin" target="_blank">GitHub</a>
</p>

## 一条命令创建项目

要求 Node.js 20.19 或更高版本。

```bash
npm create kui-vue-pro@latest my-app
```

也可以使用 pnpm 或 Yarn：

```bash
pnpm create kui-vue-pro my-app
yarn create kui-vue-pro my-app
```

创建完成后启动项目：

```bash
cd my-app
pnpm install
pnpm dev
```

CLI 会从 npm 包内复制完整模板，不执行 `git clone`，也不会携带 Pro 仓库的 Git 历史。生成后的项目完全属于你，可以直接修改、提交和部署。

## 已包含的能力

- 侧栏、顶部、混合三种后台布局
- 深色模式、主题色和 Shape 配置
- 文件路由、多页签、面包屑和全局菜单搜索
- 登录、Token 刷新及路由、菜单、按钮权限
- `all`、`department`、`self` 数据权限基础模型
- Dashboard、订单、售后、商品、客户、审批和系统管理页面
- ECharts 数据分析、本地 Mock 和统一请求层
- Vitest、Playwright、GitHub Actions、Docker 与 Nginx 配置

## 演示登录

开发环境默认开启本地 Mock：

```text
账号：admin@k-ui.cn
密码：123456
```

接入真实后端时，在 `.env.local` 中关闭 Mock 并配置 API 地址：

```env
VITE_USE_MOCK=false
VITE_API_BASE_URL=https://api.example.com
```

生产环境必须由服务端再次校验角色、权限和数据范围。

## 常用命令

```bash
pnpm dev          # 本地开发
pnpm typecheck    # TypeScript 检查
pnpm test         # 单元测试
pnpm test:e2e     # 浏览器端到端测试
pnpm build        # 生产构建
```

## 下一步

1. 修改 `.env.local` 和 `src/config/app.ts` 中的品牌配置。
2. 在 `src/api` 中接入真实接口。
3. 根据业务调整文件路由和权限码。
4. 执行 `pnpm build`，通过 Docker 或 Nginx 部署 `dist`。
