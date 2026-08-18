# Steps 步骤条

展示任务流程与当前进度。

## 代码演示

[基础用法](./demo/basic.vue?show=vertical)

- 支持数据配置、点击切换和纵向布局。

[纵向步骤](./demo/vertical.vue?show=vertical)

- 用于纵向空间充足的流程说明。

[步骤状态](./demo/status.vue?show=vertical)

- 展示错误状态和单个步骤的自定义状态。

[可点击步骤](./demo/clickable.vue?show=vertical)

- 监听 change 实现步骤切换。

[自定义图标](./demo/icon.vue?show=vertical)

- 为每个步骤设置自定义图标。

[受控模式](./demo/controlled.vue?show=vertical)

- 通过外部状态和按钮控制当前步骤。

## Steps API

| 属性      | 说明     | 类型                 | 默认值     |
| --------- | -------- | -------------------- | ---------- |
| current   | 当前步骤 | number               | 0          |
| direction | 排列方向 | horizontal\|vertical | horizontal |
| status    | 当前状态 | process\|error       | process    |
| items     | 步骤数据 | StepItem[]           | -          |
| onChange  | 点击步骤 | function             | -          |

## Step API

| 属性        | 说明       | 类型       | 默认值 |
| ----------- | ---------- | ---------- | ------ |
| title       | 标题       | VNodeChild | -      |
| description | 描述       | VNodeChild | -      |
| icon        | 自定义节点 | VNodeChild | -      |
| status      | 单步状态   | StepStatus | -      |
| disabled    | 禁止点击   | boolean    | false  |
