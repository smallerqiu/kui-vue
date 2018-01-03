<template>
    <div>
        <h2>Form 表单</h2>
        <p>注意：非 template/render 模式下，需使用 k-form。</p>
        <h3>基础</h3>
        <Form :label-width="80" style="width:500px">
            <FormItem label="Input">
                <Input v-model="form.input"></Input>
            </FormItem>
            <FormItem label="Select">
                <Select v-model="form.select" :data="select"></Select>
            </FormItem>
            <FormItem label="DatePicker">
                <DatePicker v-model="form.datepicker"></DatePicker>
            </FormItem>
            <FormItem label="Radio">
                <RadioGroup v-model="form.radio">
                    <Radio label="0">男</Radio>
                    <Radio label="1">女</Radio>
                    <Radio label="2">妖</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox">
                <CheckboxGroup v-model="form.checkbox">
                    <Checkbox label="0">男</Checkbox>
                    <Checkbox label="1">女</Checkbox>
                    <Checkbox label="2">妖</Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="Switch">
                <Switch true-text="是" false-text="否"></Switch>
            </FormItem>
            <FormItem label="Text">
                <Input type="textarea" placeholder="情输入..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">Submit</Button>
                <Button style="margin-left: 10px">Cancel</Button>
            </FormItem>
        </Form>
        <Code lang="xml html">{{demo1}}</Code>

        <h3>表单验证</h3>
        <p>这部分还再开发中....</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      select: [
        { label: "男", value: "0" },
        { label: "女", value: "1" },
        { label: "妖", value: "2" }
      ],
      form: {
        input: "",
        select: 0,
        datepicker: "",
        radio: "1",
        checkbox: []
      },
      demo1:`<Form :label-width="80">
<FormItem label="Input">
    <Input v-model="form.input"></Input>
</FormItem>
<FormItem label="Select">
    <Select v-model="form.select" :data="select"></Select>
</FormItem>
<FormItem label="DatePicker">
    <DatePicker v-model="form.datepicker"></DatePicker>
</FormItem>
<FormItem label="Radio">
    <RadioGroup v-model="form.radio">
        <Radio label="0">男</Radio>
        <Radio label="1">女</Radio>
        <Radio label="2">妖</Radio>
    </RadioGroup>
</FormItem>
<FormItem label="Checkbox">
    <CheckboxGroup v-model="form.checkbox">
        <Checkbox label="0">男</Checkbox>
        <Checkbox label="1">女</Checkbox>
        <Checkbox label="2">妖</Checkbox>
    </CheckboxGroup>
</FormItem>
<FormItem label="Switch">
    <Switch true-text="是" false-text="否"></Switch>
</FormItem>
<FormItem label="Text">
    <Input type="textarea" placeholder="情输入..."></Input>
</FormItem>
<FormItem>
    <Button type="primary">Submit</Button>
    <Button style="margin-left: 10px">Cancel</Button>
</FormItem>
</Form>`
    };
  }
};
</script>

