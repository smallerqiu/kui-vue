<cn>
#### 图标
可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。
</cn>

```vue
<template>
  <Space>
    <Tag :icon="LogoTwitter" color="#55acee">Twitter</Tag>
    <Tag :icon="LogoYoutube" color="#cd201f">油管</Tag>
    <Tag :icon="LogoQq" color="red">QQ</Tag>
    <Tag :icon="LogoWechat" closeable color="green">微信</Tag>
  </Space>
</template>
<script>
import { LogoTwitter , LogoYoutube , LogoQq , LogoWechat} from 'kui-icons'
export default{
  data(){
    return{
      LogoTwitter , 
      LogoYoutube,
      LogoWechat, 
      LogoQq
    }
  }
}
</script>
```