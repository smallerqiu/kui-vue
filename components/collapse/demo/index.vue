<script>
import Info from './info'
import Base from './base'
import Accrodion from './accrodion'
import Nesting from './nesting'
import Sample from './sample'
import Extra from './extra'
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