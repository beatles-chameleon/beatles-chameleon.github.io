(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{489:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"只跨-web-与小程序的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只跨-web-与小程序的应用"}},[t._v("#")]),t._v(" 只跨 Web 与小程序的应用")]),t._v(" "),a("h2",{attrs:{id:"背景介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),a("p",[t._v("通常情况下，cml 框架会生成跨 H5、小程序、客户端的应用。为了 H5、小程序、客户端初始样式呈现效果一致，cml 会添加"),a("RouterLink",{attrs:{to:"/docs/cmss.html#一致性基础样式"}},[t._v("一致性基础样式")]),t._v("。在开发模式下，构建会严格校验 CMSS 语法，只允许书写跨 H5、小程序、客户端都通用的 "),a("RouterLink",{attrs:{to:"/docs/cmss.html"}},[t._v("CMSS")]),t._v(" 规则。因此，受限于客户端的 CMSS 渲染能力，开发会有诸多限制，另一方面，当开发者只需要跨 H5 和小程序应用时，开发会变得很轻便。")],1),t._v(" "),a("p",[t._v("通过下面的表格，展示 CMSS 跨端 能力差异：")]),t._v(" "),a("table",[a("tr",[a("th",{attrs:{width:"200px"}},[t._v("CSS属性")]),t._v(" "),a("th",[t._v("H5")]),t._v(" "),a("th",{attrs:{width:"100px"}},[t._v("小程序")]),t._v(" "),a("th",[t._v("weex")])]),t._v(" "),a("tr",[a("td",[t._v("布局")]),t._v(" "),a("td",[t._v("all")]),t._v(" "),a("td",[t._v("all")]),t._v(" "),a("td",[t._v("flexbox")])]),t._v(" "),a("tr",[a("td",[t._v("盒模型")]),t._v(" "),a("td",[t._v("all")]),t._v(" "),a("td",[t._v("all")]),t._v(" "),a("td",[t._v("只支持display:border-box")])]),t._v(" "),a("tr",[a("td",[t._v("float浮动")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("display:inline-block|none")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("ID选择器")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("类选择器")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("属性选择器")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("级联选择器、派生选择器(后代、子元素、相邻兄弟)")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("选择器分组")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("伪类(:active|:focus)")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")])]),t._v(" "),a("tr",[a("td",[t._v("伪类(:hover|:link|:visited|:first-child|:lang)")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("伪元素(:first-letter|:first-line|:before|:after)")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("百分比定值")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("line-height:1")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("尺寸")]),t._v(" "),a("td",[t._v("px|rem|em|vw|vh")]),t._v(" "),a("td",[t._v("px|rpx")]),t._v(" "),a("td",[t._v("px")])]),t._v(" "),a("tr",[a("td",[t._v("!important")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("✅")]),t._v(" "),a("td",[t._v("❌")])])]),t._v(" "),a("h2",{attrs:{id:"项目初始化与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化与配置"}},[t._v("#")]),t._v(" 项目初始化与配置")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/docs/setup.html"}},[t._v("项目初始化")])],1)]),t._v(" "),a("li",[a("p",[t._v("以 merge config 的方式修改项目根目录下的 "),a("code",[t._v("chameleon.config.js")]),t._v("，如下：")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  platforms"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alipay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baidu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"cmss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmss"}},[t._v("#")]),t._v(" CMSS")]),t._v(" "),a("p",[t._v("此时，CMSS 语法和可用属性，不再受限于客户端的渲染。CMSS 遵循 "),a("a",{attrs:{href:"https://www.w3.org/TR/css-backgrounds-3/#introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C 层叠样式表"),a("OutboundLink")],1),t._v("(Cascading Style Sheets，缩写为 CSS）规范，在此基础上，小程序的标准样式会有一些限制。")]),t._v(" "),a("h2",{attrs:{id:"一致性基础样式可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一致性基础样式可选"}},[t._v("#")]),t._v(" 一致性基础样式可选")]),t._v(" "),a("p",[t._v("如果你希望去除小程序、客户端的的一致性基础样式，修改项目根目录下的 "),a("code",[t._v("chameleon.config.js")]),t._v("，如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alipay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    baidu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    weex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你希望更细粒度的去配置某一组件或者页面是否去除基本样式，可以在对应组件或者页面的 json 文件中配置 baseStyle 字段，baseStyle 为 false 时表示该组件或页面不添加默认样式，不配置该字段时是默认添加默认样式的。示例如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script cml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo-com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/components/demo-com/demo-com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundTextStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#E2E2E2"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alipay"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baseStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultTitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pullRefresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allowsBounceVertical"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YES"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titleBarColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);