<h1>Module 的使用</h1>

github 地址[点这里](https://github.com/beatles-chameleon/chameleon-sdk-android)

<font color=#FF0000>根目录 assets 目录下的 cml-demo-say.zip</font> 是个简单的示例工程，用来演示 native 和 weex 容器或 web 容器的双向通信

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

示例可参看[《手把手第 4.4 小节说明》](../../example/android_example.html)

module 扩展 3 个重要的注解

- @CmlModule 标注这个类是扩展模块
- @CmlMethod 标注可供 JS 侧调用的方法
- @CmlParam 标注调用的参数

详细说明

- 功能：通过注册 module 提供原生能力的扩展
- 原理：依赖 bridge 进行协议通信，根据不同 module 进行协议处理分发
- module，扩展原生能力
  - module 注册
    - 必须注册 CmlEngine.registerModule(Class<?> moduleClass)
    - 不强制要求添加@CmlModule,未添加时会使用默认设置
    - 不建议在运行中动态注册 module
  - module 名称
    - 默认使用 module 的类名
    - 配置 module 名称，添加注解@CmlModule(alias = "name")
  - module 实例
    - 默认为实例全局唯一，即无论有多少 instance 都会使用同一个 module 实例
    - 配置全局性，添加注解@CmlModule(global = false)
  - module 组合
    - 针对极特殊情况，允许多个 class 共用一个 module 名称
    - 必须有且只有一个 class 作为 module，所有相关 class 均会使用该 moduel 配置
    - 其余 class 必须使用@CmlJoin(name = "name")，指定需要关联的 moduel 名称
    - 每个 class 实例之间无关联，仅会在使用时再创建实例
- method，提供原生能力方法
  - method 注册
    - 自动注册 module 类中所有的 public 方法
    - 不强制要求添加@CmlMethod,未添加时会使用默认设置
    - 如果不希望方法被误添加，需要在方法上添加@CmlIgnore
  - method 名称
    - 默认使用 method 方法名
    - 配置 method 名称，添加注解@CmlMethod(alias = "name")
  - method 线程
    - 默认运行在主线程
    - 配置 method 线程，添加注解@CmlMethod(uiThread = false)
- param，原生能力方法所需要的参数
  - param 类型
    - 针对 Context、ICmlInstance 等上下文类型，会根据调用环境进行查找替换
    - 对于 CmlCallback 的类型，会构建对应的回调，需要自行处理回调
    - 其余类型会根据 bridge 传递的参数进行处理
  - param 参数
    - 根据 birdge 传递的数据，根据参数类型进行转化
    - 目前可转化的类型为 JSONObject、String
    - 如果要直接转为对象，需要设置 CmlJsonAdapter 或接入相应 json 库
  - param 字段
    - 只想获取传递数据中的某一个对象时，可以使用@CmlParam
    - 添加@CmlParam(name = "name")，设置该参数获取的字段
    - 添加@CmlParam(admin = "admin")，设置该参数默认值
