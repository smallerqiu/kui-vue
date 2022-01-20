import Icon from "../icon";
import { t } from "../locale";
export default {
  name: 'Empty',
  props: {
    description: String,
    image: String,
    imageStyle: Object
  },
  render() {
    let { image, imageStyle, $slots, description } = this
    // description = getChild($slots.description).length > 0 || description
    // image = getChild($slots.image)
    // console.log(description, $slots.description)

    return (<div class="k-empty">
      {(!image && !$slots.image) ? <Icon type="file-tray-outline" class="k-empty-icon" /> : ($slots.image ? $slots.image : <img src={image} class="k-empty-image" style={imageStyle} />)}
      {description !== null ? <p class="k-empty-description">{description || $slots.description || t('k.empty.description')}</p> : null}
      {$slots.default ? <div class="k-empty-footer">{$slots.default}</div> : null}
    </div>)
  }
}