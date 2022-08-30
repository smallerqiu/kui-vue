<script>
import Info from './info.md' 
import Base from './base.md' 
import Default from './default.md' 
import WithText from './with-text.md' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Default />
        <WithText />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 