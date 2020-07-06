Menu 事件 
参数	说明	类型	默认值
theme	主题颜色	string: light dark	light
openKeys	当前展开的 SubMenu 菜单项 key 数组	string[]	
mode	菜单类型，现在支持垂直、水平、和内嵌模式三种	string: vertical vertical-right horizontal inline	vertical


click	点击 MenuItem 调用此函数	function({ item, key, keyPath })
deselect	取消选中时调用，仅在 multiple 生效	function({ item, key, selectedKeys })
openChange	SubMenu 展开/关闭的回调	function(openKeys: string[])
select	被选中时调用	function({ item, key, selectedKeys })

Menu.Item
参数	说明	类型	默认值
disabled	是否禁用	boolean	false
key	item 的唯一标志	string	
title	设置收缩时展示的悬浮标题	string	