(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{460:function(t,a,s){"use strict";s.r(a);var n=s(17),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"项目工程化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目工程化配置"}},[t._v("#")]),t._v(" 项目工程化配置")]),t._v(" "),s("p",[t._v("前端工程化是前端领域在不断发展摸索过程中，总结出的使用"),s("code",[t._v("软件工程")]),t._v("对项目的"),s("code",[t._v("开发")]),t._v("、"),s("code",[t._v("上线")]),t._v("和"),s("code",[t._v("维护")]),t._v("等阶段中进行管理的集成解决方案。")]),t._v(" "),s("p",[s("code",[t._v("chameleon")]),t._v("根据自身框架特征，设计并完成了一套具有"),s("code",[t._v("高度自由度")]),t._v("、"),s("code",[t._v("可定制化")]),t._v("的自有工程化解决方案，可在以下几个方面针对不同场景进行配置支持。")]),t._v(" "),s("ul",[s("li",[t._v("数据 Mock")]),t._v(" "),s("li",[t._v("打包构建")]),t._v(" "),s("li",[t._v("文件指纹")]),t._v(" "),s("li",[t._v("代码压缩")])]),t._v(" "),s("h2",{attrs:{id:"项目初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化"}},[t._v("#")]),t._v(" 项目初始化")]),t._v(" "),s("p",[t._v("按照起步新建一个以 "),s("code",[t._v("test_project")]),t._v(" 为名称的项目。")]),t._v(" "),s("p",[t._v("项目的 source 目录如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("src\n├── app\n│   └── app.cml\n├── assets\n│   └── images\n│       └── chameleon.png\n├── components\n│   ├── com2\n│   │   └── com2.cml\n│   └── demo-com\n│       └── demo-com.cml\n├── main.js\n├── pages\n│   ├── a\n│   │   └── a.cml\n│   └── index\n│       └── index.cml\n├── router.config.json\n└── store\n    ├── actions.js\n    ├── getters.js\n    ├── index.js\n    ├── mutations.js\n    └── state.js\n")])])]),s("h2",{attrs:{id:"数据-mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据-mock"}},[t._v("#")]),t._v(" 数据 Mock")]),t._v(" "),s("p",[t._v("数据 Mock 是前后端分离的基本保障，在起步中已经有了比较详细介绍，这里就不在赘述。")]),t._v(" "),s("h2",{attrs:{id:"打包构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包构建"}},[t._v("#")]),t._v(" 打包构建")]),t._v(" "),s("p",[t._v("执行如下命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ cml build\n")])])]),s("p",[t._v("打包出来的"),s("code",[t._v("dist")]),t._v("目录结构如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dist\n├── config.json // 各端映射关系表\n├── web         // web端部署包\n├── weex        // weex端部署包\n└── wx          // wx端部署包\n")])])]),s("p",[t._v("进入 Weex 包, 并查看 weex 包内容")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ tree dist/weex\ndist/weex/\n└── test_project_c6bdf9074a821f01e70f.js\n")])])]),s("p",[s("code",[t._v("cml build")]),t._v(" 默认在打包的时候添加文件指纹，因为大多数场景下，静态资源以强缓存的方式会存放到 cdn 上，使用文件指纹可以避免代码修改后，客户端缓存导致未更新的问题。\n从上边的结果上看打包出来的 Weex bundle 文件名已添加上了文件指纹。")]),t._v(" "),s("p",[t._v("不过有些场景下希望不添加文件指纹，比如静态资源为使用协商式缓存的情况。")]),t._v(" "),s("h2",{attrs:{id:"文件指纹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[t._v("#")]),t._v(" 文件指纹")]),t._v(" "),s("p",[t._v("让我们一起把文件指纹去掉，进入刚才创建项目的根目录，找到并打开根目录下的"),s("code",[t._v("chameleon.config.js")]),t._v("，找到如下代码片段。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  weex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    build"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/weex")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    custom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/wx")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在"),s("code",[t._v("weex.build")]),t._v("下 增加"),s("code",[t._v("hash: false")]),t._v("的配置")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  weex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    build"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/weex")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    custom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/wx")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再次执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ cml build\n$ tree dist/weex/\ndist/weex/\n└── test_project.js\n")])])]),s("p",[t._v("只需简单的配置，文件指纹即已去除！")]),t._v(" "),s("h2",{attrs:{id:"代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[t._v("#")]),t._v(" 代码压缩")]),t._v(" "),s("p",[t._v("代码压缩作为前端工程师的性能优化利器，CML 已默认配置了 build 的阶段的代码压缩。")]),t._v(" "),s("p",[t._v("当然，也有某些场景下需要构建出来的产物不进行代码压缩，比如集成测试的时候，使用压缩前的代码能够最便捷的发现问题，下面操作如何取消代码压缩。")]),t._v(" "),s("p",[t._v("仍旧打开根目录下的"),s("code",[t._v("chameleon.config.js")]),t._v("文件，增加"),s("code",[t._v("minimize: false")]),t._v("参数即达目的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  weex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    build"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/weex")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      hash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minimize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    custom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      publicPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("publicPath"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/wx")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      apiPrefix\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再次执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ cml build\n")])])]),s("p",[t._v("这时构建出来的代码即为压缩前代码。")])])}),[],!1,null,null,null);a.default=e.exports}}]);