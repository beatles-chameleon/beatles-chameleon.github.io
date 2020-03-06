# 快速上手(Quick start)

## 视频教程

<video width="100%" src="http://sfwb.didistatic.com/static/wb/5%E5%88%86%E9%92%9F.mp4" controls="controls"></video>

## 1 安装启动

> **[success] 运行环境 **
>
> [node](https://nodejs.org/en/download/) >= 8.10.0
> npm >= 5.6.0

建议安装使用[nvm](https://github.com/creationix/nvm)管理 node 版本

### 1.1 全局安装 chameleon-tool 构建工具

```shell
npm i -g chameleon-tool
```

<b style="font-size: 14px;">注：暂不支持使用 yarn、cnpm 等第三方 npm 工具进行安装。</b>

安装成功后，执行 `cml -v` 即可查看当前版本， `cml -h`查看命令行帮助文档。

### 1.2 创建项目与启动

- 执行 `cml init project`
- 输入项目名称
- 等待自动执行 npm install 依赖
- 切换到项目根目录执行`cml dev`
- 会自动打开预览界面 预览界面如下：

![](../assets/home2.png)

web 端可以点击模拟器内页面右上角打开  新的浏览器窗口。

native 端的效果请  下载[chameleon playground](https://beatles-chameleon.github.io/playground/download.html)(目前可下载 Android 端，IOS 端即将发布)或者下载[weex playground](http://weex.apache.org/cn/tools/playground.html)扫码预览

小程序端请下载对应小程序开发工具，打开项目根目录下的<a href="../framework/platform-list.html">`/dist/[wx|alipay|baidu|其他]`</a>目录预览。

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)、
[支付宝开发者具](https://docs.alipay.com/mini/ide/download)、
[百度开发者工具](https://smartprogram.baidu.com/docs/develop/tutorial/index_first/)
[QQ 开发者工具](https://q.qq.com/wiki/#_4-编码开发小程序)

对于字节跳动小程序，需要按照 [字节跳动小程序接入教程](https://cml.js.org/doc/example/tt_miniapp.html)配置完毕之后，可以在 `dist/tt`下用[字节跳动小程序开发者工具](https://microapp.bytedance.com/docs/devtool/versionUpdate.html)打开对应的应用程序

### 2 目录与文件结构

生成的目录结构如下，详细介绍参见<a href="../framework/structure.html">目录结构</a>：

```bash
├── chameleon.config.js                 // 项目的配置文件
├── dist                                // 打包产出目录
  ├── alipay                            // 支付宝小程序代码
  ├── baidu                             // 百度小程序代码
  ├── wx                                // 微信小程序代码
  ├── tt                                // 头条小程序代码
  ├── qq                                // QQ小程序代码
  ├── xx                                // 其他终端
├── mock                                // 模拟数据目录
├── node_modules                        // npm包依赖
├── package.json
└── src                                 // 项目源代码
    ├── app                             // app启动入口
    ├── components                      // 组件文件夹
    ├── pages                           // 页面文件夹
    ├── router.config.json              // 路由配置
    └── store                           // 全局状态管理
```

>  编辑器中使用`.cml`的插件语法高亮，参见<a href="../framework/edit-plugin.html">编辑器插件</a>，插件持续覆盖更多编辑器。

### 3 编辑器插件

- Idea、Webstorm 插件`cml-language-support`
- Vscode 插件`cml`
- Atom 插件`language-cml`
- sublime 插件审核中，敬请期待...

### 4 语法体验

替换`src/pages/index/index.cml`文件，删除`src/pages/index/index.cml`文件中的所有代码，然后替换为下面的代码，体验 chameleon 语法。

#### 数据绑定

```html
<template>
  <view>
    <!-- 数据绑定与计算属性 -->
    <text>{{ message }}</text>
    <text class="class1">{{ message2 }}</text>

    <!-- 条件与循环渲染 -->
    <view c-if="{{showlist}}">
      <view c-for="{{array}}" c-for-index="idx" c-for-item="itemName" c-key="city">
        <text> {{idx}}: {{itemName.city}}</text>
      </view>
    </view>

    <!-- 事件绑定 -->
    <view c-bind:tap="changeShow"><text>切换展示</text></view>
  </view>
</template>

<script>
  class Index {
    data = {
      message: 'Hello Chameleon!',
      array: [
        {
          city: '北京',
        },
        {
          city: '上海',
        },
        {
          city: '广州',
        },
      ],
      showlist: true,
    };

    computed = {
      message2: function() {
        return 'computed' + this.message;
      },
    };

    watch = {
      showlist(newVal, oldVal) {
        console.log(`showlist changed:` + newVal);
      },
    };

    methods = {
      changeShow() {
        this.showlist = !this.showlist;
      },
    };

    created() {
      console.log('生命周期');
    }
  }

  export default new Index();
</script>
<style scoped>
  .class1 {
    color: #f00;
  }
</style>
<script cml-type="json">
  {
  }
</script>
```

### 5 创建新页面

项目根目录下  执行 `cml init page`, 输入页面名称 first-page

```shell
$ cml init page
? Please input page name:
```

回车，即可生成页面  组件`src/pages/first-page/first-page.cml`。

### 6 创建及引用组件

项目根目录下  执行 `cml init component`，选择`Normal component`,输入 first-com， 回车，即可生成文件`components/first-com/first-com.cml`。 组件也是 cml 文件  结构上与页面相同。

拷贝如下代码到`first-com.cml`

```html
<template>
  <view>
    <text class="first-com-text">我是组件first-com</text>
  </view>
</template>
<script>
  class FirstCom {}
  export default new FirstCom();
</script>
<style scoped>
  .first-com-text {
    color: #0f0;
  }
</style>
<script cml-type="json">
  {
  }
</script>
```

然后在刚才的`src/pages/index/index.cml`中引用`first-com`

```html
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "first-com": "components/first-com/first-com"
      }
    }
  }
</script>
```

template 中使用 first-com 组件。

```html
<template>
  <view>
    <first-com></first-com>
  </view>
</template>
```

经过以上操作，你已经学会了组件的引用，[丰富的组件](../component/component.html)等待着你去学习!

##进阶  体验

### [7 项目配置](../framework/config.html)

`chameleon.config.js`为项目的配置文件，以后定制化构建会  使用到，比如是否带 hash，是否  压缩等等,可以在项目根目录下执行`cml build` ， 执行完成后 ，项目根目录的`dist`文件夹下生成 build 模式的文件。

### [8 模拟  数据](../framework/mock.html)

`mock/api/index.js`文件内容如下，可以本地模拟 api 请求。访问`localhost:8000/api/getMessage` 即可看到模拟的 api 返回。端口以实际启动为准，默认 8000.

```javascript
module.exports = [
  {
    method: ['get', 'post'],
    path: '/api/getMessage',
    controller: function(req, res, next) {
      res.json({
        total: 0,
        message: [
          {
            name: 'Hello chameleon!',
          },
        ],
      });
    },
  },
];
```

### 9  示例 demo 学习

`chameleon-tool`中内置了 todolist 的项目模板， 通过命令`cml init project --demo todo` 即可生成该模板，按照 1.2 节中的说明启动项目，即可看到如下页面

![](../assets/todo_preview2.png)

经过以上的介绍和实践操作，相信你已经了解了 chameleon 的基本使用，本文档其余部分将涵盖剩余功能和其他高级功能的详尽细节，所以请务必完整阅读整个文档！

### [10 FAQ](../framework/faq.html)

!INCLUDE "../framework/faq_common.md"
