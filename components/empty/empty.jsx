import Icon from "../icon";
export default {
  name: 'Empty',
  render() {
    const handle = e => {
      this.$emit('click', e)
    }
    return (<div class="k-empty" onClick={handle}>
      {this.$slots.default || [<Icon type="ios-albums" />, <p class="k-empty-desc">暂无数据</p>]}
    </div>)
  }
}