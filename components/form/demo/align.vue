<template>
  <div>
    <Form :layout="layout" :labelCol="{ span: 5 }" :wrapperCol="{ span: 6 }">
      <FormItem label="Layout">
        <Segmented v-model="layout" :options="layouts" />
      </FormItem>
      <FormItem label="Input">
        <Input />
      </FormItem>
      <FormItem label="Select">
        <Select style="width: 100%">
          <Option value="0" label="Apple" />
          <Option value="1" label="Banana" />
          <Option value="2" label="Orange" />
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 5 }">
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: "horizontal",
      layouts: ["horizontal", "vertical", "inline"].map((value) => ({ label: value, value })),
    };
  },
};
</script>
