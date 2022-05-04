<cn>
#### 按钮/头像/图像
骨架按钮、头像、和图像。
</cn>

```vue
<template>
  <Space :size="15">
    <Checkbox v-model="animated" label="Animated"/>
    <Checkbox v-model="block" label="Button block"/>
    Size: <RadioGroup :options="sizes" v-model="size" type="button"/>
  </Space>
  <br/>
  <br/>
  <Space :size="15">
    Button Shape: <RadioGroup :options="btnShapes" v-model="btnShape" type="button"/>
    Avatar Shape: <RadioGroup :options="avatarShapes" v-model="avatarShape" type="button"/>
  </Space>
  <br/>
  <br/>
  <Space :size="15">
    Image radius: <Slider v-model="radius" />
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
  <SkeletonImage :animated="animated" :radius="radius"/>
</template>
<script>
export default{
  data() { 
    return { 
      sizes :[
        { label :'Small', value :'small' },
        { label :'Default', value :'default' },
        { label :'Large', value :'large' },
      ],
      btnShapes :[
        { label :'Round', value :'round' },
        { label :'Default', value :'default' },
        { label :'Circle', value :'circle' },
      ],
      avatarShapes :[
        { label :'Square', value :'square' },
        { label :'Circle', value :'circle' },
      ],
      animated :false,
      size :'default',
      block :false,
      radius:10,
      avatarShape :'square',
      btnShape :'default',
      imgShape :'default' 
    } 
  }
}
</script>
```