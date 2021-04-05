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
import Dropdown from './dropdown'
import Drawer from './drawer'
import Divider from './divider'
import Empty from './empty'
import { Form, FormItem } from './form'
import { Image, ImageGroup } from './image'
import Icon from './icon'
import { Input, TextArea } from './input'
import { Layout, Header, Footer, Content, Sider } from './layout'
import Modal from './modal'
import { Menu, MenuGroup, MenuItem, SubMenu, MenuDivider } from './menu'
import Message from './message'
import Notice from './notice'
import Page from './page'
import Poptip from './poptip'
import Popconfirm from './popconfirm'
import Progress from './progress'
import { Radio, RadioGroup, RadioButton } from './radio'
import Spin from './spin'
import Switch from './switch'
import { Select, Option } from './select'
import Table from './table'
import Tooltip from './tooltip'
import { Tabs, TabPane } from './tabs'
import { TimeLine, TimeLineItem } from './timeline'
import Tree from './tree'
import Tag from './tag'
import { Row, Col } from './grid'

import { version } from '../package.json'

import './styles';

const components = {
	Affix,
	Alert,
	BackTop,
	Badge,
	Breadcrumb, BreadcrumbItem,
	Button, ButtonGroup: Button.Group,
	Card,
	Carousel, CarouselItem,
	Checkbox, CheckboxGroup,
	Collapse, Panel,
	ColorPicker,
	Col, Row,
	DatePicker,
	Dropdown,
	Drawer,
	Divider,
	Empty,
	Form, FormItem,
	Icon,
	ImageGroup,
	Input, TextArea,
	Menu, MenuGroup, MenuItem, MenuDivider, SubMenu,
	Modal,
	Message,
	Layout, Header, Footer, Content, Sider,
	Notice,
	Page,
	Poptip,
	Popconfirm,
	Progress,
	Radio, RadioGroup, RadioButton,
	Spin,
	Select, Option,
	Table,
	Tabs, TabPane,
	TimeLine, TimeLineItem,
	Tag,
	Tooltip,
	Tree
}
const UI = {
	...components,
	kForm: Form,
	kButton: Button,
	kInput: Input,
	kTextarea: TextArea,
	kHeader: Header,
	kFooter: Footer,
	kContent: Content,
	kSider: Sider,
	kSelect: Select,
	kOption: Option,
	kTable: Table,
	kSwitch: Switch,
	kImage: Image,
	kCol: Col,
	kMenu: Menu,
	Version: version,
	install: function (Vue, opts = {}) {
		for (let key in UI) {
			Vue.component(key, UI[key]);
		}
		Vue.prototype.$Message = Message;
		Vue.prototype.$Notice = Notice;
		Vue.prototype.$Modal = Modal;
		Vue.prototype.$Image = Image;
	}
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
	UI.install(window.Vue);
}
export default UI