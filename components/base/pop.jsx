import Button from "../button";
import Icon from "../icon";
import { cloneVNode, isVnode, hasProp } from "../_tool/utils";
import Drop from './drop'

export default {
  name: 'BasePop',
  props: {
    preCls: String,
    trigger: { type: String, default: "hover" },
    confirm: Boolean,
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    value: { type: Boolean },
    title: String,
    showPlacementArrow: { type: Boolean, default: true },
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].indexOf(value) >= 0
        );
      },
      default: "top"
    },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
  },
  data() {
    return {
      showPop: this.value,
      showInit: false,
      timer: null,
    };
  },
  watch: {
    value(show) {
      this.showPop = show
    }
  },
  methods: {
    ok() {
      this.showPop = false;
      this.$emit("ok");
    },
    cancel() {
      this.showPop = false;
      this.$emit("cancel");
    },
    setPopShow() {
      // if (!this.showInit) {
      this.showInit = true
      this.$nextTick(e => {
        this.showPop = true
        this.$emit('input', true)
      })
      // } else {
      // this.showPop = !this.showPop;
      // }
    },
    mouseEnter(e) {
      clearTimeout(this.timer)
      if (this.trigger == "hover" && !this.confirm && !this.showPop) {
        this.setPopShow()
      }
    },
    mouseLeave(e) {
      if (this.trigger == 'hover' &&
        !this.confirm &&
        this.showPop
      ) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.showPop = false
        }, 200);
      }
    },
    mouseEvent(e) {
      if (this.trigger == 'contextmenu' && e.which == 3) {
        if (!this.showInit) {
          this.showInit = true
          this.$nextTick(() => {
            this.showPop = true
            this.$nextTick(() => {
              this.$refs.overlay.baseContextmenu(e)
            })
          })
        } else {
          this.showPop = true
          this.$nextTick(() => {
            this.$refs.overlay.baseContextmenu(e)
          })
        }

        e.preventDefault();
        return false;
      }
      if (this.trigger == "click" || this.confirm) {
        this.setPopShow()
      }
    },
    renderPopup() {
      let { placement, title, preCls, $slots } = this, childNode;

      title = title || $slots.title
      if (this.showPlacementArrow) {
        let titleNode, contentNode, footerNode;
        if (this.confirm) {
          contentNode = [<Icon type="help-circle" />, <div class={`k-${preCls}-title`}>{title}</div>]

          footerNode = <div class={`k-${preCls}-footer`}>
            <Button size="small" onClick={this.cancel}>{this.cancelText}</Button>
            <Button type="primary" size="small" onClick={this.ok}>{this.okText}</Button>
          </div>
        } else {
          titleNode = title ? <div class={`k-${preCls}-title`}>{title}</div> : ''
          contentNode = $slots.content
        }
        contentNode = contentNode ? <div class={`k-${preCls}-inner-content`}>{contentNode}</div> : null;

        childNode = [<div class={`k-${preCls}-arrow`}></div>,
        <div class={`k-${preCls}-inner`}>{[titleNode, contentNode, footerNode]}</div>]

      } else {
        childNode = $slots.content
      }

      const props = {
        ref: 'overlay',
        props: {
          // transfer: false,
          transfer: this.transfer,
          show: this.showPop,
          className: `k-${preCls}-content`,
          width: this.width,
          placement: placement,
          trigger: this.trigger,
          transitionName: `k-${preCls}`
        },
        // attrs: {
        //   'k-placement': placement
        // },
        on: {
          mouseenter: e => {
            if (this.$refs.overlay.$el.contains(e.target)) {
              clearTimeout(this.timer)
            }
          },
          mouseleave: e => {
            if (this.trigger == 'hover') {
              this.showPop = false
            }
          },
          click: e => {
            //   this.$emit('click', e) //子集点击
            if (hasProp(this, 'value')) {
              // console.log('hasvalue,click', this.value);
              this.$emit('input', false);
            } else {
              this.showPop = false
              // console.log('click');
            }
          },
          input: (e) => {
            if (hasProp(this, 'value')) {
              this.$emit('input', e);
            } else {
              this.showPop = e
            }
          }
        }
      }
      return this.showInit ? <Drop {...props}>{childNode}</Drop> : null
    },
  },

  render() {
    let { $slots } = this

    let child = ($slots.default || []).filter(c => c.tag || c.text.trim() !== '');
    child = child.length === 1 ? child[0] : child;
    if (!child) {
      return null;
    };
    child = isVnode(child) ? child : <span>{child}</span>;
    let popup = this.renderPopup()


    const props = {
      children: popup,
      on: {
        'contextmenu': e => this.mouseEvent(e),
        'mouseenter': e => this.mouseEnter(e),
        'mouseleave': e => this.mouseLeave(e),
        'click': e => this.mouseEvent(e)
      }
    }
    return cloneVNode(child, props)
  }
};