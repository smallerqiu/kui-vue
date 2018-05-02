import Alert from './components/alert'
import Affix from './components/affix'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import { Button, ButtonGroup } from './components/button'
import BackTop from './components/backtop'
import ColorPicker from './components/colorPicker'
import Card from './components/card'
import { Carousel, CarouselItem } from './components/carousel'
import { Collapse, Panel } from './components/collapse'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import Page from './components/page'
import Input from './components/input'
import Switch from './components/switch'
import DatePicker from './components/datePicker'
import { Form, FormItem } from './components/form'
import Modal from './components/modal'
import { Menu, MenuGroup, MenuItem, SubMenu } from './components/menu'
import Icon from './components/icon'
import { Message, Notice } from './components/message'
import Upload from './components/upload'
import Poptip from './components/poptip'
import Loading from './components/loading'
import Badge from './components/badge'
import { Radio, RadioGroup } from './components/radio'
import Slider from './components/slider'
import Table from './components/table'
import Tooltip from './components/tooltip'
import { Tabs, TabPane } from './components/tabs'
import { Select, Option } from './components/select'
import { Steps, Step } from './components/steps'
import { Row, Col } from './components/grid'
import { TimeLine, TimeLineItem } from './components/timeline'
import Tree from './components/tree'
import Tag from './components/tag'

const pkg = require('../package.json');

import './styles';

const components = {
    Alert, Affix, BackTop,
    Badge, Button, ButtonGroup, Breadcrumb, BreadcrumbItem,
    Card, Carousel, CarouselItem, Collapse, ColorPicker, Checkbox, CheckboxGroup,
    DatePicker,
    Modal, Message, Notice,
    Page,
    Select, Option,
    Input,
    Form, FormItem,
    Radio, RadioGroup,
    Poptip, Panel,
    Row, Col, Upload,
    Steps, Step,
    Icon,
    Menu, MenuGroup, MenuItem, SubMenu,
    Loading, Slider,
    Table, Tabs, TabPane, TimeLine, TimeLineItem, Tag, Tooltip, Tree,
}
const UI = {
    ...components,
    kForm: Form,
    kButton: Button,
    kInput: Input,
    kSelect: Select,
    kOption: Option,
    kTable: Table,
    kSwitch: Switch,
    kCol: Col,
    kMenu: Menu,
    Version: pkg.version,
}
const install = function (Vue, opts = {}) {
    Object.keys(UI).map((x) => {
        Vue.component(x, UI[x]);
    })
    Vue.prototype.$Message = Message;
    Vue.prototype.$Loading = Loading;
    Vue.prototype.$Notice = Notice;
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports.default = module.exports = UI;
