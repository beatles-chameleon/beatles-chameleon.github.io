<h1>Adapter 的使用</h1>

# 1. 初步认识 Adapter

先看个例子，对 Adapter 有个直观印象和基本概念。Chameleon SDK 里打印日志使用的是默认的 android.util.Log, 如果想替换它可以按照如下步骤实行：

## 1.1 替换和注册

如果用户想替换 SDK 默认提供的日志打印，可以实现 CmlLoggerAdapter 接口，并按如下方式注册进 SDK:

```
// 接口实现
public class MyLoggerDefault implements CmlLoggerAdapter {
	@Override
    public void d(String tag, String msg) {
        // 这里实现自己的日志打印
    }
	...
}

// 接口注册
public class MyApplication extends Application implements ICmlConfig {
    @Override
    public void onCreate() {
        super.onCreate();
        CmlEngine.getInstance().init(this, this);
    }

    @Override
    public void configAdapter() {
        CmlEnvironment.setLoggerAdapter(new MyLoggerDefault()); // 注册自己的Adapter
        ...
    }
	...
}

```

以上就完成了日志打印能力的替换。

## 1.2 原理说明

SDK Adapter 定义和默认实现如下：

```
// 日志接口定义
public interface CmlLoggerAdapter {
	void d(String tag, String msg);
	...
}

// 日志接口默认实现
public class CmlLoggerDefault implements CmlLoggerAdapter {
	@Override
    public void d(String tag, String msg) {
        Log.d(tag, msg);
    }
	...
}
```

如果用户注册了自己的 Log Adapter 实现则优先使用，否则使用 SDK 默认提供的实现。

## 1.3 日志打印的使用

日志打印通过 CmlLogUtil 类调用，注册自己的 Logger Adapter 后，打印日志的相关方法就会回调到自定义的方法实现里，使用示例：

```
    // 日志打印
    public void launchPage(@NonNull Activity activity, String url, HashMap<String, Object> options) {
        if (TextUtils.isEmpty(url)) {
            CmlLogUtil.e(TAG, "CmlEngine launchPage, url is empty.");
            return;
        }
        ...
    }
```

# 2. Adapter 基本概念

Adapter 的目的是定义一系列能力接口来隔离具体的实现，方便 SDK 使用者在需要时灵活替换成自己的实现。Chameleon SDK 框架层在使用 Adapter 相关能力时都是面向接口的，使用者只需要实现相关能力的 Adapter 接口并通过 SDK 注册接口进行注册，即可轻松替换成自己的实现并进行能力扩展。

Chameleon SDK 并没有完整的实现所有 Adapter 接口，也就是说一部分有默认实现的 Adapter 可以直接使用，未提供默认实现的需要使用者自己实现，否则框架将无法使用对应的接口能力。

Chameleon SDK 定义了如下的 Adapter 接口

| 接口                  | 功能            | 默认实现 |
| :-------------------- | :-------------- | :------- |
| ICmlDegradeAdapter    | 降级            | 无       |
| ICmlImgLoaderAdapter  | 图片加载        | 有       |
| CmlLoggerAdapter      | 日志            | 有       |
| ICmlNavigatorAdapter  | url 跳转        | 有       |
| ICmlStatisticsAdapter | 统计信息输出    | 无       |
| ICmlWebSocketAdapter  | WebSocket       | 有       |
| CmlHttpAdapter        | Http 请求       | 有       |
| CmlJsonAdapter        | json 解析       | 有       |
| CmlDialogAdapter      | 对话框          | 有       |
| CmlToastAdapter       | 提示浮层        | 有       |
| CmlStorageAdapter     | key->value 存储 | 有       |
| CmlThreadAdapter      | 线程            | 有       |

## 2.1 重点 Adapter 说明

降级、对话框、提示浮层 Adapter 在 SDK 实际使用时替换可能性较大，分别说明。

### 2.1.1 降级

ICmlDegradeAdapter 降级接口没有提供默认实现，[《变色龙 SDK 使用范例》](../../example/android_example.html) 示例里示范了如何实现一个降级处理类 CmlDegradeDefault。
CmlDegradeDefault 默认会关闭 native 渲染容器，并打开 Web 容器加载降级 url。

```
public class CmlDegradeDefault implements ICmlDegradeAdapter {

    @Override
    public DegradeViewWrapper getDegradeView(int degradeCode) {
        return new DegradeViewWrapper() {
            CmlWebView webView;

            @Override
            public View getView(@NonNull Context context) {
                webView = new CmlWebView(context);
                webView.onCreate();
                return webView;
            }

            @Override
            public void onDestroy() {
                if (null != webView) {
                    webView.onDestroy();
                }
            }

            @Override
            public void loadURL(@NonNull Context context, @NonNull String url, @Nullable HashMap<String, Object> options) {
                if (null != webView) {
                    webView.render(url, null);
                }
            }
        };
    }

    @Override
    public void degradeActivity(@NonNull Activity activity, @NonNull String url, @Nullable HashMap<String, Object> options, int degradeCode) {
        if (url.contains("?")) {
            url = url.substring(0, url.indexOf("?"));
        }
        CmlEngine.getInstance().launchPage(activity, url, null);
    }
}
```

degradeActivity 会在如下降级场景发生时回调

- 下载 JSBundle 失败
- 解析 JSBundle 发生异常
- 降级调试开关打开(在 CmlEnvironment 里设置)
- 前端代码手动降级

### 2.1.2 对话框

此接口定义以下两种对话框能力

- showAlert
- showConfirm

CmlModalTip 实现了此接口，通过 CmlModalModule 类暴露给 JS 侧调用，前端用法参考 Chameleon DOC API 一章的 [《交互反馈》](../../api/modal.html)

### 2.1.3 提示浮层

此接口定义以下浮层提示能力

- showToast

CmlModalTip 实现了此接口，通过 CmlModalModule 类暴露给 JS 侧调用，前端用法参考 Chameleon DOC API 一章的 [《交互反馈》](../../api/modal.html)

## 2.2 其他 Adapter 说明

### 2.2.1 图片加载

CmlDefaultImgLoaderAdapter ，默认使用 Glide，需要用户手动集成 Glide

### 2.2.2 日志打印

CmlLoggerDefault，默认使用系统 log 输出

### 2.2.3 跳转

默认使用 Intent.ACTION_VIEW 处理

### 2.2.4 统计信息输出

没有默认实现，不关心可以不用实现

### 2.2.5 WebSocket

CmlDefaultWebSocketAdapter，默认使用 OkHttp3，需要用户手动集成 OkHttp3

### 2.2.6 Http 请求

执行 http 请求，并监听 http 响应

### 2.2.7 json 解析

转换成 json 字符串和反解成 json 对象

### 2.2.8 key->value 存储

前端用法参考 Chameleon DOC API 一章的 [《数据存储》](../../api/storage.html)

### 2.2.9 线程

定义工作线程和 ui 线程
