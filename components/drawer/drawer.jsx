import Button from "../button";
import Icon from "../icon";
import transfer from "../_tool/transfer";
import { measureScrollBar } from '../_tool/utils'

let cacheBodyOverflow = {};

export default {
  name: "Drawer",
  directives: { transfer },
  props: {
    value: Boolean,
    title: { default: "Title", type: String },
    width: { default: 520, type: [Number, String] },
    height: { default: 256, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    placement: { type: String, default: 'right' },
    closable: { type: Boolean, default: true },
    footer: Boolean,
    maskClosable: { type: Boolean, default: true },
  },
  watch: {
    value(v) {
      this.init = true
      this.$nextTick(e => {
        this.visible = v
        this.resetBodyStyle(v)
      })
    },
  },
  data() {
    return {
      visible: this.value,
      init: false
    };
  },
  beforDestory() {
    this.resetBodyStyle(false)
  },
  methods: {
    ok() {
      this.$emit("ok");
    },
    onKeyUp(e) {
      if (this.visible) {
        if (e.keyCode == 27) this.close();
      }
    },
    cancel() {
      this.$emit("cancel");
      this.close();
    },
    close() {
      this.visible = false;
      this.$emit("input", false);
      this.$emit("close");
    },
    maskToClose() {
      if (this.maskClosable) {
        this.close()
      }
    },
    resetBodyStyle(opened) {
      if (!this.visible && !cacheBodyOverflow.hasOwnProperty('overflow')) {
        cacheBodyOverflow = {
          width: document.body.width,
          overflow: document.body.overflow,
          overflowX: document.body.overflowX,
          overflowY: document.body.overflowY,
        }
      }
      if (opened) {
        let barWidth = measureScrollBar(true)
        if (barWidth) {
          document.body.style.width = `calc(100% - ${barWidth}px)`
          document.body.style.overflow = `hidden`
        }
      } else {
        setTimeout(() => {
          Object.keys(cacheBodyOverflow).forEach(key => {
            document.body.style[key] = cacheBodyOverflow[key] || ''
            delete cacheBodyOverflow[key]
          })
        }, 300)
      }
    },
  },
  render() {
    const { title, visible, cancelText, okText, ok,
      placement, cancel, $slots,
      closable, close, } = this
    const hasFooter = this.footer || $slots.footer
    const canelBtn = <Button onClick={cancel}>{cancelText}</Button>
    const okBtn = <Button type="primary" onClick={ok}>{okText}</Button>
    const footNode = (
      hasFooter ? <div class="k-drawer-footer">
        {$slots.footer}
        {!$slots.footer && canelBtn}
        {!$slots.footer && okBtn}
      </div> : null
    )
    const closeNode = closable
      ? <span class="k-drawer-close" onClick={close}><Icon type="md-close" /></span>
      : null
    const transitionName = `k-drawer-${placement}`

    const classes = ['k-drawer', `k-drawer-${placement}`,
      { 'k-drawer-open': visible },
      { 'k-drawer-has-footer': hasFooter },
    ]
    let styles = {}
    if (placement == 'left' || placement == 'right') styles.width = this.width + 'px'
    if (placement == 'top' || placement == 'bottom') styles.height = this.height + 'px'
    // const wrapCls =
    return (
      this.init ? <div class={classes} v-transfer={true}>
        <transition name="fade">
          <div class="k-drawer-mask" ref="mask" v-show={visible} onClick={this.maskToClose}></div>
        </transition>
        <transition name={transitionName}>
          <div class="k-drawer-box" ref="drawer" v-show={visible} style={styles}>
            <div class="k-drawer-content">
              {closeNode}
              <div class="k-drawer-header"><div class="k-drawer-header-inner">{title}</div></div>
              <div class="k-drawer-body">
                {$slots.default}
              </div>
              {footNode}
            </div>
          </div>
        </transition>
      </div> : ''
    )
  }
};