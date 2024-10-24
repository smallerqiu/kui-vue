# 更新日志
![](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square) 

>遇到问题可以先安装 rc 版本

```bash
npm install kui-vue@latest --registry=http://registry.npmjs.org
```
### 4.0

4.0 版本正在构建中，支持Vue3，后续基于Vue2的版本将不再维护。

### 3.4.8
`2024-10-24`
- 修改一些组件在 dark 模式下展现形式

### 3.4.7
`2024-10-22`
- 重写 TreeSelect 组件
- 优化 ColoePicker 细节
- Tree 组件细节,支持多选, 父子联动可控
- Input 扩展细节和可隐藏密码输入
- InputNumber 扩展优化
- 其它一细节优化
  

### 3.4.6 
`2024-09-03`
- 优化细节

### 3.4.5
`2024-08-13`
- 新增 InputGroup 组件,更好的处理多个表单组合
- 新增 Flex 弹性布局组件, 布局组杂场景更加灵活
- 完善 Button 组件, 当type 为link 时 跳转链接
- 增强Space组件细节,增加一些可控属性
- 修复Slider 组件的change事件触发问题
- 修复其它若干细节
  
### 3.4.4
`2024-07-23`
- 修复Drawer细节
- 修复Popconfirm 细节


### 3.4.3
`2024-07-08`
- 修复已知问题

### 3.4.2
`2024-07-06`
- 修复 InputNumber blur 校验问题
- 修复 DatePicker 赋值问题
- 修复 Page 当前页赋值问题
- 修复 Upload 上传失败监听问题
- Image 优化预览和滚轮缩放
- 其他各种细节
  
### 3.4.1
`2024-06-03`
- 暗黑主题调整
- Table组件 优化
  
### 3.4.0
`2024-06-02`
- 重写了大部分基础组件
- 细节优化,体积更小


### 3.3.12
`2024-05-29`
- 优化Menu组件


### 3.3.11
`2024-05-09`
- 细节优化
  
### 3.3.10
`2024-05-06`
- 修复`DatePicker`,change 事件触发问题
- UI 细节调整

### 3.3.9
`2024-04-08`
- 优化`Card`,`Table`组件细节
  
### 3.3.8
`2024-04-04`
- 优化一些细节
- 更新图标

### 3.3.7 
`2024-01-30`
- 重写了DatePicker组件 ,修复各种bug,支持预设范围,支持只选择时间
- Tag 组件可以设置图标
- Page 组件优化
- 其它组件的一些细节优化.
- 表单组件优化

### 3.3.6 
`2024-01-22`
- Input ,Select ,Space 优化细节
- Table 滚动条问题
- Select 异步搜索的问题
- 修复表单验证问题
- Progess 组件进度和状态优先级调整(进度走完了,但是结果失败了)

### 3.3.4
`2023-07-01`
- Slider组件 增加小尺寸
- Table 组件在固定头和列时可用calc(100% - ?px)来控制高度
- Tag 组件新增尺寸可控大小
- Spin 组件细节优化
- 其它细节优化

### 3.3.3
`2023-06-20`
- 修复Upload 组件上传前文件处理的问题
- 修复DatePicker组件禁用日期点选的bug
- Modal , Drawer 等组件默认点蒙层不会关闭
- 优化弹层箭头细节
- DatePicker移除了对`moment` 依赖
- 移除了一些不必要的依赖,体积压缩后为63kb


### 3.3.2
`2022-08-30`
- 修复一系列 bug

### 3.3.1
`2022-08-28`
- Table 组件新增吸顶属性
- Slider 组件增加touch事件，适配移动端
- 调整 Modal 组件细节
- 暗色模式滚动条的适配
- 优化 From 组件细节
- 优化 Menu 组件细节
- 优化 Button 组件细节
- 优化 ColorPicker 组件细节
- Spin 组件增加3个尺寸大小
- 完善 Image 组件下载图片的问题
- 修复 Table 组件一些细节问题
- 修复 Input TextArea 聚焦事件的触发问题
  
