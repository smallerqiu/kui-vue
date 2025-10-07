import Icon from "../icon";
import { t } from "../locale";
import { FileTrayOutline } from "kui-icons";
import { withInstall } from '../utils/vue'
const Empty = {
  name: 'Empty',
  props: {
    description: String,
    image: String,
    imageStyle: Object
  },
  render() {
    let { image, imageStyle, $slots, description } = this

    return (<div class="k-empty">
      {(!image && !$slots.image) ? <Icon type={FileTrayOutline} class="k-empty-icon" /> : ($slots.image ? $slots.image : <img src={image} class="k-empty-image" style={imageStyle} />)}
      {description !== null ? <p class="k-empty-description">{description || $slots.description || t('k.empty.description')}</p> : null}
      {$slots.default ? <div class="k-empty-footer">{$slots.default}</div> : null}
    </div>)
  }
}

export default withInstall(Empty)