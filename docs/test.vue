<template>
  <div>
    <Dropdown>
      <a>
        Cascading menu
        <Icon type="ios-arrow-down" />
      </a>
      <Menu slot="content">
        <MenuItem>1st menu item</MenuItem>
        <MenuItem>2nd menu item</MenuItem>
        <SubMenu key="test" title="sub menu">
          <MenuItem>3rd menu item</MenuItem>
          <MenuItem>4th menu item</MenuItem>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <MenuItem>5d menu item</MenuItem>
          <MenuItem>6th menu item</MenuItem>
        </SubMenu>
      </Menu>
    </Dropdown>
<!-- 
    <div style="width:256px">
      <Menu v-model="current" :open-keys="openKeys" mode="vertical">
        <MenuItem key="1-1" icon="md-mail">Option 1</MenuItem>
        <MenuItem key="1-2" icon="ios-calendar">Option 2</MenuItem>
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
        </SubMenu>
      </Menu>
    </div>
    <Menu mode="horizontal" v-model="current1">
      <MenuItem key="1" icon="md-mail">Navigation One</MenuItem>
      <MenuItem key="2" icon="ios-keypad" disabled>Navigation Two</MenuItem>
      <SubMenu key="3">
        <template slot="title">
          <Icon type="ios-settings" />Navigation-Submenu
        </template>
        <MenuGroup title="Item 1">
          <MenuItem key="3-1">Option 1</MenuItem>
          <MenuItem key="3-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem key="3-3">Option 1</MenuItem>
          <MenuItem key="3-4">Option 2</MenuItem>
          <SubMenu key="3-5">
            <template slot="title">
              <Icon type="ios-settings" />Navigation - Submenu
            </template>
            <MenuGroup title="Item 1">
              <MenuItem key="3-5-1">Option 1</MenuItem>
              <MenuItem key="3-5-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
              <MenuItem key="3-5-3">Option 1</MenuItem>
              <MenuItem key="3-5-4">Option 2</MenuItem>
            </MenuGroup>
          </SubMenu>
        </MenuGroup>
      </SubMenu>
      <MenuItem key="4">
      <a href="https://k-ui.cn" target="_blank">Navigation -Link</a>
      </MenuItem>
    </Menu>

    <div style="width:256px">
      <Menu v-model="current" :open-keys="openKeys" mode="vertical">
        <MenuItem key="1-1" icon="md-mail">Option 1</MenuItem>
        <MenuItem key="1-2" icon="ios-calendar">Option 2</MenuItem>
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
        </SubMenu>
      </Menu>
    </div>

    <div style="width:256px">
      <Menu v-model="current" mode="vertical" vertical-affixed theme="dark" @affixed="affixed">
        <SubMenu key="sub1">
          <template slot="title">
            <Icon type="ios-keypad" />Navigation One
          </template>
          <MenuItem key="1-1">Option 1</MenuItem>
          <MenuItem key="1-2">Option 2</MenuItem>
          <MenuItem key="1-3">Option 3</MenuItem>
          <MenuItem key="1-4">Option 4</MenuItem>
          <MenuItem key="1-5">Option 5</MenuItem>
          <MenuItem key="1-6" affixed>Option 6</MenuItem>
          <MenuItem key="1-7">Option 7</MenuItem>
          <MenuItem key="1-8">Option 8</MenuItem>
          <MenuItem key="1-9">Option 9</MenuItem>
        </SubMenu>
        <SubMenu key="sub2">
          <template slot="title">
            <Icon type="ios-keypad" />Navigation Two
          </template>
          <MenuItem key="2-1">Option 1</MenuItem>
          <MenuItem key="2-2">Option 2</MenuItem>
          <MenuItem key="2-3" affixed>Option 3</MenuItem>
          <MenuItem key="2-4" affixed>Option 4</MenuItem>
          <MenuItem key="2-5" affixed>Option 5</MenuItem>
          <MenuItem key="2-6" affixed>Option 6</MenuItem>
          <MenuItem key="2-7">Option 7</MenuItem>
        </SubMenu>
        <SubMenu key="sub3">
          <template slot="title">
            <Icon type="ios-settings" />Navigation Three
          </template>
          <MenuItem key="3-1">Option 1</MenuItem>
          <MenuItem key="3-2" affixed>Option 2</MenuItem>
          <MenuItem key="3-3" affixed>Option 3</MenuItem>
          <MenuItem key="3-4">Option 4</MenuItem>
        </SubMenu>
        <SubMenu key="sub4">
          <template slot="title">
            <Icon type="ios-settings" />Navigation Four
          </template>
          <MenuItem key="4-1">Option 1</MenuItem>
          <MenuItem key="4-2">Option 2</MenuItem>
          <MenuItem key="4-3" affixed>Option 3</MenuItem>
          <MenuItem key="4-4" affixed>Option 4</MenuItem>
        </SubMenu>
        <SubMenu key="sub5">
          <template slot="title">
            <Icon type="ios-settings" />Navigation Five
          </template>
          <MenuItem key="5-1" affixed>Option 1</MenuItem>
          <MenuItem key="5-2" affixed>Option 2</MenuItem>
          <MenuItem key="5-3" affixed>Option 3</MenuItem>
          <MenuItem key="5-4" affixed>Option 4</MenuItem>
        </SubMenu>
      </Menu>
    </div> -->
  </div>
</template>
<script> 
export default {
  data() {
    return {
      current: ['1-1'],
      openKeys: ['sub1'],
      current1: ['1']
    }
  },
  methods: {
    affixed(opts, a) {
      console.log(opts, a)
    }
  }
}
</script> 
