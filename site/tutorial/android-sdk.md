# Android CML SDK 使用范例

以一个小 Demo 工程，讲述 Android CML SDK 的使用方式，引领轻松入门。<font color=#FF0000>Demo 工程在根目录 app 目录下</font>，用 Android Studio 导入并 run 起来后，再对照以下说明文档看会好理解。

<font color=#FF0000>根目录 assets 目录下的 cml-demo-say.zip 是个简单的示例工程</font>

用来演示 Native 和 Weex 容器或 web 容器的双向通信。app 目录下 Demo 工程加载的 Weex bundle 和 H5 页就是这个工程实现的。

## compile 依赖添加

### 项目根目录 build.gradle 里添加 maven 仓库地址

```
buildscript {
    repositories {~~~~
        jcenter()
        maven {
            url 'https://maven.google.com/'
        }
    }
    ...
}

allprojects {
    repositories {
        maven {
            url 'https://maven.google.com/'
        }
        jcenter()
        mavenCentral()
        ...
    }
}
```

### 在 App 模块的 build.gradle 里添加依赖

#### 首先添加如下依赖

```gradle
dependencies {
    ...
    compile "com.android.support:support-v4:$SUPPORT_VER"
    compile "com.android.support:appcompat-v7:$SUPPORT_VER"
    compile "com.android.support:recyclerview-v7:$SUPPORT_VER"
	compile "com.didiglobal.chameleon:cmlsdk:$VERSION"
	compile "com.didiglobal.chameleon:cmlweb:$VERSION"
}
```

#### 添加渲染引擎依赖

CML Native SDK 采用 Weex 作为渲染引擎，当前依赖的 Weex 版本是

- weex -> com.taobao.android:weex_sdk:0.20.0.2

```gradle
dependencies {
    ...
	compile "com.didiglobal.chameleon:cmlweex:$VERSION"
}
```

com.android.tools.build:gradle 3.0 以后的版本用 `implementation` 替换 `compile`，完整的依赖列表可参考示例工程。

## 权限添加及 Android 6.0 以上系统授权

CML SDK 已经添加了如下权限，android 6.0 以上系统版本需要在调起相关页面后手动授权。

```gradle
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
```

## 混淆

参考示例工程

## 初始化入口

实现自己的 Application 类，在应用启动的时候进行初始化调用。

### Application demo

```java
public class MyApplication extends Application implements CmlConfig {
    @Override
    public void onCreate() {
        super.onCreate();

        CmlEngine.getInstance().init(this, this);
    }

    @Override
    public void configAdapter() {
        // 开发阶段可以禁用js bundle缓存
        CmlEnvironment.CML_ALLOW_BUNDLE_CACHE = false;
        // 开发阶段手动降级测试
//        CmlEnvironment.CML_DEGRADE = false;

        // 注册降级Adapter
        CmlEnvironment.setDegradeAdapter(new CmlDegradeDefault());
//        CmlEnvironment.setToastAdapter(xxx);
//        CmlEnvironment.setLoggerAdapter(xxx);
//        CmlEnvironment.setDialogAdapter(xxx);
//        CmlEnvironment.setNavigatorAdapter(xxx);
//        CmlEnvironment.setStatisticsAdapter(xxx);
//        CmlEnvironment.setImageLoaderAdapter(xxx);

    }

    @Override
    public void registerModule() {
        CmlEngine.getInstance().registerModule(ModuleDemo.class);
    }
}
```

### 将 Application 添加到 AndroidManifest.xml

```xml
<application
	android:name=".MyApplication"
	android:allowBackup="false"
	...
</application>
```

### 适配器的实现

适配器是暴露给 SDK 使用者的一组接口，用于提供扩展 SDK 的能力，其中一部分接口提供了默认实现，未提供默认实现的需要使用者自己实现并注册到 SDK 中。

![image](../images/sdk/cml_doc_android_02.png)

- 以下适配器提供了默认实现
  http / json / log / modal / storage / thread / websocket / imagloader

- 以下适配器未提供默认实现
  navigator / degrade / statistics

以降级适配器举例，只需要两个步骤：

- 新建类 CmlDegradeDefault，实现接口 ICmlDegradeAdapter
- 在 MyApplication 的 configAdapter 方法里注册适配器。

### Module 的实现

