<template>
   <div>
      <h2>Menu 导航菜单</h2>
      <p>此组件还在紧急的开发当中...</p>
      <Menu mode="horizontal" theme='light' active-name="1">
         <MenuItem name="1" icon="ios-paper">我的产品</MenuItem>
         <MenuItem name="2" icon="android-walk">我的项目</MenuItem>
         <MenuItem name="3" icon="ios-person">用户管理</MenuItem>
         <MenuItem name="4" icon="social-apple">新闻管理</MenuItem>
         <MenuItem name="5" icon="locked">权限管理</MenuItem>
      </Menu>
   </div>
</template>
<script>
export default {
  data(){
     return{
        theme:'light'
     }
  }
}
</script>
