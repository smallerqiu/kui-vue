<cn>
#### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
</cn>

```vue
<template>
  <Space>
    <Avatar
      size="large"
      :style="{ backgroundColor: color, verticalAlign: 'middle' }"
    >
      {{ text }}
    </Avatar>
    <Button size="small" @click="changeValue">改变</Button>
  </Space>
</template>
<script>
function ran(min, max) {
  return parseInt((Math.random() * (max - min)) + min)
}
const userList = ["K", "王","邱先生", "Jack", "Jone"];
const colorList = ["#3a95ff", "#00bb5d", "#ff3300", "#ffa500"];
export default {
  data() {
    return {
      text: userList[0],
      color: colorList[0]
    }
  },
  methods: {
    changeValue() {
      this.text = userList[ran(0,3)]
      this.color = colorList[ran(0,3)]
    }
  }
}
</script>
```