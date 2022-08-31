// import "./demo.less";
// import Code from '../code'
import Icon from "../../../components/icon";
import Tooltip from "../../../components/tooltip";
import { getTranstionProp } from '../../../components/base/transition'
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
        e=> {
          this.$Message.error("复制代码失败，请手动复制");
        }
      );
    }
  },
  mounted(){
    // hljs.highlightAll();
    // document.querySelectorAll('pre code').forEach((el) => {
    //   hljs.highlightElement(el);
    // });
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
              <Icon type={CopyOutline} onClick={this.copy} />
            </Tooltip>
            <Tooltip title={expand ? '隐藏代码' : '显示代码'}>
              <Icon type={CaretHor} onClick={() => this.expand = !this.expand} />
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