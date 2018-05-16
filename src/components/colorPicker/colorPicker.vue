<template>
  <div :class="classes" v-docClick="close" v-winScroll="setPosition">
    <!-- 颜色显示小方块 -->
    <div @click="toggleDrop" ref="rel">
      <div class="k-color-button" :style="{backgroundColor:showColor}"></div>
      <div class="k-color-arrow"></div>
    </div>
    <!-- 用以激活HTML5颜色面板 -->
    <!-- <input type="color" ref="html5Color" v-model="html5Color" @change="updataValue(html5Color)"> -->
    <!-- 颜色色盘 -->
    <transition name="dropdown">
      <div class="k-colorpicker-popup" ref="dom" v-show="visible" v-transferDom :data-transfer="transfer" :style="popupStyle">
        <div class="bd" v-if="!showMore">
          <h3>主题颜色</h3>
          <ul class="tColor">
            <li v-for="(color,i) of tColor" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click.stop="updataValue(color)"></li>
          </ul>
          <ul class="bColor">
            <li v-for="(item,i) of colorPanel" :key="i">
              <ul>
                <li v-for="(color,i) of item" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click.stop="updataValue(color)"></li>
              </ul>
            </li>
          </ul>
          <h3>标准颜色</h3>
          <ul class="tColor">
            <li v-for="(color,i) of bColor" :key="i" :style="{ backgroundColor: color }" @mouseover="hoveColor = color" @mouseout="hoveColor = null" @click.stop="updataValue(color)"></li>
          </ul>
        </div>
        <picker v-if="showMore" @updataValue="updataValue"></picker>
        <div class="k-more">
          <input type="text" class="k-value" v-model="showColor" />
          <k-button type="danger" class="k-more-button" @click.stop="hide">确定</k-button>
          <k-button class="k-more-button" @click.stop="showMore=!showMore">更多</k-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import picker from "./picker";
import { Button } from "../button";
import emitter from '../../mixins/emitter'
import winScroll from "../../directives/winScroll";
import transferDom from "../../directives/transferDom";
import docClick from "../../directives/docClick";
export default {
  components: { picker, "k-button": Button },
  directives: { docClick, transferDom,winScroll },
  mixins:[emitter],
  name: "ColorPicker",
  props: {
    // 默认展示面板
    // 当前颜色值
    value: { type: String, default: "#000000", required: false },
    // 禁用状态
    disabled: { type: Boolean, default: false },
    transfer: { type: Boolean, default: true }
  },
  data() {
    return {
      left: -1,
      fadeInBottom: false,
      top: 0,
      // 面板打开状态
      visible: false,
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
    popupStyle() {
      let style = {};
      this.range && (style.width = "405px");
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    },
    classes() {
      return [
        "k-colorPicker",
        {
          ["k-colorPicker-open"]: this.visible
        }
      ];
    },
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
  mounted() {},
  methods: {
    toggleDrop() {
      this.visible = !this.visible && !this.disabled;
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      let m = 1;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight
      let clientW = window.innerWidth

      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      let domH = dom.offsetHeight;
      let relH = rel.offsetHeight;
      if (this.transfer) this.left = relPos.left;
      //new
      if (clientH - relPos.top - relH - m < domH) {  //空出来的高度不足以放下dom
        this.fadeInBottom = true
        this.top = this.transfer ? relPos.top - m - domH + scrollTop : -(domH + m)
      } else {
        this.fadeInBottom = false
        this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m
      }
    },
    hide() {
      setTimeout(() => {
        this.visible = !this.visible;
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
    close(e) {
      if (!this.transfer) {
        this.visible = false;
      } else {
        this.visible = this.$refs.dom.contains(e.target);
      }

      if (!this.visible) {
        this.showMore = false;
        this.showColor = this.value;
        this.$emit("input", this.showColor);
        this.$emit("change", this.showColor);
      }
    }
  }
};
</script>
