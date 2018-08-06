let code = {}

code.base =`<Layout class="demo-k-layout">
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
</Layout>
<Layout class="demo-k-layout">
  <Header>Header</Header>
  <Layout>
    <Sider>Sider</Sider>
    <Content>Content</Content>
  </Layout>
  <Footer>Footer</Footer>
</Layout>
<Layout class="demo-k-layout">
  <Header>Header</Header>
  <Layout>
    <Content pull-left>Content</Content>
    <Sider>Sider</Sider>
  </Layout>
  <Footer>Footer</Footer>
</Layout>

<Layout class="demo-k-layout">
  <Sider>Sider</Sider>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</Layout>`

code.tmb =`<Layout>
  <Header>
    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">
      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>
      <MenuItem name="1" icon="ios-home">首页</MenuItem>
      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>
      <MenuItem name="3" icon="ios-heart">评论</MenuItem>
    </Menu>
  </Header>
  <Content style="padding:0 50px;">
    <Breadcrumb style="margin:20px 0;">
      <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>
      <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>
      <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>
    </Breadcrumb>
    <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">
      Content
    </div>
  </Content>
  <Footer>
    2009-2018 &copy; KUI
  </Footer>
</Layout>`

code.tlc =`<Layout>
  <Header>
    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">
      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>
      <MenuItem name="1" icon="ios-home">首页</MenuItem>
      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>
      <MenuItem name="3" icon="ios-heart">评论</MenuItem>
    </Menu>
  </Header>
  <Layout>
    <Sider>
      <Menu theme='dark' active-name="1" width="auto">
        <SubMenu name="0">
          <template slot="title">
            <Icon type="ios-paper" />我的产品
          </template>
          <MenuItem name="0-1">我的产品1</MenuItem>
          <MenuItem name="0-2">我的产品2</MenuItem>
          <MenuItem name="0-3">我的产品3</MenuItem>
          <MenuItem name="0-4">我的产品4</MenuItem>
        </SubMenu>
        <SubMenu name="1">
          <template slot="title">
            <Icon type="logo-apple" />商品管理
          </template>
          <MenuItem name="1-1">商品信息</MenuItem>
          <MenuItem name="1-2">商品列表</MenuItem>
          <MenuItem name="1-3">商品新增</MenuItem>
          <MenuItem name="1-4">商品筛选</MenuItem>
        </SubMenu>

        <SubMenu name="2">
          <template slot="title">
            <Icon type="md-walk" />用户管理
          </template>
          <MenuGroup title="超级管理">
            <MenuItem name="2-1">用户信息</MenuItem>
            <MenuItem name="2-2">用户列表</MenuItem>
          </MenuGroup>
          <MenuGroup title="普通管理">
            <MenuItem name="2-3">用户新增</MenuItem>
            <MenuItem name="2-4">用户筛选</MenuItem>
          </MenuGroup>
        </SubMenu>
      </Menu>
    </Sider>
    <Content style="padding:20px 50px;">
      <Breadcrumb style="margin:0 0 20px 0;">
        <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>
        <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>
        <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>
      </Breadcrumb>
      <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">
        Content
      </div>
    </Content>
  </Layout>
</Layout>`
export default code