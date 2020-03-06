## 逻辑层(Logic)

逻辑层负责反馈用户对界面操作的处理中心。

逻辑层是终端开发的“灵魂”。

而 `VM 对象` 是逻辑层规范的输入口

#### VM 对象

<table>
<tr>
  <th>字段名</th><th>类型</th><th>说明</th>
</tr>
<tr>
  <td>props</td><td>Object</td>
  <td>
  声明当前组件可接收数据属性 <br/>
  props = { type, default } <br/>
  type为数据类型，default为数据默认值
  </td>
</tr>
<tr>
  <td>data</td><td>Object</td><td>CML模板可直接使用的响应数据，是连接视图层的枢纽</td>
</tr>
<tr>
  <td>methods</td><td>Object</td><td>处理业务逻辑与交互逻辑的方法</td>
</tr>
<tr>
  <td><a href="./watch.html">watch</a></td><td>Object</td><td>侦听属性，监听数据的变化，触发相应操作</td>
</tr>
<tr>
  <td><a href="./computed.html">computed</a></td><td>Object</td><td>CML模板可直接使用的计算属性数据,也是连接视图层的枢纽</td>
</tr>
<tr>
  <td>beforeCreate</td><td>Function</td><td>例初始化之后，数据和方法挂在到实例之前
    一个页面只会返回一次</td>
</tr>
<tr>
  <td>created</td><td>Function</td><td>数据及方法挂载完成</td>
</tr>
<tr>
  <td>beforeMount</td><td>Function</td><td>开始挂载已经编译完成的cml到对应的节点时</td>
</tr>
<tr>
  <td>mounted</td><td>Function</td><td>cml模板编译完成,且渲染到dom中完成</td>
</tr>
<tr>
  <td>beforeDestroy</td><td>Function</td><td>实例销毁之前</td>
</tr>
<tr>
  <td>destroyed</td><td>Function</td><td>实例销毁后</td>
</tr>
</table>

#### [响应式数据绑定系统](/logic/data_bind.html)

响应式数据绑定意味着开发者只需关心逻辑处理，通过数据绑定的形式，当数据变化时视图自动更新。

#### [生命周期](/logic/lifecycle.html)

每个 Chameleon 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到  节点 并在数据变化时更新  节点 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给开发者在不同阶段添加自己的代码的机会。

#### [计算属性 computed](/logic/computed.html)

对于模板内任何复杂逻辑，你都应当使用计算属性

#### [侦听属性 watch](/logic/watch.html)

提供了一种更通用的方式来观察和响应实例上的数据变动

### [API](/logic/API.html)

调用各端原生能力的入口

#### [数据管理](/logic/store.html)

 利用这种数据管理模式在组件外部集中管理状态，可方便构建一个中大型单页应用
