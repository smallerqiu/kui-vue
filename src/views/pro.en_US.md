# KUI Vue Pro

KUI Vue Pro is an enterprise admin solution built with Vue 3, TypeScript, Vite, and KUI Vue. It includes a production-ready application shell and realistic business pages, so you can start a new project without rebuilding routing, permissions, layouts, and tooling.

<p>
  <a href="https://admin.k-ui.cn" target="_blank">Online Preview</a>
  ·
  <a href="https://github.com/smallerqiu/kui-vue-admin" target="_blank">GitHub</a>
</p>

## Create a project

Node.js 20.19 or newer is required.

```bash
npm create kui-vue-pro@latest my-app
```

pnpm and Yarn are also supported:

```bash
pnpm create kui-vue-pro my-app
yarn create kui-vue-pro my-app
```

Then install dependencies and start development:

```bash
cd my-app
pnpm install
pnpm dev
```

The CLI copies the complete template directly from its npm package. It does not run `git clone` or include the source repository's Git history.

## Included capabilities

- Side, top, and mixed admin layouts
- Dark mode, theme color, and shape configuration
- File routing, multi-tabs, breadcrumbs, and command search
- Authentication, token refresh, route, menu, and action permissions
- `all`, `department`, and `self` data scopes
- Dashboard, order, after-sales, product, CRM, approval, and system pages
- ECharts analytics, local mock services, and a unified request layer
- Vitest, Playwright, GitHub Actions, Docker, and Nginx configuration

## Demo login

Local mock data is enabled by default:

```text
Account: admin@k-ui.cn
Password: 123456
```

Connect a real backend in `.env.local`:

```env
VITE_USE_MOCK=false
VITE_API_BASE_URL=https://api.example.com
```

Roles, permissions, and data scopes must also be enforced by the production API.

## Commands

```bash
pnpm dev
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

## Next steps

1. Update branding in `.env.local` and `src/config/app.ts`.
2. Connect real services in `src/api`.
3. Adjust file routes and permission codes for your business.
4. Run `pnpm build` and deploy `dist` with Docker or Nginx.
