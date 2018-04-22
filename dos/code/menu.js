let code = {}

code.base = `<Menu mode="horizontal" :theme='theme' active-name="1">
<MenuItem name="1" icon="ios-paper">我的产品</MenuItem>
<SubMenu name="1">
  <template slot="title">
    <Icon type="android-walk" />商品管理
  </template>
  <MenuItem name="1-1" >商品信息</MenuItem>
  <MenuItem name="1-2" >商品列表</MenuItem>
  <MenuItem name="1-3" >商品新增</MenuItem>
  <MenuItem name="1-4" >商品筛选</MenuItem>
</SubMenu>
<SubMenu name="2">
  <template slot="title">
    <Icon type="android-walk" />用户管理
  </template>
  <MenuGroup title="超级管理">
    <MenuItem name="2-1" >用户信息</MenuItem>
    <MenuItem name="2-2" >用户列表</MenuItem>
  </MenuGroup>
  <MenuGroup title="普通管理">
    <MenuItem name="2-3" >用户新增</MenuItem>
    <MenuItem name="2-4" >用户筛选</MenuItem>
  </MenuGroup>
</SubMenu>
<MenuItem name="4" icon="social-apple">新闻管理</MenuItem>
<MenuItem name="5" icon="locked">权限管理</MenuItem>
</Menu>
<p>切换主题</p>
<RadioGroup v-model="theme">
    <Radio label="light"></Radio>
    <Radio label="dark"></Radio>
    <Radio label="primary"></Radio>
</RadioGroup>`
code.theme = `<Row>
<Col span="8">
  <Menu :theme='theme' active-name="1" >
    <SubMenu name="0">
      <template slot="title">
        <Icon type="ios-paper" />我的产品
      </template>
      <MenuItem name="0-1" >我的产品1</MenuItem>
      <MenuItem name="0-2" >我的产品2</MenuItem>
      <MenuItem name="0-3" >我的产品3</MenuItem>
      <MenuItem name="0-4" >我的产品4</MenuItem>
    </SubMenu>
    <SubMenu name="1">
      <template slot="title">
        <Icon type="social-apple" />商品管理
      </template>
      <MenuItem name="1-1" >商品信息</MenuItem>
      <MenuItem name="1-2" >商品列表</MenuItem>
      <MenuItem name="1-3" >商品新增</MenuItem>
      <MenuItem name="1-4" >商品筛选</MenuItem>
    </SubMenu>
    
    <SubMenu name="2">
      <template slot="title">
        <Icon type="android-walk" />用户管理
      </template>
      <MenuGroup title="超级管理">
        <MenuItem name="2-1" >用户信息</MenuItem>
        <MenuItem name="2-2" >用户列表</MenuItem>
      </MenuGroup>
      <MenuGroup title="普通管理">
        <MenuItem name="2-3" >用户新增</MenuItem>
        <MenuItem name="2-4" >用户筛选</MenuItem>
      </MenuGroup>
    </SubMenu>
</Menu>
</Col>
<Col span="8">
  <Menu :theme='theme' active-name="1"  accordion>
    <SubMenu name="0">
      <template slot="title">
        <Icon type="ios-paper" />我的产品
      </template>
      <MenuItem name="0-1" >我的产品1</MenuItem>
      <MenuItem name="0-2" >我的产品2</MenuItem>
      <MenuItem name="0-3" >我的产品3</MenuItem>
      <MenuItem name="0-4" >我的产品4</MenuItem>
    </SubMenu>
    <SubMenu name="1">
      <template slot="title">
        <Icon type="social-apple" />商品管理
      </template>
      <MenuItem name="1-1" >商品信息</MenuItem>
      <MenuItem name="1-2" >商品列表</MenuItem>
      <MenuItem name="1-3" >商品新增</MenuItem>
      <MenuItem name="1-4" >商品筛选</MenuItem>
    </SubMenu>
    
    <SubMenu name="2">
      <template slot="title">
        <Icon type="android-walk" />用户管理
      </template>
      <MenuGroup title="超级管理">
        <MenuItem name="2-1" >用户信息</MenuItem>
        <MenuItem name="2-2" >用户列表</MenuItem>
      </MenuGroup>
      <MenuGroup title="普通管理">
        <MenuItem name="2-3" >用户新增</MenuItem>
        <MenuItem name="2-4" >用户筛选</MenuItem>
      </MenuGroup>
        </SubMenu>
    </Menu>
    </Col>
    <Col span="8">
    <Menu :theme='theme'  >
      <MenuGroup title="超级管理">
            <MenuItem name="2-1" >用户信息</MenuItem>
            <MenuItem name="2-2" >用户列表</MenuItem>
      </MenuGroup>
      <MenuGroup title="普通管理">
            <MenuItem name="2-3" >用户新增</MenuItem>
            <MenuItem name="2-4" >用户筛选</MenuItem>
      </MenuGroup>
    </Menu>
    </Col>
  </Row>`

export default code