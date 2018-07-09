<template>
  <div :class="classes" v-scroll="setScroll" ref="root">
    <div class="k-tabs-bar">
      <div class="k-tabs-extra" ref="extra">
        <slot name="extra"></slot>
      </div>
      <div :class="['k-tabs-nav-container',{['k-tabs-nav-container-scroll']:this.scrollable}]">
        <span class="k-tabs-tab-prev" @click="scroll('prev')">
          <Icon type="ios-arrow-left" />
        </span>
        <span class="k-tabs-tab-next" @click="scroll('next')">
          <Icon type="ios-arrow-right" />
        </span>
        <div class="k-tabs-nav-wrap">
          <div class="k-tabs-nav-scroll" ref="scroll" :style="scrollStyle">
            <div class="k-tabs-nav" ref="tabs">
              <div class="k-tabs-ink-bar" :style="inkStyles" v-if="!card"></div>
              <div :class="['k-tabs-tab',{['k-tabs-tab-active']:item.active,['k-tabs-tab-disabled']:item.disabled}]" v-for="(item,index) in children" :key="index" @click="handelClick(item)">
                <Icon :type="item.icon" v-if="item.icon" />{{item.label}}
                <Icon type="android-close" v-if="item.closable && card && closable" @click.stop="close(index,item)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="k-tabs-content" :style="styles" ref="panes">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'
import scroll from "../../directives/winScroll";
export default {
  directives: { scroll },
  components: { Icon },
  name: "Tabs",
  props: {
    value: [String, Number],
    card: Boolean,
    closable: Boolean,
    mini: Boolean,
    sample: Boolean,
    animated: Boolean
  },
  data() {
    return {
      children: [],
      active: false,
      paneLeft: 0,
      tabLeft: 0,
      activeName: this.value,
      activeTab: null,
      scrollable: false,
      listWidth: 0,
      itemWidth: 0
    };
  },
  computed: {
    styles() {
      return {
        transform: `translateX(${this.paneLeft * this.itemWidth * -1}px)`,
        width: `${this.listWidth}px`
      };
    },
    classes() {
      return [
        "k-tabs",
        {
          ["k-tabs-mini"]: this.mini,
          ["k-tabs-card"]: this.card && !this.sample,
          ["k-tabs-sample"]: this.sample && !this.card
        }
      ];
    },
    inkStyles() {
      return this.activeTab
        ? {
          width: `${this.activeTab.offsetWidth}px`,
          left: `${this.activeTab.offsetLeft}px`
        }
        : {};
    },
    scrollStyle() {
      return {
        transform: `translateX(${this.tabLeft}px)`
      };
    }
  },
  watch: {
    value(v) {
      this.activeName = v;
      this.handelClick();
    },
    itemWidth(w) {
      this.listWidth = w * this.children.length;
      this.children.forEach(child => {
        child.width = w;
      });
    },
    children() {
      this.$nextTick(() => {
        this.setScroll();
      });
    }
  },

  created() {
    this.$on("tabs-add", this.add);
    this.$on("tabs-remove", this.remove);
  },
  mounted() {
    let index = 0;
    if (this.activeName === undefined) {
      this.activeName = this.children[0].activeName;
      this.children[0].active = true;
      index = 0;
    } else {
      this.children.forEach((child, i) => {
        if (child.active) {
          child.name == this.activeName;
          index = i;
        }
      });
    }
    this.$nextTick(() => {
      this.activeTab = this.$refs.tabs.children[index + 1];
    });
    this.left = index;
    this.paneLeft = index;
    this.itemWidth = this.$refs.root.offsetWidth;
    // console.log(this.itemWidth);
    this.listWidth = this.itemWidth * this.children.length;
  },
  methods: {
    scroll(t) {
      let boxWidth = this.$refs.scroll.offsetWidth;
      let scrollWidth = this.$refs.scroll.scrollWidth;
      if (t == "next") {
        let last = scrollWidth + this.tabLeft - boxWidth; //剩余的要偏移的长度
        if (last == 0) return;
        this.tabLeft -= last > boxWidth ? boxWidth : last;
      } else {
        if (this.tabLeft == 0) return;
        this.tabLeft += -this.tabLeft > boxWidth ? boxWidth : -this.tabLeft;
      }
    },
    setScroll() {
      let boxWidth = this.$refs.scroll.offsetWidth;
      let scrollWidth = this.$refs.scroll.scrollWidth;
      let extraWidth = this.$refs.extra.offsetWidth;
      // console.log(boxWidth,scrollWidth,extraWidth)
      // let s = this.scrollable ? 39 * 2 - 10 : 0;
      this.scrollable = scrollWidth - extraWidth > boxWidth;
      //重置滚动
      if (this.tabLeft < 0) {
        if (-this.tabLeft + boxWidth > scrollWidth) {
          this.tabLeft = -(scrollWidth - boxWidth);
        }
      }
      this.itemWidth = this.$refs.root.offsetWidth;
      this.listWidth = this.itemWidth * this.children.length;
    },
    close(index, item) {
      this.$emit("close", this.activeName);
      this.children.splice(index, 1);
      this.$refs.panes.removeChild(this.$refs.panes.children[index]);
      if (this.children.length && this.activeName == item.activeName) {
        this.activeName = this.children[index - 1].activeName;
        this.children[index - 1].active = true;
        this.paneLeft = index - 1;
      } else if (index < this.paneLeft) {
        this.paneLeft--
      }
    },
    handelClick(item) {
      if (item && item.disabled) return;
      if (item) {
        this.activeName = item.activeName;
      }
      this.children.forEach((child, index) => {
        if (child.activeName == this.activeName) {
          this.paneLeft = index;
          !this.card && (this.activeTab = this.$refs.tabs.children[index + 1]);
          child.active = true;
        } else {
          child.active = false;
        }
      });
      this.$emit("click", this.activeName);
    },
    add(obj) {
      if (obj.activeName === undefined) obj.activeName = this.children.length;
      else obj.active = obj.activeName == this.value;
      obj.width = this.itemWidth
      this.children.push(obj);
    },
    remove(obj) {
      this.children.splice(this.children.indexOf(obj), 1);
    }
  }
};
</script>

