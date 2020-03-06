# 模板规范校验

该文档汇集模板校验支持所有检查点，附录有模板格式规范

## 模板语言校验

模板可以指定模板语言，指定方式为在 template 标签上指定 lang 属性， 其合法值为 "cml" 和 "vue"。

校验点:

- template 可以忽略 lang 属性，此时默认值为 cml
- template lang 属性如果指定，则必须为 "cml" 或者 "vue"

> 报错信息：'the tag template lang attribute: "<%= lang %>" is not valid'.

## 模板 template 标签校验

校验点：每个模板只能  且必须有一对 template 根标签。

> 报错信息："Each template can only have one group of template tags."

## 模板内 tags 校验

每个模板都有一个模板语言和一个平台类型，其中模板语言由 template 的 lang 属性指定，平台类型由模板文件的文件名解析出来。
对于多态组件平台类型可以直接从文件名解析出来， 比如 index.web.cml, index.weex.cml, index.wx.cml, index.alipay.cml, index.baidu.cml, 对应的平台类型分别为 web, weex, wx, alipay, baidu。
对于单文件组件，由于其模板要跨三端，故模板中只能使用 chameleon 原生支持的内建标签。

校验点：

- 单文件组件只能使用 chameleon 内建标签，使用非内建标签校验不通过。
  - chameleon 内建标签有: ['template','view','text','block','scroller','list','cell','image','switch','video','input','button','radio','checkbox', 'page', 'router-view', 'slot']
- **`src/app/app.cml` 项目启动文件中可以使用`app`组件，且只有`store`和`router-config`属性**
- 多态组件可以使用 chameleon 内建标签， 加上各平台类型所支持的原生标签，使用其他标签验证不同过。在使用平台类型支持的原生标签时，必须使用 'origin-'  为前缀。比如: 在 wx 平台下使用 swiper 标签，那么在模板里的写法是 'origin-swiper'. 各个平台类型支持的原生标签列举如下:
  - web 平台原生支持标签: ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dir","div","dfn","dialog","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","map","mark","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","slot","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"]
  - weex 平台原生支持标签: ['a','div','image','indicator','input','list','cell','recycle-list','loading','refresh','scroller','slider','textarea','text','richtext','video','waterfall','web']
  - wx 平台原生支持标签: ['template','view','block','scroll-view','swiper','movable-view','movable-area','cover-view','cover-image','icon','text','rich-text','progress','lable','input','form','checkbox','picker','picker-view','radio','switch','slider','textarea','navigator','functional-page-navigator','camera','live-player','live-pusher','map','open-data','web-view','ad','official-account','slot']
  - alipay 平台原生支持标签: ['view','swiper','scroll-view','cover-view','movable-view','text','icon','progress','rich-text','button','form','label','input','textarea','radio','checkbox','switch','slider','picker-view','picker','navigator','image','canvas','map','webview']
  - baidu 平台原生支持标签: ['view','scroll-view','swiper','movable-area','cover-view','cover-image','icon','text','rich-text','progress','animation-view','button','checkbox','form','input','label','picker','radio','slider','switch','textarea','navigator','audio','image','video','camera','ar-camera','live-player','map','canvas','open-data','web-view']

> 报错信息：'tag: "<%= tag %>" is either not allowed in this template or not referenced as a component'

## 模板指令校验

除引入的  平台原生组件对应的标签和'origin-'为前缀的原生标签，每个模板只能够使用 template lang 指定  模板语言对应的指令。Chameleon  现只提供两种模板语言 'vue' 和 'cml'。其对应的指令列举如下:

- lang='cml' 支持的指令：['c-if','c-else','c-else-if','c-for','c-for-index','c-for-item','c-model','c-text','c-show','c-bind','c-catch','c-key']
- lang='vue' 支持的指令：['v-if','v-else','v-else-if','v-for','v-on','v-bind','v-html','v-show','v-model','v-pre','v-once','slot-scope','is','@',':']

校验点：

- 单文件模板只能使用模板语言对应的指令，使用模板语言指令之外的指令校验不通过

