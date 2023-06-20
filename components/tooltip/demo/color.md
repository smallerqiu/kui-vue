<cn>
#### 多彩文字提示
多种预设色彩的文字提示样式，用作不同场景使用。
</cn>

```vue
<template>
  <div class="demo-tooltip-color">
    <Divider orientation="left">Presets:</Divider>
    <div>
      <Tooltip :color="color" :title="color" v-for="color in colors" :key="color">
        <Tag :color="color">{{color}}</Tag>
      </Tooltip>
    </div>
    <Divider orientation="left">Custom:</Divider>
    <div>
      <Tooltip :color="color" :title="color" v-for="color in custom" :key="color">
        <Tag :color="color">{{color}}</Tag>
      </Tooltip>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      custom:['#c20','#39f','#e3f','#6c0'],
      colors:[
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime',
      ]
    }
  }
} 
</script>
```