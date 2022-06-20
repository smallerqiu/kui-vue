<cn>
#### 多彩标签 
多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</cn>

```vue
<template>
  <div>
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <Tag :color="color" v-for="(color,i) in colors" :key="i">{{color}}</Tag> 
    </div>
    <h4 style="margin:16px 0">
      Custom:
    </h4>
    <div>
      <Tag color="#c20">#c20</Tag>
      <Tag color="#39f">#39f</Tag>
      <Tag color="#e3f">#e3f</Tag>
      <Tag color="#6c0">#6c0</Tag>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
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