import Icon from "kui-vue/icon";
import Tooltip from "kui-vue/tooltip";
import { getTranstionProp } from 'kui-vue/base/transition'
import { CopyOutline, CaretHor } from "kui-icons";
export default {
  name: "Demo",
  props: {
    // sourceCode: String,
  },
  data() {
    return {
      expand: false
    }
  },
  methods: {
    copy() {
      this.$copyText(this.$refs.code.innerText).then(
        e => {
          this.$Message.success('Copied!')
        },
        e => {
          this.$Message.error("复制代码失败，请手动复制");
        }
      );
    }
  },
  mounted() {
  },
  render() {
    let { expand } = this
    let on = getTranstionProp()
    return (
      <div class="k-demo">
        <div class="k-demo-main">
          <div class="k-content"> {this.$slots.component}</div>
          <div class="k-desc">
            <div class="k-desc-content">{this.$slots.description}</div>
          </div>
          <div class="k-code-actions">
          <Tooltip title={expand ? '隐藏代码' : '显示代码'}>
              <Icon type={CaretHor} onClick={() => this.expand = !this.expand} style={{'border-bottom-left-radius':!expand?'12px':0}}/>
            </Tooltip>
            <Tooltip title="复制代码">
              <Icon type={CopyOutline} onClick={this.copy} style={{'border-bottom-right-radius':!expand?'12px':0}}/>
            </Tooltip>
          </div>
        </div>
        <transition {...on}>
          <div v-show={expand} class="k-code" ref="code">
            {this.$slots.code}
          </div>
        </transition>
      </div>
    )
  }
}