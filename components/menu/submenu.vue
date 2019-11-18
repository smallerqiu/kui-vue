<template>
  <li :class="classes" @mouseleave="mouseleave">
    <div class="k-menu-title" @click.stop="handle" @mouseenter="openMenu">
      <slot name="title"></slot>
      <i class="k-ion-ios-arrow-down k-menu-arrow"></i>
    </div>
    <transition name="dropdown" v-if="mode=='horizontal'">
      <div class="k-menu-dropdown" v-show="visible">
        <ul class="k-menu-popup">
          <slot></slot>
        </ul>
      </div>
    </transition>
    <Collapse v-else>
      <div class="k-menu-dropdown" v-show="visible">
        <ul class="k-menu-popup">
          <slot></slot>
        </ul>
      </div>
    </Collapse>
  </li>
</template> 
<script>
import Collapse from '../_tool/collapse.js'
import emitter from '@/mixins/emitter'
export default {
  name: "SubMenu",
  mixins: [emitter],
  components: { Collapse },
  props: {
    name: { type: String, required: true }
  },
  data() {
    return {
      actived: false,
      visible: false,
      mode: '',
      accordion: null,
      children: []
    };
  },
  computed: {
    classes() {
      return [
        "k-menu-submenu",
        {
          ["k-menu-item-actived"]: this.actived,
          ["k-menu-item-opened"]: this.visible
        }
      ];
    },
  },
  mounted() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu') {
      this.$parent.add(this)
    }
  },
  beforeDestroy() {
    let parentName = this.$parent.$options.name
    if (parentName == 'Menu' || parentName == 'SubMenu') {
      this.$parent.remove(this)
    }
  },
  methods: {
    Each(arr, activeName) {
      arr.forEach(child => {
        if (child.$options.name == 'MenuItem') {
          child.actived = child.name == activeName
          if (child.actived) {
            this.actived = true
            child.$parent.actived = true
            if (this.$parent.mode == 'vertical') {
              this.visible = true
            }
          }
        } else if (child.$options.name == 'SubMenu') {
          child.actived = false
          this.Each(child.children, activeName)
        } else if (child.$options.name == 'MenuGroup') {
          child.actived = false
          this.Each(child.children, activeName)
        }
      })
    },
    updateChild(activeName) {
      this.actived = false
      this.Each(this.children, activeName)
    },
    setActived(activeName, openName) {
      this.$parent.setActived(activeName)
      if (this.$parent.mode == 'horizontal') {
        this.visible = false
      }
    },
    add(child) {
      this.children.push(child)
    },
    remove(child) {
      this.children.splice(this.children.indexOf(child), 1)
    },
    handle() {
      if (this.$parent.mode == 'vertical') {
        this.visible = !this.visible
        this.$parent.accordion && this.$parent.setActived('', this.name)
      }
    }, 
    openMenu() {
      if (this.$parent.mode == 'horizontal') {
        clearTimeout(this.timer)
        this.timer = setTimeout(e => this.visible = true, 300)
      }
    },
    mouseleave() {
      if (this.$parent.mode == "horizontal") {
        clearTimeout(this.timer)
        clearTimeout(this.timer2)
        this.timer2 = setTimeout(e => this.visible = false, 300)
      }
    },
  }
};
</script>