module 的基本概念可参看[这里](../docs/sdk.md#module-的使用), SDK 层实现在如下位置：

![image](../images/sdk/cml_doc_android_03.png)

module 的实现主要分两个步骤，一个是 Native 侧的代码实现，一个是 js 侧的代码实现。同时，native 和 js 的通信是双向的，及 Native 可以主动调用 js 侧的方法，js 侧也可以主动调用 Native 侧的方法。

![image](../images/sdk/cml_doc_android_04.png)

#### Native 侧的实现

<font color=#FF0000>以下内容请在 CML SDK Demo 运行起来的前提下阅读，方便理解即将描述的内容。</font>

实现一个 Module 扩展需要如下几个步骤：

- 根据需求和前端 RD 确定 module/method/args 参数
- Native RD 根据约定实现 Module 扩展，前端 RD 根据约定实现 js 并打包成 jsbundle
- Native RD 可以将 jsbundle 放到 assets 目录下加载调试，也可以远程加载调试

demo 实现了双向通信，js 调用 Native 接口约定如下[(module 的概念)](../docs/sdk.md#module-的使用):

- Module 名是 `moduleDemo`
- method 名是 `sayHello`
- args 名是 `{"content":"测试"}`

实现的效果是点击 jsbundle 里的按钮，会弹 `测试` toast

native 调用 js 接口约定如下:

- Module 名是 `moduleDemo`
- method 名是 `NaTellJS`
- args 名是 `{"content":"测试"}`

实现的效果是点击 Native 侧的按钮，会动态改变 jsbundle 里的文字显示。

module 的实现需要先了解 3 个注解

- @CmlModule 标注这个类是扩展模块
- @CmlMethod 标注可供 JS 侧调用的方法
- @CmlParam 标注调用的参数

以下是根据约定实现的 Module 扩展示例

```
@CmlModule(alias = "moduleDemo")
public class ModuleDemo {
    @CmlMethod(alias = "sayHello")
    public void sayHello(ICmlActivityInstance instance, @CmlParam(name = "content") String content) {
        Toast.makeText(instance.getContext(), content, Toast.LENGTH_SHORT);
    }
}
```

将 Module 注册到 SDK

```
public class MyApplication extends Application implements CmlConfig {
    @Override
    public void onCreate() {
        super.onCreate();

        CmlEngine.getInstance().init(this, this);
        CmlEngine.getInstance().registerModule(ModuleDemo.class); // 在这里注册
    }
	...
}
```

从前端 RD 拿到 JSBundle， 进行渲染，重点关注 Demo 工程里 CmlViewActivity

```
private static final String URL_JS_BUNDLE_OK = "https://www.example.com/degradle.html?cml_addr=http://172.22.138.92:8000/weex/cml-demo-say.js";

@Override
protected void onCreate(Bundle savedInstanceState) {
	....
	// cmlView.render(URL_JS_BUNDLE_OK, null); // 加载远程jsbundle
	cmlView.render("file://local/cml-demo-say.js", null); // 加载assets目录里的jsbundle
	...
}
```

js 侧的实现以及 jsbundle 打包参看接下来的 4.4.2 小结。

#### js 侧的实现

同样以上面要实现的 Module 和方法为例，我们来看一下 js 侧的实现。

<font color=#FF0000>参考根目录 assets 目录下的 cml-demo-say.zip</font>

1.初始化前端项目（也可以使用已有的项目）

```
cml init project
请输入项目名称 cml-demo-say
```

2.打开项目下 src/pages/index/index.cml 文件，粘贴以下代码。以下代码主要是展示了 js 和 Native 双向的通信的方法实现。先粘贴，然后我们在下面介绍通信封装的原理。

```
<template>
  <page title="chameleon">
    <scroller height="{{winHeight}}">
      <view class="scroller-wrap">
        <view style="padding: 20cpx;">
          <text>1，JS调用Native</text>
          <text>callback返回内容: {{callbackRes}}</text>
          <button
            c-bind:onclick="sayHello"
            text="JS调用Native sayHello方法"
            style="margin-top: 20cpx;"
          ></button>
        </view>
        <view style="padding: 20cpx;">
          <text>2，Native调用JS 的NaTellJS方法已经注册监听，点击Native的改变文字按钮,下发状态文字将改变</text>
          <text>状态：{{status}}</text>
        </view>
      </view>
    </scroller>
  </page>
</template>

<script>
import cml from "chameleon-api";
import cmlBridge from "chameleon-bridge";

class Index {
  data = {
    title: "chameleon",
    callbackRes: '',
    status: '等待Native调用',
    winHeight: 0
  }
  methods = {
    // 此处的方法实现你可以封装到其他目录，作为统一扩展的api
    sayHello() {
      cmlBridge.callNative(
        'moduleDemo', // 模块名
        'sayHello', // 方法名
        { content: 'HelloCML' }, // 参数
        res => {
          this.callbackRes = res;
        } // 回调方法
      );
    }
  }
  mounted() {
    // 主动监听客户端调用js
    cmlBridge.listenNative(
      'moduleDemo', // 模块名
      'NaTellJS', // 方法名
      res => {
        this.status = res.content;
      }
    );
    cml.getSystemInfo().then((info) => {
      this.winHeight = Number(info.viewportHeight)
    });
  }
}
export default new Index();
</script>

<style scoped>
.scroller-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script cml-type="json">
{
  "base": {
    "usingComponents": {
    }
  },
  "wx": {
    "navigationBarTitleText": "index",
    "backgroundTextStyle": "dark",
    "backgroundColor": "#E2E2E2"
  }
}
</script>
```

3.你可以运行`cml weex dev`或者`cml weex build`命令，将 jsbundle 文件的在线地址或本地文件给到 Native 同学，按照上面 Native 部分提到的集成方式（本地或远程地址）进行联调。点击第一项的按钮你可以看到，客户端弹出了"HelloCML"的弹框。同时在`callback返回内容:`后返回了内容。点击 Native 端的“改变文字”按钮，在页面上的“状态：”后显示了客户端发来的“测试”字样。

4.接下来我们看一下原理：

我们通过`chameleon-bridge`提供的 callNative 和 listenNative 来与端通信，他们的参数及意义如下：

- callNative(module:String, method:String, args:Object, callback:Function) JS 主动调用 Native 方法
- listenNative(module:String, method:String, callback:Function) 监听 Native 调用 js

##### JS 主动调用 Native 方法

首先看 methods 里我们通过`chameleon-bridge`提供的 callNative 方法实现了 sayHello 方法，让 js 与 Native 主动通信。

```
sayHello() {
    cmlBridge.callNative(
        'moduleDemo', // 模块名
        'sayHello', // 方法名
        { content: 'HelloCML' }, // 参数
        res => {
            this.callbackRes = res;
        } // 回调方法
    );
}
```

这样就调用到了 Native 的模块名为 moduleDemo 的模块的 sayHello 方法，同时 Native 会回调我们。**当然你还可以封装到其他目录，作为统一扩展的 api 来存放并引入到项目文件中使用。**

##### 监听 Native 调用 js

mounted 里我们通过`chameleon-bridge`提供的 listenNative 方法在页面初始化时监听了客户端要调用我们的模块名为 moduleDemo 的 NaTellJS 方法。注意，这个模块在前端其实可以理解为一个和 Native 同学约定的方法命名集合。调用前端`chameleon-bridge`库的 listenNative 方法会进行监听的注册，便可以被客户端调用到。

```
cmlBridge.listenNative(
    'moduleDemo', // 模块名
    'NaTellJS', // 方法名
    res => {
        this.status = res.content;
    }
);
```

**同样你可以将此方法封装到其他 api 集合位置，进行引入使用**，如：

```
export function onNaTellJS(callback) {
    cmlBridge.listenNative(
        'moduleDemo', // 模块名
        'NaTellJS', // 方法名
        callback
    );
}
```

如此一来，你便可以封装自己的扩展 api 了。

### js bundle 缓存的禁用

开发截断为了方便实时预览效果，可以关闭 js bundle 的缓存。

```
@Override
public void configAdapter() {
	// 开发阶段可以禁用js bundle缓存
	CmlEnvironment.CML_ALLOW_BUNDLE_CACHE = false;

	...

}
```

## 页面调起

### 整个页面使用 CML 容器实现

```java
CmlEngine.getInstance().launchPage(activity, url, options);

// 即将支持
CmlEngine.getInstance().launchPage(activity, url, options, requestCode, launchCallback);
```

### 使用 CmlView

<font color=#FF0000>参考根目录 app 目录下 demo</font>

CmlView 用在和原生 Native View 混合布局的场景，

```java
    private CmlView cmlView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test_cml_view);
        FrameLayout flRoot = findViewById(R.id.fl_root);
        cmlView = new CmlView(this);
        flRoot.addView(cmlView, new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        cmlView.onCreate();
        cmlView.render(MainActivity.TEST_URL, null);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (cmlView != null) {
            cmlView.onResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (cmlView != null) {
            cmlView.onPause();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (cmlView != null) {
            cmlView.onDestroy();
        }
    }
```

### 打开普通 URL

如果打开的是普通的 URL，则会自动使用 CmlWebEngine 调起 Web Container，渲染 H5 页面

```
    // 演示打开一般的URL
    private static final String URL_NORMAL = "https://www.didiglobal.com";
    ...

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.txt_open_url:
                CmlEngine.getInstance().launchPage(this, URL_NORMAL, null);
                break;
            ...
        }
    }
```

### 打开 JS Bundle

如果打开的是 JS Bundle URL，则会自动使用 Native 渲染引擎调起 Native Container，渲染 JS Bundle

```
    // 这是一个可以正常打开的 JS_BUNDLE
    private static final String URL_JS_BUNDLE_OK = "https://beatles-chameleon.github.io/chameleon-ui-builtin/dist/web/chameleon-ui-builtin.html?cml_addr=https%3A%2F%2Fbeatles-chameleon.github.io%2Fchameleon-ui-builtin%2Fdist%2Fweex%2Fchameleon-ui-builtin.js#/";
    ...

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
        	...
            case R.id.txt_open_js_bundle:
                CmlEngine.getInstance().launchPage(this, URL_JS_BUNDLE_OK, null);
                break;
            ...
        }
    }
```

### 预加载

如果打开的是一个已经预加载过的 JS Bundle URL，则会忽略下载过程，直接使用 Native 渲染引擎渲染界面

```
    // 这是一个测试预加载的 JS_BUNDLE
    private static final String URL_JS_BUNDLE_PRELOAD = "https://beatles-chameleon.github.io/chameleon-ui-builtin/dist/web/chameleon-ui-builtin.html?cml_addr=https%3A%2F%2Fbeatles-chameleon.github.io%2Fchameleon-ui-builtin%2Fdist%2Fweex%2Fchameleon-ui-builtin.js#/";
    ...

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
        	...
            case R.id.txt_preload:
                CmlEngine.getInstance().launchPage(this, URL_JS_BUNDLE_PRELOAD, null);
                break;
            ...
        }
    }
```

### 自动降级

如果打开的是一个错误的 JS Bundle URL，则会自动降级，使用 CmlWebEngine 调起 Web Container，渲染前面 H5 地址页面，具体可以查看

- 工程化 -> cmlUrl 一节关于，cmlUrl 的定义
- Native 渲染能力接入 -> 自动降级 一节，关于自动降级的详细说明

```
    // 这是一个错误的 JS_BUNDLE
    private static final String URL_JS_BUNDLE_ERR = "https://www.didiglobal.com?cml_addr=xxx.js";
    ...

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            ...
            case R.id.txt_degrade:
                CmlEngine.getInstance().launchPage(this, URL_JS_BUNDLE_ERR, null);
                break;
        }
    }
```

## 预加载

如果某些 js bundle 不需要实时下载下来渲染，可以先配置到预加载列表里提前下载下来，提升用户交互体验。

### 预加载列表的配置

组装 CmlBundle 列表，并通过 CmlEngine 接口设置到 SDK 里，具体可以参考 demo。

```
   private List<CmlBundle> getPreloadList() {
        CmlJsBundleEnvironment.DEBUG = true;
        List<CmlBundle> cmlModels = new ArrayList<>();
        CmlBundle model = new CmlBundle();
        model.bundle = Util.parseCmlUrl(URL_JS_BUNDLE_PRELOAD);
        model.priority = 2;
        cmlModels.add(model);
        return cmlModels;
    }

    ...

    CmlEngine.getInstance().initPreloadList(getPreloadList());
```

### 开始预加载列表

根据使用方的业务，在适当位置执行预加载

```
CmlEngine.getInstance().performPreload();
```
