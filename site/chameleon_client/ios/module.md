<h1>Module 的使用</h1>

# 1. 什么是 module

module 是 Native 提供给前端页面调用的，完成一组操作的方法集合，用于扩展 Native 的能力。在 Chameleon 页面中，开发者引入相关 js 库后即可调用 module 中的方法。

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

# 2. Module 的使用

Module 的使用分两种情况，一种是使用 Chameleon SDK 内置的 Module，一种是用户自定义实现自己的 Module。

## 2.1 使用内置的 Module

内置的 Module 在 js 前端代码里直接使用即可，目前内置的 Module 有：

- clipboard
- cml
- modal
- storage
- stream
- webSocket

Chameleon DOC [《API 一章》](../../api/api.html) 里描述的能力，部分实现就是由上述 module 支撑的。

## 2.2 自定义实现自己的 Module

示例可参看[《手把手叫你系列 CMLStorageModule 示例》](../../example/ios_example.html)

注册自己的 module 关联文件:

- CMLSDKEngine
- CMLConstants
- CMLUtility
- CMLModuleProtocol 非必须（该协议可获取 CMLInstance）

详细说明

- 功能：通过注册 module 提供原生能力的扩展
- 原理：依赖 bridge 进行协议通信，根据不同 module 进行协议处理分发
- module，扩展原生能力

  - module 注册

    ```
    [CMLSDKEngine registerModule:@"module名" className:@"类名"];
    ```

    - module 名:两端及前端同学定义的一个名字

  - module 方法实现

    ```
      #import "CMLConstants.h"
      #import "CMLUtility.h"

      CML_EXPORT_METHOD(@selector(xxx:callBack:))

      - (void)xxx:(NSDictionary *)param callBack:(CMLMoudleCallBack)callback {

      }
    ```

    - xxx:方法名，协商定义，需要跟前端一致
    - param：所带参数，字典类型
    - callback：回调 block (非必须)

  - 遵循 CMLModuleProtocol 的作用

    - CMLModuleProtocol 协议可获取到 CMLInstance
    - 通过 CMLInstance 可获取当前运行环境、viewController
