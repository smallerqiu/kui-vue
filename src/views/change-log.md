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

## 6.3.0

`2026-10-12`

- `Menu` 补齐方向键 / Enter / Esc 键盘导航，`Escape` 只收回当前一层。
- `Menu` 弹出浮层通过 `aria-controls` / `aria-labelledby` 与触发项关联，`horizontal` 根节点声明 `role="menubar"`，与 React 版语义一致。
- `Menu` 折叠逻辑按 `mode` 区分，切换 `mode` 不再改写 `openKeys`，也不再额外触发 `openChange`；溢出测量只在 `horizontal` 下进行。
- `Menu` 修复纵向子菜单展开时外层先开、内容后伸缩的错位。
- **行为变更**：`Menu` 子菜单面板收起后即从页面中移除（悬浮面板与 `inline` 子面板都是如此），再次展开时重新渲染，与 React 版一致。之前展开过的面板会一直留在页面里，子菜单较多时是一份无谓的常驻开销。哪些面板算展开仍由 `openKeys` 决定，不受这条影响。
- `Table` 与 React 版对齐：修复分组表头与固定列、`scroll.y`、`bordered` 同时使用时表头边框丢失、吸顶行间露缝、圆角不饱满和右下角空白块的问题，固定列宽度与 sticky 偏移基准一致。
- `Table` 分组表头改为按列分栏，补充 `aria-labelledby` 关联。
- `Table` `rowKey` 取不到值时使用稳定兜底 key；`dataIndex` 支持 `a.b.c` 点路径嵌套取值。
- `Table` 修复 `expandAllRows` 在异步数据下重复展开父行、虚拟滚动窗口起点越界的问题。
- `Table` 空数据、筛选等内置文案接入语言包。
- 统一库内滚动条样式，横向与纵向粗细一致；修复暗色主题下 hover 滑块与背景融为一体。
- `Ripple` 修复 Chrome 155 中包裹内容点击无响应且不产生涟漪的问题。
- `Ripple` 适配 Chrome 156 的 `content="drawable"`，Edge 与更早的 Chromium 保持原有路径。
- `Ripple` 降级波纹叠层改为波峰提亮、波谷压暗，浅色与深色页面都清晰可见。
- `FlameWrap` 修复 Chrome 155 中包裹内容点击无响应的问题，并适配 Chrome 156 的 `content="drawable"`。
- `StatCard` 新增 `prefix` / `suffix` 属性，与 React 版对齐；此前只有同名插槽可用，传属性会落到根节点并报 DOM 属性错误。
- `StatCard` 的 `title` / `desc` / `trend` 与 `StatNumber` 的 `prefix` / `suffix` 在传 `false` 或空字符串时不再渲染占位的空节点，`0` 仍按内容显示。
- `StatCard` 修复 `items[].key` 与数组下标撞 key、数字动画状态串到别的数据项的问题。
- `StatNumber` 的 `countup` 模式同样遵循系统的“减少动态效果”偏好，命中时直接显示目标值。
- `Table` 未设 `width` 的列按 150 作为宽度基准，整表按各列宽度合计设最小宽度；容器变窄时改为横向滚动，不再把列压瘪、让表头文字竖排换行。
- `Table` 修复窗口宽度卡在临界值时，固定列阴影和横向滚动条来回闪现的问题：只有真的还能往那一侧滚动，才会出现阴影。
- `Tree` 异步 `loadData` 对同一节点只请求一次；虚拟滚动修复行高不对、hover 与选中背景不满行高的问题，与 React 版一致。
- `Tree` 缺 `key` 的节点改用与 React 同规则的树路径兜底 key；此前按可见下标兜底，折叠或过滤时同一个节点的键会漂移。
- `Tree` 拖到自身后代节点时不再提示可放置、松手却无效。
- `Tree` 的 `select` 事件补上第二个参数（当前选中的 key 列表），与 React 版签名一致。
- `Tree` 展开箭头按钮不再参与 Tab（`tabIndex={-1}`），保住整棵树的 roving tabindex，方向键不会把焦点丢在箭头上。
- `DropdownButton` 修复右侧“三点”按钮点不开菜单：点击、右键与方向键都能驱动开合，触发按钮带 `aria-haspopup="menu"` 和 `aria-expanded`，并可用 `trigger` 指定 `hover` / `click` / `contextmenu`。
- 弹层组件开放 `destroyOnClose`（`Select`、`Cascader`、`TreeSelect`、`AutoComplete`、`Mentions`、`DatePicker`、`ColorPicker`、`Dropdown`、`DropdownButton`、`Tooltip`、`Poptip`、`Popconfirm`），默认 `true`，即关闭后销毁面板内容。之前这个属性没有开放、无法覆盖；设为 `false` 就能留住面板里没提交完的表单，代价是每个打开过的实例留一份隐藏内容。
- **行为变更**：上述弹层此前在关闭后会留一份 `display: none` 的面板节点（只有 `Cascader` 会销毁），现在与 React 版一致，默认在退场动画结束后销毁。面板里放了没提交完的表单时请显式写 `:destroy-on-close="false"`；反过来，页面里有大量 `Tooltip` 时不再堆积隐藏 DOM。
- `Modal` / `Drawer` 叠着开时，`Escape` 只关最上面那一层；下拉菜单开在窗口之上时，第一下 `Escape` 先收下拉，不会把整个窗口一起关掉。`escKey` 在按键时才读取，运行中改这个属性立刻生效。
- `Modal` / `Drawer` 支持 `destroyOnClose`（默认 `true`）：关闭后销毁面板内容，下次打开是干净的。设为 `false` 可以留住填了一半的表单，代价是页面里留一份隐藏内容。常开面板（`panelOnly`）不受这个开关影响。
- 确认弹窗的 `onOk` 返回 Promise 时，关闭时机交给组件：保存成功才关窗，失败只结束按钮的 loading 状态并把窗口留着，用户改完可以直接重试。之前失败会让按钮一直转圈。
- 关闭动画还没播完就重新打开时，窗口不会再过一会儿自己消失；组件销毁时把页面滚动和遮罩层级一并归还。
- `Modal` 修复 `centered` 设置了却不居中、`width` 传字符串时单位丢失、没传 `title` 却多出一条空标题栏的问题。
- `Modal` 新增 `title` 插槽，标题区可以放图标、说明等富内容；插槽没渲染出内容时回落到 `title` 属性，两者都不给就不显示标题栏。
- 命令式弹窗（`modal.confirm()` 等）的 `title` / `content` 不再限字符串、可以省略，弹窗实例统一提供 `show` / `hide` / `destroy`，并沿用调用处的全局组件、指令与 `ConfigProvider` 设置。
- `Modal` 内容区贴边的控件（如 `Input`）聚焦时，那圈焦点高亮不再被裁掉一半；内容宽度、位置与页脚间距都没有变化。
- `Tooltip` 气泡和箭头指示器补回 1px 描边，深色背景上也能看清边界。
- `Table` 新增 `ellipsis`：单元格内容超出列宽时收成省略号，行为与 React 版一致。写在列上只管那一列，写在 `Table` 上一次管住所有列（插槽或 `render` 出来的内容同样管），某一列想显示完整内容就在列上写 `ellipsis: false` 单独关掉。默认只截一行，`rows` 可以截到多行；悬停提示默认打开，且只在格子真的被截断时才出现，`tooltip` 能换成指定内容或设 `false` 关掉。
- `Modal` / `Drawer` 统一了关闭时的回调顺序：先 `update:modelValue` 与 `openChange` 把开合状态结掉，再 `onCancel` / `onClose` 说这次是哪条通道关的。在这两个回调里读到的开合值已经是结算后的，不用再自己补一次关闭。
- `Drawer` 的 `title` 不再有默认的 "Title"，不写就没有标题文本。标题栏仍会给右上角关闭按钮留着位置，只有 `closable: false` 且没有标题时才整条不显示。
- `Drawer` 新增 `title` 插槽，`title` 属性也可以传节点，用来放图标、说明这类富内容。
- `Modal` 的 `title` 属性除字符串之外还可以传节点，和已有的 `title` 插槽一样能放富内容。
- **行为变更**：`Modal` / `Drawer` 打开时不再往外发通知。之前组件挂载时已经是打开状态、或把 `modelValue` 翻成 true，都会额外收到一次 `update:modelValue` 和 `openChange`，等于把自己刚写的值又喂回去一遍；现在只有关闭才通知，与 React 版一致。原先靠 `openChange` 收到 true 来做初始化的，改成监听自己那个值就行，时机是一样的。
- `DatePicker` 修复区间只选了一半时的收尾：按 `Esc` 关掉面板不再把半截日期留在输入框里，和点面板外面一样退回上一次选好的区间。
- `DatePicker` 修复只在结束框里手输了一个日期时的错觉：输入框显示着日期、`change` 却没收到值。现在首尾凑不齐就不算选上，关掉面板时一并清掉。
- `DatePicker` 修复 `mode="time"` 时 `disabledTime` 不生效：那时手输和预设都能提交本该禁用的时间。
- `DatePicker` 修复面板开着时外部改了值、输入框文本却停在旧值：现在文本跟着新值走，只有正在敲字的那个框不动。
- `DatePicker` 的 `opened` 支持 `v-model:opened`：父级收起面板同样会退回上一次选好的区间，组件自己发出去的开合也不会再回灌一遍。
- `DatePicker` 重复点已经选中的日期、重复提交同一个值，不再多触发一次 `change`。
- `DatePicker` 修复区间只选了一头、就在时间列上挑时间：那个时间不再被当成结果发给 `change`，而是留在输入框里，等另一头补齐。
- `DatePicker` 修复年 / 月面板不认 `disabledDate`：一整年或一整月里一天都选不出来时，那一格置灰、点不进去，`Tab` 也会跳过它；格里还能选出一天的，照常能点。
- `DatePicker` 年 / 月面板的高亮改为跟着当前值走：翻年、翻月只改浏览位置，选中样式不再跑到正看着的那一格上。
- `DatePicker` 年 / 月格子可以用键盘选了：`Tab` 到格子按 `Enter` 或空格即可，头部的年份、月份标签同样能用键盘切面板。
- `DatePicker` 修复 `panelOnly` 常驻面板在 `mode="year"` / `mode="month"` 下仍显示日期格的问题：面板档位现在跟着 `mode` 起，与 React 版一致。
- **不兼容变更**：组件内置文案的默认语言从简体中文改为英语。没有挂 `ConfigProvider` 时，`DatePicker`、`Select`、`Table`、`Modal`、`Page` 等组件的内置文案现在显示英文；需要简体中文请在应用根部挂 `ConfigProvider` 并传入 `locale`（`import zhCN from "kui-vue/locale/zh-CN"`）。
- **不兼容变更**：`theme` 不再接受 `default`。想要组件自己的默认外观就不要写 `theme`，`ConfigProvider` 也不再传这个值；可选的是 `fill` / `outline` / `plain` / `solid` / `dashed` / `underlined` 六档。此前 `Button` 上写 `theme="default"` 会被认成 `type="default"` 的那种外观，让 `type="link"` / `type="text"` 的按钮凭空多出一块底色。
- `DatePicker` 的 `format` 只接受单个格式，与 React 版一致：之前传数组只是拿第一个格式展示，现在不再接受数组。默认格式按 `mode` 取（`year` 为 `YYYY`、`month` 为 `YYYY-MM`、`time` 为 `HH:mm:ss`、`dateTime` / `dateTimeRange` 为 `YYYY-MM-DD HH:mm:ss`），文档里原先统一写成 `YYYY-MM-DD`。
- `DatePicker` / `Select` / `Cascader` / `TreeSelect` 的 `theme="plain"` 与 `:bordered="false"` 各管各的：`plain` 是无边框也没有底色，`:bordered="false"` 只去掉边框，两者可以同时使用；控件禁用时 `plain` 照样显示禁用态。
- `Select` / `Cascader` / `TreeSelect` 去掉边框后，鼠标悬停不再突然描出一圈主色边框和光晕。
- `Select` / `Cascader` / `TreeSelect` / `DatePicker` 的 `theme` 补齐 `outline` / `solid` / `dashed` / `underlined` 四档：描边框、主色实底（文字与图标跟着反白）、虚线描边、只留一条下划线（聚焦时下划线变主色）。
- `Cascader` 用 `theme="fill"` 时，鼠标悬停不再突然描出一圈边框。
- `DatePicker` 去掉边框（`:bordered="false"` 或 `theme="plain"`）后聚焦不再出现一圈焦点环，与 `Select` 系列一致。
- `Input` / `Textarea` / `InputNumber` 的 `theme` 补齐 `outline` / `solid` / `dashed` / `underlined` 四档：描边框、主色实底（输入的文字、占位提示与前后缀图标一起反白）、虚线描边、只留一条下划线（悬停、聚焦时变主色）。
- `Input` / `Textarea` / `InputNumber` 的 `theme="plain"` 悬停时不再突然描出一圈边框，禁用时仍显示禁用态；`plain` 与 `underlined` 聚焦时不再出现焦点环，与 `Select` 系列一致。
- `InputTag` / `InputOTP` 的 `theme` 补齐 `outline` / `solid` / `dashed` / `underlined` 四档：描边框、主色实底、虚线描边、只留一条下划线（悬停、聚焦时下划线变主色）。
- `InputTag` 用 `theme="solid"` 时，已添加的标签、输入的文字、占位提示和清除图标一起反白；`InputOTP` 的每一格都跟着 `theme` 走，实底时格子里的字也反白，禁用时仍显示禁用态。
- `InputTag` / `InputOTP` 的 `theme="plain"` 悬停时不再突然描出一圈边框；`plain` 与 `underlined` 聚焦时不再出现焦点环，与 `Select` 系列一致。
- `ColorPicker` 的 `theme` 补齐 `outline` / `solid` / `dashed` / `underlined` 四档：描边框、主色实底、虚线描边、只留一条下划线（悬停、打开面板时下划线变主色）。
- `ColorPicker` 用 `theme="solid"` 时，色块旁边的颜色文字一起反白，悬停、打开面板时底色加深；色块本身仍显示当前颜色。
- `ColorPicker` 用 `theme="fill"` 或 `theme="plain"` 且禁用时，仍显示禁用态的背景与描边。
- `Tag` 的 `theme` 补齐 `outline` / `solid` / `dashed` 三档：描边框、主色实底（文字和关闭图标一起反白）、虚线描边；不写 `theme` 就是标签自己的 `fill` 外观，`theme="underlined"` 对它没有意义，同样按 `fill` 呈现。
- `Tag` 设置了 `color` 时以颜色为准：预设色值和自定义色值都保留自己的边框与文字颜色，不再被 `theme` 的底色盖掉。此前带预设色值的标签会被默认外观铺上一层灰底，色值只剩文字还在。
- `Select` / `TreeSelect` 用 `theme="solid"` 时，框里已选的标签改为半透明反白底，不再和控件一样填成主色；用 `theme="dashed"` 时标签仍是实线描边，不会跟控件一起变虚线。`InputTag` 早就是这个做法，现在三处一致。
- `Checkbox` / `Radio` 的方框和圆点只有 `fill`（浅底填充）与 `outline`（描边）两种外观。`outline` 现在真的会把边框描出来，颜色可以和其它描边控件一样用 `--kui-theme-outline-border` 改；`fill` 的边框色也能用 `--kui-theme-fill-border` 覆盖，此前这两个变量在复选框、单选框上都不生效。
- `Checkbox` / `Radio` 不写 `theme` 就是浅底的 `fill`；此前写了 `default` 反而会落到描边的基础外观，等于换了个 `theme`。`solid` / `plain` / `dashed` / `underlined` 对一个不能输入的方框或圆点没有意义，同样按 `fill` 呈现。
- `CheckboxGroup` / `RadioGroup` 的 `theme` 会传到组内每一个方框和圆点上，从 `ConfigProvider` 继承的 `theme` 走同一条路；`type="button"` 的按钮组只有 `fill` 一档改用一条分隔线拼接按钮，其余档位保持按钮自身相邻边框的排布。此前按钮组的这条布局只认写在组件上的 `theme`，`ConfigProvider theme="fill"` 下按钮填了色却仍留着相邻边框的重排间距，现在继承的 `fill` 同样生效。选中与禁用状态始终优先于 `theme`。

