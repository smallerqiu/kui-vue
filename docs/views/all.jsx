import baseNav from "../menu";
import { Col, Row } from '../../components/grid'
import Card from '../../components/card'
import Control from '../components/control'
export default {
  methods: {
    renders(child) {
      let span = [], rows = [];
      child.forEach((item, i) => {
        let card = <Col span={6} ><a href={"/components/" + item.name}><Card bordered title={item.sub + ' ' + item.title} ><Control class="icon-view" name={item.icon} /></Card></a></Col>
        span.push(card)
      })
      if (span.length < 4) {
        rows.push(<Row gutter={20}>{span}</Row>)
      } else {
        for (let i = 0; i < span.length; i += 4) {
          rows.push(<Row gutter={20}>{span.slice(i, i + 4)}</Row>)
        }
      }
      return rows
    },
  },
  render() {
    let navs = baseNav.filter(x => x.key != 'starts')
    return (
      <div class="all-components typo">
        <h1>组件</h1>
        <p><code>kui</code> 提供了65款组件，之后会根据需求补充，欢迎提供建议！</p>
        {
          navs.map((item, x) => {
            return (
              [<h2>{item.title}</h2>,
              this.renders(item.child)])
          })
        }
      </div>
    )
  }
}
