# Form 表单
具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用
- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 代码演示

在 `Modal` `Drawer` 中 , 如果要在打开Modal 或者 Drawer 的时候对表单 进行重置, 请使用异步 :

```javascript
// 组件在open 的之前 也就是没有完全渲染完毕, 这个时候 读取 dom 对象是 undefined, 
// 子组件没有渲染完毕 this.$refs.form 为 undefined, 所以无法重置
// 使用异步方式
// 当然也在  Modal 或者 Drawer @close 的时候 重置表单
export default{
  methods :{
    reset(){
      this.$nextTick(()=>{
        this.$refs.form.reset()
      })
      // 或者
      setTimeout(() => {
        this.$refs.form.reset()
      }, 0);
    }
  }
}
```