
<cn>
#### 扩展 / 全局
可以扩展自定工具和面板。
</cn>

```vue
<template>
  单张图：<Button @click="openImage" size="small">Open Image</Button>
  <br/>
  <br/>
  图片组：<Button @click="openImageGroup" size="small">Open Image Group</Button>
</template>
<script>
import { Heart ,IconImage, Calendar, Location, Camera, Ribbon } from "kui-icons";
export default{
  methods:{
    openImage(){
      let h = this.$createElement
      let options = {
        src:'https://cdn.chuchur.com/upload/demo/test_300.jpg',
        slots:{
          tool: h('Icon',{ 
            props:{ type: Heart ,color:'#3a95ff' },
            on:{
              click:()=> this.$Image.togglePanel()
            }
          }),
          panel: h('div',{class:'img-panel'},[
            h('h2','详情'),
            h('Row',{ props:{ type:'flex' } } ,[
              h('Col',{}, [h('Icon',{ props: { type: IconImage } } )]),
              h('Col',{ props: {flex:1 } }, [
                h('p',{ class: 'title' },'IMG_202005050505.jpg' ),
                h('p',{ class: 'sub' },'3120x4160 , 2.8MB' ),
              ]),
            ]),
            h('Row',{ props:{ type:'flex' } } ,[
              h('Col',{}, [h('Icon',{ props: { type: Calendar } } )]),
              h('Col',{ props: {flex:1 } }, [
                h('p',{ class: 'title' },'时间：2020年5月5日' ),
                h('p',{ class: 'sub' },'星期五，下午05:05' ),
              ]),
            ]),
            h('Row',{ props:{ type:'flex' } } ,[
              h('Col',{}, [h('Icon',{ props: { type:Location } } )]),
              h('Col',{ props: {flex:1 } }, [
                h('p',{ class: 'title' },'武汉.江滩' ),
                h('p',{ class: 'sub' },'湖北省武汉市汉口江滩' ),
              ]),
            ]),
            h('Row',{ props:{ type:'flex' } } ,[
              h('Col',{}, [h('Icon',{ props: { type: Camera } } )]),
              h('Col',{ props: {flex:1 } }, [
                h('p',{ class: 'title' },'相机：Iphone 12 Pro' ),
                h('p',{ class: 'sub' },'2048/1000000s ISO-9999' ),
              ]),
            ]),
            h('Row',{ props:{ type:'flex' } } ,[
              h('Col',{}, [h('Icon',{ props: { type: Ribbon } } )]),
              h('Col',{ props: {flex:1 } }, [
                h('p',{ class: 'title' },'镜头：索尼' ),
                h('p',{ class: 'sub' },'f/10 10.5mm' ),
              ]),
            ])
          ])
        }
      }
      this.$Image.show(options)
    },
    openImageGroup() {
      const h = this.$createElement
      const test =['AAAAAAAAAAAAAAAAAAAAAAAAAA','BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB']
      const getOptions = (index)=> {
        let options = {
          index,
          data:[
            'https://cdn.chuchur.com/upload/demo/kui-react.jpg' ,
            'https://cdn.chuchur.com/upload/demo/kui-for-vue.jpg' ,
          ],
          slots:{
            tool: h('Icon',{ 
              props:{ type: Heart ,color:'#3a95ff' },
              on:{
                click:()=> this.$Image.togglePanel()
              }
            }),
            panel: h('div',{class:'img-panel'},[
              h('h2',test[index]),
            ])
          },
          on:{
            switch:(i)=>{
              let options = getOptions(i)
              this.$Image.show(options)
            }
          }
        }

        return options;
      }

      let options = getOptions(0)
      this.$Image.show(options)
    },
    close(){
      this.$Message.success('close')
    },
    showPanel(){
      this.$Image.togglePanel()
    }
  }
}
</script>
```