## API

| 属性         | 说明                                                                 | 类型           | 默认值 |
| ------------ | -------------------------------------------------------------------- | -------------- | ------ |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                     | String, Number | 0      |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                     | String, Number | -      |
| change       | 在固定状态发生改变时触发, 返回当前固定状态 `false` , `true`          | Function       | -      |
| target       | 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | HTMLElement    | window |