### 3.3
`2022-06-20`
- 重写 Table 组件
- 精选和新增 Icon 图标,
- 分离 Icon图标,使用Icon时需要单独引入 
- 完善 Slider
- 修复 InputNumber 问题
- 修复 Progress 问题
- 修复 Grid 问题

### 3.2.11
`2022-5-18`
- 新增 `InputNumber` 组件
- 重写了 `Slider` 组件，替代原有的[input=range]
- 优化 `Space` 组件，默认采用 flex 布局
- 优化 `Icon` 在 SSR下的显示
- 优化 `Input` 禁用时的显示
- 优化 `Upload` ，修复拖拽上传
- 优化 `Menu` 细节
- 优化 `Skeleton` 细节,新增更多可控细节
- 优化 `Tooltip` `PopTip` `Popconfirm` 等组件 , 外观有改动
- 优化 `Checkbox` ,外观有改动
- 优化 `Switch` ,外观有改动
- 优化 `Radio` ,外观有改动 , 修复表单验证问题
- `Notice` `Message` 组件可自定义图标和更多内容
- `Rate` 组件新增可设置图标大小和颜色
- 修复 `Select` 下拉问题 

### 3.2.10
`2022-5-4`
- 新增 `Skeleton` 组件
- 新增 `Descriptions` 组件
- 修复 `Page` 组件翻页bug，新增分组功能
- 优化 `Icon` ，新增一些图标，图标支持Sprite 渲染模式 ，支持自定义线宽
 
`Progress`
- 新增 `strokeHeight` 可设置进度条高度
- 新增 `strokeWidth` 可设置圆形精度条宽度
- 新增 `gapDegree` 可设置dashboard开口大小
- 新增 `strokeLinecap` 可设置线条节点型状
- 新增可自定义子节点

- 修复 `Table` 组件一些细节问题
- `Spin` 组件新增防抖

### 3.2.8
`2022-3-15`
- 修复Select Placeholder问题
- Drawer组件支持百分比显示和修复滚动条问题
- 修复Page翻页问题
- 修复多语言在SSR环境下的问题.

### 3.2.7
`2022-2-13`

- 完善服务端渲染(SSR)的一些问题
- 重写了DatePicker组件,新增一些属性,使其可在其它组件内部展示
- 优化Drawer的一些问题
- 完善Space组件
- `Upload`细节完善
- 多语言支持完善

### 3.2.6
`2022-1-20`

- 增加了多语言支持
- 优化Affix 定位问题
- 优化Input组件细节
- TimerLine组件新增`time`,`extra`属性, 细节更丰富
- 优化Select组件细节
- 优化Page组件在暗黑模式下的呈现问题
- 完善DatePicker,Select,ColorPicker,等下拉组件在位置不足的情况下展示优先级的问题
- ColorPicker 新增shape='circle' 可呈现圆形外观,新增可自定义下拉箭头,完善动态赋值问题

### 3.2.5
`2022-1-12`

- 全新的暗黑主题, 所有组件采用css 变量来控制呈现主题
- 新增 `Upload` 组件
- 重写了Input 组件, 新增 light 主题, circle 属性更为 shape=circle
- Button 新增 light 主题, circle 属性更为 shape=circle
- TextArea 新增 light 主题
- Select 新增 light 主题, 新增shape 属性控制呈现圆角, 新增可自定义下拉箭头, 新增可自定义前缀图标
- DatePicker 新增 light 主题, 新增 shape=circle 控制呈现圆角,新增可自定义下拉箭头
- Menu 系列组件修改部分外观
- CheckGroup 优化一系列事件
- Modal 新增 showClose 属性控制显示关闭按钮 ,可自定义Header和Footer

### 3.2.4
`2021-12-13`

- 新增 `Avatar` 组件
- 新增 `Space` 组件
- 新增 `Slider` 组件
- 修复 `Table` 组件 `row-click` 事件
- 修复 `Affix` 组件在容器内滚动定位不准的bug
 
### 3.2.3
`2021-10-25` 
 - 新增暗黑模式主题
 - Image组件支持触摸
 - Modal等组件展示时滚动条展示细节完善
 - Radio等组件细节完善

