## Tabs API
| 属性      | 说明                                  | 类型                | 默认值 |
|-----------|---------------------------------------|---------------------|--------|
| value     | 当前激活 tab 面板的 key               | String              | -      |
| card      | 页签样式是否为卡片样式                | Boolean             | false  |
| sample    | 页签样式是否为简洁样式                | Boolean             | false  |
| animated  | 是否使用动画切换 Tabs                 | Boolean             | true   |
| remove    | tab关闭时的回调，返回关闭的tab的key值 | Function(activeKey) | -      |
| change    | 切换面板的回调                        | Function(activeKey) | -      |
| tab-click | tab点击时的回调                       | Function(activeKey) | -      |

## Tabs.TabPane API
| 属性     | 说明                | 类型    | 默认值 |
|----------|---------------------|---------|--------|
| key      | vue需要的key值      | String  | -      |
| title    | 选项卡头显示文字    | String  | -      |
| icon     | 选项卡头显示的图标  | String  | -      |
| disabled | tab是否被禁用       | Boolean | false  |
| closable | tab是否显示关闭按钮 | Boolean | false  |