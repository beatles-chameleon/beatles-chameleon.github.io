# Chameleon SDK 独有方法

## getSDKInfo

获得 SDK 信息

### 参数

无

### 返回值

返回 promise

| 返回值  |  类型  |  说明  |
| :-----: | :----: | :----: |
| version | String | 版本号 |

## inSDK

同步方法，判断 webview 或 native 页面是否在 sdk 环境中，目前只用于内部封装方法使用。

### 参数

无

### 返回值

| 返回值 |  类型   |                    说明                     |
| :----: | :-----: | :-----------------------------------------: |
| value  | Boolean | true：在 sdk 环境中；false：不在 sdk 环境中 |

```
import bridge from 'chameleon-bridge';
const inSDK = bridge.inSDK(); // true/false
```

## rollbackWeb

降级到[chameleon url](../framework/chameleon_url.html)对应的 h5 地址。

## callNative(module:String, method:String, args:Object, callback:Function)

js 调用 native sdk

```
import bridge from 'chameleon-bridge';

// 主动调用客户端方法
export function sayHello() {
    bridge.callNative(
        'moduleDemo', // 模块名
        'sayHello', // 方法名
        {}, // 参数
        res => {} // 回调方法
    );
}
```

## listenNative(module:String, method:String, callback:Function)

监听客户端调用 js

```
import bridge from 'chameleon-bridge';

// 监听客户端调用js
export function listenTell() {
    bridge.listenNative(
        'moduleDemo', // 模块名
        'NaTellJS', // 方法名
        res => {
         // 回调方法中处理返回的数据
        }
    );
}
```
