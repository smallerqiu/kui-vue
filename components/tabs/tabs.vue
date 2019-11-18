<template>
  <div :class="classes" ref="root">
    <div class="k-tabs-bar">
      <div class="k-tabs-extra" ref="extra">
        <slot name="extra"></slot>
      </div>
      <div :class="['k-tabs-nav-container',{['k-tabs-nav-container-scroll']:this.scrollable}]">
        <span class="k-tabs-tab-prev" @click="scroll('prev')">
          <Icon type="ios-arrow-back" />
        </span>
        <span class="k-tabs-tab-next" @click="scroll('next')">
          <Icon type="ios-arrow-forward" />
        </span>
        <div class="k-tabs-nav-wrap">
          <div class="k-tabs-nav-scroll" ref="scroll" :style="scrollStyle">
            <div class="k-tabs-nav" ref="tabs">
              <div class="k-tabs-ink-bar" :style="inkStyles" v-if="!card && animated"></div>
              <div :class="['k-tabs-tab',{['k-tabs-tab-active']:item.actived,['k-tabs-tab-disabled']:item.disabled}]" v-for="(item,index) in children" :key="index" @click="tabClick(item)">
                <Icon :type="item.icon" v-if="item.icon" />{{item.label}}
                <Icon type="md-close" v-if="item.closable && card && closable" @click.stop="close(index,item)" />
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
import scroll from "../_tool/resize";
export default {
  directives: { scroll },
  components: { Icon },
  name: "Tabs",
  props: {
    value: { type: [String, Number], default: 0 },
    card: Boolean,
    closable: Boolean,
    mini: Boolean,
    sample: Boolean,
    animated: { type: Boolean, default: true }
  },
  data() {
    return {
      children: [],
      currentIndex: 0,
      tabLeft: 0,
      activeName: this.value,
      scrollable: false,
      listWidth: 0,
      itemWidth: 0,
      isAnimated: this.animated,
      lineWidth: 0, lineLeft: 0,
    };
  },
  computed: {
    styles() {
      if (this.isAnimated) {
        let { currentIndex, itemWidth, listWidth } = this
        // console.log(currentIndex,itemWidth,listWidth)
        return {
          transform: `translateX(${currentIndex * itemWidth * -1}px)`,
          width: `${listWidth}px`
        };
      }
      return {}
    },
    classes() {
      return [
        "k-tabs",
        {
          ["k-tabs-mini"]: this.mini,
          ["k-tabs-animated"]: this.isAnimated,
          ["k-tabs-card"]: this.card && !this.sample,
          ["k-tabs-sample"]: this.sample && !this.card
        }
      ];
    },
    inkStyles() {
      let { lineWidth, lineLeft } = this
      return { width: `${lineWidth}px`, left: `${lineLeft}px` }
    },
    scrollStyle() {
      return {
        transform: `translate3d(${this.tabLeft}px,0,0)`
      };
    }
  },
  watch: {
    value(v1, v2) {
      if (v1 != v2) {
        this.activeName = v1;
        this.changeTab()
      }
    },
  },

  created() {
    this.$on("tabs-add", this.add);
    this.$on("tabs-remove", this.remove);
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
    clearTimeout(this.timer)
  },
  mounted() {
    this.$nextTick(e => this.setLine())
  },
  methods: {
    resize() {
      clearTimeout(this.timer)
      this.timer = setTimeout(e => {
        this.setScroll()
        if (this.isAnimated) {
          this.children.forEach(c => c.width = this.$refs.root.offsetWidth)
        }
      }, 300)
    },
    setLine() {
      if (this.isAnimated) {
        let tab = this.$refs.tabs.children[this.currentIndex + 1];
        if (tab) {
          this.lineWidth = tab.offsetWidth
          this.lineLeft = tab.offsetLeft
        }
        tab = null
      }
    },
    scroll(t) {
      if (!this.$refs.root) return;
      let { offsetWidth, scrollWidth } = this.$refs.scroll
      if (t == "next") {
        let last = scrollWidth + this.tabLeft - offsetWidth; //剩余的要偏移的长度
        if (last == 0) return;
        this.tabLeft -= last > offsetWidth ? offsetWidth : last;
      } else {
        if (this.tabLeft == 0) return;
        this.tabLeft += -this.tabLeft > offsetWidth ? offsetWidth : -this.tabLeft;
      }
    },
    setScroll() {
      if (!this.$refs.root) return;
      let { offsetWidth, scrollWidth } = this.$refs.scroll
      let extraWidth = this.$refs.extra.offsetWidth;
      // console.log(boxWidth,scrollWidth,extraWidth)
      // let s = this.scrollable ? 39 * 2 - 10 : 0;
      this.scrollable = scrollWidth - extraWidth > offsetWidth;
      //重置滚动
      if (this.tabLeft < 0) {
        if (-this.tabLeft + offsetWidth > scrollWidth) {
          this.tabLeft = -(scrollWidth - offsetWidth);
        }
      }
      this.itemWidth = this.$refs.root.offsetWidth;
      this.listWidth = this.itemWidth * this.children.length;
    },
    close(index, item) {
      this.$emit("close", this.activeName);
      this.children.splice(index, 1);
      let panes = this.$refs.panes
      if (panes.children[index]) {
        panes.removeChild(panes.children[index]);
      }
      if (this.children.length && this.activeName == item.activeName) {
        this.activeName = this.children[index - 1].activeName;
        this.children[index - 1].actived = true;
        this.currentIndex = index - 1;
      } else if (index < this.currentIndex) {
        this.currentIndex--
      }
      this.$nextTick(e => this.setScroll());
    },
    tabClick(item) {
      if (item.disabled) return;
      this.activeName = item.activeName;
      this.$emit('input', item.activeName)

      this.$emit("tab-click", this.activeName);
      if (this.value !== undefined) {
        this.changeTab()
      }
    },
    changeTab() {
      this.children.forEach((child, index) => {
        if (child.activeName == this.activeName) {
          this.currentIndex = index;
          child.actived = true;
        } else {
          child.actived = false;
        }
        if (!this.isAnimated) {
          child.visible = child.actived
        }
      });
      this.setLine()
    },
    add(obj) {
      obj.index = this.children.length;
      obj.activeName = obj.activeName || obj.index
      obj.actived = obj.activeName == this.value;
      if (obj.actived) {
        this.currentIndex = this.children.length
      }
      if (this.isAnimated) {
        if (!obj.$el.offsetWidth) {
          obj.visible = obj.actived
          this.isAnimated = false
        } else {
          obj.width = this.itemWidth = this.$refs.root.offsetWidth
        }
      } else {
        obj.visible = obj.actived
      }

      this.children.push(obj);
      this.$nextTick(e => this.setScroll());
    },
    remove(obj) {
      this.children.splice(this.children.indexOf(obj), 1);
      this.$nextTick(e => this.setScroll());
    }
  }
};
</script>

