<template>
  <div class="k-colorPicker" ref="colorPicker">
    <!-- 颜色显示小方块 -->
    <div @click="isOpen = !isOpen">
      <div class="k-color-button" ref="colorBtn" :style="{backgroundColor:showColor}"></div>
      <div class="k-color-arrow"></div>
    </div>
    <!-- 用以激活HTML5颜色面板 -->
    <!-- <input type="color" ref="html5Color" v-model="html5Color" @change="updataValue(html5Color)"> -->
    <!-- 颜色色盘 -->
    <transition name="dropdown">
      <div class="k-box" ref="colorBox" v-if="isOpen">
        <div class="bd" v-if="!showMore">
          <h3>主题颜色</h3>
          <ul class="tColor">
            <li v-for="(color,i) of tColor" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click="updataValue(color)"></li>
          </ul>
          <ul class="bColor">
            <li v-for="(item,i) of colorPanel" :key="i">
              <ul>
                <li v-for="(color,i) of item" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click="updataValue(color)"></li>
              </ul>
            </li>
          </ul>
          <h3>标准颜色</h3>
          <ul class="tColor">
            <li v-for="(color,i) of bColor" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click="updataValue(color)"></li>
          </ul>
        </div>
        <picker v-if="showMore" @updataValue="updataValue"></picker>
        <div class="k-more">
          <input type="text" class="k-value" v-model="showColor" />
          <k-button type="danger" class="k-more-button" @click="hide">确定</k-button>
          <k-button class="k-more-button" @click="showMore=!showMore">更多</k-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import picker from "./picker";
import { Button } from "../button";
import utils from "../utils";
export default {
  components: { picker, "k-button": Button },
  name: "ColorPicker",
  props: {
    // 默认展示面板
    // 当前颜色值
    value: { type: String, default: "#000000", required: false },
    // 禁用状态
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      // 面板打开状态
      isOpen: false,
      showMore: false,
      // 鼠标经过的颜色块
      hoveColor: null,
      // 主题颜色
      tColor: [
        "#000",
        "#fff",
        "#eeece1",
        "#1e497b",
        "#4e81bb",
        "#e2534d",
        "#9aba60",
        "#8165a0",
        "#47acc5",
        "#f9974c"
      ],
      // 颜色面板
      colorConfig: [
        ["#7f7f7f", "#f2f2f2"],
        ["#0d0d0d", "#808080"],
        ["#1c1a10", "#ddd8c3"],
        ["#0e243d", "#c6d9f0"],
        ["#233f5e", "#dae5f0"],
        ["#632623", "#f2dbdb"],
        ["#4d602c", "#eaf1de"],
        ["#3f3150", "#e6e0ec"],
        ["#1e5867", "#d9eef3"],
        ["#99490f", "#fee9da"]
      ],
      // 标准颜色
      bColor: [
        "#c21401",
        "#ff1e02",
        "#ffc12a",
        "#ffff3a",
        "#90cf5b",
        "#00af57",
        "#00afee",
        "#0071be",
        "#00215f",
        "#72349d"
      ],
      html5Color: this.value,
      showColor: this.hoveColor || this.value
    };
  },
  computed: {
    // showColor() {
    //   return this.hoveColor || this.value;
    // },
    // 颜色面板
    colorPanel() {
      let colorArr = [];
      for (let color of this.colorConfig) {
        colorArr.push(this.gradient(color[1], color[0], 5));
      }
      return colorArr;
    }
  },
  watch: {
    isOpen(v) {
      if (v) {
        //获取元素的位置
        let obj = this.$refs.colorBtn;
        var pos = utils.getElementPos(obj);
        if (pos.x > document.body.clientWidth - 215) {
          this.$refs.colorBox.style.left = "-161px";
        }
        if (pos.y > document.body.clientHeight - 260) {
          this.$refs.colorBox.style.top = "-255px";
        }
      }
    }
  },
  mounted() {},
  methods: {
    hide() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
        this.showMore = false;
      });
      this.$emit("input", this.showColor);
      this.$emit("change", this.showColor);
    },
    // 更新组件的值 value
    updataValue(value) {
      // this.value = value
      if (value != this.value) {
        this.showColor = value;
        // this.$emit("input", value);
        // this.$emit("change", value);
      }
    },
    // 格式化 hex 颜色值
    parseColor(hexStr) {
      if (hexStr.length === 4) {
        hexStr =
          "#" +
          hexStr[1] +
          hexStr[1] +
          hexStr[2] +
          hexStr[2] +
          hexStr[3] +
          hexStr[3];
      } else {
        return hexStr;
      }
    },
    // RGB 颜色 转 HEX 颜色
    rgbToHex(r, g, b) {
      let hex = ((r << 16) | (g << 8) | b).toString(16);
      return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    },
    // HEX 转 RGB 颜色
    hexToRgb(hex) {
      hex = this.parseColor(hex);
      let rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
      }
      return rgb;
    },
    // 计算渐变过渡颜色
    gradient(startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      let sColor = this.hexToRgb(startColor);
      let eColor = this.hexToRgb(endColor);
      // 计算R\G\B每一步的差值
      let rStep = (eColor[0] - sColor[0]) / step;
      let gStep = (eColor[1] - sColor[1]) / step;
      let bStep = (eColor[2] - sColor[2]) / step;
      let gradientColorArr = [];
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          this.rgbToHex(
            parseInt(rStep * i + sColor[0]),
            parseInt(gStep * i + sColor[1]),
            parseInt(bStep * i + sColor[2])
          )
        );
      }
      return gradientColorArr;
    },
    dc(e) {
      this.isOpen = this.$el.contains(e.target) && !this.disabled;
      if (!this.isOpen) {
        this.showMore = false;
        this.showColor = this.value;
        this.$emit("input", this.showColor);
        this.$emit("change", this.showColor);
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.dc);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.dc);
  }
};
</script>