## 6.2.2

`2026-09-26`

- `Select` 修复远程搜索结果为空、加载中或不包含已选项时，已选标签消失或名称变为原始值的问题；单选远程搜索再次聚焦时，已选文本变淡，与本地搜索保持一致。

## 6.2.1

`2026-09-25`

- `Carousel` 新增鼠标拖动和触屏滑动，支持横向、纵向及松手归位，通过 `swipeable` 统一控制；修复动态内容和连续切换时的显示与状态同步问题。
- `Page` 新增容器自适应布局：空间不足时减少页码并自动切换简洁模式，保留每页条数选择器，变宽后自动恢复；可通过 `responsive` 关闭。
- `Input` / `InputNumber` 优化内部实现，分离样式和控制区域；移除原供内部使用的 `inputType`、`controls` 接口。
- AI 辅助增强：支持命令行查询组件 API、示例和模板，以及源码校验；支持更新项目中的 AI 使用约定。

## 6.2.0

`2026-9-23`

- `Badge` 数字更新时支持滚动动画，数值增大向上、减小向下，支持进位与退位；修正数字垂直对齐。
- `StatNumber` 的 rollup 动画改为逐位判断方向：当前位增大向上、减小向下，未变化的数字保持静止；优化大幅数值变化的过渡，并遵循系统减少动态效果的偏好。
- `StatNumber` 拆分独立文档与示例，展示数字格式化、动画时长和动态更新，不再与 `StatCard` 的卡片示例混排。
- 修复 `Slider` 拖动期间鼠标离开滑块后 Tooltip 提前隐藏的问题。
- 修复浅色主题下 `DatePicker` 选中日期的 hover 对比度，移除 fill 外观控件交互时意外出现的边框。
- 完善局部主题色、圆角、嵌套明暗主题及显式 CSS 变量覆盖，增加浏览器主题回归检查。
- 为使用 model 绑定的组件补充初始 `value`：传入 `modelValue` / `v-model` 时优先使用绑定值，后续修改初始 `value` 不覆盖用户输入。勾选类子项的 `value` 保留选项标识语义，初始选中状态使用 `checked`。
- 修复 `Select` 多选数组原地修改后显示不同步、`Slider` 限制条件变化时重置当前值，以及 `DatePicker` 未完成范围选择后不能恢复最近已确认值的问题。
- 修复干净检出时 Node 工具类型检查依赖尚未生成的包声明文件的问题，并增加不依赖构建产物的回归测试。
- 补充公共 API 与事件文档，完善回调参数说明和使用示例。
- 仓库构建及校验脚本统一为 TypeScript，增加 Node 脚本类型检查；贡献者运行工具链需使用 Node.js 24 或更高版本，发布包继续支持 ESM / CommonJS。
- Alert、Tag 在退出动画结束后移除内容，新增 `afterClose`（React 为 `onAfterClose`）事件，支持在动画结束后更新父级显隐状态或标签列表。
- 统一状态 API：移除 AutoComplete 的 `defaultOpen`、Tour 的 `defaultOpen/defaultCurrent`、Upload 的 `defaultFileList`、Table 的 `defaultExpandedKeys`，改用对应的无 default 前缀属性；Table 的 `defaultExpandAllRows` 改为 `expandAllRows`。状态属性用于初始化及外部变化同步，交互仍可更新内部状态。Tour 新增 `open` / `v-model:open`，保留原有 `v-model`。

