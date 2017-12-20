<template>
   <div class="demo-sponsor">
      <h2>支持作者</h2>
      <p>Vue-kyui 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。如果您觉得 Vue-kyui 对您的项目带来了帮助，提高了开发效率，可以用以下方式来表示您的谢意：</p>
      <br>
      <p>
         <a href="https://github.com/chuchur/kui" target="_blank">GitHub</a> 赏个Star；</p>
      <p>
         <a href="http://github.com/chuchur/kui/pulls" target="_blank"> New pull request</a>，帮助KYUI做得更好；</p>
      <p>使用 支付宝 或 微信 捐助（捐助时“添加留言”备注您的Github ID，当然也可以匿名捐助）；</p>
      <div class="paycode">
         <div class="zfb">
            <img :src="zfb" />
            <p>支付宝</p>
         </div>
         <div class="wx">
            <img :src="wx" />
            <p>微信</p>
         </div>

      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      zfb: require("../zfb.jpg"),
      wx: require("../wx.jpg")
    };
  }
};
</script>