- 多态组件各平台文件中以  'origin-' 为前缀的平台类型原生标签上必须使**平台原生指令**，不能使用 Chameleon 内置指令，使用此外其他指令校验不通过。各平台支持原生指令列举如下:
  - web 平台支持指令: ['v-if', 'v-else', 'v-else-if', 'v-for', 'v-on', 'v-bind', 'v-html', 'v-show', 'v-model', 'v-pre', 'v-once', 'slot-scope', 'is','@',':']
  - weex 平台支持指令同 vue.js 框架: ['v-if','v-else','v-else-if','v-for','v-on','v-bind','v-html','v-show','v-model','v-pre','v-once','slot-scope','is','@',':']
  - wx 平台支持指令：['wx:if','wx:elif','wx:else','wx:for','wx:for-item','wx:for-index','wx:key','bindtap','catchtap']
-  多态组件通过 usingComponents 配置引入的  第三方  平台原生组件，组件对应的标签上只能够使用**平台原生指令**，不能使用 Chameleon 内置指令，使用此外其他指令校验不通过。

> 报错信息：'directive "<%= attribute %>" is not allowed to be used in this template, as the template language is set to "<%= lang %>"'

> 报错信息：'tag "<%= name %>" is prefixed with "origin-" directive, so it\'s not allowed to use a chameleon built-in directive:"<%= directive %>"'

> 报错信息：'tag "<%= name %>" is a third party impored component, so it\'s not allowed to use a chameleon built-in directive:"<%= directive %>"'

## 组件属性和事件名称校验

在使用组件的时，会对使用过程中属性名和绑定的事件名称进行校验。组件属性校验分为内建组件与自定义组件两部分。

校验点：

- 内建组件:使用的属性名和绑定事件必须在组件内有定义否则校验不通过 - chameleon 内建组件有：["template", "view", "text", "block", "scroller", "list", "cell", "image", "switch", "video", "input", "textarea", "richtext", "button", "radio", "checkbox", "page", "router-view", "slot", "aside", "col", "container", "foot", "head", "main", "row"]
  > 报错信息：'component "<%= name %>" doesn\'t have a defined property named "<%= prop %>"'

>  报错信息：'component "<%= name %>" doesn\'t have a defined event named "<%= prop %>"'

- 自定义组件:模板校验时和根据 usingComponents 配置解析对应组件，使用组件时属性名和事件名必须在组件内有定义否则校验不通过。

> 报错信息：
> "The property "propName" is not a property of component "compName" which path is: path/to/component"

> 报错信息：
> "The event "eventName" is not defined in component "compName" which path is: path/to/component"

## 内置组件嵌套规则校验

在使用 chameleon 内置组件时，内置组件之间需要遵循一定的嵌套关系。

校验点：

- text 组件
  - text 组件只能包含 text 组件作为子节点
- scroller 组件
  - scroller 组件不能包含 textarea 或者 video 组件
- list
  - list 组件不能包含 textarea 或者 video 组件
- video
  - video 组件如果包含子组件，那么只能是 text 组件

> 报错信息
> 'tag "<%= parent %>" can not have any child elements, therefor tag "<%= forbiddenTag %>" is not allowed as it\'s children'

> 报错信息
> 'tag "<%= parent %>" can only have "<%= elements %>" as it\'s child elements, therefor tag "<%= forbiddenTag %>" is not allowed as it\'s children'

> 报错信息
> 'tag "<%= parent %>" can not have "<%= forbiddenTag %>" as it\'s child elements, and element in this list: "<%= elements %>" is forbidden as well'

## 附：模板格式规范

### 模板书写规范

chameleon 模板书写规范尊从 HTML5 基本规范。

### 模板目录规范

chameleon 支持三端(三种 native 环境)，每个组件在每个环境对应有一个模板。模板命名格式 `组件名称+端名称.cml` 比如：c-title 组件

```bash
├── components
│   ├── c-title
│   │   ├── c-title.web.cml
│   │   ├── c-title.weex.cml
│   │   └── c-title.wx.cml
```

其中： c-title.web.cml 为 web 端模板，c-title.weex.cml 为 iOS、Android 端，c-title.wx.cml 为微信小程序端。

本节模板规范就是指对这三个模板文件的编写规范。

### 模板语言指定

每个端的模板都可以并且必须选择两种语法规范中的一个，cml 语法规范 或者 类 vue 语法规范。指定语法规范的方式为在根节点 template 标签上给属性 lang 指定 "cml" 或者 "vue"。

