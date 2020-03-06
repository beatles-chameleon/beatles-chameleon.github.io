<h1>预加载和缓存</h1>

# 1. 预加载和缓存概念

预加载和缓存都是为了节省 JSBundle 下载的时间，加快 UI 的渲染。

## 1.1 预加载

预加载是将下载 JSBundle 的动作提前完成，在需要用到的时候直接从本地读取并渲染。实际项目使用中，可以将需要预加载的 url 地址列表在 app 启动时提前从服务端获取，通过 Chameleon SDK 提供的预加载能力提前下载下来。

## 1.2 缓存

对于没有预加载的 JSBundle 在渲染前需要先下载，下载完成后 Chameleon SDK 会缓存此 JSBundle，下次渲染同一个 JSBundle 时，如果此 JSBundle 没有更新则不会下载新的，达到节省时间和流量提升渲染速度的目的。

# 2. JsBundleMgr

JsBundleMgr 是一个对 js 进行下载、缓存的一个模块，根据协议来实现 js 增量更新功能。主要有以下内容

```
 |
 |——cache    基于DiskLrucache来实现缓存功能
 |——code     js代码的获取及管理
 |——net      采用httpUrlConnect实现下载功能
 |——utils    工具包
 |——CmlJsBundleConstant  常量的管理
 |——CmlJsBundleEngine    实现了CmlJsBundleManager接口，入口类
 |——CmlJsBundleEnvironment   当前环境的设置，如debug环境等
 |——CmlJsBundleManager   实现此接口可自己定义JsBundle的管理
 |——CmlJsBundleMgrConfig    配置类，设置预加载js路径、缓存大小等，默认预加载及运行时缓存大小是4M，可自行设置
```

---

## 2.1 code

对 js 代码进行预加载、获取、缓存的管理。在该包里，我们将拿到的 url 根据协议来拆分成多个 url1、url2 等，然后在根据 url1、url2 等来获取对应的 js 代码，首先从本地缓存里获取去寻找对应的 js 代码，如果不存在则从网络去下载并保存在本地

## utils

一些文件管理、拆分 url、网络判断的工具类

- CmlCodeUtils：获取到的 url、code 的拆解及合并
- CmlFileUtils：sd 卡及缓存目录的判断
- CmlLogUtils：Log 的实现
- CmlNetworkUtils：当前网络状态的判断，如 Wi-Fi、4g 等
- CmlUtils：Md5 的生成、主线程判断等等

## 2.2 CmlJsBundleConstant

缓存文件名、预加载优先级的管理，预加载优先级有以下三种类型

- 普通（PRIORITY_COMMON）：非 Wi-Fi 情况不预加载
- 强预加载（PRIORITY_FORCE）：无论什么网络情况都预加载
- 强预加载+预解析（PRIORITY_FORCE_MAX）：目前未用到

## 2.3 CmlJsBundleEngine

实现了 CmlJsBundleManager 接口，主要有以下三个方法

- initConfig(Context,CmlJsBundleMgrConfig)：初始化 config，主要是设置预加载 url、预加载缓存、运行时缓存的设置，预加载及运行时缓存默认为 4M
- startPreload()：开始预加载，目前预加载成功或者失败并没有任何信息返回，只能查看 log 进行分析
- getWXTemplate(String,CmlGetCodeStringCallback)：获取 js 代码

## 2.4 CmlJsBundleManager

实现此接口可以自己定义 JsBundleMgr 的实现

## 2.5 使用

### 添加依赖

```gradle
compile 'com.didiglobal.chameleon:js-bundle-mgr:latest.version'
```

### 预加载

```java
        CmlJsBundleEnvironment.DEBUG = true;
        List<CmlModel> cmlModels = new ArrayList<>();
        CmlModel model = new CmlModel();
        model.bundle = CmlUtils.parseWeexUrl(url1);
        model.priority = 2;
        cmlModels.add(model);
        model = new CmlModel();
        model.priority = 2;
        model.bundle = CmlUtils.parseWeexUrl(url2);
        cmlModels.add(model);
        CmlJsBundleMgrConfig config = new CmlJsBundleMgrConfig.Builder().setPreloadList(cmlModels).build();
        CmlJsBundleEngine.getInstance().initConfig(this, config);
        CmlJsBundleEngine.getInstance().startPreload();
```

### 获取 Js 代码

```java
        CmlJsBundleEngine.getInstance().initConfig(this, new CmlJsBundleMgrConfig.Builder().build());
        String url = CmlUtils.parseWeexUrl(url);
        CmlJsBundleEngine.getInstance().getWXTemplate(url, new CmlGetCodeStringCallback() {
            @Override
            public void onSuccess(String codes) {
                Log.i(TAG, "onSuccess: " + codes);
            }

            @Override
            public void onFailed(String errMsg) {
                Log.i(TAG, "onFailed: " + errMsg);
            }
        });
```
