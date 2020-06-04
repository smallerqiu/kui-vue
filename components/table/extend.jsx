export default {
  name: 'ExtendTable',
  props: {
    mode: String,
    cols: Array,
    body: Array,
    head: Array,
    height: Number,
    width: Number,
  },
  data() {
    return {
      scrollBarHeight: 0,
      $body: null,
      $thead: null,
      headFocus: false,
    }
  },
  mounted() {
    let { thead, body } = this.$refs
    this.$body = body
    this.$thead = thead
    if (thead) {
      this.scrollBarHeight = thead.offsetHeight - thead.scrollHeight
    }
  },
  render() {
    let { cols, head, height, width, mode, scrollBarHeight, body, $listeners } = this
    const isMain = mode == 'main'
    let props = {
      class: `k-table-fixed-${mode}-body`,
      style: {
        height: `${isMain ? height : (height - scrollBarHeight)}px`,
        'overflow-x': isMain && width ? 'auto' : null,
        'overflow-y': isMain && height ? 'auto' : null,
      },
      ref: 'body',
      on: {
        ...$listeners
      }
    }
    const getTable = (cols, head, body) => {
      let p = {
        style: {
          width: isMain ? `${width}px` : null
        }
      }
      return (
        <table {...p}>
          <colgroup>{cols}</colgroup>
          {head ? <thead><tr>{head}</tr></thead> : null}
          {body ? <tbody > {body}</tbody> : null}
        </table>
      )
    }
    let headProps = {
      class: `k-table-fixed-${mode}-thead`,
      style: {
        'margin-bottom': `-${scrollBarHeight}px`,
      },
      on: {},
      ref: 'thead'
    }
    //主体头部滚动
    if (isMain && width) {
      headProps.on.scroll = ({ target }) => {
        this.headFocus && this.$refs.body.scrollTo(target.scrollLeft, this.$refs.body.scrollTop)
      }
      headProps.on.mouseenter = () => this.headFocus = true
      headProps.on.mouseleave = () => this.headFocus = false
    }
    let rootProps = {
      class: `k-table-fixed-${mode}`,
      style: {
        'overflow-x': isMain && width && !height ? 'scroll' : null
      },
      on:{
        ...$listeners
      }
    }
    return (
      <div {...rootProps}>
        {
          height ? [<div {...headProps}>{getTable(cols, head, null)}</div>,
          <div {...props}>
            {getTable(cols, null, body)}
          </div>
          ] : getTable(cols, head, body)
        }
      </div >
    )
  }
}