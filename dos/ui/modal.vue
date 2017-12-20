<template>
   <div>
      <h2>Modal 对话框</h2>
      <h3>代码示例 </h3>
      <Button @click="d1=!d1">普通对话框</Button>&nbsp;
      <Button @click="d2=!d2">自定义宽度</Button>&nbsp;
      <Button @click="d3=!d3">自定义内容</Button>&nbsp;
      <Button @click="d4=!d4">自定义内容2</Button>&nbsp;
      <Modal v-model="d1"></Modal>
      <Modal v-model="d2" width="300"></Modal>
      <Modal v-model="d3" title="我是自定义标题">
         <p>我是自定义内容</p>
         <div slot="footer">
            <Button type="danger">自定义1</Button>
            <Button type="success">自定义2</Button>
         </div>
      </Modal>
      <Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>
      <div v-high>
         <pre>
            <code>{{demo}}</code>
         </pre>
      </div>
      <h3>Modal props</h3>
      <div class="table-border">
         <table>
            <tr>
               <th>属性</th>
               <th>说明</th>
               <th>类型</th>
               <th>默认值</th>
            </tr>
            <tr>
               <td>value</td>
               <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
               <td>Boolean</td>
               <td>false</td>
            </tr>
            <tr>
               <td>title</td>
               <td>对话框标题</td>
               <td>String</td>
               <td>-</td>
            </tr>
            <tr>
               <td>width</td>
               <td>对话框宽度</td>
               <td>Number,String</td>
               <td>520</td>
            </tr>
            <tr>
               <td>okText</td>
               <td>确定按钮文字</td>
               <td>String</td>
               <td>确定</td>
            </tr>
            <tr>
               <td>cancelText</td>
               <td>取消按钮文字</td>
               <td>String</td>
               <td>取消</td>
            </tr>
         </table>
      </div>
      <h3>Modal events</h3>
      <div class="table-border">
         <table>
            <tr>
               <th>名称</th>
               <th>说明</th>
               <th>返回值</th>
            </tr>
            <tr>
               <td>ok</td>
               <td>点击确定的回调</td>
               <td>-</td>
            </tr>
            <tr>
               <td>cancel</td>
               <td>点击取消的回调</td>
               <td>-</td>
            </tr>
            <tr>
               <td>close</td>
               <td>窗口关闭的回调</td>
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
      d1: false,
      d2: false,
      d3: false,
      d4: false,
      demo: `<Button @click="d1=!d1">普通对话框</Button>&nbsp;
<Button @click="d2=!d2">自定义宽度</Button>&nbsp;
<Button @click="d3=!d3">自定义内容</Button>&nbsp;
<Button @click="d4=!d4">自定义内容2</Button>&nbsp;
<Modal v-model="d1"></Modal>
<Modal v-model="d2" width="300"></Modal>
<Modal v-model="d3" title="我是自定义标题">
   <p>我是自定义内容</p>
   <div slot="footer">
      <Button type="danger">自定义1</Button>
      <Button type="success">自定义2</Button>
   </div>
</Modal>
<Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>`
    };
  }
};
</script>