### 弹层基础能力

- 新增 `Popup` 基础组件及配套类型，统一触发方式、方位、箭头、挂载容器、外部点击关闭、Esc 关闭和嵌套弹层管理。
- `Dropdown`、`Tooltip`、`Poptip`、`Popconfirm` 及 `Select`、`TreeSelect`、`Cascader`、`AutoComplete`、`Mentions`、`DatePicker`、`ColorPicker` 接入统一弹层基础能力，减少重复定位与事件监听逻辑。
- 完善嵌套弹层点击判定、关闭联动和弹层定位更新，保留选择器各自的筛选、选择及键盘行为。

### 交互、类型与维护

- 完善组件及子项的 disabled / readonly 交互，修复禁用状态仍响应点击、hover、active 或显示错误鼠标指针的问题。
- 调整 `Table` 行 hover 背景与内部操作按钮的对比度，统一普通列和固定列的交互背景。
- 调整 `Tree` directory 模式下节点与复选框的 hover 层次，兼顾浅色和暗色主题；完善 `Cascader` 默认下拉宽度。
- 补全组件 emits、事件监听属性及相关公共类型导出，复用多选标签渲染与弹层公共逻辑。
- 增加弹层、选择器、禁用交互及事件类型的回归测试。

## 6.1.0

`2026-9-19`

