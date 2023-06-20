// import './button.less'
import Button from './button'
import ButtonGroup from './buttonGroup'

Button.Group = ButtonGroup

Button.install = function (vue) {
  vue.component(Button.name, Button)
  vue.component(ButtonGroup.name, ButtonGroup)
}
export default Button