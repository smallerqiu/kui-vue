## 更新日志


### 2.3.5
 `2019-10-17 `

- 👏 优化 `Modal` 关闭动画
- 🐞 修复 `Select` 组件表单验证的问题
- 💪 完善 `Table ` `row-click` 冒泡不执行的问题


### 2.3.4
 `2019-10-9 `

- 👏 重写了 `Menu` ， `MenuItem` 一系列组件，新增了二级菜单
- 👏 重写了 `Badge` 组件，修复了一些显示问题
- 👏 重写了 `Tab` 组件，修复了在Modal中显示不完整的问题
- 👏 优化了 `Tooltip` 等组件，加入了浅色显示
- 🐞 修正 `Input` 组件文字大小不统一的问题
- 👏 优化 `button` 组件组合使用的颜色问题
- 🐞 表单 `Form` 组件 👏 优化，错误拼写更正
- 👏 `Modal` 组件  新增了 `mask-closable` 属性，点遮罩阻止关闭， 默认确定按钮点击不再关闭窗体⚠️

### 2.2.9
`2019-8-26`

- 组件库整体 优化，组件按需加载体积更小
- ⬆️ 图标库升级到5.6.10版本
- 🐞 修复 `Form` 组件特殊情况的验证问题
- 🌟 `Table` 新增 `Loading` 模式
- 🌟 `ImagePreview` 组件新增全局显示模式
- 🌟 `Switch` 组件新增 `mini` 模式
- 🌟 新增抽屉 `Drawer` 组件，[#体验](https://k-ui.cn/components/drawer)
- 👏 `Modal`
  - 👏 优化展示隐藏动画 [#体验](https://k-ui.cn/components/modal)
  - 🌟 删除 `toast` 模式，新增提示框、 `confrim` 模式
  - 🌟 新增 `info，success，warning，error，show` 等全局模式
  - 🌟 新增异步回调
- `Input`
  - 🐞 修复 `@input` 事件调用两次的问题
  - 🌟 新增大尺寸模式
  - 👏 优化图标左右位置显示
- `Button`
  - 🌟 新增大尺寸模式
  - 🌟 新增图标位置显示，左右可控
  - 🌟 新增按钮 `loading` 模式

### 2.2.7
 `2019-7-23 `

- 统一表单组件大小
- 🐞 修复 `Radio，Checkbox` 等组件的 `disabled` 属性动态属性问题
- 💪 全面修复 完善表单验证组件如下:
  -  `Input ` 组件，数字类型和最大值最小值验证
  -  `Input ` 清除之后的验证
  -  `Chebox` 单独使用和组合使用的验证
  -  `Radio` 单独使用和组合使用的验证

### 2.2.2
 `2019-6-13 `

为了移动端更好的体验，默认取消全局定位，本次改动受影响的组件 `ColorPicker，DatePicker，Poptip，Select，Tooltip，TreeSelect `，如果发现组件下拉部分被遮挡，请给设置组件 `transfer='true' `
文档代码展示模块新增了复制代码和放大显示
- 🌟 新增了 `Dropdown` 组件
- 🌟  `Modal` 组件新增宽度支持百分比 `width="80%"` 显示， 优化关闭按钮显示
- 🌟  `Poptip` 组件新增了暗黑模式，默认宽度由 `150px` 改为 `200px`
- 👏 优化 `ToolTip` 显示隐藏的问题
🐞 修复 `DatePicker` 在IE，Safari等浏览器下无法设置时间的问题。
- 👏 优化 `Notice，Message` 组件显示隐藏动画展示的问题
- 👏 优化 `Select，DatePikcer` 组件下拉展示的问题
🐞 修复 `Poptip `内容或标题过长展示的问题


### 2.1.8
 `2019-5-22 `

- 🌟  `Table` 组件新增可编辑模式
- 🐞 修复 `Page` 组件，当 `Total` 改变时 `page` 重置的问题
- 🌟 新增 `ImagePreview` 组件
- 🌟  `Modal` 组件，新增一些属性，可以最大化，居中显示，和自定义显示动画
- 👏 优化 `Modal` 组件拖动
- 🐞 修复 `Checkbox，Radio` 组件动态赋值的问题
- 🐞 修复 `Input` 组件 `type` 为 `number` 时表单验证不通过的问题
- 🐞 修复 `loading` 组件显示异常的问题
- 🐞 修复 `Radio` 组件无法选中的问题
- 🐞 修复 `Select` 组件在表单中值改变后的验证问题
- 🐞 修复 `DatePicker` 组件赋值错误导致显示异常的问题
- 🐞 修复 `DatePicker` 表单验证的问题
- 🌟  `DatePicker` 支持时间戳格式
- ⬆️ `Icon` 库升级到4.5.6

### 2.0.3
 `2019-1-27 `

- 🐞 修复 `Poptip，Tooltip` 显示坐标错误的问题，非常感谢用户 `@tiantian8144` 提出问题
- 🐞 修复一些组件在 `box-sizing: border-box;` 模式下展示怪异的问题
- 💪 完善 `DatePicker` 组件的问题，非常感谢用户 `@醒` 提出问题
- 👏 优化 `Table` 组件，选中表格内容
- 🐞 修复 `Menu` 组件展开折叠和 `accordion` 不生效的问题，非常感谢用户 `@^_^¦¦¦` 提出问题
- 🐞 修复 `Checkbox` 组件动态赋值不触发 `change` 事件的问题，非常感谢用户 `@^_^¦¦¦` 提出问题
- 💪 完善文档目录结构


### 1.9.7
 `2018-9-29 `

- 👏 优化webpack的编译，组件体积更小
- 🌟 新增了对SSR服务端渲染的支持（for Nuxt），可以更愉快的玩耍了😊
- 🌟  `Table` 组件新增排序，和 `rowclick` 行点击事件
- 🌟  `Upload` 组件新增`max-file-size`，和`file-extension` 属性分别控制上传大小和上传扩展名

### 1.9.0
 `2018-8-8 `

- 👏 重新设计了logo，组件风格统一了圆角4px
- ⬆️ `Icon `库升级到4.3.0，使用更加规范，有效区分了ios和安卓粗细线条
- 🌟  `Input` 新增 `icon-align` 属性控制图标显示位置
- 🐞 修复 `Select` 组件几处问题
- 🐞 修复 `Menu` 组件初始化的问题，新增 `open-name` 属性，可以默认展开子菜单
- 🌟  `page` 组件新增了一些属性控制辅助显示
- 🌟  `Tabs` 新增 `animated` 属性控制切换动画



### 1.8.8
 `2018-7-13 `

- 💪 完善 `Table `文字处理 
- 💪 完善 `Menu ` 在特定情况下显示不全的问题
- 🌟  `Table` 组件新增 `text-max-length` 属性，统一处理文字限制
- 🌟  `Upload` 组件新增 `beforeUpload `， `afterUpload `事件
- 🐞 修复 `DatePicker` 组件特定情况下换行的问题
- 🐞 修复 `Page` 组件打印错误的问题
- 🐞 修复 `Table` 组件数据为空时全选的问题
- 🐞 修复下拉 `transfer` 多组件干扰的问题
- 🌟 组件内部调用隔离，用于兼容第三方UI组件库 

### 1.8.0
 `2018-7-6 `

- 👏 KUI for React1.0 发布了
- 👏 重写了部分组件， 优化和修复一些问题
- 🐞 修复 `poptip` 等一系列组件特定情况下无法销毁的问题
- 🐞 修复 `Table `全选反选的问题
- 🌟 新增布局组件 `Layout` 等一些列组件和子组件
- 🐞 修复 `transfer` 钩子无法销毁的问题
- 🐞 修复 `Select` 无法赋值，和搜索的问题
- 🐞 修复 `TreeSelect`：`lable` 无法更改的问题
- 🌟  `Table` 组件新增表头固定
- 🐞 修复 `Tooltip` 组件显示隐藏的问题
- 👏 优化 `transfer `性能问题


### 1.7.7
 `2018-6-12 `

- 🐞 修复 `Tree，TreeSelect` 异步加载的问题
- 🌟  `Tooltip` 组件新增 `breaked` 属性，文字过长强制换行
- 🌟  `Table` 组件新增 `overflow，tooltip` 属性
- 🌟 新增 `TreeSelect` 组件
- 👏 优化一些细节，规范一些组件名称和函数定义
- 🌟 修复文档部分示例展示错误
- ⬆️打包编译升级 `webpack4`


### 1.7.5
 `2018-5-24 `

- 👏 优化 `Poptip` 等一些列组件的定位卡顿问题
- 👏 优化 `Menu `手风琴模式的展示卡顿问题
- 🐞 修复IE9+ `Tree` 组件选中的问题
- 👏 优化 `datePicker `更加友好展示
- 🐞 修复 `Tabs `子集 删除宽度错误的问题
- 👏 优化一些其他的1像素的问题

### 1.7.0
`2018-5-10 `

- 🐞 修复 `Select `， `dataPicker ` `colorPicker` 等组件在Modal组件内时，下拉位置偏移的问题
- 🐞 修复下拉组件在浏览器的一些兼容性问题
- 🐞 修复IE9+浏览器中的花式问题
- 👏 重写了 `Page` 组件，保持队形
- 🌟 新增 `Tabs` ， `TabPane` 组件
- 👏 优化 `Modal` ， `Select` 组件展示1像素的问题


### 1.6.8
`2018-5-8 `

- 🐞  修复 `Form` 验证的问题
- 🐞  修复 `Select` 选中的问题
- 🐞  修复 `Modal` 图标展示的问题
- 💪 完善 `tree ` 组件选中的问题
- 🐞 修复一部分组件 `mini` 模式怪异展示
- 💪 完善 `Modal` 显示滚动条的问题
- 🌟  `checkbox` 组件新增 `indeterminate `，协助全选展示
- 🐞 修复Select无法选中的问题，修复poptip confirm模式怪异问题
- 🐞 修复表单自定义类型验证
- 🌟 新增 `Carousel `， `Collapse `， `Tree `， `Steps` 等组件
- 👏 优化表单验证 双向排列验证提示


### 1.6.1
 `2018-4-25 `

- 🌟 新增 `Tooltip `， `Tag `， `Breadcrumb `， `BackTop `， `Affix `， `Card` 等组件
- 🐞 修复 `RadioGroup` 无法选中的问题
- 🐞 修复 `Select` 无法赋值的问题
- 💪 完善 `Poptip` 子元素有 `margin` 时无法对齐的问题
- 💪 完善表单文档

### 1.6
 `2018-4-22 `

- 🚩为了有效区分和名称，框架更名为 `kui-vue `
统一组件的事件回调
- 💪 重写了 `Checkbox` ， `Radio`， `Select`， `Menu` 等一系列组件
- 💪 完成了 `Form `表单验证 [#体验](https://k-ui.cn/components/form)
- 💪 完善文档，分离代码示例和模版
- 🌟 新增 `Menu`， `MenuGroup`， `MenuItem`， `SubMenu` 组件 [#体验](https://k-ui.cn/components/menu)
- 👏 优化了文档的可读性
- 👏 优化 `Select` 组件，可清空状态
- 👏 优化 `datePicker` 在safari下展示怪异模式
- 🐞 修复 `Page` 组件跳转翻页的问题以及按钮字符换行的问题
- 👏 优化 `Loading` 组件展示半透明模式

### 1.4.9
`2018-3-20 `

- 🐞 修复 `colorPicker` 组件，当页面滚动时找不到对象的错误
- 👏 优化了文档页面首次载入过慢的问题 [#解决方案](https://www.chuchur.com/article/vue-code-optimization)
- 🌟 新增 `Loading` 组件 [#体验](https://k-ui.cn/components/loading) 
- 🌟 新增 `Badge` 组件  [#体验](https://k-ui.cn/components/badge) 
- 👏 优化文档，加入了代码展示部分 展开折叠
- 🐞 修复了文档 `Table` 部分，日期下拉导致出现滚动条，部分被隐藏

### 1.4.6 
`2018-1-31`
 
- 👏 加入了全局的 `document` `click` ，`scroll` 指令 优化显示一系列组件的下拉显示将更加人性化
- 🐞 修复了 `DatePicker` 组件层级显示问题
- 👏 优化了 `Page` 组件在 `mini` 模式显示的问题

### 1.4.5 
`2018-1-29`
 
- 🐞 修复 `Table` 组件  `bordered` 显示问题
- 👏 优化 `Table` 组件 无数据时文字显示问题，优化表格表头字体大小
- 🌟 新增 `Table` 组件  `mini` 显示模式 [#体验](https://k-ui.cn/components/table) 
- 👏 优化 `Select` ， `DataPicker` 等组件 `mini` 模式  `icon` 显示问题
- 👏 优化 `Select`， `DataPicker` ， `colorPicker` 等组件点击隐藏的问题
- 🌟 新增 `Input` 组件可以设置右侧图标  [#体验](https://k-ui.cn/components/input)
- 🌟 新增 `Button` 组件可以设置图标 [#体验](https://k-ui.cn/components/button) 
- 🌟 新增 `Poptip` 组件 [#体验](https://k-ui.cn/components/poptip) 
- 🐞  `DatePicker `， `colorPicker `， `Select` 等下拉组件新增 `transifer` 属性，下拉组件可以append到body尾部，解决了父级overflow遮挡的问题 [#体验](https://k-ui.cn/components/table)


### 1.4.3 
`2018-1-22`
 
修复多个下拉组件显示隐藏的问题
- 🐞 修复 `Modal` 组件冒泡显示移除的问题
- 🐞 修复 `Message` 组件显示隐藏警告提示的问题
- 🌟 新增 `Modal` `Toast` 模式，优化动画流畅性，加入点击 `Mask`，和 `ESC`键关闭弹框。 [#体验](https://k-ui.cn/components/modal)
- 🐞 解决 `Message`， `Notice` 组件动画的流畅性。 [#体验Msessage](https://k-ui.cn/components/message)，[#体验Notice](https://k-ui.cn/components/notice)，[#解决方案](https://www.chuchur.com/article/vue-v-for-transition)


### 1.4 
`2018-1-19`
 
- 🐞 修复 `DataPicker` 时间选择完整性
- 💪 完善文档多处文字错误
- 🌟 新增 `Upload` 组件。 [#解决方案](https://www.chuchur.com/article/ajax-upload-download)
- 🌟 新增 `Select` ， `DatePicker` ， `mini` 属性，可以使用小尺寸
- 🌟 新增 `DatePicker` `width` 属性，可以自定义宽度

### 1.3.7 
`2018-1-17`
 
- 🐞 修复 `Select` 组件无法赋值的问题
- 🐞 修复 `Input` 组件默认参数定义出错的问题
- 清理 `Table` 组件打印字符
- 💪 完善文档说明
- 🌟 新增 `Alert` 组件
- 🌟 新增 `Message` 组件
- 🌟 新增 `Notice` 组件
- 🌟 `Table` 组件新增文字对其属性
- 🌟 `Modal` 组件新增可拖动属性

### 1.3.5 
`2018-1-10 `
 
- 🐞 修复 `Select` 组件数据动态改变后无法选中的问题
- 🐞 修复 `Option` 组件 `label` 赋值的问题
- 🌟 新增 `Option` 组件
- 🐞 修改 `Select` 组件数据结构
- 🐞 修复文档多处错误，完善文档数据结构
- 🐞 修复 `render` 模式下无法渲染的问题
- 🐞 修复表格组件冲突问题
- 🌟 新增 `icon` 组件
- 🌟 新增 `TimeLine`

### 1.2.8 
`2018-1-3 `
 
- 🐞 修复部分组件在禁用状态下显示异常的问题
- 🌟 新增 `Form` 组件
- 🐞 修复 `colorPicker` 组件内存泄漏问题
- 🌟 部分组件加入禁用状态
- 💪 完善文档
- 🐞 修复下拉组件绑定数据的问题
- 💪 完善表单问题
- 🌟 新增 `color` 组件

### 1.2 
`2017-12-19`
- 🌟 新增 `Switch` 组件
- 💪 完善 `Select` 组件
- 💪 完善 `Page` 分页组件
- 💪 完善 `Input` 组件 
- 🐞 修复在ie下表格无法选中的问题

### 1.1 
`2017-12-18` 
- 🌟 新增 `Radio` 组件
- 🌟 新增 `Checkbox` 组件
- 🐞 修复 `Table` 组件更新数据更新问题
- 🌟 新增 `Select` 组件
- 💪 完善 `Modal` 回调问题
- 🌟 日期控件新增回调
- 🌟 新增 `Row`， `Col`组件
- 🌟 完成 `Table` ， `Page`， `Button`， `DatePicker` 等组件

###  1.0.0 
`2017-12-10`

👏 🚩着手开发

