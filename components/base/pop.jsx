import { defineComponent, ref, computed, onMounted, watch, h } from 'vue';
import { Button } from "../button";
import Icon from "../icon";
import Drop from './drop';
import { t } from "../locale";
import { HelpCircle } from 'kui-icons';

export default defineComponent({
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
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value)
        );
      },
      default: "top"
    },
    okText: String,
    cancelText: String,
    updateKey: [String, Object, Array],
    show: Boolean,
    isMenu: { type: Boolean, default: false }
  },
  setup(props, { emit, slots }) {
    const opened = ref(props.value);
    const timer = ref(null);
    const selection = ref(null);

    watch(() => props.value, (show) => {
      opened.value = show;
    });

    onMounted(() => {
      selection.value = document.querySelector('.base-pop'); // Adjust the selector as needed
    });

    const ok = () => {
      toggle(false);
      emit("ok");
    };

    const cancel = () => {
      toggle(false);
      emit("cancel");
    };

    const toggle = (value) => {
      let show = props.show || value;
      opened.value = show;
      emit('input', show);
    };

    const mouseEnter = (e) => {
      clearTimeout(timer.value);
      if (props.trigger === "hover" && !props.confirm && !opened.value) {
        toggle(true);
      }
      emit('mouseenter', e);
    };

    const mouseLeave = (e) => {
      if (props.trigger === 'hover' && !props.confirm && opened.value) {
        clearTimeout(timer.value);
        timer.value = setTimeout(() => {
          toggle(false);
        }, 200);
      }
    };

    const contextMenu = (e) => {
      if (props.trigger === 'contextmenu') {
        e.preventDefault();
        toggle(true);
        nextTick(() => {
          if (overlay.value) {
            overlay.value.showContextmenu(e);
          }
        });
        return false;
      }
    };

    const onClick = (e) => {
      let { trigger, confirm, opened: isOpened } = props;
      if (trigger === 'contextmenu' && isOpened && !overlay.value.$el.contains(e.target)) {
        toggle(false);
      }
      if (trigger === "click" || confirm) {
        if (!isOpened) {
          toggle(true);
        }
      }
      emit('click', e);
    };

    const renderPopup = () => {
      let { placement, trigger, title, preCls, color, updateKey } = props;
      let childNode;

      let okText = props.okText || t('k.pop.ok');
      let cancelText = props.cancelText || t('k.pop.cancel');

      if (props.showPlacementArrow) {
        title = title || getChild(slots.title);
        let titleNode, contentNode, footerNode;
        if (props.confirm) {
          contentNode = [<Icon type={HelpCircle} />, <div class={`k-${preCls}-title`}>{title}</div>];
          footerNode = <div class={`k-${preCls}-footer`}>
            <Button size="small" onClick={cancel}>{cancelText}</Button>
            <Button type="primary" size="small" onClick={ok}>{okText}</Button>
          </div>;
        } else {
          titleNode = title.length ? <div class={`k-${preCls}-title`}>{title}</div> : null;
          contentNode = slots.content;
        }
        contentNode = contentNode ? <div class={`k-${preCls}-body`}>{contentNode}</div> : null;
        if (!titleNode && !contentNode && !footerNode) {
          childNode = null;
        } else {
          childNode = [
            <div class={`k-${preCls}-content`} style={{ backgroundColor: /^#/.test(color) ? color : null }}>
              {[titleNode, contentNode, footerNode]}
              <div class={`k-${preCls}-arrow`}>
                <svg style={{ fill: /^#/.test(color) ? color : 'currentcolor' }} viewBox="0 0 24 7">
                  <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path>
                </svg>
              </div>
            </div>
          ];
        }
      } else {
        childNode = slots.content;
      }
      if (!childNode) {
        return null;
      }

      const overlayProps = {
        ref: overlay,
        key: props.updateKey,
        props: {
          transfer: true,
          offsetLeft: props.offsetLeft,
          value: opened.value,
          className: [`k-${preCls}`, {
            [`k-${preCls}-${color}`]: color && !/^#/.test(color),
            [`k-${preCls}-has-color`]: /^#/.test(color),
            [`k-${preCls}-has-arrow`]: props.showPlacementArrow,
            [`k-${preCls}-dark`]: props.dark
          }],
          width: props.width,
          selection: selection.value,
          placement,
          updateKey,
          color,
          trigger,
          transitionName: `k-${preCls}`
        },
        on: {
          mouseenter: (e) => {
            if (overlay.value && overlay.value.$el.contains(e.target)) {
              clearTimeout(timer.value);
              emit('mouseenter', e);
            }
          },
          mouseleave: (e) => {
            emit('mouseleave', e);
            if (props.trigger === 'hover') {
              timer.value = setTimeout(() => {
                toggle(false);
              }, 200);
            }
          },
          hide: () => {
            toggle(false);
          },
          input: (e) => {
            emit('input', e);
          }
        }
      };
      return <Drop {...overlayProps}>{childNode}</Drop>;
    };

    const overlay = ref(null);

    return () => {
      let vNode = getChild(slots.default)[0];
      let popup = renderPopup();
      let props = {};
      if (!props.isMenu) {
        props.on = {
          'contextmenu': e => contextMenu(e),
          'mouseenter': e => mouseEnter(e),
          'mouseleave': e => mouseLeave(e),
          'click': e => onClick(e)
        };
      }
      return cloneVNode(vNode, props, [popup]);
    };
  }
});