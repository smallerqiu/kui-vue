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

## 6.0.0

`2026-9-15`

### 重要变更

- 最低 Vue 版本调整为 `3.5.0`，以使用稳定 ID、完善的类型推导及新版运行时能力。升级前请先确认业务项目使用 Vue 3.5 或更高版本。
- 新增 `Segmented` 分段控制器，替代原先由 `RadioGroup` 承担的卡片式滑块场景；`Radio`、`RadioButton` 和 `RadioGroup` 回归单选语义。
- 重新梳理表单控件的受控值、默认值、重置、只读、禁用和事件语义。依赖旧版非标准行为的项目建议重点回归 Form、Radio、Rate、Slider、InputNumber 与日期范围表单。
- `Row` 统一使用 Flex 布局并移除已无实际作用的 `type`；`GridItem` 移除不符合 CSS Grid 放置语义的 `offset`，精确定位请改用 `columnStart` 和 `rowStart`。

### 新增组件与能力

- 新增 `Segmented` 组件，支持受控与非受控值、不同尺寸、禁用项、自定义图标和自定义标签内容，并提供带动画的选中滑块。
- `Cascader` 新增按需异步加载，支持加载状态、并发去重、结果缓存、空结果处理、失败重试，以及返回子节点或直接更新 `option.children` 两种用法。
- `Upload` 新增自定义上传请求、文件校验、并发控制、错误信息和图片墙拖拽排序，完善上传进度、文件状态与照片墙交互。
- `Tabs` 新增 `browser` 浏览器页签外观、可关闭及动态新增页签，并将溢出页签收纳到下拉菜单中快速切换。
- `Menu` 新增折叠 Tooltip 控制、折叠状态子菜单浮层、键盘导航和多级菜单状态恢复。
- `Descriptions` 新增响应式列配置；`BackTop` 支持自定义滚动容器；`Page` 完善 simple 模式、页码编辑和自适应页容量选择器。
- `Grid` 新增 `columnStart`、`rowStart` 精确行列定位，完善容器响应式断点、`suffix` 多列放置和 `itemMinWidth` CSS 长度支持。

### Form 与输入控件

- 重构 FormField 上下文并接入主要表单控件，统一 Form 的 `size`、`theme`、`shape`、`disabled` 和 `readonly` 继承行为。
- `resetFields` 现在恢复字段初始值，并修复外部替换 model、调用 `setFieldsValue`、动态字段及单选框重置不同步的问题。
- 完善规则触发、异步校验竞争、可选空值、正则复用和错误信息布局；长错误文案不再覆盖下一项。
- 增加稳定字段 ID，以及 `label for`、`aria-invalid`、`aria-describedby`、`role="alert"` 等无障碍关联。
- `Input` 新增 `addonBefore`、`addonAfter`，统一前后缀、清空按钮和 InputGroup 布局；修复 fill/outline、禁用、暗色模式及不同尺寸下的状态样式。
- `Select`、`TreeSelect`、`AutoComplete`、`Mentions`、`InputTag` 等组件统一 clearable、readonly、标签、下拉动画、键盘操作及远程搜索状态。
- `Switch` 增加语义色和自定义颜色；`InputNumber` 支持字符串步长；`InputOTP` 完善长度边界、主题和输入行为。

### 复杂组件增强

- `DatePicker` 完善范围值及 `startDate`、`endDate` 双向绑定、日期与时间面板、键盘交互、弹层动画和外部值同步。
- `Table` 完善虚拟滚动、树形展开、固定列、斑马纹、列显隐、横向最小宽度和加载状态；加载空数据时不再同时展示 Empty。
- `Tree`、`TreeSelect` 优化虚拟列表、过滤、展开动画、键盘操作和浮层重新定位。
- `Drawer` 修复 target 指向元素时仍挂载到 body 的问题，并统一目标容器定位恢复、滚动锁定和子弹层关闭行为。
- `Modal`、`Drawer` 与其他 Popup 建立统一宿主管理，父级关闭或按 Esc 时会同步关闭 Teleport 到 body 的子弹层。
- `Skeleton` 重构为 flex 布局，新增 `titleWidth`，统一延迟显示并避免 loading 快速切换闪烁，同时完善 reduced-motion 与无障碍状态。
- `QRCode` 完善状态遮罩、刷新键盘操作、Logo 绘制、主题色解析和下载能力。

### 交互、样式与文档

- 统一组件尺寸、主题、形状、禁用态、清空按钮、标签、遮罩和弹层动画，修复暗色模式及多处首次展开闪现问题。
- 统一公共动画并移除组件样式中的 `transition: all`，减少无关属性动画和布局抖动。
- 修复 Layout.Sider 宽度与折叠动画、Steps 对齐、Anchor 固定定位、Breadcrumb 分隔符更新、Dropdown 右键菜单定位等问题。
- `Row` 使用原生 `row-gap`、`column-gap` 替代负 margin 与 Col padding，并在计算栅格宽度、偏移及推拉位置时正确扣除间距。
- 修复 `Upload` 选择文件夹时只处理一个文件的问题；目录上传现在自动启用多文件选择并处理目录内全部文件。
- 统一 Vue 事件声明与参数校验，清理无效的 `onXxx` Props、调试日志和重复文档表格。
- 扩充中英文 API、功能 Demo、类型声明、Vetur/Web Types 和 AI 元数据；MCP 使用校验改为基于 Vue AST；加强 API 文档、包导出、AI 资源及评测的 CI 校验。

## 5.8.0

`2026-8-24`

### 新增组件

- 新增 `Calendar` 日历组件，支持月份切换、日期选择、日程数据、自定义日期单元格与事件内容，并接入全局多语言配置。
- 新增 `Kanban` 看板组件，支持多列任务展示、拖拽移动、自定义列与任务内容，以及 `fill`、`outline` 两种外观。
- 新增 `ListPanel` 列表面板组件，为后台列表、筛选入口和导航条目提供统一的尺寸、主题与形状能力。
- 新增 `PageHeader` 页头组件，统一页面标题、描述、返回区域及扩展操作的布局。
- 新增 `TableColumnSetting` 表格列设置组件，支持列显隐、关键列锁定、重置和自定义触发器。

### 功能增强

- `Table` 新增 `hiddenColumnKeys`，支持普通列及分组列动态显隐；重新定义 `scroll.x` 为内容最小宽度，表格较宽时自动铺满容器，避免右侧留白。
- `FeatureCard` 新增 `size`、`direction`、`clickable`、`disabled`、`color` 和 `iconBackground`，并补充键盘交互及更多内容插槽。
- `Button` 完善 `plain` 主题及语义色、悬停、按下和禁用状态表现。
- `Layout.Sider` 固定折叠前后的 flex 宽度约束，改善侧栏切换时的布局挤压和宽度异常。
- `StatCard` 在 Grid 中自动撑满可用高度，部分卡片缺少趋势数据时仍能保持等高。
- AI 组件元数据与 JSON Schema 新增插槽信息，补充本版本组件的 API、示例及中英文描述。

### Bug 修复与体验优化

- 修复 `Menu` 横向模式中普通菜单与子菜单基线不一致，以及折叠切换时子菜单从页面左上角闪现的问题。
- 修复 `Menu` 刷新或路由恢复后多个父级菜单同时呈现选中指示的问题。
- 修复 `Space` 仅包含一个子元素时仍附加首尾组合样式的问题。
- 优化 `Kanban` 列与任务之间的间距、空状态和主题层级表现。
- KUI Vue Pro 1.0 发布

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
