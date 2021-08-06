import Button from "../button";
import Icon from "../icon";
import { getChild } from "../_tool/utils";
import cloneVNode from '../_tool/clone'
import Drop from './drop'
export default {
  name: 'BasePop',
  props: {
    preCls: String,
    trigger: { type: String, default: "hover" },
    confirm: Boolean,
    dark: Boolean,
    color: String,
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
    updateKey: [String, Object, Array]
  },
  data() {
    return {
      opened: this.value,
      timer: null,
      selection: null
    };
  },
  watch: {
    value(show) {
      this.opened = show
    }
  },
  mounted() {
    this.selection = this.$el
  },
  methods: {
    ok() {
      this.toggle(false);
      this.$emit("ok");
    },
    cancel() {
      this.toggle(false);
      this.$emit("cancel");
    },
    toggle(value) {
      this.opened = value
      this.$emit('input', value)
    },
    mouseEnter(e) {
      clearTimeout(this.timer)
      if (this.trigger == "hover" && !this.confirm && !this.opened) {
        this.toggle(true)
      }
    },
    mouseLeave(e) {
      if (this.trigger == 'hover' &&
        !this.confirm &&
        this.opened
      ) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.toggle(false);
        }, 200);
      }
    },
    contextMenu(e) {
      if (this.trigger == 'contextmenu') {
        e.preventDefault();
        this.toggle(true)
        this.$nextTick(() => {
          this.$refs.overlay.showContextmenu(e)
        })

        return false;
      }
    },
    onClick(e) {
      let { trigger, confirm, opened } = this
      if (trigger == 'contextmenu' && opened && !this.$refs.overlay.$el.contains(e.target)) {
        this.toggle(false)
      }
      if (trigger == "click" || confirm) {
        if (!opened) {
          this.toggle(true)
        }
      }

    },
    renderPopup() {
      let { placement, trigger, title, preCls, $slots, transfer, color, updateKey } = this, childNode;

      title = title || getChild($slots.title)
      if (this.showPlacementArrow) {
        let titleNode, contentNode, footerNode;
        if (this.confirm) {
          contentNode = [<Icon type="help-circle" />, <div class={`k-${preCls}-title`}>{title}</div>]

          footerNode = <div class={`k-${preCls}-footer`}>
            <Button size="small" onClick={this.cancel}>{this.cancelText}</Button>
            <Button type="primary" size="small" onClick={this.ok}>{this.okText}</Button>
          </div>
        } else {
          titleNode = title ? <div class={`k-${preCls}-title`}>{title}</div> : null
          contentNode = $slots.content
        }
        contentNode = contentNode ? <div class={`k-${preCls}-inner-content`}>{contentNode}</div> : null;

        childNode = [<div class={`k-${preCls}-arrow`}><div class={`k-${preCls}-arrow-content`} style={{ backgroundColor: /^#/.test(color) ? color : null }}></div></div>,
        <div class={`k-${preCls}-inner`} style={{ backgroundColor: /^#/.test(color) ? color : null }}>{[titleNode, contentNode, footerNode]}</div>]

      } else {
        childNode = $slots.content
      }
      const props = {
        ref: 'overlay',
        props: {
          transfer,
          value: this.opened,
          className: [`k-${preCls}-content`, { [`k-${preCls}-${color}`]: color && !/^#/.test(color) }],
          width: this.width,
          selection: this.selection,
          placement,
          updateKey,
          color,
          trigger,
          transitionName: `k-${preCls}`
        },
        on: {
          mouseenter: e => {
            if (this.$refs.overlay.$el.contains(e.target)) {
              clearTimeout(this.timer)
            }
          },
          mouseleave: e => {
            if (this.trigger == 'hover') {
              this.toggle(false);
            }
          },
          hide: () => {
            this.toggle(false);
          },
          input: (e) => {
            this.$emit('input', e)
          }
        }
      }
      return <Drop {...props}>{childNode}</Drop>
    },
  },

  render() {
    let { $slots } = this
    let vNode = getChild($slots.default)[0]
    let popup = this.renderPopup()

    const props = {
      on: {
        'contextmenu': e => this.contextMenu(e),
        'mouseenter': e => this.mouseEnter(e),
        'mouseleave': e => this.mouseLeave(e),
        'click': e => this.onClick(e)
      }
    }
    return cloneVNode(vNode, props, popup)
  }
};