### 3.2.2
`2021-09-8` 
 - 修复 Drawer 组件展示问题
 - 新增 Loading 组件
 - 新增 Rate 评分组件
 - 修复 ColorPicker 赋值bug

### 3.2.1
`2021-07-7` 
 - 修复部分组件子组件插槽不可以用的问题
 - 完善Modal 内容的显示
 - 修复Table 排序的显示
 - Table新增单选框
 - 完善Tag标签事件触发机制
 - 完善Tooltip 视图更新显示错位的问题
### 3.2.0
`2021-07-2` 

`Modal`   
 - 属性命名规范化
 - is-max => maximized
 - is-center => centered
 - can-move => draggable

 `Tree`   
 - 新增 `TreeNode` 组件，移除 `rende-content` 函数
 - 新增 `show-line` 属性，控制直线显示
 - 新增 `show-icon` 属性，控制图标显示
 - 新增 `draggable` 属性，是否可以拖拽
 - 新增 `directory` 属性，是否以目录形式展示
 - 新增 `show-extra` 属性，默认是否展示扩展属性
 - 新增 `selectedKeys` 属性，默认选中值
 - 新增 `expandedKeys` 属性，默认展开值
 - 新增 `checkedKeys` 属性，默认勾选值
 - 新增 `dragstart`，`dragend`，`  dragenter`，`dragleave`，`drop`等函数
 

`Select`   
 - 修复值为0，活值为空 时无法选中的问题
 - 优化展开卡顿的问题
 - 新增 `bordered` 属性，控制边框显示
 - 新增 `show-arrow` 属性，控制下拉箭头显示
 - 多选模式可以显示清除图标和下拉箭头
 - 完善动画细节， 完善多选tag节点问题
 - 完善禁用状态聚焦问题

`DatePicker`   
 - 完善禁用状态聚焦问题
 - 新增 `bordered` 属性，控制边框显示

`Form`   
 - 表单使用Grid 布局，使用`labelCol`,`wrapperCol` 代替 `label-width`
 - 增加原生函数：`submit`,`reset` 可以使用 `Button` 形态为 `submit` 和 `reset` 来提交和重置表单
 - 新增`size` 属性，统一控制表单内组件大小
 - 表单验证时，子组件无需 `v-model` 绑定，只指定相对应的`prop` 即可 

`Button`   
 - 属性`buttontype` 更名为 `htmltype` 

 `Checkbox`   
 - 完善文字居中，完善默认选中的问题

 `Radio`   
 - 完善文字居中，完善默认选中的问题

 `Switch`   
 - 完善文字居中，完善默认选中的问题

`Menu`   
 - 修复在特定场景展开延迟的问题 

`Tabs`   
 - 修复子组件变化无法更新的bug   
 - 修复在 `Modal` 组件内的一些问题  

`Tooltip`   
 - 新增多彩标签，完善下拉箭头显示问题 

`Progress`
- 新增小尺寸和自定义宽度

`Input`
- 新增 `suffix` 扩展

完善一些其他细节...

### 3.1.5
`2021-04-5`
   - `Poptip`可从内部关闭
   - `Image`一些优化
   - `Modal`一些细节优化
   
### 3.1.3
`2021-04-2`
   - 新增`Emtpy`组件
   - 新增`Image`组件，提供图片预览功能，和多图预览
   - 修复`Modal`组件拖动问题
   - 修复`Table`等组件销毁时所产生的问题
   - 修复`Menu`菜单动态赋值的问题
   - 优化`Input`组件
   - 完善 `Modal`组件,`footer` 为 `null`，隐藏页脚
   
### 3.1.2
`2021-03-17`
   - 完善`Menu`菜单
   - 完善`Dropdown`子组件点击问题
   - 完善 `Poptip`等组件显示之后不能点击等问题
### 3.1.1
`2021-03-15`
   - 优化`Menu`菜单
   - 升级图标库至 `ionicons 5.5`版本，对应`kui-icons`升级至`2.0`