- `MenuItem` 新增 `onClick` / `@click` 回调，支持键盘触发；禁用项不再响应点击或跳转链接。
- `Menu` 修复选中与展开状态同步、多级折叠动画及键盘交互问题；折叠后重新展开时恢复子菜单状态，左右弹出子菜单的间距保持一致。
- `Image` / `ImageGroup` 支持在预览层使用自定义插槽；图片拖动实时跟随鼠标，调整缩放滑块后重新归位。
- `Upload` 优化图片墙拖拽排序：拖动时保留卡片边框和圆角，其他图片实时让位；完善取消拖拽和排序事件，修复自定义上传请求同步完成后的清理问题。
- `Switch` 修复按压、松开及切换时滑块位置跳动；禁用、只读状态下不再出现按压变形。
- `DatePicker` 修复手动输入、快捷选择等操作绕过禁用日期和时间限制的问题；完善范围值类型推导、未完成范围的恢复、清空按钮、键盘选择及关闭面板后的焦点状态。
- `Input` 修复前后缀属性与插槽的渲染优先级，避免空内容仍占据前后缀区域。
- `Tree` 修复操作复选框时同时触发行交互的问题，勾选与行点击互不干扰。
- `ColorPicker` 完善 `outline`、`fill`、`plain` 主题及 `round`、`circle`、`square` 形状的样式表现。

