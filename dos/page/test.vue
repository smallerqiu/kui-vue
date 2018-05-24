<template>
    <div style="width:700px;">
        <div class="t">
            <div class="t1"></div>
        </div>
    </div>
</template>
<style lang="less">
@keyframes t {
  from { transform: rotate(0deg);  }
  to { transform: rotate(360deg);  }
}
@-webkit-keyframes t {
  from { transform: rotate(0deg);  }
  to { transform: rotate(360deg);  }
}
.t {
  height: 500px;
  width: 500px;
  position: relative;
  border-radius: 50%;
  transform: scale(.8);
  border: 1px solid #dedede;
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    background: radial-gradient(72px, #f00, #ff0, #080);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -25px;
    margin-left: -25px;
    box-shadow: 0 0 37px #fcff4a;
  }
  .t1 {
    height: 20px;
    border-radius: 50%;
    width: 20px;
    margin-top: -10px;
    top: 50%;
    left: -10px;
    background: radial-gradient(26px, #0082ff, #184608, #003ade);
    position: absolute;
    animation: t 3s infinite linear;
    transform-origin: 260px center;
  }
}
</style>
<script>
import code from '../code/form'
export default {
    data() {
        return {}
    },
    methods: {

    }
};
</script>