### 3.1
`2021-03-10`
   - 组件的尺寸由原来`mini/large` 改成 `size='small/large'`
   - 完善`Table` 滚动条和其他一些细节
   - `Button` 不再支持 `success` `warning`模式，增加 `dashed`类型
   - 调整 `Menu` 细节
   - 完善 `Drawer` 显示隐藏细节
### 3.0.9
`2021-02-20`
   - 完善一些动画细节
   - 完善文档
### 3.0.8
`2020-11-12`
   - 修复 `Form` 表单验证等一系列问题
   - 修复 `Modal` 点击事件问题
   - 优化 `Dropdown` ,`Poptip`等组件,展示方位不足时自动换位展示的问题
   - 修复 `Menu` 多级菜单展开遮挡的问题

### 3.0.6
`2020-10-22`

 - 修复一系列问题
 - Tree 新增自定义渲染节点   
 `Table`    
 - 新增全选/反选
 - 新增自定义渲染表头
 - 新增 `Divider` 组件
 - 完善 `Dropdown` 组件
 - 修复 下拉一系列组件的定位问题
 - 完善 `Modal`显示隐藏的问题
### 3.0 Orange
 `2020-9-14 `


`Icon`

- 3.x 版本以后不再支持webfont 使用 svg代替
- 增加 `Gitee` 等一系列国产图标
- 优化图标显示

`Button`

- 优化各种显示细节，图标和动画居中显示

`ColorPicker`

- 重写了颜色修改器，对标克隆的Chrome 的颜色选择器

`Grid`

- 优化显示，新增 `Flex` 布局

`Layout`
 
- 新版使用`Flex` 布局
- 新增伸缩、收藏布局

`Input`

- 重写 Input组件，分离出 `TextArea`

 `Select`

- 重写 Select组件
- 新增多选功能
- 新增过滤滤
- 新增异步查询

 `Datepicker`

 - 重写 Datepicker组件
 - 新增大尺寸和尺寸模式
 - 新增选择色块
 - 优化一系列动画

 
 `Table`

 - 重写 Table组件
 - 新增可控的Header 和 Footer
 - 新增排序和筛选
 - 新增表格行/列合并
 - 新增表头固定
 - 新增表列可固定
 - 新增表头可分组
 - 新增行可展开
 - 新增可嵌套子表格

 `Form`

 - 完善 动态校验规则

`Alert`

- 优化 `cloasable` 关闭时动画卡顿
- 优化内容文字文字换行
- 增加 `message` `description` 属性来呈现标题和内容 

`Tag`

- 新增多彩模式和自定义颜色

`TimeLine`

- 新增左中右呈现方向

`Poptip`

- 重写Poptip组件
- 分离 Popconfirm 组件

`Affix`

- 优化各种体验问题

`Menu`

- 优化各种体验问题
- 重新定义主题
- 新增垂直菜单
- 新增菜单可展开收缩
- 新增收藏模式

`Badge`

- 增加 `dot` 隐藏显示
- 新增状态点和多彩模式

`Card`

- 优化 `extra` 显示更友好
- 优化标题居中显示,超出部分隐藏,调节字体大小

`Checkbox`

- 统一禁用光标状态
- `Group` 增加 `options` 属性来呈现子组件

`Carousel`

- 优化切换动画 抖动和 尺寸变化的组件内部的动画展现形式
- 增加循环无缝播放

`Radio`

- `RadioGroup` 增加 `size` ,`circle` ,`options` 来控制组件呈现模式
- `RadioButton`增加 `icon` 属性来展示图标

`Switch`

- 增加 `icon` 属性可展示图标切换开关
- 优化组件,可展示多个文字切换开关


 - 新增 Popconfirm
 - 新增 Progress
 - 新增 Spin
 - 新增 TextArea


### 2.3.5
 `2019-10-17 `

- 👏 优化 `Modal` 关闭动画
- 🐞 修复 `Select` 组件表单验证的问题
- 💪 完善 `Table ` `row-click` 冒泡不执行的问题

### ...
- 更多更新日志，请查看[V2版本](https://v2.k-ui.cn/#/log)

###  1.0.0 
`2017-12-10`

👏 🚩着手开发

