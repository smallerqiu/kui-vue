<cn>
#### 按钮/头像/图像
骨架按钮、头像、和图像。
</cn>

```vue
<template>
  <Space :size="15">
    <Checkbox v-model:checked="animated" label="Animated"/>
    <Checkbox v-model:checked="block" label="Button block"/>
    Size: <RadioGroup :options="sizes" v-model:value="size" type="button"/>
  </Space>
  <br/>
  <br/>
  <Space :size="15">
    Button Shape: <RadioGroup :options="btnShapes" v-model:value="btnShape" type="button"/>
    Avatar Shape: <RadioGroup :options="avatarShapes" v-model:value="avatarShape" type="button"/>
  </Space>
  <br/>
  <br/>
  <Space :size="15" style="width:300px;">
    Image radius: <Slider v-model:value="radius" />
  </Space>
  <br/>
  <Space :size="15" style="width:300px;">
    Image Size: <Slider v-model:value="imgSize" range :min="80" :max="320"/>
  </Space>
  <br/>
  <br/>
  <Space>
    <SkeletonButton :animated="animated" :size="size" :shape="btnShape" />
    <SkeletonAvatar :animated="animated" :size="size" :shape="avatarShape" />
    <SkeletonText :animated="animated" :size="size" style="width:200px;"/>
  </Space>
  <br/>
  <br/>
  <SkeletonButton :animated="animated" :size="size" :shape="btnShape" :block="block" />
  <br/>
  <br/>
  <SkeletonImage :animated="animated" :radius="radius" :size="imgSize"/>
</template>
<script setup>
import { ref } from 'vue'

const sizes = [
  { label :'Small', value :'small' },
  { label :'Default', value :'default' },
  { label :'Large', value :'large' },
]
const btnShapes = [
  { label :'Round', value :'round' },
  { label :'Default', value :'default' },
  { label :'Circle', value :'circle' },
]
const avatarShapes = [
  { label :'Square', value :'square' },
  { label :'Circle', value :'circle' },
]
const imgSize = [96,96]
const animated  = ref(false)
const size = ref('default')
const block = ref(false)
const radius = ref(10)
const avatarShape = ref('square')
const btnShape  = ref('default')
const imgShape = ref('default') 
</script>
```