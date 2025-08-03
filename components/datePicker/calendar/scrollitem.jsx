
const fix = v => ('0' + v).slice(-2)
export function Col(props) {
  return <div class='k-calendar-time-picker-select'>
    {
      props.list.map((item, index) => {
        return <span key={index} class={props.getClass(item)} onClick={() => props.onChange(item)}>{fix(item)}</span>
      })
    }
  </div>
}

export function List(props) {
  console.log('List', props)
  const initToCenter = (key, animate = false) => {
    this.$nextTick(() => {
      let children = (this.$refs[key] || {}).children || []
      for (let m of children) {
        // console.log(m.children)
        for (let n of m.children) {
          // console.log(n)
          if (n.className.indexOf('selected') > -1 || (!this.value && n.className.indexOf('this') > -1)) {
            // console.log(n)
            this.scrollToCenter({ target: n }, animate)
            break
          }
        }
      }
    })
  }
  const scrollToCenter = (e, animate = true) => {
    // 计算 span 元素相对于 div 元素的偏移
    const offset = e.target.offsetTop;
    const ul = e.target.parentNode
    // 计算滚动距离使 span 元素垂直居中
    const scrollDistance = offset - parseFloat((ul.clientHeight / 2).toFixed(2)) + parseFloat((e.target.clientHeight / 2).toFixed(2)) - (this.pickerSize == 'small' ? 84 / 2 : 84 / 2);
    // 滚动到计算出的位置
    // console.log(scrollDistance)
    if (animate) {
      ul.scrollTo({ top: scrollDistance, behavior: 'smooth' });
    } else {
      ul.scrollTop = scrollDistance
    }
    // console.log(ul.scrollTop)
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
        [`k-calendar-${props.type}-this`]: props.value === item,
        [`k-calendar-item-selected`]: props.value !== null && props.value === item,
        [`k-calendar-${props.type}-disabled`]: isDisabledTime(props.disabledType, item),
      }
    ]
  }
  return <Col list={props.items} getClass={getClass} />
}