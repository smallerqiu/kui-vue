# Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

[基础省市区三级联动](./demo/basic.vue)

- 最基础的级联选择，开启 showAllLevels 以在输入框中完整展示用户选择的行政链路。

[电商多级类目选择](./demo/hover.vue)

- Hover 触发 + 仅展示最后一级,在电商后台管理商品或发布宝贝时，目录通常极深。采用 `expandTrigger="hover"` 可以极大地减少用户的点击次数，同时 `showAllLevels="false"` 可以让界面在选中后显得更加干净利落。

[禁用特定分支](./demo/disabled.vue)

- 在分配系统权限或派发工单时，部分部门或处于停用状态的子分支（如整改中的分公司）需要整体置灰。利用 disabled 属性可以一键封锁其下所有链路。

[尺寸/形态](./demo/size.vue)

- 配合不同的页面排版（如紧凑的弹窗表单或开阔的配置面板），展示组件在不同 size 约束下的高视觉表现力

## API

| 属性          | 说明                                                                                   | 类型                   | 默认值      |
| :------------ | :------------------------------------------------------------------------------------- | :--------------------- | :---------- |
| modelValue    | 选中项的路径值数组（如 `['zhejiang', 'hangzhou', 'xihu']`）。                          | `(string \| number)[]` | `[]`        |
| options       | 可选择的级联数据源树状结构。                                                           | `CascaderOption[]`     | `[]`        |
| placeholder   | 当没有任何选择路径时的兜底提示占位文案。                                               | `string`               | `"请选择"`  |
| disabled      | 是否完全禁用整个组件交互。                                                             | `boolean`              | `false`     |
| clearable     | 是否支持一键清空所选路径。                                                             | `boolean`              | `true`      |
| size          | 组件的大小尺寸规格。可选值：`'large'` \| `'small'` \| `undefined`。                    | `string`               | `undefined` |
| expandTrigger | 下一级菜单的展开交互触发方式。可选值：`'click'` (点击) 或 `'hover'` (鼠标悬浮即展开)。 | `'click' \| 'hover'`   | `'click'`   |
| showAllLevels | 是否展示完整选中的祖先路径。若为 `false` 则仅在输入框内显示最终的末端叶子节点。        | `boolean`              | `true`      |
| separator     | 当 `showAllLevels` 开启时，各层级标签之间的多级分隔符。                                | `string`               | `" / "`     |
| bordered      | 是否显示边框                                                                           | boolean                  | true        |
| theme         | 主题                                                                                   | string                 | fill        |
| showArrow     | 是否显示下拉按钮                                                                       | boolean                  | true        |
| icon          | 自定义图标                                                                             | string                 | -           |
| shape         | shape='circle' 时呈现圆角                                                              | string                 | -           |
| placement     | 下拉展示的方位                                                                         | string                 | -           |
| emptyText     | 没有数据时展示的提示                                                                   | string                 | '赞无数据'  |
| arrowIcon     | 自定义箭头图标                                                                         | string                 | -           |

## CascaderOption

在配置 `Cascader` 的 `options` 数据源时，每一个节点都必须遵循 `CascaderOption` 对象规范。它支持树状向下无限延伸：

| 属性     | 说明                                                                                                                       | 类型               | 默认值      |
| :------- | :------------------------------------------------------------------------------------------------------------------------- | :----------------- | :---------- |
| value    | **必填。** 当前节点的唯一标识符（常对应后端的 `id` 或 `code`）。全路径选中时，`v-model` 最终收集的就是由该属性组成的数组。 | `string \| number` | -           |
| label    | **必填。** 当前节点在下拉菜单以及输入框中展示给用户看的纯文本内容（如 `"浙江省"`、`"杭州市"`）。                           | `string`           | -           |
| disabled | 是否禁用当前选项。开启后该行文本变灰且不可点击，同时其下方的所有子层级都将被同步锁定。                                     | `boolean`          | `false`     |
| children | 下一级的子节点数据源。当节点包含此属性且数组不为空时，组件右侧会自动渲染出向右生长的展开箭头。                             | `CascaderOption[]` | `undefined` |
