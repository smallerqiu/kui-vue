<template>
  <div :class="classes">
    <div class="k-tabs-bar">
      <div class="k-tabs-extra">
        <slot name="extra"></slot>
      </div>
      <div :class="['k-tabs-nav-container',{['k-tabs-nav-container-scroll']:this.scroll}]">
        <span class="k-tabs-tab-prev">
          <Icon type="ios-arrow-left" />
        </span>
        <span class="k-tabs-tab-next">
          <Icon type="ios-arrow-right" />
        </span>
        <div class="k-tabs-nav-wrap">
          <div class="k-tabs-nav-scroll">
            <div class="k-tabs-nav" ref="tabs">
              <div class="k-tabs-ink-bar" :style="inkStyles"></div>
              <div :class="['k-tabs-tab',{['k-tabs-tab-active']:item.active,['k-tabs-tab-disabled']:item.disabled}]" v-for="(item,index) in children" :key="index" @click="change(item)">
                <Icon :type="item.icon" v-if="item.icon" />{{item.label}}
                <Icon type="android-close" v-if="item.closable && card && closable" @click="remove(index)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="k-tabs-content" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    value: String,
    card: Boolean,
    closable: Boolean,
    mini: Boolean,
    animated: Boolean,
  },
  computed: {
    styles() {
      return { transform: `translateX(-${this.left * 100}%)` }
    },
    classes() {
      return [
        "k-tabs",
        {
          ["k-tabs-mini"]: this.mini,
          ["k-tabs-card"]: this.card
        }
      ];
    },
    inkStyles() {
      return this.activeTab ? { width: `${this.activeTab.offsetWidth}px`, left: `${this.activeTab.offsetLeft}px` } : {}
    }
  },
  watch: {
    value(v) {
      this.activeName = v
      this.change()
    }
  },
  data() {
    return {
      children: [],
      active: false,
      left: 0,
      activeName: this.value,
      activeTab: null,
      scroll: false
    }
  },
  created() {
    this.$on('tabs-add', this.add)
    this.$on('tabs-remove', this.remove)

  },
  mounted() {
    let index = 0
    if (this.activeName === undefined) {
      this.activeName = this.children[0].activeName
      this.children[0].active = true
      index = 0
    } else {
      this.children.forEach((child, i) => {
        child.active = child.name == this.activeName
        child.active && (index = i)
      })
    }
    this.$nextTick(() => {
      this.activeTab = this.$refs.tabs.children[index + 1]
    })
    this.left = index
  },
  methods: {
    remove(index) {
      this.children.splice(index, 1)
      this.$emit('remove', this.activeName)
      // this.activeName = 
    },
    change(item) {
      if (item && item.disabled) return;
      if (item) {
        this.activeName = item.activeName
      }
      this.children.forEach((child, index) => {
        if (child.activeName == this.activeName) {
          this.left = index
          this.activeTab = this.$refs.tabs.children[index + 1]
          child.active = true
        } else {
          child.active = false
        }
      })
      this.$emit('click', this.activeName)
    },
    add(obj) {
      if (obj.activeName === undefined) obj.activeName = this.children.length
      this.children.push(obj)
    },
    remove(obj) {
      this.children.splice(this.children.indexOf(obj), 1)
    }
  }
};
</script>

