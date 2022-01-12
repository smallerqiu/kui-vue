// import "./demo.less";
// import Code from '../code'
import Icon from "../../../components/icon";
import Tooltip from "../../../components/tooltip";
import Message from "../../../components/message";
import { getTranstionProp } from '../../../components/base/transition'
export default {

  name: "Demo",
  props: {
    sourceCode: String,
  },
  data() {
    return {
      expand: false
    }
  },
  methods: {
    copy() {
      this.$copyText(this.sourceCode).then(
        e => {
          this.$Message.success('Copied!')
        },
        function (e) {
          Message.error("复制代码失败，请手动复制");
        }
      );
    }
  },
  render() {
    let { expand } = this
    let on = getTranstionProp()
    // let Com = () => this.$slots.component
    // console.log(this.$slots.component)
    return (
      <div class="k-demo">
        <div class="k-demo-main">
          <div class="k-content"> {this.$slots.component}</div>
          {/* <div class="k-content">{Com()}</div> */}
          <div class="k-desc">
            <div class="k-desc-content typo">{this.$slots.description}</div>
          </div>
          <div class="k-code-actions">
            <Tooltip title="复制代码">
              <Icon type="copy-outline" onClick={this.copy} />
            </Tooltip>
            <Tooltip title={expand ? '隐藏代码' : '显示代码'}>
              <Icon type={'code' + (expand ? '-working' : '')} onClick={() => this.expand = !this.expand} />
            </Tooltip>
          </div>
        </div>
        <transition {...on}>
          <div v-show={expand} class="k-code">
            {this.$slots.code}
          </div>
        </transition>
      </div>
    )
  }
}