### 文档与工程化

- 扩充 AI 组件使用评测与资源一致性校验，改进 Vue 示例的静态校验。
- 分阶段执行构建并限制 Node 子进程内存占用，降低构建峰值内存。
- 完善小尺寸视觉测试夹具，增加菜单交互、上传和图片预览的回归覆盖。

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
- `Menu` 横向菜单在空间不足时将溢出项收纳到子菜单，保留菜单层级与选择入口。
- `AvatarGroup` 完善组合展示能力与示例，优化头像组布局。
- `Table` 支持树形数据展示，可展开、收起子级行。
- `Badge` 新增 `active` 属性并优化动画表现。
- Grid 新增 flow 属性，支持 row dense 自动补位, 修复 Grid 的响应式样式及外部 class/style 不更新问题。
- Row,Col 增加xl,sm 等属性支持响应式。
- Notice 新增grouping属性.相同 grouping ,只弹出一个提示消息.
- `Tooltip`、`Poptip`、`Popconfirm` 完善自定义内容渲染；部分弹层组件支持面板形式展示。
- theme 切换默认优化.
- ColorPicker 面板颜色拖选修复.

### 文档与开发体验

- 在线示例编辑器接入 CodeJar，完善语法高亮及代码编辑体验。
- 扩充主题定制说明与响应式栅格示例，补充组件属性和公共类型说明。

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
