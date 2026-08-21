# 更新日志

![kui](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square)

4.x+ 版本支持 `Vue3`, 基于 `Vue2` 的文档请参阅 <https://v3.k-ui.cn>
遇到问题,请在 [Github](https://github.com/smallerqiu/kui-vue/issues) 提issue

```bash
npm install kui-vue@latest --registry=http://registry.npmjs.org
```

vite 好像有缓存, 可手动清除

```bash
rm -rf node_modules/.vite
```

## 5.7.0

`2026-8-21`

### 新增组件

- 新增 `AutoComplete` 自动完成组件，支持本地/远程搜索、受控展开、空值展开控制、加载状态、清除、主题、尺寸和形状。
- 新增 `CheckCard`、`CheckCardGroup` 卡片选择组件，支持单独选择、单选组、自定义内容和多种外观。
- 新增 `InputTag` 标签输入组件，支持受控值、分隔符录入、数量限制、重复项控制和标签折叠。
- 新增 `Mentions` 提及组件，支持多触发符、过滤、远程数据、加载与空状态、行数和弹层位置控制。
- 新增 `Steps`、`Step` 步骤条组件，支持水平/垂直布局、状态、图标、点击切换和受控模式。
- 新增 `Tour` 漫游式引导组件，支持受控步骤、遮罩、定位和自定义内容。
- 新增 `Transfer` 穿梭框组件，支持搜索、禁用、事件、自定义渲染、主题和分页插槽。
- 新增 `Typography` 排版组件，提供 Text、Title、Paragraph，支持复制、编辑、Tooltip 和展开/折叠省略文本。
- 新增 `VirtualList` 基础虚拟列表组件，支持固定项高度、超扫描和滚动定位。

### 功能增强

- `Select` 完善键盘导航，新增多选创建选项能力，并支持虚拟滚动、大数据选项和多选标签折叠。
- `Table`、`Tree`、`TreeSelect` 新增虚拟滚动；修正虚拟表格固定列与斑马纹的配合表现。
- `Page` 新增 `simple` 简洁分页模式；结合 `showElevator` 时可直接编辑当前页码。
- `Tabs` 新增溢出滚动导航和响应式测量，动态修改标题后会重新计算激活线位置。
- `Button` 支持自定义加载图标，并优化按钮组、状态和动画表现。
- `Card` 补充尺寸能力；`Input`、`Select`、`TreeSelect` 等组件进一步统一 `theme`、`size`、`shape` 行为。
- `Modal`、`Drawer`、`Tour` 统一遮罩表现和滚动锁定逻辑，改善页面打开弹层时的布局抖动。

### 样式与体验优化

- 统一 `InputTag`、`Select`、`TreeSelect` 和 `Tag` 的标签样式，兼容亮色/暗色模式、尺寸和形状。
- 统一输入框、下拉框、空状态和弹层动画；整理并复用公共 motion 动画定义。
- 增加全局字体、排版、盒模型和滚动条基础样式，适配 macOS 与 Windows 字体环境。
- 推进组件高度 CSS Variables 在 small、medium、large 尺寸中的统一使用。
- 整理公共组件样式，将组件专属规则合并回各自样式文件，减少重复选择器。
- 扩充新增组件及虚拟滚动、Typography、Transfer 等组件的中英文文档和功能 Demo。
- 优化组件渲染逻辑，确保在面板未打开时不创建 Teleport。

### Bug 修复

- 修复 `AutoComplete` 和 `Mentions` 选中、删除查询或远程搜索无结果时下拉内容闪烁的问题。
- 修复 `Mentions` 下拉框未跟随光标、空间不足时不能自动调整位置的问题。
- 修复 `Select` 回车选择后查询未清空、可创建重复项及再次键盘导航从首项开始的问题。
- 修复 `Tabs` 标题动态变化后激活线位置不正确的问题。
- 修复 `DatePicker` 日期布局问题。
- 修复 `ColorPicker` 色盘值定位问题。

### AI 与工程化

- 发布与当前版本同步的组件 metadata、JSON Schema、`llms.txt` 和 `llms-full.txt`。
- 新增 Kui Vue Agent Skill、项目初始化 CLI 和 MCP Server，支持组件搜索、API 查询、组件推荐及模板属性校验。
- 新增 20 个 AI Vue SFC 评测用例，并将 AI 资产一致性与评测接入 CI。
- 新增中英文 AI 辅助开发指南；npm 包开放 `kui-vue/metadata`、`kui-vue/metadata/schema` 和 `kui-vue/skill` 导出。
- 完善 ESLint、类型检查、API 文档检查、测试、构建和发布包校验流程，并升级开发依赖。

## 5.6.0

`2026-8-16`

- 新增 组件 `Ripple`。
- 新增 组件 `FlameWrap`。
- Menu 组件扩展优化。
- Avatar 组件扩展优化。
- Table 组件支持Tree 数据。
- Badge 动画优化。
- Grid 新增 flow 属性，支持 row dense 自动补位, 修复 Grid 的响应式样式及外部 class/style 不更新问题。
- Row,Col 增加xl,sm 等属性支持响应式。
- Notice 新增grouping属性.相同 grouping ,只弹出一个提示消息.
- 一些Pop组件支持 Panel形式展示.
- theme 切换默认优化.
- ColorPicker 面板颜色拖选修复.

## 5.5.1

`2026-8-9`

### 功能优化

- 新增 组件 `InputOTP`。
- 新增 组件 `FeatureCard`。
- 新增 组件 `Result`。
- 新增 组件 `FeedbackPanel`。
- 新增 组件 `CardMeta`以丰富`Card`。
- `Badge` 组件新增 `pill` 属性, 展示胶囊外观。
- 弹出层组件全面升级为 Vue 3 `Teleport`。
- 优化 `Menu` 折叠、展开动画及子菜单状态恢复。
- `Avatar` 图片加载失败时展示默认 `User` 图标。
- 优化 `Demo` 在线编译器对 `TypeScript` 语法的支持。
- 完善 `Table`、`Upload` 等组件的 `TypeScript` 类型。

### Bug 修复

- 修复 Modal 命令式调用样式丢失及居中位置偏下。
- 修复 Menu 折叠时子菜单动画丢失、选中状态异常。
- 修复 TreeSelect 搜索无匹配数据时 Empty 不显示。
- 修复 Table 空数据、固定表头场景下边框缺失。
- 修复 Table 勾选、合并单元格、固定列及滚动状态异常。
- 修复 Upload 请求方法无效、状态判断、文件删除和资源泄漏。
- 修复 Image 多实例冲突、加载竞态、预览数据不同步及事件泄漏。
- 修复 Avatar、Skeleton 的加载状态、尺寸和资源清理问题。
- 修复 Input 浏览器自动填充背景色异常。
- 修复 Demo 编译 `import type` 语法时报错。

### 重构

- 简化 Menu、Collapse、Tree/TreeSelect 的内部状态传递。
- 移除冗余的 `isPopup`、`active`、`selectAsCheck` 和 `queryKey`。
- 移除旧的 `v-transfer` 指令。

## 5.4.1

`2026-8-2`

- 增加`Cascader` 级联选择组件
- 完善`Empty` 描述文字显示问题
- 完善`Page` 跳转负数问题
- 完善 主题切换在2k,4k分辨率显示问题

## 5.3.1

`2026-7-17`

- `message` 组件新增grouping属性.相同 grouping ,只弹出一个提示消息.

## 5.3.0

`2026-7-13`

- 新增`QRCode` 二维码 组件
- 新增`Watermark` 水印 组件
- 修复 `Modal` 最大化问题
- 修复 `Page` 分页器默认值问题
- 修复 `Dropdown` 下拉定位问题
- 修复 `Image` 拖动问题
- 修复 `Input` 一些属性问题

## 5.2.3

`2026-6-8`

- 修复`Select` 过滤不显示Label的问题

## 5.2.2

`2026-5-18`

- 修复`Input`,`Textarea` 只读属性问题
- 修复`Modal` 宽度问题
- 修复`Tag` class 属性异常问题

## 5.2.1

`2026-5-10`

- `Table` 插槽增强
- `Form` 子组件异常问题

## 5.2.0

`2026-5-9`

- 表单组件移除`value` 属性, 使用 `modelValue`
- `Modal`,`Select` 等组件新增 `onOpenChange` 事件,展开或打开窗口时触发
- `Input` 等组件新增 `onClear` 事件,清空值时触发
- 组件`onChange` 事件将返回组件当前值.
- 修复`Form` 规则验证问题.

## 5.1.0

`2026-5-4`

- 新增`Splitter` 组件
- `CheckBox`,`Switch` 组件优化,支持输出`boolean`(true / false), `number`(0 / 1)
- `message` 新增 `loading`函数
- `RadioGroup` 优化
- 表单验证优化
- 一些组件属性`light` 值改为 `fill`

## 5.0.1

`2026-4-28`

- TS 增强

## 5.0.0

`2026-4-27`

- 基于TypeScript重构了所有组件
- ⚠️5.x 版本使用新的图标库

## 4.0.3

`2026-3-5`

- 修复 Select 多语言问题
- 优化 Menu 细节
- 修复主题切换时闪烁问题

## 4.0.2

`2026-3-2`

- 修复对 Nuxt.js 的兼容问题
- 修复 Drawer 关闭问题。
- 优化 Slider 组件(两端对齐)。
- 新增 Anchor, AnchorLink 组件。
- 新增 AvatarGroup 组件。
- 修复 Carousel (v-for bugs)。
- 完善 POP 一系列组件。

## 4.0.1

`2026-2-8`

- 新增Grid 组件。
- 优化StatCard组件

## 4.0

`2026-2-4`

- 支持Vue3，后续基于Vue2的3.x 版本不再维护。
- 整体重构了所有组件

## 3.6.10

`2026-2-1`

- 细节优化调整

## 3.6.9

`2026-1-25`

- Page 的页码属性由current改为page
- Image 调整,增加页签
- Slider 隐藏提示修复
- 其它细节优化

### More

- 更多更新日志，请查看[V3版本](https://v3.k-ui.cn/log)

## 2.3.5

`2019-10-17`

- 👏 优化 `Modal` 关闭动画
- 🐞 修复 `Select` 组件表单验证的问题
- 💪 完善 `Table` `row-click` 冒泡不执行的问题

## More

- 更多更新日志，请查看[V2版本](https://v2.k-ui.cn/#/log)

## 1.0.0

`2017-12-10`

👏 🚩着手开发
