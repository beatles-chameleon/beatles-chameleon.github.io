# cml指南(Guide)

`cml` 作为真正让一套代码运行多端的框架，提供标准的MVVM模式，统一开发各类终端。

同时，拥有各端独立的 `运行时框架(runtime)`、`数据管理(store)`、`组件库(ui)`、`接口(api)`。

此外，`cml`在跨端`能力加强`、`能力统一`、`表现一致`等方面做了许多工作，包括不限于以下内容：

<table>
  <tr>
    <th>节点</th>
    <th>项目工程</th>
    <th>项目结构</th>
    <th>路由</th>
    <th>组件</th>
    <th>布局和外观</th>
    <th>数据视图驱动</th>
    <th>生命周期</th>
    <th>交互事件</th>
    <th>数据管理</th>
    <th>本地接口</th>
    <th>尺寸单位</th>
  </tr>
  <tr>
    <td>关键词</td>
    <td>chameleon.config.js</td>
    <td>app、 components、pages、store</td>
    <td>Chameleon URL</td>
    <td>CML单文件</td>
    <td>CMSS</td>
    <td>CML语法、类VUE</td>
    <td>beforeCreate-created-beforeMount-mounted-beforeDestroy-destroyed</td>
    <td>c-bindevent</td>
    <td>类vuex</td>
    <td>chameleon-api</td>
    <td>cpx</td>
  </tr>
  <tr>
    <td>统一性</td>
    <td>针对工程化可以自由定制某端差异化</td>
    <td>统一结构</td>
    <td>自适应打开不同环境同一页面</td>
    <td>CML、CMSS、逻辑JS、JSON</td>
    <td>UI的布局、元素尺寸、文本颜色等</td>
    <td>定义CML，类vue语法</td>
    <td>提供6个基础生命周期</td>
    <td>统一绑定方式</td>
    <td>vuex易用性强</td>
    <td>vuex易用性强</td>
    <td>提供虚拟单位cpx</td>
  </tr>
  <tr>
    <td>差异性</td>
    <td>各类都可以配置</td>
    <td></td>
    <td>H5配置可差异化</td>
    <td colspan="8">多态协议</td>
  </tr>
</table>


- `各端独立`意味着：易扩展。
- `MVVM协议`意味着：标准统一。

那么，开发者可以依据`MVVM协议`自由[扩展新端](https://cmljs.org/doc/extend/extend.html)。

今天，为了让大家的项目优雅升级，快速接入，

下面介绍`各端(vue、weex、小程序)迁移cml指南` 以及 `cml 导出组件到各端指南`，方便使用和扩展。

- [如何迁移一个Vue项目到chameleon](./web_to_chameleon.html)
- [如何迁移一个Weex项目到chameleon](./weex_to_chameleon.html)
- [如何迁移一个微信小程序到chameleon](https://cmljs.org/doc/example/wx_to_chameleon.html)
- [普通项目使用chameleon跨端dialog组件](https://cmljs.org/doc/example/webpack_output.html)


其实，迁移可以抽象成以下方面：

- 项目工程
  - config配置
  - mock
- 路由
  - 多页&跳转
- 生命周期
- 数据响应
- 数据管理
- 事件交互
  - 事件对象统一
- 布局和外观
  - 单位统一
  - 多端一致性
- 组件
  - 组件化方案
  - 内置
  - 多态扩展原生
- api

## 项目工程
`Chameleon` 不仅仅是跨端解决方案，让开发者高效、低成本开发多端原生应用。基于优秀的前端打包工具Webpack，吸收了业内多年来积累的最有用的工程化设计，提供了前端基础开发脚手架命令工具，帮助端开发者从开发、联调、测试、上线等全流程高效的完成业务开发。

#### [了解脚手架工具](https://cmljs.org/doc/quick_start/cml_cmd.html)
基于node开发的脚手架工具，提供简洁的命令，进行初始化与构建项目。

#### [了解目录结构](https://cmljs.org/doc/framework/structure.html)
提供规范化的项目结构，适合于企业级大型应用的开发，CML单文件组件的开发模式更有利于提高开发效率与优化文件组织结构。

#### [了解项目配置](https://cmljs.org/doc/framework/settings.html)
针对项目、组件、路由等的特定配置，以满足各种方式的需求。

#### [了解多态协议](https://cmljs.org/doc/framework/polymorphism/intro.html)
提供了跨端时各端底层组件与接口统一的解决方案，使开发者可以自由扩展原生api与组件。

#### [了解规范校验](https://cmljs.org/doc/framework/polymorphism/standards.html)
为了提高开发的效率与代码的可维护性，chameleon提供了全面的代码规范与校验，帮助开发者能够得到更好的开发体验。

#### [了解更多](https://cmljs.org/doc/framework/engineering.html)

## 路由
依据统一资源索引URI，自适应打开不同环境同一路由PATH

- 当前`CML应用`多页面跳转：[路由导航](https://cmljs.org/doc/api/navigate.html)
- 不同`CML应用`互相跳转：[Chameleon URL](https://cmljs.org/doc/framework/chameleon_url.html)

## 生命周期

## 数据响应
## 数据管理
## 事件交互
#### 事件对象统一
## 布局和外观
#### 单位统一
#### 多端一致性
## 组件
#### 组件化方案
#### 内置
#### 多态扩展原生
## api






