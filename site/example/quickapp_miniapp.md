## 快应用体验

### 快应用初试

Chameleon 官方的体验 demo 项目源仓库如下：

[cml-demo](https://github.com/beatles-chameleon/cml-demo/tree/master-quickapp)
[cml-flexbox](https://github.com/chameleon-team/cml-flexbox/tree/master-quickapp)
[cml-yanxuan](https://github.com/chameleon-team/cml-yanxuan/tree/master-tt)
[cml-todomvc](https://github.com/chameleon-team/cml-todomvc/tree/master-quickapp)

**注意：需要切换到 `master-quickapp`分支**

以上四个项目编译打包后的快应用 `.rpk` 文件地址如下：

- [组件库 && API 实例 + 网易严选 APP](https://github.com/quickappcn/cml-extplatform-quickapp/blob/master/com.application.demo.release.rpk)
- [flexbox 布局案例集合](https://github.com/quickappcn/cml-extplatform-quickapp/blob/master/com.application.flexbox.release.rpk)
- [Todo-List](https://github.com/quickappcn/cml-extplatform-quickapp/blob/master/com.application.todo.release.rpk)

对于普通用户或开发者来说，如果想要在快应用端进行体验，需要满足以下条件：

- 拥有一台 Android 操作系统的移动设备
- 在移动设备上下载并安装最新版 [快应用预览版 APP](https://www.quickapp.cn/docCenter/post/69) ，当前最新版本为[1050.10](https://statres.quickapp.cn/quickapp/quickapp/201806/file/quickapp_platform_preview_release_v1050.01.apk)
- 将以上 demo 项目编译打包生成的 `.rpk` 文件放入移动设备的 `/sdcard/rpks` 文件夹，再次打开预览版即可体验

<div style="display: flex;flex-direction: row;justify-content: space-around">
	<img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/rpks.jpg" width="200px" height="100%" />
	<img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/preview.jpg" width="200px" height="100%" />
</div>

在快应用端的预览效果如下：

<div style="display: flex">
  <img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/base.png" width="200px" height="400px"/>
  <img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/flexbox.png" width="200px" height="400px"/>
  <img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/yanxuan.png" width="200px" height="400px" />
  <img src="https://raw.githubusercontent.com/quickappcn/cml-extplatform-quickapp/master/todo.png" width="200px"  height="400px"/>
</div>

### 接入快应用

首先要求具备一整套快应用开发工具链，参考链接：https://www.quickapp.cn/docCenter/post/69，这其中包括快应用调试器、快应用预览版、hap-toolkit 构建工具等；使用 [快应用示例代码](https://github.com/quickappcn/sample) 可以检验环境是否就绪；快应用的开发环境就绪之后才开始进行 chameleon 项目的引入和部署。

**基于以下步骤配置之后，既有的 CML 项目可以直接在快应用运行**

#### 全局安装最新的 chameleon-tool 工具

```javascript
npm i -g chameleon-tool
```

#### 启动快应用服务

此处以及下文均以 `quickapp-demo` 为例命名该快应用项目，并以 `~` 目录为例启动快应用服务，此外，建议开发者在快应用项目根目录 `~/quickapp-demo/` 执行 `hap watch`，进行代码热更新。

```bash
cd ~/quickapp-demo
hap server # 启动快应用服务
# 再新打开另外一个terminal
cd ~/quickapp-demo
hap watch # 热更新
```

#### 安装和更新 package

克隆 chameleon 官方的 demo 项目到本地，此处以 [cml-flexbox](https://github.com/chameleon-team/cml-flexbox/tree/master-quickapp) 项目为例。切换到 `master-quickapp` 分支，修改 `package.json` 文件。

```bash
git clone https://github.com/chameleon-team/cml-flexbox.git
cd cml-flexbox
git checkout master-quickapp
```

升级原有的 package 如下：

```json
"chameleon-api": "1.0.0",
"chameleon-runtime": "1.0.0",
"chameleon-store": "1.0.0",
"chameleon-ui-builtin": "1.0.0",
"cml-ui": "1.0.0"
```

新增引入的快应用 package 如下：

```json
"cml-quickapp-api": "1.0.0",
"cml-quickapp-plugin": "1.0.0",
"cml-quickapp-runtime": "1.0.0",
"cml-quickapp-ui-builtin": "1.0.0",
"cml-quickapp-ui": "1.0.0",
"cml-quickapp-store": "1.0.0"
```

#### 修改 **`app.cml`** 文件，增加快应用 **`manifest.json` 文件对应的配置**

```bash
vim ~/cml-flexbox/src/app/app.cml
```

找到 `<script cml-type="json">` 开头的这部分

```js
<script cml-type="json">
{
  "wx": {
    "window": {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle":"black"
    }
  },
  "baidu": {
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle": "black"
    }
  },
  "alipay": {
      "window": {
        "defaultTitle": "Chameleon"
      }
  }
}
</script>
```

增加快应用需要的配置

```js
<script cml-type="json">
  {
    "quickapp": {
      "package": "com.application.demo", // 快应用包名
      "name": "demo", // 快应用名称
      "versionName": "1.0.0", // 版本名称
      "versionCode": "1", // 版本代码
      "minPlatformVersion": "1020", // 最小平台版本号
      "icon": "../assets/images/chameleon.png", // 快应用logo
      "features": [{ // 引用的快应用的能力
          "name": "system.router"
        },
        {
          "name": "system.webview"
        },
        {
          "name": "system.prompt"
        },
        {
          "name": "system.clipboard"
        },
        {
          "name": "system.calendar"
        },
        {
          "name": "system.device"
        },
        {
          "name": "system.fetch"
        },
        {
          "name": "system.file"
        },
        {
          "name": "system.geolocation"
        },
        {
          "name": "system.image"
        },
        {
          "name": "system.media"
        },
        {
          "name": "system.notification"
        },
        {
          "name": "system.barcode"
        },
        {
          "name": "system.sensor"
        },
        {
          "name": "system.share"
        },
        {
          "name": "system.shortcut"
        },
        {
          "name": "system.storage"
        },
        {
          "name": "system.vibrator"
        },
        {
          "name": "system.network"
        },
        {
          "name": "system.request"
        },
        {
          "name": "system.audio"
        },
        {
          "name": "system.volume"
        },
        {
          "name": "system.battery"
        },
        {
          "name": "system.brightness"
        },
        {
          "name": "system.package"
        },
        {
          "name": "system.record"
        },
        {
          "name": "system.sms"
        },
        {
          "name": "system.websocketfactory"
        },
        {
          "name": "system.wifi"
        },
        {
          "name": "system.contact"
        }
      ],
      "permissions": [{
        "origin": "*"
      }],
      "config": {
        "logLevel": "debug"
      },
      "display": {
        "titleBarBackgroundColor": "#f2f2f2",
        "titleBarTextColor": "#414141",
        "titleBarText": "",
        "menu": true
      }
    }
  }
</script>
```

此配置对应快应用项目中的 **`manifest.json`** 文件，详细文档参考：[manifest 文件](https://doc.quickapp.cn/framework/manifest.html)

#### 修改 chameleon.config.js 配置文件

**1. 引入 path 模块**

```js
const path = require('path');
```

**2. 增加 builtinNpmName 、 extPlatform 和 babelPath 配置**

```javascript
builtinNpmName: 'cml-quickapp-ui-builtin',
extPlatform: {
	quickapp: 'cml-quickapp-plugin',
},
babelPath: [
  path.join(__dirname,'node_modules/cml-quickapp-ui-builtin'),
  path.join(__dirname,'node_modules/cml-quickapp-runtime'),
  path.join(__dirname,'node_modules/cml-quickapp-api'),
  path.join(__dirname,'node_modules/cml-quickapp-ui'),
  path.join(__dirname,'node_modules/cml-quickapp-store'),
  path.join(__dirname,'node_modules/cml-quickapp-mixins'),
  path.join(__dirname,'node_modules/mobx'),
],
```

以上配置解释

builtinNpmName：自定义的内置 npm 包名称

extPlatform：配置扩展新端的编译插件

key：端标识

value：编译插件

npm：包名称

babelPath：要过 babel 处理的 npm 包

**3. 导入基础样式**

如果需要引入基础样式，需要增加 `quickapp: true` 的配置，参考 [工程配置-baseStyle](https://cml.js.org/doc/framework/config.html?h=basestyle)

```json
baseStyle:{
  wx: true,
  web: true,
  weex: true,
  alipay: true,
  baidu: true,
  qq: true,
  quickapp: true,
},
```

#### 修改项目代码

**1. 修改项目中相关包的引用**

store 和 api 的引用:
`chameleon-store` 改为 `cml-quickapp-store`
`chameleon-api` 改为 `cml-quickapp-api`

```javascript
import cml from 'chameleon-api';
import store from 'chameleon-store';
```

改为

```js
import cml from 'cml-quickapp-api';
import store from 'cml-quickapp-store';
```

组件的引用 `cml-ui` 改为 `cml-quickapp-ui`

```html
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-actionsheet": "cml-ui/components/c-actionsheet/c-actionsheet"
      },
    }
  }
</script>
```

改为

```html
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "c-actionsheet": "cml-quickapp-ui/components/c-actionsheet/c-actionsheet"
      },
    }
  }
</script>
```

**2. 多态组件在端的实现**

如果存在某多态组件，以 `poly-comp` 为例

```
poly-comp.interface
poly-comp.web.cml
poly-comp.weex.cml
poly-comp.wx.cml
poly-comp.alipay.cml
poly-comp.baidu.cml
```

接入快应用的话，则需要增加一个 `poly-comp.quickapp.cml`

**3. 多态接口在端的实现**

如果存在某多态接口，以 `poly-api.interface` 为例

```html
<script cml-type="interface">
  type res = [String];
  interface UnsupportedInterface {
    getUnsupportApis(): res;
  }
</script>

<script cml-type="web">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return [];
    }
  }

  export default new Method();
</script>

<script cml-type="weex">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ['设置页面标题', 'WebSocket', '地理位置'];
    }
  }

  export default new Method();
</script>

<script cml-type="wx">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return [];
    }
  }

  export default new Method();
</script>

<script cml-type="alipay">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ['启动参数', 'beatles-bridge能力'];
    }
  }

  export default new Method();
</script>
<script cml-type="baidu">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ['beatles-bridge能力'];
    }
  }

  export default new Method();
</script>

<script cml-type="qq">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return [];
    }
  }

  export default new Method();
</script>
```

需要增加在快应用端的实现

```html
<script cml-type="quickapp">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return [];
    }
  }

  export default new Method();
</script>
```

#### 快应用启动命令

快应用支持的命令有

```bash
cml quickapp dev

cml quickapp build

```

当你完成了以上的步骤之后，就可以在你的项目中执行 `cml quickapp dev` 进行快应用的开发了。在 CML 项目根目录 `~/cml-flexbox/` 执行 `cml quickapp dev` ，会生成 `dist/quickapp` 文件夹，拷贝 `/dist/quickapp` 目录下所有文件到已经提前启动的快应用的项目根目录 `~/quickapp-demo/` ，更新快应用代码，即可进行调试和预览。

```bash
cd ~/cml-flexbox
cml quickapp dev
cp -r dist/quickapp/* ~/quickapp-demo/
```
