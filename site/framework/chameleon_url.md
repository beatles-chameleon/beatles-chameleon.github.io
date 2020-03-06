# 一个完整 Chameleon URL

一个 Chameleon URL 能在多端运行，在普通浏览器/webview 运行 web 端，小程序运行小程序端，Native 渲染（weex）则拉取对应的 JS Bundle 并展现，完整地址如下，使用场景包含：

- a.跨应用页面之间跳转使用 [ open 接口](../api/open.html)
- b.服务端下发给端（weex/浏览器/小程序）进行跳转

`https://h5地址`?
`cml_addr=jsbundle地址`&
`path=路由path(通用字段)`&
`envVersion=要打开的小程序版本(通用字段)`&
`weixin_appid=123456`&
`weixin_path=微信小程序路由path`&
`weixin_envVersion=要打开的微信小程序版本`&
`baidu_appid=123456`&
`baidu_path=百度小程序路由path`&
`baidu_envVersion=要打开的百度小程序版本`&
`alipay_appid=123456`&
`alipay_path=支付宝小程序路由path`

<table>
    <tr>
        <th>参数</th>
        <th>作用</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>h5地址</td>
        <td>H5端的地址或者用于提示bundle出错的h5地址</td>
        <td>如果你没有h5地址，可以选择将h5地址写为jsbundle地址（后面的cml_addr=jsbundle地址依然需要）。</td>
    </tr>
    <tr>
        <td>cml_addr</td>
        <td>描述weex/rn js bundle地址</td>
        <td>内部非使用sdk开发者暂时使用cml_addr字段</td>
    </tr>
    <tr>
        <td>path</td>
        <td>描述应用里面的页面路由， 即<a href="../framework/router.html">路由</a>里面的path值 </td>
        <td>若未填写weixin_path, baidu_path, alipay_path时, 统一使用该字段</td>
    </tr>
    <tr>
        <td>envVersion</td>
        <td>要打开的小程序版本 </td>
        <td>有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效(仅支持<a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html">微信小程序</a>和<a href="https://docs.alipay.com/mini/api/open-miniprogram">支付宝小程序</a>)</td>
    </tr>
    <tr>
        <td>weixin_appid</td>
        <td>描述微信小程序的app id</td>
        <td>微信小程序跳转需要 <a href="https://developers.weixin.qq.com/minigame/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html?t=18091916">appid</a></td>
    </tr>
    <tr>
        <td>weixin_path</td>
        <td>描述应用里面的页面路由(目标微信小程序为非chameleon项目时可用)</td>
        <td></td>
    </tr>
    <tr>
        <td>weixin_envVersion</td>
        <td>要打开的小程序版本 </td>
        <td>有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效(该字段仅对微信小程序跳转生效)</td>
    </tr>
    <tr>
        <td>baidu_appid</td>
        <td>描述百度小程序的appKey</td>
        <td>百度小程序跳转需要 <a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram/">appKey</a></td>
    </tr>
    <tr>
        <td>baidu_path</td>
        <td>描述应用里面的页面路由(目标百度小程序为非chameleon项目时可用)</td>
        <td></td>
    </tr>
    <tr>
        <td>alipay_appid</td>
        <td>描述支付宝小程序的app id</td>
        <td>支付宝小程序跳转需要 <a href="https://docs.alipay.com/mini/api/open-miniprogram">appid</a></td>
    </tr>
    <tr>
        <td>alipay_path</td>
        <td>描述应用里面的页面路由(目标支付宝小程序为非chameleon项目时可用)</td>
        <td></td>
    </tr>
    <tr>
        <td>alipay_envVersion</td>
        <td>要打开的小程序版本 </td>
        <td>有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效(该字段仅对支付宝小程序跳转生效)</td>
    </tr>
</table>

注：<a href="./deploy.html#apiPrefix、publicPath、router.config.json、chameleonUrl的关系">apiPrefix、publicPath、router.config.json、chameleonUrl 的关系</a>
