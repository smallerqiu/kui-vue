# 更新日志
![](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square) 遇到问题可以先安装 rc 版本
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

