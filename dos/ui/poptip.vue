<template>
   <div>
      <h2>Poptip 气泡提示</h2>
      <h3>普通</h3>
      <Poptip trigger="hover" title="标题" content="内容">
         <Button>hover激活</Button>
      </Poptip>
      <Poptip trigger="click" title="标题" content="内容">
         <Button>click激活</Button>
      </Poptip>
      <Code lang="xml html">{{demo1}}</Code>
      <h3>位置</h3>
      <Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>
      <Poptip title="标题" content="内容" placement="top"><Button>上</Button></Poptip>
      <Poptip title="标题" content="内容" placement="top-right"><Button>上右</Button></Poptip>
      <Poptip title="标题" content="内容" placement="right-top"><Button>右上</Button></Poptip>
      <Poptip title="标题" content="内容" placement="right"><Button>右</Button></Poptip>
      <Poptip title="标题" content="内容" placement="right-bottom"><Button>右下</Button> </Poptip>
      <Poptip title="标题" content="内容" placement="bottom-right"><Button>下右</Button></Poptip>
      <Poptip title="标题" content="内容" placement="bottom"><Button>下</Button></Poptip>
      <Poptip title="标题" content="内容" placement="bottom-left"><Button>下左</Button></Poptip>
      <Poptip title="标题" content="内容" placement="left-bottom"><Button>左下</Button></Poptip>
      <Poptip title="标题" content="内容" placement="left"><Button>左</Button></Poptip>
      <Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>
      <Code lang="xml html">{{demo2}}</Code>
      <h3>嵌套</h3>
      <Poptip trigger="click" content="内容" placement="right-top">
         <Button>Click me</Button>
         <div slot="content" class="k-table k-table-border">
            <table>
               <thead>
               <tr>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>住址</th>
               </tr>
               </thead>
                <tr>
                  <td>张山</td>
                  <td>13256652545</td>
                  <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>
               </tr> <tr>
                  <td>王二</td>
                  <td>36254525658</td>
                  <td>浙江省杭州市阿里西溪园区3A18楼</td>
               </tr>
            </table>
         </div>
      </Poptip>
      <Code lang="xml html">{{demo3}}</Code>
      <h3>确认框</h3>
      <Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> <Button>删除</Button> </Poptip>
      <Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> <Button>自定义</Button> </Poptip>
      <Code lang="xml html">{{demo4}}</Code>
       <h3>API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式，可选值为hover（悬停）click（点击）,在 confirm 模式下，只有 click 有效</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>显示的标题</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>content</td>
          <td>显示的正文内容，只在非 confirm 模式下有效</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom</td>
          <td>String </td>
          <td>top</td>
        </tr> 
         <tr>
          <td>width</td>
          <td>宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>confirm</td>
          <td>是否开启对话框模式</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>ok-text</td>
          <td>确定按钮的文字，只在 confirm 模式下有效</td>
          <td>String </td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancel-text</td>
          <td>取消按钮的文字，只在 confirm 模式下有效</td>
          <td>String </td>
          <td>取消</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>点击取消的回调，只在 confirm 模式下有效</td>
          <td>Function </td>
          <td>-</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确定的回调，只在 confirm 模式下有效</td>
          <td>Function </td>
          <td>-</td>
        </tr>
      </table>
    </div>
   </div> 
</template>
<script>
export default {
  data(){
     return{
        demo1:`<Poptip trigger="hover" title="标题" content="内容">
   <Button>hover激活</Button>
</Poptip>
<Poptip trigger="click" title="标题" content="内容">
   <Button>click激活</Button>
</Poptip>`,
        demo2:`<Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>
<Poptip title="标题" content="内容" placement="top"><Button>上</Button></Poptip>
<Poptip title="标题" content="内容" placement="top-right"><Button>上右</Button></Poptip>
<Poptip title="标题" content="内容" placement="right-top"><Button>右上</Button></Poptip>
<Poptip title="标题" content="内容" placement="right"><Button>右</Button></Poptip>
<Poptip title="标题" content="内容" placement="right-bottom"><Button>右下</Button> </Poptip>
<Poptip title="标题" content="内容" placement="bottom-right"><Button>下右</Button></Poptip>
<Poptip title="标题" content="内容" placement="bottom"><Button>下</Button></Poptip>
<Poptip title="标题" content="内容" placement="bottom-left"><Button>下左</Button></Poptip>
<Poptip title="标题" content="内容" placement="left-bottom"><Button>左下</Button></Poptip>
<Poptip title="标题" content="内容" placement="left"><Button>左</Button></Poptip>
<Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>`,
        demo3:`<Poptip content="内容" placement="right-top">
   <Button>Click me</Button>
   <div slot="content" class="k-table k-table-border">
      <table>
         <thead>
         <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>住址</th>
         </tr>
         </thead>
            <tr>
            <td>张山</td>
            <td>13256652545</td>
            <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>
         </tr> <tr>
            <td>王二</td>
            <td>36254525658</td>
            <td>浙江省杭州市阿里西溪园区3A18楼</td>
         </tr>
      </table>
   </div>
</Poptip>`,
        demo4:`<Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> <Button>删除</Button> </Poptip>
<Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> <Button>自定义</Button> </Poptip>
`,
     }
  },
  methods:{
     ok(){
        this.$Message.info('你点了确定')
     },
     cancel(){
        this.$Message.info('你点了取消')
     },
  }
}
</script>
