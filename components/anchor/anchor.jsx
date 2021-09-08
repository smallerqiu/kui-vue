export default {
  name: 'Anchor',
  props: {
    offsetTop: Number,
    affix: Boolean,
    getContainer: { type: Function, default: () => window }
  },
  render(){
    return <div class="k-anchor"></div>
  }
}
