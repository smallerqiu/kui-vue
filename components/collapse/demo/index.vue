<script>
import Info from './info.md'
import Base from './base.md'
import Accrodion from './accrodion.md'
import Nesting from './nesting.md'
import Sample from './sample.md'
import Extra from './extra.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Accrodion />
        <Nesting />
        <Extra />
        <Sample />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 