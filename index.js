import Table from './src/table'
import Page from './src/page'
import Button from './src/button'
import Input from './src/input'
import Select from './src/select'
import Switch from './src/switch'
import { Checkbox, CheckboxGroup } from './src/checkbox'
import { Radio, RadioGroup } from './src/radio'
import DatePicker from './src/datePicker'
import { Modal, Toast } from './src/modal'
import { Row, Col } from './src/grid'

import './styles';

const components = {
    Table,
    Page,
    DatePicker,
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