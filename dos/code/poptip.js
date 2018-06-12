let code = {}

code.base = `<Poptip trigger="hover" title="标题" content="内容">
   <Button>hover激活</Button>
</Poptip>
<Poptip trigger="click" title="标题" content="内容">
   <Button>click激活</Button>
</Poptip>`
code.position = `<Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>
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
<Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>`
code.slot = `<Poptip content="内容" placement="right-top">
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
</Poptip>`
code.confirm = `<Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> 
  <Button>删除</Button> 
</Poptip>
<Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> 
  <Button>自定义</Button>
 </Poptip>`

export default code