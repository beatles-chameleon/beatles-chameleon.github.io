# 目录结构

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
        <td>chameleon.config.js</td>
        <td>必须</td>
        <td>项目配置文件</td>
    </tr>
    <tr>
        <td>dist</td>
        <td>必须</td>
        <td>自动生成，用户无需关注。项目编译目标目录</td>
    </tr>
    <tr>
        <td>mock</td>
        <td>必须</td>
        <td>数据mock编写文件夹</td>
    </tr>
    <tr>
        <td>node_modules</td>
        <td>必须</td>
        <td>自动生成，用户无需关注。npm包安装文件夹</td>
    </tr>
    <tr>
        <td>package.json</td>
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
        <td>router.config.json</td>
        <td>必须</td>
        <td>路由配置文件</td>
    </tr>
    <tr>
        <td>store</td>
        <td>必须</td>
        <td>数据管理文件夹</td>
    </tr>
</table>

## .cml 文件

一个 `.cml` 文件开发的组件由四块内容组成，分别是：

<table>
    <tr>
        <th>标签</th>
        <th>必须</th>
        <th>属性</th>
        <th>作用</th>
    </tr>
    <tr>
        <td>template</td>
        <td>必须</td>
        <td>lang:vue</td>
        <td>提供组件结构、事件绑定、数据绑定、样式绑定</td>
    </tr>
    <tr>
        <td>template(标签设置cml-type属性时)</td>
        <td>必须</td>
        <td>cml-type:json</td>
        <td>组件配置</td>
    </tr>
    <tr>
        <td>script</td>
        <td>必须</td>
        <td>暂无</td>
        <td>组件逻辑</td>
    </tr>
    <tr>
        <td>style</td>
        <td>必须</td>
        <td>lang:less|stylus</td>
        <td>组件样式表</td>
    </tr>
</table>

## .interface 文件

`.cml` 文件的特殊形式，用于实现[多态协议规范](poly.md)，多端差异化的入口

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
           script (interface 定义)
        </td>
        <td>
            cml-type="interface" 情况下必须和 include 标签二选一
        </td>
        <td>
            cml-type:interface
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
            script（实现）
        </td>
        <td>
            多态组件：当无标签时按规定的优先级查找
            <br/>
            多态 API：必须有，或来自 include 继承
        </td>
        <td>
            cml-type:wx|alipay|weex|web|tt|qq|其他
            <br/>
            src:API 方法实现文件引用地址|组件实现文件引用地址
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
        <td>include</td>
        <td>必须和 &lt;script cml-type="interface" &gt; 的标签二选一</td>
        <td> src:引用 interface 文件路径</td>
        <td> 继承多态协议 </td>
        <td> 
            1. 可用于重载既有组件或 API 的实现，定制化某些端个性化能力。<br/>
            2. 用于扩展新端。 
        </td>
    </tr>
</table>