列如指定模板为 cml 语法规范

```html
<template lang="cml"></template>
```

> 注意：每个模板只能够有一个根节点并且必须为 template 标签，template 便签每个模板只能有一个。

### 模板标签使用规范

每个模板内可以使用的标签由三部分组成：

1. Chameleon 的内置组件对应的标签
   - chamelon 支持的标签有: template、view、text、block、scroller、list、cell、image、switch、video、input、textarea、richtext、button、radio、checkbox、page、router-view、slot、aside、col、container、foot、head、main、row
2. 多态组件中在平台文件里， 以 'origin-'  为  前缀的平台原生组件对应的  标签。

3.  模板文件中通过 usingComponents 引入的组件对应的  标签。

#### 举例

仍以 c-title 组件为例，假设各个模板都有自定义组件配置

```html
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "tickets": "/components/ticket/index"
      }
    }
  }
</script>
```

- c-title.web.cml
  - 可以使用 chameleon 支持的 view、text、block 等基本标签，带 'origin-'  前缀的 web 原生标签 origin-div、origin-p、origin-span 等,以及自定义组件 tickets。
- c-title.weex.cml
  - 可以使用 chameleon 支持的 view、text、block 等基本标签，weex 支持的标签，以及自定义组件 tickets。如果以 vue 作为 weex 使用的前端框架，那么 weex 支持的标签基本和 vue 框架支持的标签基本一致，其中有部分不支持的标签比如：transition 标签，具体请参见 [weex 文档](https://weex.apache.org/cn/guide/)。
- c-title.wx.cml
  - 可以使用 chameleon 支持的 view、text、block 等基本标签，带 'origin-' 前缀的 wx 原生标签比如 origin-swiper、origin-movable-area、origin-cover-view、origin-web-view 等,以及自定义组件 tickets。

### 模板指令使用规范

除引用平台原生组件  对应的标签外，每个模板必须使用模板  语言(由 template 标签  的 lang 属性指定) 所对应的指令集。

- 模板语言为 cml 时支持的指令有：c-if、c-else、c-else-if、c-for、c-for-index、c-for-item、c-model、c-text、c-show、c-bind、c-catch
- 模板语言为类 vue 时支持的指令有：v-if、v-else、v-else-if、v-for、v-on、v-bind、v-html、v-show、v-model、v-pre、v-once、slot-scope、is、@、:

> 类 vue 语法支持上述列表中的指令，其他 vue.js 的指令如 v-cloak 是不支持的。

#### 举例

若模板语言为 "cml" 即 template 标签 lang 属性为 "cml"，native 环境为微信小程序。还是以 c-title 组件为例，那么此时对应的是 c-title.wx.cml 模板。
c-title.wx.cml:

```html
<template lang="cml">
    <view c-if="{{showMessage}}">{{messageText}}</view>
    <picker-view></picker-view>
</template>
```

那么模板里可以使用 chameleon 支持的指令:

c-if、c-else、c-else-if、c-for、c-for-index、c-for-item、c-model、c-text、c-show、c-bind、c-catch

###  引用平台原生组件

Chameleon 提供两种方式引入平台原生  组件和平台第三方原生组件：

- 通过给平台  原生内置组件添加 'origin-' 前缀引用原生组件
- 通过 usingComponents 引入平台原生第三方组件

>  引用的原生组件上只能够使用平台支持的原生指令，不能使用 Chameleon 内置指令。 改限制只限于组件本身，对其子组件没有影响。

#### 举例

若模板语言为 "cml" 即 template 标签 lang 属性为 "cml"，native 环境为微信小程序。还是以 c-title 组件为例，那么此时对应的是 c-title.wx.cml 模板。
c-title.wx.cml:

```html
<template lang="cml">
    <view>{{messageText}}</view>
    <origin-picker-view></origin-picker-view>
</template>
```

那么模板里可以使用 chameleon 支持的指令:

c-if、c-else、c-else-if、c-for、c-for-index、c-for-item、c-model、c-text、c-show、c-bind、c-catch

origin-picker-view 组件可以使用微信小程序原生支持的指令:

wx:if、wx:elif、wx:else、wx:for、wx:for-item、wx:for-index、wx:key、bindtap、catchtap
