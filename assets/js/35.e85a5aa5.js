(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{346:function(t,s,a){t.exports=a.p+"assets/img/list_wx.87223a6a.png"},347:function(t,s,a){t.exports=a.p+"assets/img/list_web.f3590d97.png"},348:function(t,s,a){t.exports=a.p+"assets/img/list_weex.88405867.jpg"},498:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" list")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("可滚动长列表。")]),t._v(" "),n("p",[n("code",[t._v("<list>")]),t._v(" 标签内可包含多条 "),n("code",[t._v("<cell>")]),t._v("，适合用于长列表的展示。")]),t._v(" "),n("p",[n("code",[t._v("<cell>")]),t._v(" 使用文档"),n("RouterLink",{attrs:{to:"/components/cell.html"}},[t._v("cell")]),t._v("。")],1),t._v(" "),n("h3",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("table",[n("tr",[n("th",{attrs:{width:"200px"}},[t._v("属性名")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",{attrs:{width:"60px"}},[t._v("必填")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("说明")])]),t._v(" "),n("tr",[n("td",[t._v("cstyle")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("自定义组件内联样式")])]),t._v(" "),n("tr",[n("td",[t._v("height")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("必传")]),t._v(" "),n("td",[t._v("无")]),t._v(" "),n("td",[t._v("\n      定义滚动区域的高度"),n("br"),t._v("\n      注意："),n("br"),t._v('\n      1、<list> height="'+t._s(100)+'" /> '),n("br"),t._v("\n      这样传值才是Number类型\n      "),n("br"),t._v("\n      2、height为-1时，<list> 的可滚动区域高度为list放置点至页面底部\n    ")])]),t._v(" "),n("tr",[n("td",[t._v("bottom-offset")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("距底部/右边多远时（单位cpx），触发 onBottom 事件")])]),t._v(" "),n("tr",[n("td",[t._v("to-element")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("滚动到的元素，仅支持ref(web、weex端)")])]),t._v(" "),n("tr",[n("td",[t._v("bounce")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("上拉下拉是否回弹(仅支持web)")])]),t._v(" "),n("tr",[n("td",[t._v("c-bind:scrolltobottom")]),t._v(" "),n("td",[t._v("EventHandle")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("滚动到底部，会触发 scrolltobottom 事件\n      "),n("br"),t._v("\n      返回事件对象：\n      "),n("br"),t._v('\n      event.type= "scrolltobottom"\n      '),n("br"),t._v("\n      event.detail = { direction }\n    ")])]),t._v(" "),n("tr",[n("td",[t._v("c-bind:onscroll")]),t._v(" "),n("td",[t._v("EventHandle")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("滚动时触发，\n        "),n("br"),t._v("\n        返回事件对象：\n        "),n("br"),t._v("\n        event.type = 'scroll'\n        "),n("br"),t._v("\n        event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}\n    ")])])]),t._v(" "),n("h3",{attrs:{id:"限制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[t._v("#")]),t._v(" 限制")]),t._v(" "),n("ol",[n("li",[t._v("不允许相同方向的 "),n("code",[t._v("<list>")]),t._v(" 或者 "),n("code",[t._v("<scroller>")]),t._v(" 互相嵌套，换句话说就是嵌套的 "),n("code",[t._v("<list>")]),t._v("/"),n("code",[t._v("<scroller>")]),t._v(" 必须是不同的方向。")])]),t._v(" "),n("p",[t._v("举个例子，不允许一个垂直方向的 "),n("code",[t._v("<list>")]),t._v(" 嵌套的一个垂直方向的 "),n("code",[t._v("<scroller>")]),t._v(" 中，但是一个垂直方向的 "),n("code",[t._v("<list>")]),t._v(" 是可以嵌套的一个水平方向的 list 或者 "),n("code",[t._v("<scroller>")]),t._v(" 中的。")]),t._v(" "),n("h3",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("list")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bottom-offset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{bottomOffset}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("c-bind:")]),t._v("scrolltobottom")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("c-bind:")]),t._v("onscroll")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{-1}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cell"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("c-for")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{lists}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("c-for-index")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("c-for-item")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-idx")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{i}}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item }}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cml "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chameleon-api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOADMORE_COUNT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * list 配置 子元素必须是 cell 标签\n     */")]),t._v("\n    bottomOffset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lists"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  methods "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loadmore'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lists"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOADMORE_COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lists"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onScroll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 88cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".panel")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 75cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 35cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 35cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgb")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("162"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 217"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 192"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("162"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 217"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 192"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 88cpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #41b883"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cml-type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around","align-items":"flex-end"}},[n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("img",{attrs:{src:a(346),width:"200px"}}),t._v(" "),n("text",{staticStyle:{color:"#fda775","font-size":"24px"}},[t._v("wx")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("img",{attrs:{src:a(347),width:"200px"}}),t._v(" "),n("text",{staticStyle:{color:"#fda775","font-size":"24px"}},[t._v("web")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("img",{attrs:{src:a(348),width:"200px"}}),t._v(" "),n("text",{staticStyle:{color:"#fda775","font-size":"24px"}},[t._v("native")])])]),t._v(" "),n("h3",{attrs:{id:"bug-tips"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bug-tips"}},[t._v("#")]),t._v(" Bug & Tips")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("<list>")]),t._v("组件的父容器必须为可定位元素， "),n("code",[t._v("<list>")]),t._v("内容的布局由父容器决定。")]),t._v(" "),n("li",[n("code",[t._v("<list>")]),t._v(" 中不可以使用 "),n("code",[t._v("<textarea>")]),t._v("、"),n("code",[t._v("<video>")]),t._v(" 组件。")]),t._v(" "),n("li",[n("code",[t._v("<list>")]),t._v(" 中不建议在"),n("code",[t._v("<list>")]),t._v("上加 class 改变样式，可以通过 cstyle 属性传入内联样式。")]),t._v(" "),n("li",[n("code",[t._v("<list>")]),t._v(" 的子组件定位无效。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);