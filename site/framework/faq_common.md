##### 我想使用 chameleon，是否需要大刀阔斧的重构项目？

不需要，可以使用 chameleon 开发公用组件，<a href="../terminal/io.html">导出</a>到各端原有项目中使用。

##### 用 CML 标准编写代码，是否增加调试成本？

我们实现了全面的语法检查功能，且在持续加强。理论上框架是降低调试成本，就像从原生 js 开发到 vuejs、reactjs 是否认为也增加了调试成本，见仁见智。

##### 各端包括小程序的接口更新频繁，如何保证框架编译的抽象度和稳定性？

1、自建输入语法标准 cml，编译输出结果自定的格式语法。
2、框架的 runtime 层实现匹配接收的编译输出代码，runtime 跟随小程序更新。
3、框架整体方向一致：mvvm 底层设计模式为标准设计接口。
基于以上三条，你可以理解为：我们设计了一个框架统一标准协议，再在各个端 runtime 分别实现这个框架，宏观的角度就像 nodejs 同时运行在 window 和 macOS 系统，就像 flutter 运行在 Android 和 iOS 一个道理。各端小程序接口更新除非遇到不向下兼容情况，否则不影响框架，如果真遇到不向下兼容更新，这种情况下是否用框架都需要改。

##### 框架有多大，性能是否有影响？

1、小程序的主要运行性能瓶颈是 webview 和 js 虚拟机的传输性能，我们在这里会做优化，尽可能 diff 出修改的部分进行传输，性能会更好。
2、包大小，小程序有包大小限制，web 端包大小也是工程师关心的点。首先基于多态协议，产出包纯净保留单端代码；其次框架的 api 和组件会按需打包。包大小是我们重点发力点，会持续优化到极致。目前 build 模式包大小测试结果如下:
<span style="color: #ff534d;">minimize</span><span style="color: #edd0be;"> | </span><span style="color: #25c6fc;">minimize + gzip</span>

<table style="color: #edd0be;">
<tr>
  <th>平台</th><th>js总体积</th><th>外部框架</th><th>chameleon运行时代码</th><th>其他代码</th>
</tr>
<tr>
  <td>web</td>
  <td>
    <span style="color: #ff534d;">141.87kb</span>  
    |
    <span style="color: #25c6fc;">43.72kb</span>
  </td>
  <td>
    vue+vuex+vue-router<br/>
    <span style="color: #ff534d;">99.26kb</span>  
    | 
    <span style="color: #25c6fc;">33.89kb</span>
  </td>
  <td>
    <span style="color: #ff534d;">35.96kb</span>  
    |
    <span style="color: #25c6fc;"> 8.85kb</span>
  </td>
  <td>
    业务代码
  </td>
</tr>
<tr>
  <td>weex</td><td>
    <span style="color: #ff534d;">135kb</span>  
    |
    <span style="color: #25c6fc;">32.43kb</span>
  </td>
  <td>
    vuex+vue-router<br/>
    <span style="color: #ff534d;">33.49kb</span>  
    | 
    <span style="color: #25c6fc;">17.96kb</span>
  </td>
  <td>
    <span style="color: #ff534d;">25.23kb</span>  
    |
    <span style="color: #25c6fc;">5.94kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>wx</td><td>
    <span style="color: #ff534d;">101.66kb</span>  
    |
    <span style="color: #25c6fc;">28.12kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">98.75kb</span>  
    |
    <span style="color: #25c6fc;">26.53kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>baidu</td><td>
    <span style="color: #ff534d;">101.72kb</span>  
    |
    <span style="color: #25c6fc;"> 28.13kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">98.78kb</span>  
    |
    <span style="color: #25c6fc;">26.61kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

<tr>
  <td>alipay</td><td>
    <span style="color: #ff534d;">102kb</span>  
    |
    <span style="color: #25c6fc;">28.12kb</span>
  </td>
  <td>
    mobx算在chameleon运行时中  
  </td>
  <td>
    <span style="color: #ff534d;">99.15kb</span>  
    |
    <span style="color: #25c6fc;">26.34kb</span>
  </td>
    <td>
    业务代码
  </td>
</tr>

</table>

##### 我只想跨 web 和各类小程序，是否可以不使用 Flexbox 布局模型？

可以，如果你的项目不在 快应用、react-native、weex 等平台运行，可以更便捷开发项目，特别是 CSS 的限制更少：
<a href="../example/web_wx.html">只跨 web 和小程序的应用</a>
