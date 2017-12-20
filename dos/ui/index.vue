<template>
   <div>
      <h2>关于</h2>
      <p>酷友前端团队 内部使用UI组件，基于VUE 2.x 开发，在追求完美视觉体验的同时也保证了其性能高效。</p>
      <p>基础组件全部开发完成。目前满足开发。剔除了一些反人类设计组件如 穿梭框（Transfer），下拉树（DownloadTree）,还有一些用不到的组件如 （Slider） 滑块等等</p>
      <p>取“酷友”拼音第一个字母，故命名为KYUI.</p>
      <p>欢迎批评、指正、吐槽、
         <a href="https://github.com/chuchur/kui" target="_blank">Star</a>和
         <a href="#/sponsor">捐助</a>
      </p>
      <br>
      <br>
      <h2>兼容性</h2>
      <p>希望你也是一个高尚、纯粹、脱离了低级趣味的人，希望你的项目走在科技前沿，请使用现在浏览器</p>
      <div class="table-border">
         <table>
            <tr>
               <th>Internet Explorer</th>
               <th>Firefox</th>
               <th>Chrome</th>
            </tr>
            <tr>
               <td>9+</td>
               <td>30+</td>
               <td>42+</td>
            </tr>
         </table>
      </div>
      <Button @click="$router.push({path:'/start'})" type="primary">开始入手</Button>
   </div>
</template>
