<template>
   <div>
      <h2>Badge 徽标</h2>
      <h3>基础</h3>
      <Badge count="3">
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Code>{{demo1}}</Code>
      <h3>点</h3>
      <Badge dot>
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Badge dot style="margin-left:20px;">
         <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>
      </Badge>
      <Badge dot style="margin-left:20px;">
         <a href="#">我是一个连接</a>
      </Badge>
      <Code>{{demo2}}</Code>
      <h3>数字隐藏</h3>
      <Badge count="100" max-count="99">
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Badge count="10055" max-count="999" style="margin-left:60px;">
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Code>{{demo3}}</Code>
      <h3>颜色</h3>
      <Badge count="100" max-count="99" color="orange">
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Badge dot color="green" style="margin-left:60px;">
         <div style="width:50px;height:50px;background:#ddd"></div>
      </Badge>
      <Code>{{demo4}}</Code>
      <h3>单独使用</h3>
      <Badge count="10" style="margin-left:20px;"></Badge>
      <Badge count="20" color="blue" style="margin-left:40px;"></Badge>
      <Code>{{demo5}}</Code>
      <h3>组合使用</h3>
      <Alert>Badge的使用场景不光是数字或者是提醒的展示，在很多场合可以当按钮使用</Alert>
      <div v-for="i in m" style="margin:15px 0;">
         <Badge count="+" @onClick="add">
            <Button>增加</Button>
         </Badge>
         <Badge count="-" @onClick="del" style="margin-left:20px;">
            <Input width="200"></Input>
         </Badge>
      </div>
      <Code>{{demo6}}</Code>
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
               <td>count</td>
               <td>显示的文字</td>
               <td>String，Number</td>
               <td>-</td>
            </tr>
            <tr>
               <td>max-count</td>
               <td>展示封顶的数字值，高于的部分会以+号显示</td>
               <td>String，Number</td>
               <td>-</td>
            </tr>
            <tr>
               <td>dot</td>
               <td>不展示数字，只有一个小红点</td>
               <td>Boolean</td>
               <td>false</td>
            </tr>
            <tr>
               <td>onClick</td>
               <td>点击事件的回调</td>
               <td>Function</td>
               <td>-</td>
            </tr>
         </table>
      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      m: 1,
      demo1: `<Badge count="3">
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`,
      demo2: `<Badge dot>
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge dot>
   <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>
</Badge>
<Badge dot>
   <a href="#">我是一个连接</a>
</Badge>`,
      demo3: `<Badge count="100" max-count="99">
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge count="10055" max-count="999">
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`,
      demo4: `<Badge count="100" max-count="99" color="orange">
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>
<Badge dot color="green">
   <div style="width:50px;height:50px;background:#ddd"></div>
</Badge>`,
      demo5: `<Badge count="10"></Badge>
<Badge count="20" color="blue"></Badge>`,
      demo6: `<div v-for="i in m">
   <Badge count="+" @onClick="add">
      <Button>增加</Button>
   </Badge>
   <Badge count="-" @onClick="del">
      <Input width="200"></Input>
   </Badge>
</div>
<script>
   methods: {
      add() {
         this.m++;
      },
      del() {
         this.m--;
      }
   }
<\/script>`
    };
  },
  methods: {
    add() {
      this.m++;
    },
    del() {
      this.m--;
    }
  }
};
</script>