import { Button } from "../button";
import Icon from "../icon";
import { getChildren } from "../utils/element";
// import cloneVNode from '../utils/clone'
import { cloneVNode } from '../utils/vue';
import Drop from './drop'
import { t } from "../locale";
import { HelpCircle } from 'kui-icons'
import { isColor } from "../utils/color";
import { colors, placements } from "../const/var";
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
    offsetLeft: { type: Number, default: 0 },
    placement: {
      validator(value) {
        return placements.includes(value);
      },
      default: "top"
    },
    okText: String,
    cancelText: String,
    updateKey: [String, Object, Array],
    show: Boolean,
    isMenu: { type: Boolean, default: false },
    extendWidth: Boolean,
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
      let show = this.show || value
      this.opened = show
      this.$emit('input', show)
    },
    mouseEnter(e) {
      clearTimeout(this.timer)
      if (this.trigger == "hover" && !this.confirm && !this.opened) {
        this.toggle(true)
      }
      this.$emit('mouseenter', e)
    },
    mouseLeave() {
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
      this.$emit('click', e)
    },
    renderPopup() {
      let { placement, trigger, title, preCls, $slots, color, updateKey } = this, childNode;

      let okText = this.okText || t('k.pop.ok')
      let cancelText = this.cancelText || t('k.pop.cancel')
      if (this.showPlacementArrow) {
        title = title || getChildren($slots.title)
        let titleNode, contentNode, footerNode;
        if (this.confirm) {
          contentNode = [<Icon type={HelpCircle} />, <div class={`k-${preCls}-title`}>{title}</div>]

          footerNode = <div class={`k-${preCls}-footer`}>
            <Button size="small" onClick={this.cancel}>{cancelText}</Button>
            <Button type="primary" size="small" onClick={this.ok}>{okText}</Button>
          </div>
        } else {
          titleNode = title.length ? <div class={`k-${preCls}-title`}>{title}</div> : null
          contentNode = $slots.content
        }
        contentNode = contentNode ? <div class={`k-${preCls}-body`}>{contentNode}</div> : null;
        if (!titleNode && !contentNode && !footerNode) {
          childNode = null
        } else {
          let resultColor = isColor(color) ? (colors.includes(color) ? `var(--kui-color-${color})` : color) : null
          childNode = [
            <div class={`k-${preCls}-content`} style={{ backgroundColor: resultColor }}>
              {[titleNode, contentNode, footerNode]}
              <div class={`k-${preCls}-arrow`} style={{ color: resultColor }}>
                <svg style={{ fill: isColor(color) ? (colors.includes(color) ? `var(--kui-color-${color})` : color) : "currentcolor" }} viewBox="0 0 24 8">
                  <path id="ot" d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z" />
                  <path stroke="currentcolor" id="in" d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z" />
                </svg>
              </div>
            </div>]
        }
      } else {
        childNode = $slots.content
      }
      if (!childNode) {
        return null
      }
      // console.log(childNode)
      const props = {
        ref: 'overlay',
        key: this.$vnode.key,
        props: {
          transfer: true,
          offsetLeft: this.offsetLeft,
          value: this.opened,
          className: [`k-${preCls}`, {
            [`k-${preCls}-${color}`]: colors.includes(color),
            [`k-${preCls}-has-color`]: isColor(color),
            [`k-${preCls}-has-arrow`]: this.showPlacementArrow,
            [`k-${preCls}-dark`]: this.dark
          }],
          width: this.width,
          selection: this.selection,
          placement,
          updateKey,
          color,
          trigger,
          transitionName: `k-${preCls}`,
          extendWidth: this.extendWidth
        },
        on: {
          mouseenter: e => {
            if (this.$refs.overlay.$el.contains(e.target)) {
              clearTimeout(this.timer)
              this.$emit('mouseenter', e)
            }
          },
          mouseleave: e => {
            this.$emit('mouseleave', e)
            if (this.trigger == 'hover') {
              this.timer = setTimeout(() => {
                this.toggle(false);
              }, 200);
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
    let vNode = getChildren($slots.default)[0]
    let popup = this.renderPopup()
    let props = {}
    if (!this.isMenu) {
      props.on = {
        'contextmenu': e => this.contextMenu(e),
        'mouseenter': e => this.mouseEnter(e),
        'mouseleave': e => this.mouseLeave(e),
        'click': e => this.onClick(e)
      }
    }
    return cloneVNode(vNode, props, true, popup)
  }
};