import Button from "../button";
import Icon from "../icon";
import transferDom from "../_tool/transferDom";
export default {
  name: "Drawer",
  directives: { transferDom },
  props: {
    type: { type: String, default: "static" },
    value: { type: Boolean, default: false },
    title: { default: "Title", type: String },
    width: { default: 520, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    placement: { type: String, default: 'right' },
    closable: { type: Boolean, default: true }
  },
  computed: {
    styles() {
      let style = {
        width: `${this.width}px`
      };
      return style;
    },
    wrapCls() {
      const { type, placement } = this
      return ['k-drawer-wrap', { 'k-drawer-form': type == 'form', 'k-drawer-left': placement == 'left' }]
    }
  },
  data() {
    return {
      visible: this.value,
      visiblew: this.value,
      mouseInRect: false
    };
  },
  watch: {
    value(v) {
      if (v) {
        document.body.style.overflow = 'hidden'
        this.visible = v
        this.visiblew = v
      } else {
        document.body.style.overflow = ''
        this.close();
        this.timer = setTimeout(e => {
          this.visiblew = false
        }, 300)
      }
    }
  },
  mounted() {
    this.visible = this.value
    if (this.visible) {
      document.body.style.overflow = 'hidden'
    }
  },
  methods: {
    clickMastToClose(e) {
      if (this.mouseInRect) {
        this.mouseInRect = false;
        return;
      }
      if (!this.$refs.drawer.contains(e.target)) {
        this.close()
      }
    },
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
    }
  },
  render() {
    const { title, visible, visiblew, mouseInRect, cancelText, okText, ok,
      placement, styles, cancel, type, $slots,
      closable, close, clickMastToClose, wrapCls } = this

    const footNode = (
      type == 'form' ? <div class="k-drawer-footer">
        <slot name="footer">
          <Button onClick={cancel}>{cancelText}</Button>
          <Button type="primary" onClick={ok}>{okText}</Button>
        </slot>
      </div> : null
    )
    const closeNode = closable ? <a class="k-drawer-close" onClick={close}><Icon type="md-close" /></a> : null
    const showAni = placement == 'left' ? 'faderight' : 'fadeleft'
    const titleNode = <div class="k-drawer-header"><div class="k-drawer-header-inner">{title}</div></div>
    return (
      <div class="k-drawer" v-transferDom data-transfer="true">
        <transition name="fade">
          <div class="k-drawer-mask" ref="mask" v-show={visible}></div>
        </transition>
        <div class={wrapCls} v-show={visiblew} onClick={clickMastToClose}>
          <transition name={showAni}>
            <div class="drawer animated" ref="drawer" v-show="visible" style={styles} onMouseDown={mouseInRect}>
              <div class="k-drawer-content">
                {closeNode}
                {titleNode}
                <div class="k-drawer-body">
                  {$slots.default}
                </div>
                {footNode}
              </div>
            </div>
          </transition>
        </div>
      </div>
    )
  }
};