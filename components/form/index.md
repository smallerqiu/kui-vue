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
export default {
  methods: {
    open() {
      this.visible = true; //先打开弹窗
      this.reset();
    },
    close() {
      this.reset();
      this.visible = false; //后关闭弹窗
    },
    reset() {
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
      // 或者
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    },
  },
};
```

[典型表单](./demo/basic.vue?show=vertical)

- 包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

[对齐方式](./demo/align.vue?show=vertical)

- 根据具体目标和制约因素，选择最佳的标签对齐方式。

[表单验证](./demo/valid.vue?show=vertical)

- 在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

[辅助校验](./demo/length.vue?show=vertical)

- 校验一些数据类型

[多表单联动](./demo/withmodal.vue?show=vertical)

- 在Form之外，通过`submit`从外部提交表单，反之 则推荐使用 `<Button htmlType="submit" />`调用原生提交逻辑

[自定义校验规则](./demo/customvalid.vue?show=vertical)

- 自定义验证规则来完成表单验证。

[动态校验规则](./demo/dynamicvalid.vue?show=vertical)

- 根据不同情况执行不同的校验规则。

## Form API

| 属性       | 说明                                                                           | 类型                           | 默认值     |
| ---------- | ------------------------------------------------------------------------------ | ------------------------------ | ---------- |
| model      | 表单数据对象                                                                   | Object                         | -          |
| rules      | 表单验证规则，                                                                 | Boolean                        | false      |
| name       | 表单名称，会作为表单字段 id 前缀使用                                           | String                         | -          |
| labelCol   | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12} | {span:number,offset:number}    | -          |
| wrapperCol | 控件 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 15, offset: 12} | {span:number,offset:number}    | -          |
| submit     | 提交表单，并验证 ,手动提交表单时触发                                           | Function({valid,model})        | -          |
| test       | 对表单单个字段进行校验的方法                                                   | Function                       | -          |
| reset      | 对整个表单进行重置，将所有字段值重置为空并移除校验结果                         | Function                       | -          |
| theme      | 组件呈现主题                                                                   | String                         | -          |
| size       | 子组件的尺寸                                                                   | String                         | -          |
| layout     | 表单布局                                                                       | [horizontal ,vertical ,inline] | horizontal |
| shape      | 子组件的形状                                                                   | [circle,square]                | horizontal |
| disabled   | 表单是否可用                                                                   | Boolean                        | true       |
| onSubmit   | 提交表单时触发事件                                                             | Function                       | -          |
| onChange   | 表单数据变动时触发                                                             | Function(model)                | -          |

## FormItem API

| 属性  | 说明                                        | 类型   | 默认值 |
| ----- | ------------------------------------------- | ------ | ------ |
| prop  | 对应表单域 model 里的字段，表单验证必须字段 | String | -      |
| label | 标签文本                                    | String | -      |
| rules | 表单验证规则                                | Array  | -      |

## rules API

| 属性      | 说明                                                                                                                  | 类型     | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| required  | 是否必填字段                                                                                                          | Boolean  | false  |
| message   | 校验不通过提示语                                                                                                      | String   | -      |
| validator | 自定义校验方法，可参见示例                                                                                            | Function | -      |
| type      | 数据类型校验，提供三种校验方式 `mobile`手机， `mail`邮箱， `number`数字类型判断                                       | String   | -      |
| pattern   | 自定义正则校验，比喻密码强度包含数字，字母，特殊符号可以这么写 `/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/` | String   | -      |
| min       | 字段长度最小值校验                                                                                                    | Number   | -      |
| max       | 字段长度最大值校验                                                                                                    | Number   | -      |
