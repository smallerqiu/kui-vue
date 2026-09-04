# Mentions 提及

在多行文本中通过触发字符插入结构化提及。

## 代码演示

[基础用法](./demo/basic.vue)

- 输入 @ 后可通过键盘选择提及项。

[多个触发字符](./demo/triggers.vue)

- 同时支持成员提及和话题关联。

[自定义过滤](./demo/filter.vue)

- 自定义候选项的匹配规则。

[远程搜索](./demo/remote.vue)

- 输入触发字符后，再输入至少一个字符时触发 `search`，可异步更新候选项。

[尺寸](./demo/size.vue)

- 展示不同尺寸。

[尺寸、主题与形状](./demo/appearance.vue)

- 展示不同输入框外观。

[空状态](./demo/empty.vue)

- 没有匹配结果时展示 Empty。

[行数](./demo/rows.vue)

- 使用 `rows` 控制输入区域行数，设为 1 时呈现单行输入框外观。

[下拉位置](./demo/placement.vue)

- 下拉菜单跟随光标，并在可用空间不足时自动翻转。

## Mentions API

| 属性         | 说明                               | 类型                                                                              | 默认值      |
| ------------ | ---------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| modelValue   | 文本值（v-model）                  | string                                                                            | -           |
| value        | 初始文本                           | string                                                                            | ''          |
| options      | 候选项                             | (string \| MentionOption)[]                                                       | []          |
| triggers     | 触发字符                           | string[]                                                                          | ['@']       |
| placeholder  | 占位文本                           | string                                                                            | -           |
| disabled     | 是否禁用                           | boolean                                                                           | false       |
| readonly     | 是否只读，不可输入、选择或清空     | boolean                                                                           | false       |
| clearable    | 是否显示清空按钮                   | boolean                                                                           | false       |
| loading      | 是否显示远程搜索加载状态           | boolean                                                                           | false       |
| loadingText  | 加载提示文字                       | string                                                                            | -           |
| rows         | 文本域行数                         | number                                                                            | 1           |
| placement    | 下拉菜单优先位置                   | 'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right' | bottom-left |
| size         | 尺寸                               | 'small' \| 'medium' \| 'large'                                                    | medium      |
| theme        | 主题                               | 'fill' \| 'outline' \| 'plain'                                                    | fill        |
| shape        | 形状                               | 'circle' \| 'square' \| 'round' \| 'default'                                      | default     |
| emptyText    | 空状态说明                         | string                                                                            | 暂无数据    |
| filterOption | 自定义过滤                         | function                                                                          | -           |
| onChange     | 文本变化                           | function                                                                          | -           |
| onSelect     | 选择提及                           | function                                                                          | -           |
| onSearch     | 远程搜索，参数为查询文本和触发字符 | (query, trigger) => void                                                          | -           |
| onClear      | 清空文本                           | function                                                                          | -           |
