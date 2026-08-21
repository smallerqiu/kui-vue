# ConfigProvider 全局配置

为后代组件提供语言和弹层容器配置。

## API

| 属性              | 说明             | 类型              | 默认值        |
| ----------------- | ---------------- | ----------------- | ------------- |
| locale            | 组件语言包       | Locale            | 当前全局语言  |
| getPopupContainer | 指定弹层挂载容器 | () => HTMLElement | document.body |
