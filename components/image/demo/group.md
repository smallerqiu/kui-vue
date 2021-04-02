
<cn>
#### 多张图片预览
点击左右切换按钮可以预览多张图片。
</cn>

```vue
<template>
  <ImageGroup>
    <Image 
      :width="120" 
      src="https://www.chuchur.com/upload/demo/kui-for-vue.jpg"
      />
    <Image 
    :width="120" 
    src="https://www.chuchur.com/upload/demo/kui-react.jpg"
    />
  </ImageGroup>
</template>
```