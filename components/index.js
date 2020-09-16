import Alert from './alert'
import Affix from './affix'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import Button from './button'
import Badge from './badge'
import BackTop from './backtop'
import ColorPicker from './colorPicker'
import Card from './card'
import { Carousel, CarouselItem } from './carousel'
import { Collapse, Panel } from './collapse'
import { Checkbox, CheckboxGroup } from './checkbox'
import DatePicker from './datePicker'
// import { Dropdown, DropdownItem, DropdownMenu } from './dropdown'
import Drawer from './drawer'
import Empty from './empty'
import { Form, FormItem } from './form'
// import ImagePreview from './imagePreview'
import Icon from './icon'
import { Input, TextArea } from './input'
import Loading from './loading'
import { Layout, Header, Footer, Content, Sider } from './layout'
import Modal from './modal'
import { Menu, MenuGroup, MenuItem, SubMenu } from './menu'
import Message from './message'
import Notice from './notice'
import Page from './page'
import Poptip from './poptip'
import Popconfirm from './popconfirm'
import Progress from './progress'
import { Radio, RadioGroup, RadioButton } from './radio'
// import Scroll from './scroll'
// import Slider from './slider'
import Spin from './spin'
import Switch from './switch'
import { Select, Option } from './select'
import { Steps, Step } from './steps'
import Table from './table'
import Tooltip from './tooltip'
// import TreeSelect from './treeselect'
import { Tabs, TabPane } from './tabs'
import { TimeLine, TimeLineItem } from './timeline'
import Tree from './tree'
import Tag from './tag'
import { Row, Col } from './grid'
// import Upload from './upload'

import { version } from '../package.json'

// import './styles';

const components = {
    Alert, Affix,
    BackTop, Badge, Button, ButtonGroup: Button.Group, Breadcrumb, BreadcrumbItem,
    Card, Carousel, CarouselItem, Collapse, ColorPicker, Checkbox, CheckboxGroup, Col,
    DatePicker, /* Dropdown, DropdownItem, DropdownMenu, */ Drawer,
    Empty,
    Form, FormItem,
    /* ImagePreview, */ Input, Icon,
    Loading,
    Menu, MenuGroup, MenuItem, Modal, Message,
    Layout, Header, Footer, Content, Sider,
    Notice,
    Option,
    Page, Poptip, Popconfirm, Panel, Progress,
    Row, Radio, RadioGroup, RadioButton,
    /* Scroll, */Spin, Steps, Step, Select, SubMenu, //Slider,
    Table, Tabs, TabPane, TextArea, TimeLine, TimeLineItem, Tag, Tooltip, Tree, /* TreeSelect, */
    /* Upload */
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
    Version: version,
}
const install = function (Vue, opts = {}) {
    for (let key in UI) {
        Vue.component(key, UI[key]);
    }
    Vue.prototype.$Message = Message;
    Vue.prototype.$Loading = Loading;
    Vue.prototype.$Notice = Notice;
    Vue.prototype.$Modal = Modal;
    // Vue.prototype.$ImagePreview = ImagePreview;
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default UI