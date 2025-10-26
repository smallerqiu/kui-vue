import{Bt as e,Ct as t,Dt as n,St as r,U as i,b as a,dt as o,pt as s,tt as c,ut as l,w as u,xt as d,zt as f}from"./index-Dw-BZmPh.js";var p=f({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Layout 布局`)]),t(`p`,[e._v(`协助进行页面级整体布局。`)]),t(`h3`,{attrs:{id:`设计规则`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#设计规则`}},[e._v(`设计规则`)])]),t(`h4`,{attrs:{id:`尺寸`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#尺寸`}},[e._v(`尺寸`)])]),t(`p`,[e._v(`一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。`)]),t(`ul`,[t(`li`,[e._v(`顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。`)]),t(`li`,[e._v(`顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。`)]),t(`li`,[e._v(`顶部导航高度的范围计算公式为：48+8n。`)]),t(`li`,[e._v(`侧边导航宽度的范围计算公式：200+8n。`)])]),t(`h4`,{attrs:{id:`交互`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#交互`}},[e._v(`交互`)])]),t(`ul`,[t(`li`,[e._v(`一级导航和末级的导航需要在可视化的层面被强调出来；`)]),t(`li`,[e._v(`当前项应该在呈现上优先级最高；`)]),t(`li`,[e._v(`当导航收起的时候，当前项的样式自动赋予给它的上一个层级；`)]),t(`li`,[e._v(`左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。`)])]),t(`h4`,{attrs:{id:`视觉`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#视觉`}},[e._v(`视觉`)])]),t(`p`,[e._v(`导航样式上需要根据信息层级合理的选择样式：`)]),t(`ul`,[t(`li`,[t(`p`,[e._v(`大色块强调`),t(`br`),e._v(` 建议用于底色为深色系时，当前页面父级的导航项。`)])]),t(`li`,[t(`p`,[e._v(`高亮火柴棍`),t(`br`),e._v(` 当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。`)])]),t(`li`,[t(`p`,[e._v(`字体高亮变色`),t(`br`),e._v(` 从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。`)])]),t(`li`,[t(`p`,[e._v(`字体放大`),t(`br`),e._v(` 12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。`)])])]),t(`h3`,{attrs:{id:`组件概述`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#组件概述`}},[e._v(`组件概述`)])]),t(`ul`,[t(`li`,[t(`code`,[e._v(`Layout`)]),e._v(`：布局容器，其下可嵌套 `),t(`code`,[e._v(`Header`)]),e._v(` `),t(`code`,[e._v(`Sider`)]),e._v(` `),t(`code`,[e._v(`Content`)]),e._v(` `),t(`code`,[e._v(`Footer`)]),e._v(` 或 `),t(`code`,[e._v(`Layout`)]),e._v(` 本身，可以放在任何父容器中。`)]),t(`li`,[t(`code`,[e._v(`Header`)]),e._v(`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `),t(`code`,[e._v(`Layout`)]),e._v(` 中。`)]),t(`li`,[t(`code`,[e._v(`Sider`)]),e._v(`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `),t(`code`,[e._v(`Layout`)]),e._v(` 中。`)]),t(`li`,[t(`code`,[e._v(`Content`)]),e._v(`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `),t(`code`,[e._v(`Layout`)]),e._v(` 中。`)]),t(`li`,[t(`code`,[e._v(`Footer`)]),e._v(`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `),t(`code`,[e._v(`Layout`)]),e._v(` 中。`)])]),t(`blockquote`,[t(`p`,[e._v(`3.0 版本以后使用 `),t(`code`,[e._v(`flex`)]),e._v(` 布局，请注意`),t(`a`,{attrs:{href:`http://caniuse.com/#search=flex`}},[e._v(`浏览器兼容性`)])])])])}],!1,null,null,null,null).exports,m=f({},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Flex`,{staticClass:`demo-k-layout`,attrs:{size:`small`,wrap:``}},[t(`Layout`,[t(`Header`,[e._v(`Header`)]),t(`Content`,[e._v(`Content`)]),t(`Footer`,[e._v(`Footer`)])],1),t(`Layout`,[t(`Header`,[e._v(`Header`)]),t(`Layout`,[t(`Sider`,[e._v(`Sider`)]),t(`Content`,[e._v(`Content`)])],1),t(`Footer`,[e._v(`Footer`)])],1),t(`Layout`,[t(`Header`,[e._v(`Header`)]),t(`Layout`,[t(`Content`,[e._v(`Content`)]),t(`Sider`,[e._v(`Sider`)])],1),t(`Footer`,[e._v(`Footer`)])],1),t(`Layout`,[t(`Sider`,[e._v(`Sider`)]),t(`Layout`,[t(`Header`,[e._v(`Header`)]),t(`Content`,[e._v(`Content`)]),t(`Footer`,[e._v(`Footer`)])],1)],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`典型布局`)]),t(`p`,[e._v(`典型的页面布局。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-k-layout"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"small"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrap`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`Header`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`Footer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`Header`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`Sider`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`Footer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`Header`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`Sider`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`Footer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`Sider`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`Header`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`Footer`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Flex`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`text-align`)]),e._v(`: center;
}
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` >`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#fff`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`calc`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`50%`)]),e._v(` - `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border-radius`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`10px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: hidden;
}
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-header`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`60`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`64px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`line-height`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`64px`)]),e._v(`;
}
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-footer`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`60`)]),e._v(`);
}
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-content`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`120px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`line-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`120px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`30`)]),e._v(`);
}
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-k-layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-sider`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`line-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`120px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`10`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`30%`)]),e._v(`;
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`01832370`,null,null).exports,h=f({data(){return{LogoKui:c,Home:i,StatsChart:n,Settings:t,Scan:d,NotificationsOutline:s,Search:r}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`k-demo-layout`},[t(`Layout`,{staticClass:`layout-back`},[t(`Header`,{staticClass:`demo-header`},[t(`Row`,{staticClass:`demo-top-nav`,attrs:{type:`flex`,align:`middle`}},[t(`Col`,{staticStyle:{width:`194px`}},[t(`a`,{staticClass:`logo-box`,attrs:{href:``}},[t(`Icon`,{staticClass:`logo`,attrs:{type:e.LogoKui,size:`30`}}),e._v(` K UIKIT `)],1)]),t(`Col`,{attrs:{flex:`1`}},[t(`Menu`,{staticClass:`demo-top-menu`,attrs:{mode:`horizontal`,value:[`t1`]}},[t(`MenuItem`,{key:`t1`},[e._v(`首页`)]),t(`MenuItem`,{key:`t2`},[e._v(`新闻`)]),t(`MenuItem`,{key:`t3`},[e._v(`知识库`)])],1)],1),t(`Col`,[t(`Space`,[t(`Avatar`,{staticStyle:{background:`#3a95ff`},attrs:{size:20}},[e._v(`Q`)])],1)],1)],1)],1),t(`Content`,{staticClass:`k-demo-main`},[t(`Breadcrumb`,{staticClass:`nav`},[t(`BreadcrumbItem`,[e._v(`Home`)]),t(`BreadcrumbItem`,[e._v(`List`)]),t(`BreadcrumbItem`,[e._v(`App`)])],1),t(`Content`,{staticClass:`demo-back`},[e._v(`Conent`)])],1),t(`Footer`,{staticStyle:{background:`transparent`}},[e._v(`KUI ©2025 Created by Qiu`)])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`顶部-侧边布局-通栏`)]),t(`p`,[e._v(`同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-layout"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"layout-back"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-header"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"flex"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`align`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"middle"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:194px"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-box"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoKui"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo"`)]),e._v(` />`)]),e._v(`
              K UIKIT
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`flex`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"horizontal"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-menu"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(`>`)]),e._v(`新闻`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(`>`)]),e._v(`知识库`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"background:#3a95ff"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"20"`)]),e._v(`>`)]),e._v(`Q`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-main"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`Home`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`List`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`App`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-back"`)]),e._v(`>`)]),e._v(`Conent`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"background:transparent;"`)]),e._v(`>`)]),e._v(`KUI ©2025 Created by Qiu`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Scan`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
     `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Scan`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`

`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"less"`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-layout`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-header`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`90`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-nav`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`flex`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-box`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`position`)]),e._v(`: relative;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`z-index`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`801`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`box-sizing`)]),e._v(`: border-box;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`margin-right`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.layout-back`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#86868625`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-back`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: transparent;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-menu-item`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(`;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.nav`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`16px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    }

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-content`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`24px`)]),e._v(`;
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`300px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-footer`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`text-align`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#999`)]),e._v(`;
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`e6d53f9b`,null,null).exports,g=f({data(){return{LogoKui:c,Home:i,StatsChart:n,Settings:t,Scan:d,NotificationsOutline:s,Search:r,left:[`t1`]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`k-demo-layout`},[t(`Layout`,{staticClass:`layout-back`},[t(`Header`,{staticClass:`demo-header`},[t(`Row`,{staticClass:`demo-top-nav`,attrs:{type:`flex`,align:`middle`}},[t(`Col`,{staticStyle:{width:`220px`}},[t(`a`,{staticClass:`logo-box`,attrs:{href:``}},[t(`Icon`,{staticClass:`logo`,attrs:{type:e.LogoKui,size:`30`}}),e._v(` K UIKIT `)],1)]),t(`Col`,{attrs:{flex:`1`}},[t(`Menu`,{staticClass:`demo-top-menu`,attrs:{mode:`horizontal`,value:[`t1`]}},[t(`MenuItem`,{key:`t1`},[e._v(`首页`)]),t(`MenuItem`,{key:`t2`},[e._v(`新闻`)]),t(`MenuItem`,{key:`t3`},[e._v(`知识库`)])],1)],1),t(`Col`,[t(`Space`,[t(`Avatar`,{staticStyle:{background:`#3a95ff`},attrs:{size:20}},[e._v(`Q`)])],1)],1)],1)],1),t(`Content`,{staticClass:`k-demo-main demo-back`},[t(`Breadcrumb`,{staticClass:`nav`},[t(`BreadcrumbItem`,[e._v(`Home`)]),t(`BreadcrumbItem`,[e._v(`List`)]),t(`BreadcrumbItem`,[e._v(`App`)])],1),t(`Layout`,{staticClass:`demo-back`},[t(`Sider`,{staticStyle:{background:`transparent`}},[t(`Menu`,{staticClass:`demo-left-menu`,staticStyle:{"padding-top":`20px`},attrs:{value:[`t1`],openKeys:[`t2`],mode:`inline`}},[t(`MenuItem`,{key:`t1`,attrs:{icon:e.Home}},[e._v(`首页`)]),t(`SubMenu`,{key:`t2`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t2-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t2-2`},[e._v(`今日销售额`)])],1),t(`SubMenu`,{key:`t3`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t3-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t3-2`},[e._v(`今日销售额`)])],1),t(`MenuItem`,{key:`t4`,attrs:{icon:e.Settings}},[e._v(`能源管理`)])],1)],1),t(`Content`,[e._v(`Conent`)])],1)],1),t(`Footer`,{staticClass:`demo-footer`},[e._v(`KUI ©2025 Created by Qiu`)])],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`顶部-侧边布局`)]),t(`p`,[e._v(`拥有顶部导航及侧边栏的页面，多用于展示类网站。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-layout"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"layout-back"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-header"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"flex"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`align`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"middle"`)]),e._v(`  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:220px"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-box"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoKui"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo"`)]),e._v(` />`)]),e._v(`
              K UIKIT
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`flex`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"horizontal"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-menu"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(`>`)]),e._v(`新闻`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(`>`)]),e._v(`知识库`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"background:#3a95ff"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"20"`)]),e._v(`>`)]),e._v(`Q`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-main demo-back"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`Home`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`List`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`App`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-back"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"background:transparent;"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:openKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t2']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-left-menu"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"inline"`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"padding-top:20px;"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Home"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
                `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
                `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
                `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
                `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t4"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Settings"`)]),e._v(`>`)]),e._v(`能源管理`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`Conent`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-footer"`)]),e._v(`>`)]),e._v(`KUI ©2025 Created by Qiu`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Scan`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Scan`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`left`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t1'`)]),e._v(`]
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"less"`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-layout`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-header`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`500px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`90`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
  }
  
  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-nav`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`flex`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-box`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/* width: 190px; */`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`position`)]),e._v(`: relative;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`z-index`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`801`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`box-sizing`)]),e._v(`: border-box;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`margin-right`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: transparent;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-menu-item`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-left-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100%`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-back`)]),e._v(` ,`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-footer`)]),e._v(`{
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-gray-`),t(`span`,{staticClass:`hljs-number`},[e._v(`90`)]),e._v(`);
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`50px`)]),e._v(`;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.nav`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`16px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    }

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-content`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`24px`)]),e._v(`;
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`300px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-sider`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200px`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-footer`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`text-align`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#999`)]),e._v(`;
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`b097c1af`,null,null).exports,_=f({data(){return{LogoKui:c,NotificationsOutline:s,Search:r,Home:i,StatsChart:n,Settings:t,top:[`t1`],left:[`0-1`]}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`k-demo-layout`},[t(`Layout`,{staticClass:`layout-back`},[t(`Header`,{staticClass:`demo-header`},[t(`Row`,{staticClass:`demo-top-nav`,attrs:{type:`flex`,align:`middle`}},[t(`Col`,{staticStyle:{width:`194px`}},[t(`a`,{staticClass:`logo-box`,attrs:{href:``}},[t(`Icon`,{staticClass:`logo`,attrs:{type:e.LogoKui,size:`30`}}),e._v(` K UIKIT `)],1)]),t(`Col`,{attrs:{flex:`1`}},[t(`Menu`,{staticClass:`demo-top-menu`,attrs:{mode:`horizontal`,value:[`t1`]}},[t(`MenuItem`,{key:`t1`},[e._v(`首页`)]),t(`MenuItem`,{key:`t2`},[e._v(`新闻`)]),t(`MenuItem`,{key:`t3`},[e._v(`知识库`)])],1)],1),t(`Col`,[t(`Space`,[t(`Avatar`,{staticStyle:{background:`#3a95ff`},attrs:{size:20}},[e._v(`Q`)])],1)],1)],1)],1),t(`Layout`,[t(`Sider`,{staticClass:`demo-back`},[t(`Menu`,{staticClass:`demo-left-menu`,staticStyle:{"padding-top":`20px`},attrs:{value:[`t1`],openKeys:[`t2`],mode:`inline`}},[t(`MenuItem`,{key:`t1`,attrs:{icon:e.Home}},[e._v(`首页`)]),t(`SubMenu`,{key:`t2`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t2-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t2-2`},[e._v(`今日销售额`)])],1),t(`MenuItem`,{key:`t3`,attrs:{icon:e.Settings}},[e._v(`能源管理`)])],1)],1),t(`Layout`,{staticClass:`k-demo-main`},[t(`Breadcrumb`,{staticClass:`nav`},[t(`BreadcrumbItem`,[e._v(`Home`)]),t(`BreadcrumbItem`,[e._v(`List`)]),t(`BreadcrumbItem`,[e._v(`App`)])],1),t(`Content`,{staticClass:`demo-content`},[e._v(` Content `)])],1)],1)],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上中下布局`)]),t(`p`,[e._v(`最基本的『上-中-下』布局。`),t(`br`),e._v(` 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-layout"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"layout-back"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-header"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"flex"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`align`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"middle"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:194px"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-box"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoKui"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo"`)]),e._v(` />`)]),e._v(`
              K UIKIT
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`flex`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"horizontal"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-top-menu"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(`>`)]),e._v(`新闻`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(`>`)]),e._v(`知识库`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"background:#3a95ff"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"20"`)]),e._v(`>`)]),e._v(`Q`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Avatar`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Space`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Col`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Row`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Header`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-back"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:value`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t1']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:openKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['t2']"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-left-menu"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"inline"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"padding-top:20px;"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Home"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
              `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Settings"`)]),e._v(`>`)]),e._v(`能源管理`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-main"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"nav"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`Home`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`List`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`App`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-content"`)]),e._v(`>`)]),e._v(`
            Content
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`  } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(` ,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`top`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t1'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`left`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'0-1'`)]),e._v(`]
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"less"`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-layout`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-header`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`20px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`500px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-main-`),t(`span`,{staticClass:`hljs-number`},[e._v(`90`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-nav`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`flex`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-box`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/* width: 190px; */`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`position`)]),e._v(`: relative;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`z-index`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`801`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`box-sizing`)]),e._v(`: border-box;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`margin-right`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-top-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: transparent;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-menu-item`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-content`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-left-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`100%`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`24px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`24px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#7f7f7f17`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.nav`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`16px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    }

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-content`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/* background-color:#fff; */`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`24px`)]),e._v(`;
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`min-height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`300px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-sider`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200px`)]),e._v(`;
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`88055cf8`,null,null).exports,v=f({data(){return{LogoKui:c,Home:i,StatsChart:n,Settings:t,ChevronForward:u,ChevronBack:a,selectedKeys:[`t1`],openKeys:[`t2`],collapsed:!1}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`k-demo-layout`},[t(`Layout`,{staticClass:`layout-back`},[t(`Sider`,{class:[`demo-sider`,{"demo-sider-collapsed":e.collapsed}]},[t(`a`,{staticClass:`logo-box`,attrs:{href:``}},[t(`Icon`,{staticClass:`logo`,attrs:{type:e.LogoKui,size:`30`}}),t(`span`,{staticClass:`logo-title`},[e._v(`KUI运营后台`)])],1),t(`Menu`,{staticClass:`demo-left-menu`,attrs:{openKeys:e.openKeys,mode:`inline`,"inline-collapsed":e.collapsed},model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t},expression:`selectedKeys`}},[t(`MenuItem`,{key:`t1`,attrs:{icon:e.Home}},[e._v(`首页`)]),t(`SubMenu`,{key:`t2`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t2-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t2-2`},[e._v(`今日销售额`)])],1),t(`SubMenu`,{key:`t3`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t3-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t3-2`},[e._v(`今日销售额`)])],1),t(`MenuItem`,{key:`t4`,attrs:{icon:e.Settings}},[e._v(`能源管理`)])],1),t(`Button`,{staticClass:`btn-collapsed`,attrs:{block:``,size:`large`,icon:e.collapsed?e.ChevronForward:e.ChevronBack,type:`text`},on:{click:function(t){e.collapsed=!e.collapsed}}},[t(`i`)])],1),t(`Content`,{staticClass:`k-demo-main`},[t(`Breadcrumb`,{staticClass:`nav`},[t(`BreadcrumbItem`,[e._v(`Home`)]),t(`BreadcrumbItem`,[e._v(`List`)]),t(`BreadcrumbItem`,[e._v(`App`)])],1),t(`div`,{staticClass:`demo-back`,staticStyle:{padding:`200px 0`,"text-align":`center`,color:`#ddd`,margin:`20px 0`}},[e._v(`Content`)]),t(`Footer`,[e._v(`KUI ©2025 Created by Qiu`)])],1)],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`固定侧边栏`)]),t(`p`,[e._v(`当内容较长时，使用固定侧边栏可以提供更好的体验。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-layout"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"layout-back"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['demo-sider', { 'demo-sider-collapsed': collapsed }]"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-box"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoKui"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-title"`)]),e._v(`>`)]),e._v(`KUI运营后台`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selectedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:openKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"openKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-left-menu"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"inline"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:inline-collapsed`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Home"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t4"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Settings"`)]),e._v(`>`)]),e._v(`能源管理`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`block`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"large"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed ? ChevronForward : ChevronBack"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed = !collapsed"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"btn-collapsed"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"text"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`i`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`i`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-main"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`Home`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`List`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`App`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"padding:200px 0;text-align:center;color:#ddd;margin:20px 0;"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-back"`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`KUI ©2025 Created by Qiu`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(` , `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronForward`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronBack`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(` ,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronForward`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronBack`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`selectedKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t1'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`openKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`collapsed`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"less"`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-layout`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: hidden;

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-sider`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`360px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/*这里是例子，实际中请适当修改*/`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`left`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: width `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-title`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: opacity `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`opacity`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.btn-collapsed`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`position`)]),e._v(`: absolute;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`bottom`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`left`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: all `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-sider-collapsed`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`80px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: hidden;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-title`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`opacity`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-left-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`calc`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`100%`)]),e._v(` - `),t(`span`,{staticClass:`hljs-number`},[e._v(`105px`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: auto;

    &::-webkit-scrollbar {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1px`)]),e._v(`;
    }
  }


  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-box`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`box-sizing`)]),e._v(`: border-box;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding-left`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`25px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`white-space`)]),e._v(`: nowrap;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`margin-right`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: auto;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`360px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#7f7f7f17`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.nav`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`20px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`20px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-footer`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`text-align`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#999`)]),e._v(`;
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`8a7dc556`,null,null).exports,y=f({data(){return{LogoKui:c,Search:r,NotificationsOutline:s,ChevronBack:a,ChevronForward:u,StatsChart:n,Home:i,Settings:t,MenuFold:l,MenuUnfold:o,selectedKeys:[`t1`],openKeys:[`t2`],collapsed:!1}},methods:{toggle(){this.collapsed=!this.collapsed}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticClass:`k-demo-layout`},[t(`Layout`,{staticClass:`layout-back`},[t(`Sider`,{class:[`demo-sider`,{"demo-sider-collapsed":e.collapsed}]},[t(`a`,{staticClass:`logo-box`,attrs:{href:``}},[t(`Icon`,{staticClass:`logo`,attrs:{type:e.LogoKui,size:`30`}}),t(`span`,{staticClass:`logo-title`},[e._v(`KUI运营后台`)])],1),t(`Menu`,{staticClass:`demo-left-menu`,attrs:{openKeys:e.openKeys,mode:`inline`,"inline-collapsed":e.collapsed},model:{value:e.selectedKeys,callback:function(t){e.selectedKeys=t},expression:`selectedKeys`}},[t(`MenuItem`,{key:`t1`,attrs:{icon:e.Home}},[e._v(`首页`)]),t(`SubMenu`,{key:`t2`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t2-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t2-2`},[e._v(`今日销售额`)])],1),t(`SubMenu`,{key:`t3`,attrs:{icon:e.StatsChart,title:`数据统计`}},[t(`MenuItem`,{key:`t3-1`},[e._v(`今日订单`)]),t(`MenuItem`,{key:`t3-2`},[e._v(`今日销售额`)])],1),t(`MenuItem`,{key:`t4`,attrs:{icon:e.Settings}},[e._v(`能源管理`)])],1)],1),t(`Content`,{staticClass:`k-demo-main`},[t(`div`,{staticStyle:{padding:`10px`}},[t(`Button`,{staticClass:`btn-collapsed`,attrs:{icon:e.collapsed?e.MenuUnfold:e.MenuFold,theme:`light`},on:{click:function(t){e.collapsed=!e.collapsed}}})],1),t(`Breadcrumb`,{staticClass:`nav`},[t(`BreadcrumbItem`,[e._v(`Home`)]),t(`BreadcrumbItem`,[e._v(`List`)]),t(`BreadcrumbItem`,[e._v(`App`)])],1),t(`div`,{staticClass:`demo-back`,staticStyle:{padding:`200px 0`,"text-align":`center`,color:`#ddd`,margin:`20px 0`}},[e._v(`Content`)]),t(`Footer`,[e._v(`KUI ©2025 Created by Qiu`)])],1)],1)],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`侧边布局/折叠模式`)]),t(`p`,[e._v(`侧边两列式布局。页面横向空间有限时，侧边导航可收起。`),t(`br`),e._v(` 侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-layout"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"layout-back"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"['demo-sider', { 'demo-sider-collapsed': collapsed }]"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-box"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`href`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`""`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Icon`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"LogoKui"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"30"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo"`)]),e._v(` />`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"logo-title"`)]),e._v(`>`)]),e._v(`KUI运营后台`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`span`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`a`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`v-model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"selectedKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:openKeys`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"openKeys"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-left-menu"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`mode`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"inline"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:inline-collapsed`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t1"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Home"`)]),e._v(`>`)]),e._v(`首页`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t2-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"StatsChart"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`title`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"数据统计"`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-1"`)]),e._v(`>`)]),e._v(`今日订单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t3-2"`)]),e._v(`>`)]),e._v(`今日销售额`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`SubMenu`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`key`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"t4"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Settings"`)]),e._v(`>`)]),e._v(`能源管理`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`MenuItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Menu`)]),e._v(`>`)]),e._v(`

      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Sider`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"k-demo-main"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"padding: 10px;"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed ? MenuUnfold : MenuFold"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"collapsed = !collapsed"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`theme`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"light"`)]),e._v(`
            `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"btn-collapsed"`)]),e._v(`>`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"nav"`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`Home`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`List`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`App`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`BreadcrumbItem`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Breadcrumb`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"padding:200px 0;text-align:center;color:#ddd;margin:20px 0;"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`class`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"demo-back"`)]),e._v(`>`)]),e._v(`Content`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`KUI ©2025 Created by Qiu`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Footer`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Content`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Layout`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronBack`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronForward`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`MenuFold`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`MenuUnfold`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(` {
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`LogoKui`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Search`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`NotificationsOutline`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronBack`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`ChevronForward`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`StatsChart`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Home`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Settings`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`MenuFold`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`MenuUnfold`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`selectedKeys`)]),e._v(`: [`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t1'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`openKeys`)]),e._v(`:[`),t(`span`,{staticClass:`hljs-string`},[e._v(`'t2'`)]),e._v(`],
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`collapsed`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`: {
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`toggle`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`collapsed`)]),e._v(` = !`),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`collapsed`)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`scoped`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`lang`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"less"`)]),e._v(`>`)]),t(`span`,{staticClass:`language-css`},[e._v(`
`),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-layout`)]),e._v(` {

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-sider`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-comment`},[e._v(`/*这里是例子，实际中请适当修改*/`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`left`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`200px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`var`)]),e._v(`(--kui-color-back);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: width `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-title`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: opacity `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`opacity`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.btn-collapsed`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`transition`)]),e._v(`: all `),t(`span`,{staticClass:`hljs-number`},[e._v(`0.3s`)]),e._v(`;
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-sider-collapsed`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`80px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: hidden;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-title`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`opacity`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.demo-left-menu`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`border`)]),e._v(`: none;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-built_in`},[e._v(`calc`)]),e._v(`(`),t(`span`,{staticClass:`hljs-number`},[e._v(`100%`)]),e._v(` - `),t(`span`,{staticClass:`hljs-number`},[e._v(`105px`)]),e._v(`);
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`overflow`)]),e._v(`: auto;

    &::-webkit-scrollbar {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`width`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`1px`)]),e._v(`;
    }
  }


  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo-box`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`box-sizing`)]),e._v(`: border-box;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`display`)]),e._v(`: flex;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`align-items`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`height`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`60px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding-left`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`25px`)]),e._v(`;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`white-space`)]),e._v(`: nowrap;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.logo`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`margin-right`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`8px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-demo-main`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`background-color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#7f7f7f17`)]),e._v(`;

    `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.nav`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`padding`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`20px`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(` `),t(`span`,{staticClass:`hljs-number`},[e._v(`20px`)]),e._v(`;
    }
  }

  `),t(`span`,{staticClass:`hljs-selector-class`},[e._v(`.k-layout-footer`)]),e._v(` {
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`text-align`)]),e._v(`: center;
    `),t(`span`,{staticClass:`hljs-attribute`},[e._v(`color`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`#999`)]),e._v(`;
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`style`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,`2829b7dc`,null,null).exports,b={render(){return e(`div`,{class:`demo-layout`},[e(p),e(m),e(h),e(g),e(_),e(v),e(y)])}};export{b as default};