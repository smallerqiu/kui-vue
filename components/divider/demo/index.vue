<script>
import Info from './info' 
import Base from './base' 
import Default from './default' 
import WithText from './with-text' 
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