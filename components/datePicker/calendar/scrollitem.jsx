import { nextTick, ref, onMounted, defineComponent } from 'vue'
const fix = v => ('0' + v).slice(-2)

const scrollToCenter = (e, animate = true) => {
  // 计算 span 元素相对于 div 元素的偏移
  const offset = e.target.offsetTop;
  const ul = e.target.parentNode
  // 计算滚动距离使 span 元素垂直居中
  const scrollDistance = offset - parseFloat((ul.clientHeight / 2).toFixed(2)) + parseFloat((e.target.clientHeight / 2).toFixed(2)) //- (this.pickerSize == 'small' ? 84 / 2 : 84 / 2);
  // 滚动到计算出的位置
  // console.log(ul, scrollDistance)
  if (animate) {
    ul.scrollTo({ top: scrollDistance, behavior: 'smooth' });
  } else {
    ul.scrollTop = scrollDistance
  }
  // console.log(ul.scrollTop)
}
function Col(props) {
  return (<div class={`k-calendar-${props.type}`} >
    {
      props.list.map((item, index) => {
        return <span key={index} class={props.getClass(item)} onClick={(e) => props.onChange?.(e, item)}>{props.fix ? fix(item) : item}</span>
      })
    }
  </div>)
}

export default defineComponent({
  props: {
    items: Array,
    type: String,
    fix: Boolean,
    disabledTime: Function,
    current: Number
  },
  setup(props, { emit }) {
    const onChange = (e, item) => {
      scrollToCenter(e, true)
      emit('select', item)
    }
    const isDisabledTime = (types, value) => {
      let fdtime = props.disabledTime()
      if (fdtime && types in fdtime && typeof fdtime[types] === 'function') {
        let [a, b] = fdtime[types]() || []
        if (a && b) {
          return value >= a && value <= b
        }
        return false
      }
      return false
    }
    const getClass = (item) => {
      return [
        `k-calendar-${props.type}-item`,
        {
          // [`k-calendar-${props.type}-this`]: props.value === item,
          [`k-calendar-item-selected`]: props.current !== null && props.current === item,
          [`k-calendar-${props.type}-disabled`]: isDisabledTime(props.disabledType, item),
        }
      ]
    }
    const refContainer = ref(null)
    onMounted(() => {
      nextTick(() => {
        const index = props.items.indexOf(props.current)
        // props.type == 'months' && console.log(props.items, props.current)
        index >= 0 && scrollToCenter({ target: refContainer.value.children[index] }, false)
      })
    })
    return () => <Col fix={props.fix} onChange={onChange} ref={refContainer} type={props.type} list={props.items} getClass={getClass} />

  }
})
