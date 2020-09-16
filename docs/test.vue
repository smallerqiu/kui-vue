<template>
<div style="width:256px;padding:200px;">
  <Button icon="logo-apple" @click="show=true" />

  <select>
    <option>fdafdasfdsaf</option>
    <option>fdafdasfdsaf</option>
    <option>fdafdasfdsaf</option>
    <option>fdafdasfdsaf</option>
  </select>
  <button>test</button>
  <Button type="primary">test</Button>
  <Select>
    <Option :value="1">dddd</Option>
    <Option :value="2">dddd</Option>
    <Option :value="3">dddd</Option>
    <Option :value="4">dddd</Option>
    <Option :value="5">dddd</Option>
  </Select>

  <div style="width:256px">
    <Menu v-model="current" :open-keys="openKeys" mode="vertical" verticalAffixed @click="test">
      <SubMenu key="sub1">
        <template slot="title">
          <Icon type="md-mail" />Navigation One
        </template>
        <MenuGroup title="Item 1">
          <MenuItem key="1-1">Option 1</MenuItem>
          <MenuItem key="1-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem key="1-3">Option 3</MenuItem>
          <MenuItem key="1-4">Option 4</MenuItem>
        </MenuGroup>
      </SubMenu>
      <SubMenu key="sub2">
        <template slot="title">
          <Icon type="ios-keypad" />Navigation Two
        </template>
        <MenuItem key="2-1">Option 5</MenuItem>
        <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu title="Item 2" key="sub2-1">
          <template slot="title">
            <Icon type="ios-keypad" />SubMenu
          </template>
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub3">
        <template slot="title">
          <Icon type="ios-settings" />Navigation Three
        </template>
        <MenuItem key="3-1">Option 9</MenuItem>
        <MenuItem key="3-2">Option 10</MenuItem>
        <MenuItem key="3-3">Option 11</MenuItem>
        <MenuItem key="3-4">Option 12</MenuItem>
        </MenuGroup>
      </SubMenu>
    </Menu>
  </div>
  <Modal v-model="show" title="333"></Modal>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      time: 60,
      timer: null,
      current: ['1-1'],
      openKeys: ['sub1']
    };
  },
  beforDestory() {
    clearInterval(this.timer);
  },
  methods: {
    test() {
      console.log('fdsfa')
    },
    search() {
      this.$Message.info("This is search event");
    },
    sendCode() {
      this.time = 59;
      this.$Message.success("验证码发送成功，请注意查收");
      this.timer = setInterval(e => {
        if (this.time < 0) {
          clearInterval(this.timer);
          this.time = 60;
        } else {
          this.time--;
        }
      }, 1000);
    }
  }
};
</script>
