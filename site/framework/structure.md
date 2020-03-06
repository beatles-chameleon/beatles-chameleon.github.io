# 目录结构(Directory structure)

## 项目结构

使用`cml init project` 生成的项目结构如下：

```bash
├── chameleon.config.js                 // 项目的配置文件
├── dist                                // 打包产出目录
├── mock                                // 模拟数据目录
├── node_modules                        // npm包依赖
├── package.json
└── src                                 // 项目源代码
    ├── app                             // app启动入口
    ├── components                      // 组件文件夹
    ├── pages                           // 页面文件夹
    ├── router.config.json              // 路由配置文件
    └── store                           // 全局状态管理
```

## 文件夹和文件

<table>
    <tr>
        <th>文件</th>
        <th>必须</th>
        <th>作用</th>
    </tr>
    <tr>
        <td><a href="../framework/config.html">chameleon.config.js</a></td>
        <td>必须</td>
        <td>项目配置文件</td>
    </tr>
    <tr>
        <td>dist</td>
        <td>必须</td>
        <td>自动生成，用户无需关注。项目编译目标目录</td>
    </tr>
    <tr>
        <td><a href="../framework/mock.html">mock</a></td>
        <td>必须</td>
        <td>数据mock编写文件夹</td>
    </tr>
    <tr>
        <td><a href="https://docs.npmjs.com/files/folders.html#node-modules">node_modules </a></td>
        <td>必须</td>
        <td>自动生成，用户无需关注。npm包安装文件夹</td>
    </tr>
    <tr>
        <td><a href="https://docs.npmjs.com/files/package.json">package.json </a></td>
        <td>必须</td>
        <td>npm包配置文件</td>
    </tr>
    <tr>
        <td>app</td>
        <td>必须</td>
        <td>应用启动入口根文件夹</td>
    </tr>
    <tr>
        <td>components </td>
        <td>必须</td>
        <td>用户组件根文件夹</td>
    </tr>
    <tr>
        <td>pages</td>
        <td>必须</td>
        <td>页面根文件夹</td>
    </tr>
    <tr>
        <td><a href="../framework/router.html">router.config.json</a></td>
        <td>必须</td>
        <td>路由配置文件</td>
    </tr>
    <tr>
        <td><a href="../logic/store.html">store</a></td>
        <td>必须</td>
        <td>数据管理文件夹</td>
    </tr>
</table>

## CML 文件

一个 CML 文件开发的组件由四块内容组成，分别是：

<table>
    <tr>
        <th>标签</th>
        <th>必须</th>
        <th>属性</th>
        <th>作用</th>
    </tr>
    <tr>
        <td><a href="../view/cml.html">template</a></td>
        <td>必须</td>
        <td>lang:<a href="../view/cml.html">cml</a>|<a href="../view/vue.html">vue</a></td>
        <td>提供组件结构、事件绑定、数据绑定、样式绑定</td>
    </tr>
    <tr>
        <td><a href="../framework/json.html">template</a>(标签设置cml-type属性时)</td>
        <td>必须</td>
        <td>cml-type:json</td>
        <td>组件配置</td>
    </tr>
    <tr>
        <td><a href="../logic/logic.html">script</a></td>
        <td>必须</td>
        <td>暂无</td>
        <td>组件逻辑</td>
    </tr>
    <tr>
        <td><a href="../view/cmss.html">style</a></td>
        <td>必须</td>
        <td>lang:less|stylus</td>
        <td>组件样式表</td>
    </tr>
</table>

## interface 文件

CML 文件的特殊形式，用于实现[多态协议规范](../framework/polymorphism/intro.html)，多端差异化的入口

<table>
    <tr>
        <th>标签</th>
        <th>必须</th>
        <th>属性</th>
        <th>作用</th>
        <th>备注</th>
    </tr>
    <tr>
        <td>
            <a href="../framework/polymorphism/check.html">script (interface 定义)</a>
        </td>
        <td>
            cml-type="interface" 情况下必须和 include 标签二选一
        </td>
        <td>
            cml-type:<a href="../framework/polymorphism/check.html">interface</a>
        </td>
        <td> 
            定义多态协议
        </td>
        <td> 
            规定组件或者 API 的输入输出结构和类型
        </td>
    </tr>
    <tr>
        <td>
            <a href="../framework/polymorphism/api.html">script（实现）</a>
        </td>
        <td>
            多态组件：当无标签时（<a href="../framework/polymorphism/component_extend.html#多态组件查找优先级" >按规定的优先级查找</a>）
            <br/>
            多态 API：必须有，或来自 include 继承
        </td>
        <td>
            cml-type:<a href="../framework/platform-list.html">wx|alipay|weex|web|tt|qq|其他</a>
            <br/>
            src:<a href="../framework/polymorphism/api_extend.html#12-script-src属性">${API 方法实现文件引用地址}</a>|<a href="../framework/polymorphism/component_extend.html#12-script-src属性">${组件实现文件引用地址}</a>
        </td>
        <td> 
            实现多态协议
        </td>
        <td> 
            1. 按&lt;script cml-type="interface" &gt;规定的输入输出结构和类型，实现组件或者 API接口的实现。<br/>
            2. 有 src 属性时，外链其他文件，且仅多态组件必须通过外链实现。
        </td>
    </tr>
    <tr>
        <td><a href="../framework/polymorphism/api_extend.html#11-include标签">include</a></td>
        <td>必须和 &lt;script cml-type="interface" &gt; 的标签二选一</td>
        <td> src:"<a href="../framework/polymorphism/api_extend.html#注意-cml-type-interface部分必须是唯一的">${引用 interface 文件路径}</a>"</td>
        <td> 继承多态协议 </td>
        <td> 
            1. 可用于重载既有组件或 API 的实现，定制化某些端个性化能力。<br/>
            2. 用于扩展新端。 
        </td>
    </tr>
</table>
