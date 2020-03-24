(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{513:function(v,e,_){"use strict";_.r(e);var t=_(17),l=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"命令行工具-cli"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具-cli"}},[v._v("#")]),v._v(" 命令行工具 (CLI)")]),v._v(" "),_("p",[_("code",[v._v("chameleon-tool")]),v._v(" 是 CML 的命令行工具，该命令行工具命令详细如下。")]),v._v(" "),_("h2",{attrs:{id:"获取工具信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取工具信息"}},[v._v("#")]),v._v(" 获取工具信息")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml -h 或cml --help")]),v._v(" 查看帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml -v 或cml --version")]),v._v(" 查看 chameleon-cli 版本信息")])]),v._v(" "),_("h2",{attrs:{id:"初始化项目、页面、组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目、页面、组件"}},[v._v("#")]),v._v(" 初始化项目、页面、组件")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml init -h")]),v._v(" 查看 init 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml init project")]),v._v(" 创建项目")]),v._v(" "),_("li",[_("code",[v._v("cml init page")]),v._v(" 创建页面")]),v._v(" "),_("li",[_("code",[v._v("cml init component")]),v._v(" 创建组件")]),v._v(" "),_("li",[_("code",[v._v("cml dev --nopreview")]),v._v(" dev 模式不在浏览器打开 preview 页面，简写"),_("code",[v._v("cml dev -n")]),v._v("（chameleon-tool@0.3.3 版本开始支持）")])]),v._v(" "),_("p",[_("code",[v._v("cml init project")]),v._v(" 命令有如下参数")]),v._v(" "),_("table",[_("tr",[_("th",[v._v("参数名")]),_("th",[v._v("可选值")]),_("th",[v._v("默认值")]),_("th",[v._v("功能")])]),v._v(" "),_("tr",[_("td",[v._v("lang")]),_("td",[v._v("cml|vue")]),_("td",[v._v("cml")]),_("td",[v._v("设置项目默认模板语法")])]),v._v(" "),_("tr",[_("td",[v._v("tpl")]),_("td",[v._v("html|smarty")]),_("td",[v._v("html")]),_("td",[v._v("设置chameleon.config.js中的templateType字段")])]),v._v(" "),_("tr",[_("td",[v._v("demo")]),_("td",[v._v("blank|todo")]),_("td",[v._v("blank")]),_("td",[v._v("设置要初始化的项目模板")])])]),v._v(" "),_("p",[_("b",[v._v("使用方式")]),v._v(": "),_("code",[v._v("cml init project --参数名 参数值")]),v._v("\n例如"),_("code",[v._v("cml init project --lang vue --tpl html")])]),v._v(" "),_("h2",{attrs:{id:"开发-生产模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发-生产模式"}},[v._v("#")]),v._v(" 开发/生产模式")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml dev")]),v._v(" 启动开发模式，默认启动所有 \b 端的构建，如果不启动某一端可以通过"),_("code",[v._v("devOffPlatform")]),v._v("配置")]),v._v(" "),_("li",[_("code",[v._v("cml build")]),v._v(" 启动生产模式打包，默认启动所有 \b 端的构建，如果不启动某一端可以通过"),_("code",[v._v("buildOffPlatform")]),v._v("配置")])]),v._v(" "),_("h2",{attrs:{id:"web-环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-环境"}},[v._v("#")]),v._v(" web 环境")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml web -h")]),v._v(" 查看 web 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml web dev")]),v._v(" 执行 Web 端开发模式构建")]),v._v(" "),_("li",[_("code",[v._v("cml web build")]),v._v(" 执行 Web 端打包模式构建")])]),v._v(" "),_("h2",{attrs:{id:"微信小程序环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序环境"}},[v._v("#")]),v._v(" 微信小程序环境")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml wx -h")]),v._v(" 查看 wx 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml wx dev")]),v._v(" 执行微信端开发模式构建 也会构建 Web 端，使 API Mock 生效")]),v._v(" "),_("li",[_("code",[v._v("cml wx build")]),v._v(" 执行微信端打包模式构建")])]),v._v(" "),_("h2",{attrs:{id:"支付宝小程序环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#支付宝小程序环境"}},[v._v("#")]),v._v(" 支付宝小程序环境")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml alipay -h")]),v._v(" 查看 alipay 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml alipay dev")]),v._v(" 执行支付宝端开发模式构建 也会构建 Web 端，使 API Mock 生效")]),v._v(" "),_("li",[_("code",[v._v("cml alipay build")]),v._v(" 执行支付宝端打包模式构建")])]),v._v(" "),_("h2",{attrs:{id:"百度小程序环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#百度小程序环境"}},[v._v("#")]),v._v(" 百度小程序环境")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml baidu -h")]),v._v(" 查看 baidu 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml baidu dev")]),v._v(" 执行百度端开发模式构建 也会构建 Web 端，使 API Mock 生效")]),v._v(" "),_("li",[_("code",[v._v("cml baidu build")]),v._v(" 执行百度端打包模式构建")])]),v._v(" "),_("h2",{attrs:{id:"weex-环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#weex-环境"}},[v._v("#")]),v._v(" Weex 环境")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cml weex -h")]),v._v(" 查看 Weex 命令的帮助信息")]),v._v(" "),_("li",[_("code",[v._v("cml weex dev")]),v._v(" 执行 Weex 端开发模式构建，也会构建 Web 端，进行预览调试")]),v._v(" "),_("li",[_("code",[v._v("cml weex build")]),v._v(" 执行 Weex 端打包模式构建")])]),v._v(" "),_("h2",{attrs:{id:"其他更多环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他更多环境"}},[v._v("#")]),v._v(" 其他更多环境")]),v._v(" "),_("p",[v._v("在执行 web、wx、alipay、baidu 和 weex 构建命令时，会读取 "),_("code",[v._v("chameleon.config.js")]),v._v(" 中的配置信息，具体配置参见"),_("RouterLink",{attrs:{to:"/docs/config.html"}},[v._v("项目配置")]),v._v("一节。")],1)])}),[],!1,null,null,null);e.default=l.exports}}]);