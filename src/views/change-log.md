# 更新日志

![kui](https://img.shields.io/npm/v/kui-vue.svg?style=flat-square)

4.x 版本支持 `Vue3`, 基于 `Vue2` 的文档请参阅 <https://v3.k-ui.cn>
遇到问题,请在 [Github](https://github.com/smallerqiu/kui-vue/issues) 提issue

```bash
npm install kui-vue@latest --registry=http://registry.npmjs.org
```

vite 好像有缓存, 可手动清除

```bash
rm -rf node_modules/.vite
```

## 5.2.0

`2026-5-6`

- 表单组件移除`value` 属性, 使用 `modelValue`
- `Modal`,`Select` 等组件新增 `onOpenChange` 事件,展开或打开窗口时触发
- `Input` 等组件新增 `onClear` 事件,清空值时触发
- 组件`onChange` 事件将返回组件当前值.
- 修复`Form` 规则验证问题.

## 5.1.0

`2026-5-4`

- 新增`Splitter` 组件
- `CheckBox`,`Switch` 组件优化,支持输出`bool`(true / false), `number`(0 / 1)
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
