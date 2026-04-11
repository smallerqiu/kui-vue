# Badge

Circular badge number in the upper right corner of an icon.

## When to Use

Generally appears in the upper right corner of notification icons or avatars, used to display the number of messages that need processing, attracting user attention through eye-catching visual forms.

## Examples

<code src="./demo/color.vue">Colorful Badge</code>
<code src="./demo/dot.vue">Dot</code>
<code src="./demo/dynamic.vue">Controlled</code>
<code src="./demo/mark.vue">Standalone Usage</code>
<code src="./demo/max.vue">Max Value / Custom</code>
<code src="./demo/status.vue">Status Dot</code>

## API

| Property  | Description                                                                           | Type           | Default |
| --------- | ------------------------------------------------------------------------------------- | -------------- | ------- |
| count     | The text to display                                                                   | String，Number | -       |
| color     | Badge color                                                                           | String         | -       |
| max-count | The maximum numeric value to display. Values above this will be shown with a '+' sign | Number         | 99      |
| dot       | Do not display the number, only a small red dot                                       | Boolean        | false   |
