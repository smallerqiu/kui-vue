<template>
   <div>
      <h2>关于</h2>
      <p>基于VUE 2.x 开发，在追求完美视觉体验的同时也保证了其性能高效。</p>
      <p>欢迎批评、指正、吐槽、
         <a href="https://github.com/chuchur/kui" target="_blank">Star</a>和
         <a href="/sponsor">捐助</a>
      </p>
      <p>欢迎一起交流：QQ群：729671035</p>
      <br>
      <br>
      <h2>兼容性</h2>
      <p>希望您也是一个高尚、纯粹、脱离了低级趣味的人，希望您的项目走在科技前沿，请使用现代浏览器</p>
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
