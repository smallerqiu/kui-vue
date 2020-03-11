<cn>
#### 自定义图标
可以针对不同的节点定制图标。
</cn>

```tpl
<template>
  <Tree :data="data" @expand="expand"/>
</template>
<script>
export default{
  data(){
    return{
      data: [
        {
          title: 'src',
          expand: true,
          icon: 'md-folder-open',
          children: [
            {
              title: 'assets',
              expand: true,
              icon: 'md-folder-open',
              children: [
                { title: 'main.js', icon: 'logo-javascript',disabled:true },
                { title: 'test.py', icon: 'logo-python' }
              ]
            },
            {
              title: 'pages',
              expand: true,
              icon: 'md-folder-open',
              children: [
                { title: 'index.html', icon: 'logo-html5' },
                { title: 'index.md', icon: 'logo-markdown' }
              ]
            },
            {
              title: 'app',
              expand: true,
              icon: 'md-folder-open',
              children: [
                { title: 'zen.apk', icon: 'logo-android' },
                { title: 'zen.ipa', icon: 'logo-apple' }
              ]
            }
          ]
        }
      ],
    }
  },
  methods:{
    expand(node){
      node.icon = node.expand?'md-folder-open':'md-folder'
    }
  }
}
</script>
```