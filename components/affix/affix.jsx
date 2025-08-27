import resize from "../directives/resize";
import { defineComponent, onMounted, onBeforeUnmount, watch, ref, nextTick } from "vue";
import { withInstall } from '../utils/vue';

const Affix = defineComponent({
  name: "Affix",
  directives: { resize },
  props: {
    offsetTop: { type: Number, default: 0 },
    offsetBottom: Number,
    target: {
      type: Function,
      default: () => {
        return window;
      },
    },
  },
  setup(props, { slots, emit }) {
    let target = props.target()
    const affixRef = ref();

    const fixed = ref(false);
    const styles = ref({})
    const placeholderStyles = ref({})
    let resizeObserver = null

    const updatePosition = () => {
      if (!affixRef.value || !target) return;
      const rect = affixRef.value.getBoundingClientRect()
      const isWindow = target === window;
      const targetRect = !isWindow ? target.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
      let isFixed = false

      if (props.offsetBottom != undefined) {
        const offset = targetRect.bottom - rect.bottom - props.offsetBottom
        if (offset <= 0) {
          isFixed = true
          styles.value = {
            bottom: `${window.innerHeight - targetRect.bottom + props.offsetBottom}px`,
            width: `${rect.width}px`,
          }
        } else {
          isFixed = false
          styles.value = {}
        }
      } else {
        const offset = rect.top - targetRect.top - props.offsetTop
        if (offset <= 0) {
          isFixed = true
          styles.value = {
            top: `${targetRect.top + props.offsetTop}px`,
            width: `${rect.width}px`,
          }
        } else {
          isFixed = false
          styles.value = {}
        }
      }

      placeholderStyles.value = isFixed ? { height: `${rect.height}px`, width: `${rect.width}px` } : null
      if (fixed.value !== isFixed) {
        fixed.value = isFixed
        emit('change', isFixed)
      }

    };
    onBeforeUnmount(() => {
      target?.removeEventListener('scroll', updatePosition)
      if (resizeObserver != null) {
        resizeObserver.disconnect()
      }
    });
    onMounted(() => {
      nextTick(() => {
        target = props.target()?.value || props.target()
        target?.addEventListener('scroll', updatePosition)
        updatePosition()
        if (target && target !== window && 'ResizeObserver' in window) {
          resizeObserver = new ResizeObserver(updatePosition);
          resizeObserver.observe(target);
        }
      })

    });
    watch(() => [props.offsetTop, props.offsetBottom, props.target], () => {
      nextTick(updatePosition)
    })

    return () => {
      return (
        <div style={placeholderStyles.value} ref={affixRef} v-resize={updatePosition}>
          <div style={styles.value} class={{ ["k-affix"]: fixed.value }}>
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});
export default withInstall(Affix);