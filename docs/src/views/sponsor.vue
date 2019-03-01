<template>
  <div class="demo-sponsor">
    <h2>支持作者</h2>
    <p>kui-vue 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。如果您觉得 kui-vue 对您的项目带来了帮助，提高了开发效率，可以用以下方式来表示您的谢意：</p>
    <br>
    <p>
      <a href="https://gitee.com/chuchur/kui-vue" target="_blank">Gitee</a> 赏个Star；</p>
    <p>
      <a href="http://gitee.com/chuchur/kui-vue/pulls" target="_blank"> New pull request</a>，帮助KUI做得更好；</p>
    <p>使用 支付宝 或 微信 捐助（捐助时“添加留言”备注您的Gitee ID，当然也可以匿名捐助）；</p>
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
    <h2>感谢以下捐助的朋友</h2>
    <div class="tks-list">
      <p v-for="(item,i) in data" :key="i">
        <span class="name">{{item.name}} </span> : ¥{{item.money}}
        <span :class="item.type=='支付宝'?'t1':'t2'">{{item.type}}</span>
        <span class="time">{{item.time}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zfb: require("../assets/zfb.jpg"),
      wx: require("../assets/wx.jpg"),
      data: [
        { type: "支付宝", name: "*强", money: "66.6", time: "2018-7-2" },
        { type: "支付宝", name: "*如雷", money: "18.88", time: "2017-12-20" },
        { type: "微信", name: "匿名", money: "1.66", time: "2017-12-26" },
        { type: "支付宝", name: "匿名", money: "5.00", time: "2017-12-27" },
        { type: "支付宝", name: "*普", money: "8.00", time: "2017-12-29" },
        { type: "支付宝", name: "*龙新", money: "0.88", time: "2018-1-2" },
        { type: "微信", name: "*盾", money: "1.5", time: "2018-1-2" },
        { type: "微信", name: "*3589", money: "3.00", time: "2018-1-5" },
        { type: "支付宝", name: "匿名", money: "1.88", time: "2018-1-6" },
        { type: "微信", name: "匿名", money: "1.00", time: "2018-1-7" },
        { type: "支付宝", name: "*cccc", money: "2.00", time: "2018-1-8" },
        { type: "微信", name: "*unni", money: "5.00", time: "2018-1-8" },
        { type: "支付宝", name: "*涛", money: "8.88", time: "2018-1-12" },
        { type: "微信", name: "*丽娜", money: "168.88", time: "2018-1-19" }
      ]
    };
  }
};
</script>

