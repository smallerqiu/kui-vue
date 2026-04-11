# Badge 徽标数

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

<code src="./demo/color.vue">多彩徽标</code>
<code src="./demo/dot.vue">点</code>
<code src="./demo/dynamic.vue">可控</code>
<code src="./demo/mark.vue">独立使用</code>
<code src="./demo/max.vue">最大值 / 自定义</code>
<code src="./demo/status.vue">状态点</code>

## API

| 属性      | 说明                                    | 类型           | 默认值 |
| --------- | --------------------------------------- | -------------- | ------ |
| count     | 显示的文字                              | String，Number | -      |
| color     | 徽标颜色                                | String         | -      |
| max-count | 展示封顶的数字值，高于的部分会以+号显示 | Number         | 99     |
| dot       | 不展示数字，只有一个小红点              | Boolean        | false  |
