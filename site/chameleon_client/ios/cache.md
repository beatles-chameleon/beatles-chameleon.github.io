<h1>预加载和缓存</h1>

# 1. 预加载和缓存概念

预加载和缓存都是为了节省 JSBundle 下载的时间，加快 UI 的渲染。

## 1.1 预加载

预加载是将下载 JSBundle 的动作提前完成，在需要用到的时候直接从本地读取并渲染。实际项目使用中，可以将需要预加载的 url 配置到预加载地址列表里，在 app 启动时提前从服务端获取，通过 Chameleon SDK 提供的预加载能力提前下载下来。

## 1.2 缓存

对于没有预加载的 JSBundle 在渲染前需要先下载，下载完成后 Chameleon SDK 会缓存此 JSBundle，下次渲染同一个 JSBundle 时，如果此 JSBundle 没有更新则不会下载新的，达到节省时间和流量提升渲染速度的目的。

# 2. CMLCache

CMLCache 是一个对 js 进行下载、缓存的一个模块，根据协议来实现 js 增量更新功能。主要有以下内容

```
 |
 |——CMLWeexCache   缓存模块接口类
 |——CMLCacheInfo     JsBundle文件缓存实现逻辑
 |——CMLCacheItem    jsBundle文件内存对象，描述每一个jsBundle文件的缓存状态
 |——CMLConfig    配置类，业务方可通过这个类设置是否开启缓存功能、预加载js路径、缓存大小限制、默认兜底页链接等
```

---

## 2.1 CMLCache

对 jsBundle 进行预加载、获取、缓存的处理对外接口。

在该文件里，我们将拿到的 URL 解析出此页面需要加载的 jsbundle 标识，然后根据 jsBundle 标识来检测是否在本地已预加载，如果此 jsBundle 已预加载成功，则直接读本地缓存渲染；否则先从网络下载 jsBundle，然后渲染并缓存本地。

后续我们将支持在一个 URL 中下发多段 jsbundle 标识，每段 jsbundle 标识代表这个页面的一部分，然后在根据每段 jsbundle 标识，分别从本地缓存里获取去寻找对应的 js 代码，如果不存在则从网络去下载这一段 jsBundle 并保存在本地，然后 SDK 中会将最终得到的多段 jsBundle，组合成一个完整页面的 jsBundle 加载出来。

## 2.2 CMLCacheInfo

jsBundle 的内存管理器，是加载、获取、缓存等处理的实际操作者。
对本地缓存 jsBundle 的 maxSize 加以限制，如果超过 maxSize，则优先清除老的 jsBundle 缓存

## 2.3 CMLCacheItem

对 jsBundle 的封装，包括 jsBundle 文件在本地存储的路径、内存索引；CMLCacheInfo 就是通过 CMLCacheItem 来对 jsBundle 进行操作。

## 2.4 使用（以 weex 为例）

### 缓存相关配置

缓存相关配置定义位于 CMLWeexConfig （CMLConfig）

    //设置服务类型为weex
    [CMLEnvironmentManage chameleon].serviceType = CMLServiceTypeWeex;
    //设置默认错误web链接
    [CMLEnvironmentManage chameleon].weexService.config.defaultErrUrl = @“defaultErrUrl”

Chameleon 功能和缓存功能都是默认开启的，如果有特殊需要，可以手动关闭；另外在这里还有缓存限制 maxSize、缓存目录等配置

    [CMLEnvironmentManage chameleon].weexService.config.isFeatureAvailable = NO；
    [CMLEnvironmentManage chameleon].weexService.config.isEnableCacheFeature = NO;

### 预加载

//设置预加载 URL 列表

```
 [CMLEnvironmentManage chameleon].weexService.config.prefetchContents = @[@"http%3A%2F%2F172.22.139.32%3A8000%2Fweex%2Fchameleon-bridge.js%3Ft%3D1546502643623"];
 //开启预加载
 [[CMLEnvironmentManage chameleon].weexService setupPrefetch];
```

### 获取加载 jsBundle 的 URL

```
CMLWeexCache *cache = (CMLWeexCache *)[CMLEnvironmentManage chameleon].weexService.cache;
  //在缓存中获取JSBundle的URL（本地有缓存则获取到本地缓存的URL，本地无缓存则获取到远端的URL）
        [cache getBundleCacheOfJSBundleUrl:self.bundleUrl completion:^(NSString *url, NSDictionary *parameter) {
  //加载jsBundle
  [self.render renderWithURL:[NSURL URLWithString:url] options:@{@"query" : [param copy]} data:nil];
}
```
