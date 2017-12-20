import Table from './table'
import Page from './page'
import Button from './button'
import Input from './input'
import Select from './select'
import Switch from './switch'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup } from './radio'
import DatePicker from './datePicker'
import { Modal, Toast } from './modal'
import { Row, Col } from './grid'
import Form from './form'
import Color from './color'

import '../styles';

const components = {
    Table,
    Page,
    DatePicker, Color,
    Button,
    Select,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Modal,
    Toast,
    Row, Col
}
const UI = {
    ...components,
    kForm: Form,
    kButton: Button,
    kInput: Input,
    kTable: Table,
    kSwitch: Switch,
    kCol: Col,
}
const install = function (Vue, opts = {}) {
    Object.keys(UI).map((x) => {
        Vue.component(x, UI[x]);
    })
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports.default = module.exports = UI;
// export default UI;